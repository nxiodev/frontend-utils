import {
  DomSanitizer
} from "./chunk-ICOO2COV.js";
import {
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-AVHTRRAC.js";
import {
  BehaviorSubject,
  Directive,
  EMPTY,
  ElementRef,
  Injectable,
  InjectionToken,
  NgModule,
  PLATFORM_ID,
  SecurityContext,
  afterRenderEffect,
  booleanAttribute,
  catchError,
  computed,
  filter,
  firstValueFrom,
  forkJoin,
  from,
  inject,
  input,
  makeEnvironmentProviders,
  map,
  output,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  throwError,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory
} from "./chunk-KE2I6GZG.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/ngx-highlightjs/fesm2022/ngx-highlightjs.mjs
var HIGHLIGHT_OPTIONS = new InjectionToken("HIGHLIGHT_OPTIONS");
function provideHighlightOptions(options) {
  return makeEnvironmentProviders([{
    provide: HIGHLIGHT_OPTIONS,
    useValue: options
  }]);
}
var LoaderErrors;
(function(LoaderErrors2) {
  LoaderErrors2["FULL_WITH_CORE_LIBRARY_IMPORTS"] = "The full library and the core library were imported, only one of them should be imported!";
  LoaderErrors2["FULL_WITH_LANGUAGE_IMPORTS"] = "The highlighting languages were imported they are not needed!";
  LoaderErrors2["CORE_WITHOUT_LANGUAGE_IMPORTS"] = "The highlighting languages were not imported!";
  LoaderErrors2["LANGUAGE_WITHOUT_CORE_IMPORTS"] = "The core library was not imported!";
  LoaderErrors2["NO_FULL_AND_NO_CORE_IMPORTS"] = "Highlight.js library was not imported!";
})(LoaderErrors || (LoaderErrors = {}));
var HighlightLoader = class _HighlightLoader {
  constructor() {
    this.document = inject(DOCUMENT);
    this.isPlatformBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.options = inject(HIGHLIGHT_OPTIONS, {
      optional: true
    });
    this._ready = new BehaviorSubject(null);
    this.ready = firstValueFrom(this._ready.asObservable().pipe(filter((hljs) => !!hljs)));
    if (this.isPlatformBrowser) {
      if (this.document.defaultView["hljs"]) {
        this._ready.next(this.document.defaultView["hljs"]);
      } else {
        this._loadLibrary().pipe(switchMap((hljs) => {
          if (this.options?.lineNumbersLoader) {
            this.document.defaultView["hljs"] = hljs;
            return this.loadLineNumbers().pipe(tap((plugin) => {
              plugin.activateLineNumbers();
              this._ready.next(hljs);
            }));
          } else {
            this._ready.next(hljs);
            return EMPTY;
          }
        }), catchError((e) => {
          console.error("[HLJS] ", e);
          this._ready.error(e);
          return EMPTY;
        })).subscribe();
      }
      if (this.options?.themePath) {
        this.loadTheme(this.options.themePath);
      }
    }
  }
  /**
   * Lazy-Load highlight.js library
   */
  _loadLibrary() {
    if (this.options) {
      if (this.options.fullLibraryLoader && this.options.coreLibraryLoader) {
        return throwError(() => LoaderErrors.FULL_WITH_CORE_LIBRARY_IMPORTS);
      }
      if (this.options.fullLibraryLoader && this.options.languages) {
        return throwError(() => LoaderErrors.FULL_WITH_LANGUAGE_IMPORTS);
      }
      if (this.options.coreLibraryLoader && !this.options.languages) {
        return throwError(() => LoaderErrors.CORE_WITHOUT_LANGUAGE_IMPORTS);
      }
      if (!this.options.coreLibraryLoader && this.options.languages) {
        return throwError(() => LoaderErrors.LANGUAGE_WITHOUT_CORE_IMPORTS);
      }
      if (this.options.fullLibraryLoader) {
        return this.loadFullLibrary();
      }
      if (this.options.coreLibraryLoader && this.options.languages && Object.keys(this.options.languages).length) {
        return this.loadCoreLibrary().pipe(switchMap((hljs) => this._loadLanguages(hljs)));
      }
    }
    return throwError(() => LoaderErrors.NO_FULL_AND_NO_CORE_IMPORTS);
  }
  /**
   * Lazy-load highlight.js languages
   */
  _loadLanguages(hljs) {
    const languages = Object.entries(this.options.languages).map(([langName, langLoader]) => importModule(langLoader()).pipe(tap((langFunc) => hljs.registerLanguage(langName, langFunc))));
    return forkJoin(languages).pipe(map(() => hljs));
  }
  /**
   * Import highlight.js core library
   */
  loadCoreLibrary() {
    return importModule(this.options.coreLibraryLoader());
  }
  /**
   * Import highlight.js library with all languages
   */
  loadFullLibrary() {
    return importModule(this.options.fullLibraryLoader());
  }
  /**
   * Import line numbers library
   */
  loadLineNumbers() {
    return from(this.options.lineNumbersLoader());
  }
  /**
   * Reload theme styles
   */
  setTheme(path) {
    if (this.isPlatformBrowser) {
      if (this._themeLinkElement) {
        this._themeLinkElement.href = path;
      } else {
        this.loadTheme(path);
      }
    }
  }
  /**
   * Load theme
   */
  loadTheme(path) {
    this._themeLinkElement = this.document.createElement("link");
    this._themeLinkElement.href = path;
    this._themeLinkElement.type = "text/css";
    this._themeLinkElement.rel = "stylesheet";
    this._themeLinkElement.media = "screen,print";
    this.document.head.appendChild(this._themeLinkElement);
  }
  static {
    this.ɵfac = function HighlightLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighlightLoader)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HighlightLoader,
      factory: _HighlightLoader.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var importModule = (moduleLoader) => {
  return from(moduleLoader).pipe(filter((module) => !!module?.default), map((module) => module.default));
};
var HighlightJS = class _HighlightJS {
  constructor() {
    this.loader = inject(HighlightLoader);
    this.options = inject(HIGHLIGHT_OPTIONS, {
      optional: true
    });
    this.hljsSignal = signal(null);
    this.hljs = computed(() => this.hljsSignal());
    this.loader.ready.then((hljs) => {
      this.hljsSignal.set(hljs);
      if (this.options?.highlightOptions) {
        hljs.configure(this.options.highlightOptions);
      }
    });
  }
  /**
   * Core highlighting function. Accepts the code to highlight (string) and a list of options (object)
   */
  highlight(code, options) {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      return hljs.highlight(code, options);
    });
  }
  /**
   * Highlighting with language detection.
   */
  highlightAuto(value, languageSubset) {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      return hljs.highlightAuto(value, languageSubset);
    });
  }
  /**
   * Applies highlighting to a DOM node containing code.
   * This function is the one to use to apply highlighting dynamically after page load or within initialization code of third-party JavaScript frameworks.
   * The function uses language detection by default but you can specify the language in the class attribute of the DOM node. See the scopes reference for all available language names and scopes.
   */
  highlightElement(element) {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      hljs.highlightElement(element);
    });
  }
  /**
   * Applies highlighting to all elements on a page matching the configured cssSelector. The default cssSelector value is 'pre code',
   * which highlights all code blocks. This can be called before or after the page’s onload event has fired.
   */
  highlightAll() {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      hljs.highlightAll();
    });
  }
  /**
   * @deprecated in version 12
   * Configures global options:
   */
  configure(config) {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      hljs.configure(config);
    });
  }
  /**
   * Adds new language to the library under the specified name. Used mostly internally.
   * The function is passed the hljs object to be able to use common regular expressions defined within it.
   */
  registerLanguage(languageName, languageDefinition) {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      hljs.registerLanguage(languageName, languageDefinition);
    });
  }
  /**
   * Removes a language and its aliases from the library. Used mostly internally
   */
  unregisterLanguage(languageName) {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      hljs.unregisterLanguage(languageName);
    });
  }
  /**
   * Adds new language alias or aliases to the library for the specified language name defined under languageName key.
   */
  registerAliases(_0, _1) {
    return __async(this, arguments, function* (alias, {
      languageName
    }) {
      const hljs = yield this.loader.ready;
      hljs.registerAliases(alias, {
        languageName
      });
    });
  }
  /**
   * @return The languages names list.
   */
  listLanguages() {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      return hljs.listLanguages();
    });
  }
  /**
   * Looks up a language by name or alias.
   */
  getLanguage(name) {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      return hljs.getLanguage(name);
    });
  }
  /**
   * Enables safe mode. This is the default mode, providing the most reliable experience for production usage.
   */
  safeMode() {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      hljs.safeMode();
    });
  }
  /**
   * Enables debug/development mode.
   */
  debugMode() {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      hljs.debugMode();
    });
  }
  /**
   * Display line numbers
   */
  lineNumbersBlock(el, options) {
    return __async(this, null, function* () {
      const hljs = yield this.loader.ready;
      if (hljs.lineNumbersBlock) {
        hljs.lineNumbersBlock(el, options);
      }
    });
  }
  static {
    this.ɵfac = function HighlightJS_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighlightJS)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HighlightJS,
      factory: _HighlightJS.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightJS, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var policy;
