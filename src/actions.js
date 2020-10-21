import editorStyle from './css/editor.scss';

export default {
	actionHandlers: {
		SET_EDITOR: ({ action, state, updateState, dispatch }) => {
			const { payload: newEditor } = action;

			if (!newEditor) {
				return;
			}

			updateState({
				editor: newEditor,
			});

			dispatch('SET_EDITOR_STYLE');
			dispatch('SET_EDITOR_CONTENT');
		},
		SET_EDITOR_STYLE: ({ action, state }) => {
			const { editor } = state;
			const { paddingTop } = state.properties;

			if (!editor) {
				return;
			}

			const iframe = editor.getDoc();

			if (!iframe) {
				return;
			}

			let styleElement = iframe.querySelector('head style[id=custom_styles]');
			let body = iframe.querySelector('body');

			if (body) {
				body.style.paddingTop = `${paddingTop}px`;
			}

			if (!styleElement) {
				styleElement = document.createElement('style');
				styleElement.setAttribute('type', 'text/css');
				styleElement.setAttribute('id', 'custom_styles');

				let head = iframe.querySelector('head');

				if (head) {
					head.appendChild(styleElement);
				}
			}

			styleElement.innerText = editorStyle;
		},
		SET_EDITOR_CONTENT: ({ action, state }) => {
			const { editor } = state;
			const { content } = state.properties;

			if (!editor) {
				return;
			}


			editor.undoManager.clear();
			editor.setContent(content);
			editor.undoManager.add();
		},
	},
};
