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
			default: `<p><span style="font-size: 14pt;"><strong>Microsoft Outlook Issues</strong></span></p><p>This article explains how to use automatic replies in Outlook 2010 for Exchange accounts.</p><div id="doc-body"><h3>Setting Up Automatic Replies</h3><ol style="list-style-position: inside;"><li>Click the&nbsp;<strong>File</strong>&nbsp;tab.</li><li>Click&nbsp;<strong>Automatic Replies</strong>.</li><li>Select&nbsp;<strong>Send automatic replies</strong>.</li><li>If desired, select the&nbsp;<strong>Only send during this time range</strong>&nbsp;check box to schedule when your out of office replies are active. If you do not specify a start and end time, auto-replies will be sent until you select the<strong>&nbsp;Do not send automatic replies</strong>&nbsp;check box.</li><li>On the&nbsp;<strong>Inside My Organization</strong>&nbsp;tab, type the response that you want to send to colleagues while you are out of the office.</li><li>On the&nbsp;<strong>Outside My Organization</strong>&nbsp;tab, select the&nbsp;<strong>Auto-reply to people outside my organization</strong>&nbsp;check box, and then type the response that you want to send while you are out of the office. Select whether you want replies sent to&nbsp;<strong>My contacts only</strong>&nbsp;or to&nbsp;<strong>Anyone outside my organization</strong>&nbsp;who sends you messages.</li></ol><h4>NOTE:</h4><p>If you select&nbsp;<strong>My Contacts only</strong>&nbsp;in step 6, replies will be sent&nbsp;<strong>only</strong>&nbsp;to contacts that exist in your Contacts folder.<br /><br /></p><h3>Using Rules With Automatic Replies</h3><p>It is also possible to use rules to manage your messages while you are out of office. For example, you can create rules to automatically move or copy messages to other folders, to delete messages, to send custom replies, and so on.</p><ol style="list-style-position: inside;"><li>Click the&nbsp;<strong>File</strong>&nbsp;tab.</li><li>Click&nbsp;<strong>Automatic Replies</strong>.</li><li>Click&nbsp;<strong>Rules</strong>, and then click&nbsp;<strong>Add Rule</strong>.</li><li>Under&nbsp;<strong>When a message arrives that meets the following conditions</strong>, specify the conditions that the message must meet for the rule to be applied. If you want to specify more conditions, click&nbsp;<strong>Advanced</strong>, enter or select the options that you want, and then click&nbsp;<strong>OK</strong>.</li><li>If you want to specify that this rule must be applied last, select the&nbsp;<strong>Do not process subsequent rules</strong>&nbsp;check box.</li><li>Under&nbsp;<strong>Perform these actions</strong>, select the actions that you want. You can select more than one action.</li><li>Click&nbsp;<strong>OK</strong>&nbsp;three times.</li></ol><h4>NOTES:</h4><ol style="list-style-position: inside;"><li>Automatic Replies rules can also be edited by following the above procedure.</li><li>To turn Automatic Replies rules on or off, in the Automatic Reply Rules dialog box, select or clear the check box of the rule that you want to turn on or off.</li></ol></div>`,
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
			default: false,
		},
		readonlyContexts: {
			default: false,
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