function getPolicy() {
  if (!policy) {
    try {
      policy = window?.trustedTypes?.createPolicy("ngx-highlightjs", {
        createHTML: (s) => s
      });
    } catch {
    }
  }
  return policy;
}
function trustedHTMLFromStringBypass(html) {
  return getPolicy()?.createHTML(html) || html;
}
var HighlightBase = class _HighlightBase {
  constructor() {
    this._hljs = inject(HighlightJS);
    this._nativeElement = inject(ElementRef).nativeElement;
    this._sanitizer = inject(DomSanitizer);
    afterRenderEffect({
      write: () => {
        const code = this.code();
        this.setTextContent(code || "");
        if (code) {
          this.highlightElement(code);
        }
      }
    });
    afterRenderEffect({
      write: () => {
        const res = this.highlightResult();
        this.setInnerHTML(res?.value);
        this.highlighted.emit(res);
      }
    });
  }
  setTextContent(content) {
    requestAnimationFrame(() => this._nativeElement.textContent = content);
  }
  setInnerHTML(content) {
    requestAnimationFrame(() => this._nativeElement.innerHTML = trustedHTMLFromStringBypass(this._sanitizer.sanitize(SecurityContext.HTML, content) || ""));
  }
  static {
    this.ɵfac = function HighlightBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighlightBase)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _HighlightBase
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightBase, [{
    type: Directive
  }], () => [], null);
})();
var Highlight = class _Highlight extends HighlightBase {
  constructor() {
    super(...arguments);
    this.code = input(null, {
      alias: "highlight"
    });
    this.highlightResult = signal(null);
    this.language = input.required();
    this.ignoreIllegals = input(void 0, {
      transform: booleanAttribute
    });
    this.highlighted = output();
  }
  highlightElement(code) {
    return __async(this, null, function* () {
      const res = yield this._hljs.highlight(code, {
        language: this.language(),
        ignoreIllegals: this.ignoreIllegals()
      });
      this.highlightResult.set(res);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵHighlight_BaseFactory;
      return function Highlight_Factory(__ngFactoryType__) {
        return (ɵHighlight_BaseFactory || (ɵHighlight_BaseFactory = ɵɵgetInheritedFactory(_Highlight)))(__ngFactoryType__ || _Highlight);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _Highlight,
      selectors: [["", "highlight", ""]],
      hostVars: 2,
      hostBindings: function Highlight_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("hljs", true);
        }
      },
      inputs: {
        code: [1, "highlight", "code"],
        language: [1, "language"],
        ignoreIllegals: [1, "ignoreIllegals"]
      },
      outputs: {
        highlighted: "highlighted"
      },
      features: [ɵɵProvidersFeature([{
        provide: HighlightBase,
        useExisting: _Highlight
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Highlight, [{
    type: Directive,
    args: [{
      selector: "[highlight]",
      providers: [{
        provide: HighlightBase,
        useExisting: Highlight
      }],
      host: {
        "[class.hljs]": "true"
      }
    }]
  }], null, null);
})();
var HighlightAuto = class _HighlightAuto extends HighlightBase {
  constructor() {
    super(...arguments);
    this.code = input(null, {
      alias: "highlightAuto"
    });
    this.highlightResult = signal(null);
    this.languages = input();
    this.highlighted = output();
  }
  highlightElement(code) {
    return __async(this, null, function* () {
      const res = yield this._hljs.highlightAuto(code, this.languages());
      this.highlightResult.set(res);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵHighlightAuto_BaseFactory;
      return function HighlightAuto_Factory(__ngFactoryType__) {
        return (ɵHighlightAuto_BaseFactory || (ɵHighlightAuto_BaseFactory = ɵɵgetInheritedFactory(_HighlightAuto)))(__ngFactoryType__ || _HighlightAuto);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _HighlightAuto,
      selectors: [["", "highlightAuto", ""]],
      hostVars: 2,
      hostBindings: function HighlightAuto_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("hljs", true);
        }
      },
      inputs: {
        code: [1, "highlightAuto", "code"],
        languages: [1, "languages"]
      },
      outputs: {
        highlighted: "highlighted"
      },
      features: [ɵɵProvidersFeature([{
        provide: HighlightBase,
        useExisting: _HighlightAuto
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightAuto, [{
    type: Directive,
    args: [{
      selector: "[highlightAuto]",
      providers: [{
        provide: HighlightBase,
        useExisting: HighlightAuto
      }],
      host: {
        "[class.hljs]": "true"
      }
    }]
  }], null, null);
})();
var HighlightModule = class _HighlightModule {
  static {
    this.ɵfac = function HighlightModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighlightModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _HighlightModule,
      imports: [Highlight, HighlightAuto],
      exports: [Highlight, HighlightAuto]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightModule, [{
    type: NgModule,
    args: [{
      imports: [Highlight, HighlightAuto],
      exports: [Highlight, HighlightAuto]
    }]
  }], null, null);
})();
export {
  HIGHLIGHT_OPTIONS,
  Highlight,
  HighlightAuto,
  HighlightBase,
  HighlightJS,
  HighlightLoader,
  HighlightModule,
  provideHighlightOptions
};
//# sourceMappingURL=ngx-highlightjs.js.map
