import tinymce from './tinymce/tinymce';
import './tinymce/themes/modern/theme';

import 'tinymce/plugins/autolink';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/code';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/table';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/textcolor';

import { baseURL, defaultBorder } from './constants';

export default (state, { updateProperties, dispatch }) => {
	const {
		componentId,
		placeholder,
		useBorder,
		//! Callback Functions
		onInit,
		onSetContent,
		onBlur,
		onFocus,
		onChange,
		onClick,
		onExecCommand,
		onSelection,
		//! Custom Callbacks
		callbacks,
		//! Custom Buttons
		buttons,
		//! Default Plugins and Toolbar Buttons
		plugins,
		tools,
		menus,
		contexts,
		extraTools,
		extraMenus,
		extraContexts,
		//! Read only properties
		readonly,
		readonlyTools,
		readonlyMenus,
		readonlyContexts,
		//! Custom Class Flags
		customClasses,
		//! Auto-Resize Plugin Sizing
		minHeight,
		maxHeight,
		paddingBottom,
		paddingSides,
		//! Extra Options
		browserSpellcheck,
		relativeUrls,
		convertUrls,
		autoFocus,
		removeHost,
		validElements,
		externalPlugins,
	} = state.properties;

	const toggleReadOnly = (editor, val = true) => {
		const iframe = editor.getDoc();

		const body = iframe.querySelector('body');

		if (val === true || val === 'true') {
			body.setAttribute('contenteditable', 'false');
		} else if (val === false || val === 'false') {
			body.setAttribute('contenteditable', 'true');
		}
	};

	const _getTools = () => {
		let combined = [...(readonlyTools ? readonlyTools : [])];

		if (!readonly) {
			combined = [
				...(tools ? tools : []),
				...(extraTools ? extraTools : []),
			];
		}

		return combined.length ? combined.join(' | ') : false;
	};

	const _getContexts = () => {
		let combined = [...(readonlyContexts ? readonlyContexts : [])];

		if (!readonly) {
			combined = [
				...(contexts ? contexts : []),
				...(extraContexts ? extraContexts : []),
			];
		}

		return combined.length ? combined.join(' | ') : false;
	};

	const _getMenus = () => {
		let combined = [...(readonlyMenus ? readonlyMenus : [])];

		if (!readonly) {
			combined = [
				...(menus ? menus : []),
				...(extraMenus ? extraMenus : []),
			];
		}

		return combined.length ? combined.join(' ') : false;
	};

	const _getPlugins = () => {
		return plugins ? plugins.join(' ') : false;
	};

	const _getValidElements = () => {
		return validElements ? validElements : '';
	};

	const _getBodyClasses = () => {
		let classList = [];

		if (Array.isArray(customClasses)) {
			classList = [...customClasses];
		} else if (typeof customClasses === 'string') {
			classList = customClasses.split(' ');
		}

		return classList.join(' ');
	};

	const _getSizing = () => {
		return {
			autoresize_max_height: maxHeight,
			autoresize_min_height: minHeight,
			autoresize_bottom_margin: paddingBottom,
			autoresize_overflow_padding: paddingSides,
		};
	};

	const _getExternalPlugins = () => {
		return externalPlugins ? externalPlugins : {};
	};

	const baseConfig = {
		skin: 'sn-editor',
		toolbar: _getTools(),
		contextmenu: _getContexts(),
		menubar: _getMenus(),
		plugins: _getPlugins(),
		statusbar: false,
		relative_urls: relativeUrls,
		convert_urls: convertUrls,
		remove_script_host: removeHost,
		browser_spellcheck: browserSpellcheck,
		auto_focus: autoFocus,
		document_base_url: window.location.origin,
		validate: false,
		valid_elements: _getValidElements(),
		body_class: _getBodyClasses(),
		..._getSizing(),
		..._getExternalPlugins(),
	};

	const readonlyConfig = {};

	//! Old Method, No longer in use
	//! Replaced by hook-insert
	const handleRef = (node) => {
		setTimeout(() => {
			initEditor(node);
		}, 0);
	};

	const handleInit = (vnode) => {
		setTimeout(() => {
			initEditor(vnode.elm);
		}, 0);
	};

	const initEditor = (element) => {
		if (window.tinymce.baseURL !== baseURL) {
			window.tinymce.baseURL = baseURL;
		}

		window.tinymce.init({
			target: element,
			...baseConfig,
			...(readonly ? readonlyConfig : {}),
			setup: (editor) => {
				editor.on('init', (e) => {
					dispatch('SET_EDITOR', editor);

					toggleReadOnly(editor, readonly);

					onInit(e, editor);
				});

				editor.on('SetContent', (e) => onSetContent(e, editor));
				editor.on('blur', (e) => onBlur(e, editor));
				editor.on('focus', (e) => onFocus(e, editor));
				editor.on('keyup', (e) => onChange(e, editor));
				editor.on('click', (e) => onClick(e, editor));
				editor.on('ExecCommand', (e) => onExecCommand(e, editor));
				editor.on('SelectionChange', (e) => onSelection(e, editor));
				editor.on('ClearContent', (e) => editor.setContent(''));

				callbacks.forEach((definition) => {
					const { name, callback } = definition;

					if (!name || !callback) {
						return;
					}

					editor.on(name, (e) => callback(e, editor));
				});

				buttons.forEach((definition) => {
					const { name, text, icon, image, tooltip, onAction, onSetup, disabled } = definition;

					editor.addButton(name, {
						text,
						icon,
						image,
						tooltip,
						onclick: (_) => onAction(_, editor),
						onpostrender: (buttonApi) => onSetup(buttonApi, editor),
						disabled,
					});
				});
			},
		});
	};

	return (
		<div
			className="sw-editor"
			attr-component-id={componentId}
			style={{ border: useBorder ? defaultBorder : null }}
		>
			<div className="editor-inner">
				<div className="inner-container">
					<textarea placeholder={placeholder} hook-insert={handleInit}></textarea>
				</div>
			</div>
		</div>
	);
};
