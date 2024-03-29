
  //~/Library/Application Support/Code/User/settings.json
	///////////// styles vs code
  "workbench.activityBar.location": "top",
  "editor.lineHeight": 22,
  "editor.fontSize": 16,
  "editor.wordWrap": "on",
  "editor.wordSeparators": "`~!@#$%^&*()-_=+[{]}\\|;:'\",.<>/?",
  "editor.wrappingColumn": 0,
  "editor.mouseWheelScrollSensitivity": 1.3,
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  },
  "editor.quickSuggestionsDelay": 0,
  // "editor.tabCompletion": "on",
  // "editor.overviewRulerLanes": 10,
  // "editor.renderControlCharacters": true,
  "editor.renderLineHighlight": "gutter",
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.tabSize": 2,
  "editor.hover.enabled": true,
  "[javascript]": {
    "editor.hover.enabled": true,
  },
  "editor.minimap.enabled": false,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.snippetSuggestions": "top",
  "editor.suggestOnTriggerCharacters": true,
  "editor.suggest.showTypeParameters": true,
  "editor.suggest.shareSuggestSelections": true,
  "editor.suggestSelection": "first",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.inlineSuggest.enabled": false,
  "prettier.singleQuote": true,
  "prettier.requireConfig": true,
  // "[html]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[twig]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[css]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode",
  // },
  // "[scss]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode",
  // },
  // "[sass]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode",
  // },
  "window.zoomLevel": -1,
  "editor.mouseWheelZoom": false,
  "window.commandCenter": false,
  "search.quickOpen.includeHistory": true,
  "workbench.colorTheme": "One Monokai",
  "workbench.iconTheme": "vscode-icons",
  "files.autoGuessEncoding": true,
  "explorer.confirmDelete": false,
  "security.workspace.trust.untrustedFiles": "open",
  // files
  "files.autoSave": "afterDelay",
  "vsicons.dontShowNewVersionMessage": true,


  /////////////////// git
  "git.path": "/usr/bin/git",
  "git.autofetch": true,

  ///////////// cursor
  "editor.cursorBlinking": "expand",
  "editor.cursorWidth": 2,
  "editor.cursorSmoothCaretAnimation": "explicit",

  // Visual Studio IntelliCode.
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",

    //////////////// emmet
  "emmet.triggerExpansionOnTab": true,
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.extensionsPath": ["~/Library/Application Support/Code/User/snippets/"],
  "html-css-class-completion.enableEmmetSupport": true,

  // twig = html
  "files.associations": {
    "*.twig": "html"
  },
  "emmet.includeLanguages": {
    "twig": "html"
  },

  // Path Autocomplete: https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete
  "path-autocomplete.pathMappings": {
    "css/": "${folder}/dist/css",
    "./css": "${folder}/dist/css",
    "img/": "${folder}/dist/img",
    "./img": "${folder}/dist/img",
    "js": "${folder}/dist/js",
    "./js": "${folder}/dist/js",
    "fonts": "${folder}/dist/fonts",
    "./fonts": "${folder}/dist/fonts",
    "video": "${folder}/dist/video",
    "./video": "${folder}/dist/video",
    "components/": "${folder}/src/js/components",
    "/": "${folder}/dist",
    // "$root": "${folder}/src",
    "$root": ["${folder}/src", "${folder}/dist"]
  },

  //copilot
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "markdown": false
  },

  "debug.javascript.resourceRequestOptions": {},

  "CSSResponsive.fixedDigits": 3,
  "githubPullRequests.pullBranch": "never",
  "vscodeGoogleTranslate.preferredLanguage": "English",
  "git.confirmSync": false,


