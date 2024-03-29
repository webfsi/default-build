// Перезапишите параметры, поместив их в файл параметров. // Наиболее часто используемые настройки см. по адресу http://go.microsoft.com/fwlink/?LinkId=808995. {

// Редактор

    // Определяет семейство шрифтов.
    "editor.fontFamily": "Consolas, 'Courier New', monospace",

    // Управляет насыщенностью шрифта.
    "editor.fontWeight": "normal",

    // Управляет размером шрифта в пикселях.
    "editor.fontSize": 14,

    // Управляет высотой строк. Укажите 0 для вычисления высоты строки по размеру шрифта.
    "editor.lineHeight": 0,

    // Управляет видимостью номеров строк.
    "editor.lineNumbers": "on",

    // Столбцы, в которых должны отображаться вертикальные линейки
    "editor.rulers": [],

    // Символы, которые будут использоваться как разделители слов при выполнении навигации или других операций, связанных со словами.
    "editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",

    // Число пробелов в табуляции. Эта настройка переопределяется на основании содержимого файла, когда включен параметр "editor.detectIndentation".
    "editor.tabSize": 4,

    // Вставлять пробелы при нажатии клавиши TAB. Эта настройка переопределяется на основании содержимого файла, когда включен параметр "editor.detectIndentation".
    "editor.insertSpaces": true,

    // При открытии файла editor.tabSize и editor.insertSpaces будут определяться на основе содержимого файла.
    "editor.detectIndentation": true,

    // Определяет, будут ли выделения иметь скругленные углы.
    "editor.roundedSelection": true,

    // Определяет, будет ли содержимое редактора прокручиваться за последнюю строку.
    "editor.scrollBeyondLastLine": true,

    // Определяет число символов, после которых текст будет перенесен на следующую строку. Если этот параметр имеет значение 0, используется перенос по ширине окна просмотра (перенос по словам). Если задать значение –1, то в редакторе не будет выполняться перенос по словам.
    "editor.wrappingColumn": 300,

    // Определяет, должны ли строки переноситься. Строки будут переноситься по значению min(editor.wrappingColumn, viewportWidthInColumns).
    "editor.wordWrap": false,

    // Управляет отступом строк с переносом по словам. Допустимые значения: "none", "same" или "indent".
    "editor.wrappingIndent": "same",

    // Множитель, используемый для параметров deltaX и deltaY событий прокрутки колесика мыши.
    "editor.mouseWheelScrollSensitivity": 1,

    // Определяет, должны ли при вводе текста отображаться краткие предложения.
    "editor.quickSuggestions": true,

    // Управляет длительностью задержки (в мс), перед отображением кратких предложений.
    "editor.quickSuggestionsDelay": 10,

    // Включение подсказок для параметров
    "editor.parameterHints": true,

    // Определяет, должен ли редактор автоматически закрывать скобки после открытия.
    "editor.autoClosingBrackets": true,

    // Управляет параметром, определяющим, должен ли редактор автоматически форматировать строку после ввода.
    "editor.formatOnType": false,

    // Определяет, должны ли при вводе триггерных символов автоматически отображаться предложения.
    "editor.suggestOnTriggerCharacters": true,

    // Определяет, можно ли принимать предложения клавишей ВВОД в дополнение к клавише TAB. Это помогает избежать неоднозначности между вставкой новых строк или принятием предложений.
    "editor.acceptSuggestionOnEnter": true,

    // Управляет отображением фрагментов вместе с другими предложениями и их сортировкой.
    "editor.snippetSuggestions": "bottom",

    // Включите предложения на основе слов.
    "editor.wordBasedSuggestions": true,

    // Вставка фрагментов при совпадении их префиксов. Функция работает оптимально, если параметр "quickSuggestions" отключен.
    "editor.tabCompletion": false,

    // Определяет, будет ли редактор выделять фрагменты, совпадающие с выделенным текстом.
    "editor.selectionHighlight": true,

    // Определяет, сколько украшений могут отображаться на одном месте в обзорной линейке.
    "editor.overviewRulerLanes": 3,

    // Управляет стилем анимации курсора. Допустимые значения: "blink", "smooth", "phase", "expand" и "solid"
    "editor.cursorBlinking": "blink",

    // Изменение размера шрифта в редакторе при нажатой клавише CTRL и движении колесика мыши
    "editor.mouseWheelZoom": false,

    // Определяет стиль курсора. Допустимые значения: "block", "line" и "underline"
    "editor.cursorStyle": "line",

    // Включает лигатуры шрифта.
    "editor.fontLigatures": false,

    // Управляет скрытием курсора в обзорной линейке.
    "editor.hideCursorInOverviewRuler": false,

    // Определяет, должен ли редактор обрабатывать символы пробела; возможные значения: "none", "boundary" и "all". Параметр "boundary" не обрабатывает единичные пробелы между словами.
    "editor.renderWhitespace": "none",

    // Определяет, должны ли в редакторе отображаться управляющие символы.
    "editor.renderControlCharacters": false,

    // Определяет, должны ли в редакторе отображаться направляющие отступа.
    "editor.renderIndentGuides": false,

    // Определяет, должен ли редактор отображать текущее выделение строки
    "editor.renderLineHighlight": true,

    // Управляет показом групп связанных элементов кода в редакторе
    "editor.codeLens": true,

    // Определяет, включено ли сворачивание кода в редакторе.
    "editor.folding": true,

    // Вставка и удаление пробелов после позиции табуляции
    "editor.useTabStops": true,

    // Удалить автоматически вставляемый конечный пробел
    "editor.trimAutoWhitespace": true,

    // Оставлять просматривающие редакторы открытыми, даже если дважды щелкнуто их содержимое или нажата клавиша ESC.
    "editor.stablePeek": false,

    // Определяет, как редактор несовпадений отображает отличия: рядом или в тексте.
    "diffEditor.renderSideBySide": true,

    // Определяет, должен ли редактор несовпадений трактовать несовпадения символов-разделителей как различия.
    "diffEditor.ignoreTrimWhitespace": true,

