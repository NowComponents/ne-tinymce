# ne-tinymce
A Now Experience TinyMCE editor component

## Component Preview

![preview](.\demo-preview\preview.jpg)



## Basic Usage

```jsx
const testContent = `<span>This is a test</span>`;

<ne-tinymce content={testContent} />
```



## Exposed Parameters

| Property Name     | Description                                   | Type          | Default Value          | Example Custom Value                         |
| ----------------- | --------------------------------------------- | ------------- | ---------------------- | -------------------------------------------- |
| componentId       | A unique component ID                         | UID           | Random                 |                                              |
| content           | HTML content to be added to rich-text editor  | String        | Empty String           | `<span>This is a test</span>`                |
| placeholder       | Placeholder added to element                  | String        | `Enter rich-text-here` | `Place some text here`                       |
| onInit            | callback function                             | Function      | `noop`                 | `(e, editor) => { console.log(e, editor); }` |
| onSetContent      | callback function                             | Function      | `noop`                 | `(e, editor) => { console.log(e, editor); }` |
| onFocus           | callback function                             | Function      | `noop`                 | `(e, editor) => { console.log(e, editor); }` |
| onChange          | callback function                             | Function      | `noop`                 | `(e, editor) => { console.log(e, editor); }` |
| onClick           | callback function                             | Function      | `noop`                 | `(e, editor) => { console.log(e, editor); }` |
| onExecCommand     | callback function                             | Function      | `noop`                 | `(e, editor) => { console.log(e, editor); }` |
| onSelection       | callback function                             | Function      | `noop`                 | `(e, editor) => { console.log(e, editor); }` |
| onBlur            | callback function                             | Function      | `noop`                 | `(e, editor) => { console.log(e, editor); }` |
| callbacks         | Array of custom callback functions            | Array         | `[]`                   | See custom callback section below            |
| buttons           | Array of custom buttons                       | Array         | `[]`                   | See custom button section below              |
| plugins           | Array of plugins to include                   | Array \| Bool | `[...]`                | See plugins section below                    |
| tools             | Array of tool buttons to include              | Array \| Bool | `[...]`                | See tools section below                      |
| extraTools        | Array of extra tool buttons to include        | Array         | `[]`                   | `['bold']`                                   |
| contexts          | Array of buttons to add to context menu       | Array \| Bool | `[...]`                | See contexts section below                   |
| extraContexts     | Array of extra context menu buttons           | Array         | `[]`                   | `['link unlink']`                            |
| menus             | Array of buttons to add to top menu           | Array \| Bool | `false`                | See menus section below                      |
| extraMenus        | Array of extra menu buttons                   | Array         | `[]`                   | `['file']`                                   |
| readonly          | Boolean property to determine read-only       | Bool          | `false`                | `true`                                       |
| readonlyTools     | Array of tool buttons to show when read       | Array \| Bool | `false`                | `['bold italic', 'link unlink']`             |
| readonlyContexts  | Array of context buttons to show when read    | Array \| Bool | `false`                | `['bold italic', 'link unlink']`             |
| readonlyMenus     | Array of menu buttons to show when read       | Array \| Bool | `false`                | `['file', 'edit']`                           |
| customClasses     | Array of custom classes to add to body el     | Array         | `[]`                   | `['custom-1', 'custom-2']`                   |
| minHeight         | Minimum height for auto-resize plugin         | Integer       | 100                    | 200                                          |
| maxHeight         | Maximum height for auto-resize plugin         | Integer       | 700                    | 1200                                         |
| paddingTop        | padding-top for body el                       | Integer       | 60                     | 20                                           |
| paddingBottom     | padding-bottom for body el                    | Integer       | 60                     | 20                                           |
| paddingSides      | padding-left, padding-right for body el       | Integer       | 20                     | 40                                           |
| browserSpellcheck | Enables spellcheck for editor                 | Bool          | `true`                 | `false`                                      |
| relativeUrls      | Makes all link urls relative to base url      | Bool          | `true`                 | `false`                                      |
| convertUrls       | No clue what this does, but tinymce uses it   | Bool          | `false`                | `true`                                       |
| autoFocus         | Enables the editor to be auto-focused on init | Bool          | `false`                | `true`                                       |
| removeHost        | Removes script hosts                          | Bool          | `true`                 | `false`                                      |
| validElements     | String selector of valid elements and attrs   | String        | `*[*]`                 | `'span, p, table'`                           |
| externalPlugins   | Object with external plugins to be loaded     | Object        | `{}`                   | See tinymce 4 documentation on this property |
| useBorder         | Enables the css border around the editor      | Bool          | `true`                 | `false`                                      |

