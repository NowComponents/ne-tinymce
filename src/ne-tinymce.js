import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

import styles from './css/styles.scss';
import view from './view';
import actions from './actions';

import { noop } from './utils/commonUtils';

createCustomElement('ne-tinymce', {
	renderer: { type: snabbdom },
	view,
	initialState: {
		editor: null,
	},
	properties: {
		componentId: {
			default: null,
		},
		content: {
			default: ``,
			schema: { type: 'string' },
		},
		placeholder: {
			default: `Enter rich-text here...`,
			schema: { type: 'string' },
		},
		//! Callback Functions
		onInit: {
			default: noop,
		},
		onSetContent: {
			default: noop,
		},
		onBlur: {
			default: noop,
		},
		onFocus: {
			default: noop,
		},
		onChange: {
			default: noop,
		},
		onClick: {
			default: noop,
		},
		onExecCommand: {
			default: noop,
		},
		onSelection: {
			default: noop,
		},
		callbacks: {
			default: [],
		},
		buttons: {
			default: [],
		},
		//! Default Plugins and Toolbar Buttons
		plugins: {
			default: [
				'autolink',
				'autoresize',
				'codesample',
				'code',
				'link',
				'advlist',
				'lists',
				'paste',
				'table',
				'codesample',
				'contextmenu',
				'textcolor',
			],
		},
		tools: {
			default: [
				'undo redo',
				'bold italic',
				'fontsizeselect',
				'forecolor backcolor',
				'alignleft aligncenter alignright alignjustify',
				'bullist numlist outdent indent',
				'link unlink',
				'code',
			],
		},
		extraTools: {
			default: [],
		},
		contexts: {
			default: ['link inserttable', 'cell row column deletetable'],
		},
		extraContexts: {
			default: [],
		},
		menus: {
			default: false,
		},
		extraMenus: {
			default: [],
		},
		//! Read only properties
		readonly: {
			default: false,
			schema: { type: 'boolean' },
		},
		readonlyTools: {
			default: false,
		},
		readonlyMenus: {
			default: null,
		},
		readonlyContexts: {
			default: null,
		},
		//! Custom Class Flags
		customClasses: {
			default: [],
		},
		//! Auto-Resize Plugin Sizing
		minHeight: {
			default: 100,
			schema: { type: 'integer' },
		},
		maxHeight: {
			default: 700,
			schema: { type: 'integer' },
		},
		paddingTop: {
			default: 60,
			schema: { type: 'integer' },
		},
		paddingBottom: {
			default: 60,
			schema: { type: 'integer' },
		},
		paddingSides: {
			default: 20,
			schema: { type: 'integer' },
		},
		//! Extra Options
		browserSpellcheck: {
			default: true,
			schema: { type: 'boolean' },
		},
		relativeUrls: {
			default: true,
			schema: { type: 'boolean' },
		},
		convertUrls: {
			default: false,
			schema: { type: 'boolean' },
		},
		autoFocus: {
			default: false,
			schema: { type: 'boolean' },
		},
		removeHost: {
			default: true,
			schema: { type: 'boolean' },
		},
		validElements: {
			default: '*[*]',
			schema: { type: 'string' },
		},
		externalPlugins: {
			default: {},
			schema: { type: 'object' },
		},
		useBorder: {
			default: true,
			schema: { type: 'boolean' },
		}
	},
	styles,
	...actions,
});