// Emmet

    // Если включено, сокращения Emmet разворачиваются при нажатии клавиши TAB.
    "emmet.triggerExpansionOnTab": true,

    // Настройки, которые используются для изменения поведения некоторых действий и сопоставителей Emmet.
    "emmet.preferences": {},

    // Задайте профиль для указанного синтаксиса или используйте свой собственный профиль с определенными правилами.
    "emmet.syntaxProfiles": {},

    // Массив языков, в которых не должны развертываться сокращения Emmet.
    "emmet.excludeLanguages": [],

// Workbench

    // Определяет, должны ли открытые редакторы отображаться на вкладках или нет.
    "workbench.editor.showTabs": true,

    // Определяет, должны ли открытые редакторы отображаться со значком. Требует включить тему значков.
    "workbench.editor.showIcons": true,

    // Определяет, отображаются ли открытые редакторы в режиме предварительного просмотра. Редакторы с предварительным просмотром повторно используются до сохранения (например, с помощью двойного щелчка или изменения).
    "workbench.editor.enablePreview": true,

    // Определяет, отображаются ли редакторы из Quick Open в режиме предварительного просмотра. Редакторы в режиме предварительного просмотра повторно используются до сохранения (например, с помощью двойного щелчка или изменения).
    "workbench.editor.enablePreviewFromQuickOpen": true,

    // Определяет место открытия редакторов. Выберите "Слева" или "Справа", чтобы открывать редакторы слева или справа от активного сейчас редактора. Выберите "Первый" или "Последний", чтобы открывать редакторы независимо от активного сейчас редактора.
    "workbench.editor.openPositioning": "right",

    // Управляет автоматическим закрытием Quick Open при потере фокуса.
    "workbench.quickOpen.closeOnFocusLost": true,

    // Управляет открытием редактора с отображением всех настроек по умолчанию при открытии настроек.
    "workbench.settings.openDefaultSettings": true,

// Окно

    // Если этот параметр включен, файлы будут открываться в новом окне, а не в существующем экземпляре.
    "window.openFilesInNewWindow": true,

    // Управляет повторным открытием папок после перезапуска. Выберите значение "none", чтобы не открывать папку повторно, "one", чтобы открывалась последняя папка, с которой вы работали, или "all", чтобы открывались все папки последнего сеанса.
    "window.reopenFolders": "one",

    // Определяет, должно ли окно восстанавливаться в полноэкранном режиме, если оно было закрыто в полноэкранном режиме.
    "window.restoreFullscreen": false,

    // Настройте масштаб окна. Исходный размер равен 0. Увеличение или уменьшение значения на 1 означает увеличение или уменьшение окна на 20 %. Чтобы более точно задать масштаб, можно также ввести десятичное число.
    "window.zoomLevel": 0,

// Файлы

    // Настройка стандартных масок для исключения файлов и папок.
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/.DS_Store": true
    },

    // Настройте сопоставления файлов с языками (например, "*.extension": "html"). У них будет приоритет перед заданными по умолчанию сопоставлениями установленных языков.
    "files.associations": {},

    // Кодировка набора символов по умолчанию, используемая при чтении и записи файлов
    "files.encoding": "utf8",

    // Символ конца строки по умолчанию.
    "files.eol": "\r\n",

    // Если этот параметр включен, при сохранении файла будут удалены завершающие символы-разделители.
    "files.trimTrailingWhitespace": false,

    // Управляет автоматическим сохранением измененных файлов. Допустимые значения: "off", "afterDelay", "onFocusChange" (редактор теряет фокус) и "onWindowChange" (окно теряет фокус). Если задано значение "afterDelay", можно настроить задержку в "files.autoSaveDelay".
    "files.autoSave": "off",

    // Определяет задержку в мс, после которой измененный файл сохраняется автоматически. Действует, только если параметр files.autoSave имеет значение "afterDelay".
    "files.autoSaveDelay": 1000,

    // Настройте стандартные маски путей файлов, чтобы исключить их из списка отслеживаемых файлов. После изменения этого параметра потребуется перезагрузка. При отображении сообщения "Код потребляет большое количество процессорного времени при запуске" вы можете исключить большие папки, чтобы уменьшить первоначальную загрузку.
    "files.watcherExclude": {
        "**/.git/objects/**": true
    },

    // Форматирование файла при сохранении. Модуль форматирования должен быть доступен, файл не должен сохраняться автоматически, а работа редактора не должна завершаться.
    "editor.formatOnSave": false,

// Проводник

    // Число редакторов, отображаемых на панели открытых редакторов. Задайте значение 0, чтобы скрыть панель.
    "explorer.openEditors.visible": 9,

    // Определяет, будет ли высота раздела открытых редакторов динамически адаптироваться к количеству элементов.
    "explorer.openEditors.dynamicHeight": true,

    // Определяет, следует ли обозревателю автоматически отображать файлы при их открытии.
    "explorer.autoReveal": true,

    // Определяет, разрешено ли перемещение файлов и папок перетаскиванием в проводнике.
    "explorer.enableDragAndDrop": true,

// Поиск

    // Настройте стандартные маски для исключения файлов и папок при поиске. Все стандартные маски наследуются от параметра file.exclude.
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true
    },

    // Настройте для включения результатов поиска глобальных символов в файлы по запросу для Quick Open.
    "search.quickOpen.includeSymbols": false,

// Обновить

    // Настройте канал обновления, по которому вы будете получать обновления. После изменения значения необходим перезапуск.
    "update.channel": "default",

// Git

    // С поддержкой GIT
    "git.enabled": true,

    // Путь к исполняемому файлу GIT
    "git.path": null,

    // Включено ли автоматическое обновление
    "git.autorefresh": true,

    // Включено ли автоматическое получение.
    "git.autofetch": true,

    // Следует ли предупреждать о длинных сообщениях о фиксации.
    "git.enableLongCommitWarning": true,

    // Всегда разрешать Code управлять большими репозиториями.
    "git.allowLargeRepositories": false,

    // Подтвердите синхронизацию репозиториев Git.
    "git.confirmSync": false,

    // Управляет счетчиком эмблем Git.
    "git.countBadge": "all",

// HTTP

    // Используемый параметр прокси. Если он не задан, он будет взят из переменных среды http_proxy и https_proxy.
    "http.proxy": "",

    // Должен ли сертификат прокси-сервера проверяться по списку предоставленных ЦС.
    "http.proxyStrictSSL": true,

    // Значение, отправляемое как заголовок "Proxy-Authorization" для каждого сетевого запроса.
    "http.proxyAuthorization": null,

// CSS

    // Controls CSS validation and problem severities.

    // Enables or disables all validations
    "css.validate": true,

    // When using a vendor-specific prefix make sure to also include all other vendor-specific properties
    "css.lint.compatibleVendorPrefixes": "ignore",

    // When using a vendor-specific prefix also include the standard property
    "css.lint.vendorPrefix": "warning",

    // Do not use duplicate style definitions
    "css.lint.duplicateProperties": "ignore",

    // Do not use empty rulesets
    "css.lint.emptyRules": "warning",

    // Import statements do not load in parallel
    "css.lint.importStatement": "ignore",

    // Do not use width or height when using padding or border
    "css.lint.boxModel": "ignore",

    // The universal selector (*) is known to be slow
    "css.lint.universalSelector": "ignore",

    // No unit for zero needed
    "css.lint.zeroUnits": "ignore",

    // @font-face rule must define 'src' and 'font-family' properties
    "css.lint.fontFaceProperties": "warning",

    // Hex colors must consist of three or six hex numbers
    "css.lint.hexColorLength": "error",

    // Invalid number of parameters
    "css.lint.argumentsInColorFunction": "error",

    // Unknown property.
    "css.lint.unknownProperties": "warning",

    // IE hacks are only necessary when supporting IE7 and older
    "css.lint.ieHack": "ignore",

    // Unknown vendor specific property.
    "css.lint.unknownVendorSpecificProperties": "ignore",

    // Property is ignored due to the display. E.g. with 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect
    "css.lint.propertyIgnoredDueToDisplay": "warning",

    // Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
    "css.lint.important": "ignore",

    // Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
    "css.lint.float": "ignore",

    // Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
    "css.lint.idSelector": "ignore",

// SCSS (Sass)

    // Controls SCSS validation and problem severities.

    // Enables or disables all validations
    "scss.validate": true,

    // When using a vendor-specific prefix make sure to also include all other vendor-specific properties
    "scss.lint.compatibleVendorPrefixes": "ignore",

    // When using a vendor-specific prefix also include the standard property
    "scss.lint.vendorPrefix": "warning",

    // Do not use duplicate style definitions
    "scss.lint.duplicateProperties": "ignore",

    // Do not use empty rulesets
    "scss.lint.emptyRules": "warning",

    // Import statements do not load in parallel
    "scss.lint.importStatement": "ignore",

    // Do not use width or height when using padding or border
    "scss.lint.boxModel": "ignore",

    // The universal selector (*) is known to be slow
    "scss.lint.universalSelector": "ignore",

    // No unit for zero needed
    "scss.lint.zeroUnits": "ignore",

    // @font-face rule must define 'src' and 'font-family' properties
    "scss.lint.fontFaceProperties": "warning",

    // Hex colors must consist of three or six hex numbers
    "scss.lint.hexColorLength": "error",

    // Invalid number of parameters
    "scss.lint.argumentsInColorFunction": "error",

    // Unknown property.
    "scss.lint.unknownProperties": "warning",

    // IE hacks are only necessary when supporting IE7 and older
    "scss.lint.ieHack": "ignore",

    // Unknown vendor specific property.
    "scss.lint.unknownVendorSpecificProperties": "ignore",

    // Property is ignored due to the display. E.g. with 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect
    "scss.lint.propertyIgnoredDueToDisplay": "warning",

    // Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
    "scss.lint.important": "ignore",

    // Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
    "scss.lint.float": "ignore",

    // Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
    "scss.lint.idSelector": "ignore",

// LESS

    // Controls LESS validation and problem severities.

    // Enables or disables all validations
    "less.validate": true,

    // When using a vendor-specific prefix make sure to also include all other vendor-specific properties
    "less.lint.compatibleVendorPrefixes": "ignore",

    // When using a vendor-specific prefix also include the standard property
    "less.lint.vendorPrefix": "warning",

    // Do not use duplicate style definitions
    "less.lint.duplicateProperties": "ignore",

    // Do not use empty rulesets
    "less.lint.emptyRules": "warning",

    // Import statements do not load in parallel
    "less.lint.importStatement": "ignore",

    // Do not use width or height when using padding or border
    "less.lint.boxModel": "ignore",

    // The universal selector (*) is known to be slow
    "less.lint.universalSelector": "ignore",

    // No unit for zero needed
    "less.lint.zeroUnits": "ignore",

    // @font-face rule must define 'src' and 'font-family' properties
    "less.lint.fontFaceProperties": "warning",

    // Hex colors must consist of three or six hex numbers
    "less.lint.hexColorLength": "error",

    // Invalid number of parameters
    "less.lint.argumentsInColorFunction": "error",

    // Unknown property.
    "less.lint.unknownProperties": "warning",

    // IE hacks are only necessary when supporting IE7 and older
    "less.lint.ieHack": "ignore",

    // Unknown vendor specific property.
    "less.lint.unknownVendorSpecificProperties": "ignore",

    // Property is ignored due to the display. E.g. with 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect
    "less.lint.propertyIgnoredDueToDisplay": "warning",

    // Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.
    "less.lint.important": "ignore",

    // Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.
    "less.lint.float": "ignore",

    // Selectors should not contain IDs because these rules are too tightly coupled with the HTML.
    "less.lint.idSelector": "ignore",

// HTML

    // Maximum amount of characters per line (0 = disable).
    "html.format.wrapLineLength": 120,

    // List of tags, comma separated, that shouldn't be reformatted. 'null' defaults to all tags listed at https://www.w3.org/TR/html5/dom.html#phrasing-content.
    "html.format.unformatted": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, script, select, small, span, strong, sub, sup, textarea, tt, var",

    // Indent and sections.
    "html.format.indentInnerHtml": false,

    // Whether existing line breaks before elements should be preserved. Only works before elements, not inside tags or for text.
    "html.format.preserveNewLines": true,

    // Maximum number of line breaks to be preserved in one chunk. Use 'null' for unlimited.
    "html.format.maxPreserveNewLines": null,

    // Format and indent {{#foo}} and {{/foo}}.
    "html.format.indentHandlebars": false,

    // End with a newline.
    "html.format.endWithNewline": false,

    // List of tags, comma separated, that should have an extra newline before them. 'null' defaults to "head, body, /html".
    "html.format.extraLiners": "head, body, /html",

    // Configures if the built-in HTML language support suggests Angular V1 tags and properties.
    "html.suggest.angular1": true,

    // Configures if the built-in HTML language support suggests Ionic tags, properties and values.
    "html.suggest.ionic": true,

    // Configures if the built-in HTML language support suggests HTML5 tags, properties and values.
    "html.suggest.html5": true,

// JSON

    // Associate schemas to JSON files in the current project
    "json.schemas": [],

// Markdown

    // A list of URLs or local paths to CSS style sheets to use from the markdown preview. Relative paths are interpreted relative to the folder open in the explorer. If there is no open folder, they are interpreted relative to the location of the markdown file. All '\' need to be written as '\\'.
    "markdown.styles": [],

// PHP

    // Включена ли проверка PHP.
    "php.validate.enable": true,

    // Указывает на исполняемый файл PHP.
    "php.validate.executablePath": null,

    // Запускается ли Linter при сохранении или в типе.
    "php.validate.run": "onSave",

// TypeScript

    // Указывает путь к папке, содержащей файлы tsserver и lib*.d.ts, которые необходимо использовать.
    "typescript.tsdk": null,

    // Проверка наличия версии TypeScript в рабочей области
    "typescript.check.workspaceVersion": true,

    // Проверка отличия компилятора TypeScript глобальной установки (например, tsc) от используемой языковой службы TypeScript.
    "typescript.check.tscVersion": true,

    // Включение трассировки сообщений, отправленных на сервер TS
    "typescript.tsserver.trace": "off",

    // Дополните функции сигнатурами их параметров.
    "typescript.useCodeSnippetsOnMethodSuggest": false,

    // Включить или отключить проверку TypeScript
    "typescript.validate.enable": true,

    // Определяет метод обработки пробелов после разделителя-запятой
    "typescript.format.insertSpaceAfterCommaDelimiter": true,

    //  Определяет метод обработки пробелов после точки с запятой в операторе for
    "typescript.format.insertSpaceAfterSemicolonInForStatements": true,

    // Определяет метод обработки пробелов после двоичного оператора
    "typescript.format.insertSpaceBeforeAndAfterBinaryOperators": true,

    // Определяет метод обработки пробелов после ключевых слов в операторе потока управления
    "typescript.format.insertSpaceAfterKeywordsInControlFlowStatements": true,

    // Определяет метод обработки пробелов после ключевого слова анонимной функции
    "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,

    // Определяет метод обработки пробелов после открытия и до закрытия непустых круглых скобок
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,

    // Определяет метод обработки пробелов после открытия и до закрытия непустых квадратных скобок
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,

    // Определяет, помещается ли открывающая фигурная скобка в новую строку для функций
    "typescript.format.placeOpenBraceOnNewLineForFunctions": false,

    // Определяет, помещается ли открывающая фигурная скобка в новую строку для управляющих блоков
    "typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,

    // Включить или отключить проверку JavaScript
    "javascript.validate.enable": true,

    // Определяет метод обработки пробелов после разделителя-запятой
    "javascript.format.insertSpaceAfterCommaDelimiter": true,

    //  Определяет метод обработки пробелов после точки с запятой в операторе for
    "javascript.format.insertSpaceAfterSemicolonInForStatements": true,

    // Определяет метод обработки пробелов после двоичного оператора
    "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true,

    // Определяет метод обработки пробелов после ключевых слов в операторе потока управления
    "javascript.format.insertSpaceAfterKeywordsInControlFlowStatements": true,

    // Определяет метод обработки пробелов после ключевого слова анонимной функции
    "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,

    // Определяет метод обработки пробелов после открытия и до закрытия непустых круглых скобок
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,

    // Определяет метод обработки пробелов после открытия и до закрытия непустых квадратных скобок
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,

    // Определяет, помещается ли открывающая фигурная скобка в новую строку для функций
    "javascript.format.placeOpenBraceOnNewLineForFunctions": false,

    // Определяет, помещается ли открывающая фигурная скобка в новую строку для управляющих блоков
    "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,

// Расширения

    // Автоматически обновлять расширения
    "extensions.autoUpdate": false,

// Внешний терминал

    // Настройка терминала, который будет запущен в Windows.
    "terminal.external.windowsExec": "%COMSPEC%",

    // Настройка приложения терминала для запуска в OS X.
    "terminal.external.osxExec": "Terminal.app",

    // Настройка терминала для запуска в Linux.
    "terminal.external.linuxExec": "xterm",

// Интегрированный терминал

    // Путь оболочки, который используется терминалом в Linux.
    "terminal.integrated.shell.linux": "sh",

    // Аргументы командной строки, которые следует использовать в терминале Linux.
    "terminal.integrated.shellArgs.linux": [],

    // Путь оболочки, который используется терминалом в OS X.
    "terminal.integrated.shell.osx": "sh",

    // Аргументы командной строки, которые следует использовать в терминале OS X.
    "terminal.integrated.shellArgs.osx": [],

    // Путь оболочки, который используется терминалом в Windows. При работе с оболочкой, поставляемой с Windows (cmd, PowerShell или Bash на Ubuntu), укажите C:Windowssysnative вместо C:WindowsSystem32 для использования 64-разрядных версий.
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\system32\\cmd.exe",

    // Определяет семейство шрифтов терминала, значение по умолчанию — editor.fontFamily.
    "terminal.integrated.fontFamily": "",

    // Определяет, будут ли включены лигатуры шрифтов для терминала.
    "terminal.integrated.fontLigatures": false,

    // Определяет размер шрифта (в пикселях) для терминала; значение по умолчанию — editor.fontSize.
    "terminal.integrated.fontSize": 0,

    // Определяет высоту строки терминала; это число умножается на размер шрифта терминала, что дает фактическую высоту строки в пикселях.
    "terminal.integrated.lineHeight": 1.2,

    // Управляет миганием курсора терминала.
    "terminal.integrated.cursorBlinking": false,

    // Управляет заданием переменных при запуске терминала, значение по умолчанию: "True" для OS X и "False" для других платформ.
    "terminal.integrated.setLocaleVariables": false,

    // Набор идентификаторов команд, настраиваемые сочетания клавиш которых не будут передаваться в оболочку, а вместо этого будут всегда обрабатываться Code. Это позволяет использовать настраиваемые сочетания клавиш, которые при обычных условиях были бы использованы оболочкой и работали бы так же, как если бы терминал не имел фокуса, например клавиши CTRL+P запускали бы Quick Open.
    "terminal.integrated.commandsToSkipShell": [
        "editor.action.toggleTabFocusMode",
        "workbench.action.quickOpen",
        "workbench.action.showCommands",
        "workbench.action.terminal.clear",
        "workbench.action.terminal.copySelection",
        "workbench.action.terminal.focus",
        "workbench.action.terminal.focusNext",
        "workbench.action.terminal.focusPrevious",
        "workbench.action.terminal.kill",
        "workbench.action.terminal.new",
        "workbench.action.terminal.paste",
        "workbench.action.terminal.runSelectedText",
        "workbench.action.terminal.scrollDown",
        "workbench.action.terminal.scrollDownPage",
        "workbench.action.terminal.scrollUp",
        "workbench.action.terminal.scrollUpPage",
        "workbench.action.terminal.toggleTerminal"
    ],

// Представление "Проблемы"

    // Определяет, следует ли представлению "Проблемы" отображать файлы при их открытии
    "problems.autoReveal": true,

// Телеметрия

    // Разрешить отправку сведений об использовании и ошибках в корпорацию Майкрософт.
    "telemetry.enableTelemetry": true,

    // Разрешить отправку отчетов о сбоях в корпорацию Майкрософт.
    // Чтобы этот параметр вступил в силу, требуется перезагрузка.
    "telemetry.enableCrashReporter": true

}
