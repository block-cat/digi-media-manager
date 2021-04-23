module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/UploadButton.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UploadButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);







var UploadButton = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UploadButton, _Component);

  function UploadButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UploadButton.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Component.prototype.oninit.call(this, vnode);

    this.attrs.uploader.on('uploaded', function () {
      // reset the button for a new upload
      _this.$('form')[0].reset(); // redraw to reflect uploader.loading in the DOM


      m.redraw();
    });
    this.isMediaUploadButton = vnode.attrs.isMediaUploadButton || false;
  };

  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode); // Add tooltip


    if (!this.isMediaUploadButton) {
      this.$().tooltip();
    }
  };

  _proto.view = function view() {
    var buttonText = this.attrs.uploader.uploading ? flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-upload.forum.states.loading') : flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-upload.forum.buttons.upload');
    /**
     * Flarum core has decided that all buttons should have tooltips, but
     * it uses `extractText` to get a title attr when none is provided.
     *
     * That returns `false` when no text is available, like the icon in a
     * button.
     *
     * This means that it starts creating weird tooltips, such as `falsefalse`
     * and `falseUpload`.
     *
     * To override this behaviour, we pass `" "` when no tooltip is desired.
     * Using `""` won't work as JS interprets this as a falsey value which will
     * trigger the core logic.
     *
     * Thankfully, browsers ignore title attributes made of only whitespace,
     * preventing a ghost-like tooltip.
     */

    var tooltip = !this.isMediaUploadButton && buttonText || ' ';
    return m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()(['Button', 'hasIcon', 'fof-upload-button', !this.isMediaUploadButton && !this.attrs.uploader.uploading && 'Button--icon', !this.isMediaUploadButton && !this.attrs.uploader.uploading && 'Button--link', this.attrs.uploader.uploading && 'uploading']),
      icon: !this.attrs.uploader.uploading && 'fas fa-file-upload',
      onclick: this.uploadButtonClicked.bind(this),
      title: tooltip,
      disabled: this.attrs.disabled
    }, this.attrs.uploader.uploading && m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a, {
      size: "tiny",
      className: "LoadingIndicator--inline Button-icon"
    }), (this.isMediaUploadButton || this.attrs.uploader.uploading) && m("span", {
      className: "Button-label"
    }, buttonText), m("form", null, m("input", {
      type: "file",
      multiple: true,
      onchange: this.process.bind(this)
    })));
  }
  /**
   * Process the upload event.
   *
   * @param e
   */
  ;

  _proto.process = function process(e) {
    // get the file from the input field
    var files = this.$('input').prop('files');

    if (files.length === 0) {
      // We've got no files to upload, so trying
      // to begin an upload will show an error
      // to the user.
      return;
    }

    this.attrs.uploader.upload(files, !this.isMediaUploadButton);
  }
  /**
   * Event handler for upload button being clicked
   *
   * @param {PointerEvent} e
   */
  ;

  _proto.uploadButtonClicked = function uploadButtonClicked(e) {
    // Trigger click on hidden input element
    // (Opens file dialog)
    this.$('input').click();
  };

  return UploadButton;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UploadButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UploadButton */ "./src/forum/components/UploadButton.js");




var UserFileList = __webpack_require__(/*! @fof-upload */ "@fof-upload").components.UserFileList;

app.initializers.add('block-cat/digi-media-manager', function () {
  // console.log(app);
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(__webpack_require__(/*! @fof-upload */ "@fof-upload").components.FileManagerButton.prototype, 'view', function (original) {
    return flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button fof-upload-button Button--icon',
      onclick: this.fileManagerButtonClicked.bind(this),
      icon: 'fas fa-folder-open',
      title: app.translator.trans('fof-upload.forum.buttons.media')
    });
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(__webpack_require__(/*! @fof-upload */ "@fof-upload").components.FileManagerModal.prototype, 'view', function (original) {
    // console.log(app);
    return m("div", {
      className: "Modal modal-dialog " + this.className()
    }, m("div", {
      className: "Modal-content"
    }, m("div", {
      className: "fof-modal-buttons App-backControl"
    }, m(_components_UploadButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      uploader: this.uploader,
      disabled: app.fileListState.isLoading(),
      isMediaUploadButton: true
    })), m("div", {
      className: "fof-drag-and-drop"
    }, m("div", {
      className: "fof-drag-and-drop-release"
    }, m("i", {
      className: "fas fa-cloud-upload-alt"
    }), app.translator.trans('fof-upload.forum.file_list.release_to_upload'))), m("div", {
      className: "Modal-header"
    }, m("h3", {
      className: "App-titleControl App-titleControl--text"
    }, app.translator.trans('fof-upload.forum.media_manager'))), this.alertAttrs && m("div", {
      className: "Modal-alert"
    }, m(Alert, this.alertAttrs)), m("div", {
      className: "Modal-body"
    }, m("div", {
      id: "hideUserFileList",
      style: "display: none;"
    }, m(UserFileList, {
      user: this.attrs.user,
      selectable: true,
      onFileSelect: this.onFileSelect.bind(this),
      selectedFiles: this.selectedFiles,
      restrictFileType: this.restrictFileType
    })), m("div", {
      id: "hideCurrentUserFileList",
      style: "display: block"
    }, "TikTak")), m("div", {
      className: "Modal-footer"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "allFilesButton",
      onclick: this.showAllFiles.bind(this),
      className: "Button Button--primary",
      style: "display: inline;"
    }, app.translator.trans('All Files')), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "currentFilesButton",
      onclick: this.showAllFiles.bind(this),
      className: "Button Button--primary",
      style: "display: none;"
    }, app.translator.trans('Current Files')), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onclick: this.hide.bind(this),
      className: "Button"
    }, app.translator.trans('fof-upload.forum.buttons.cancel')), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onclick: this.onSelect.bind(this),
      disabled: this.selectedFiles.length === 0 || !this.multiSelect && this.selectedFiles.length > 1,
      className: "Button Button--primary"
    }, app.translator.transChoice('fof-upload.forum.file_list.confirm_selection_btn', this.selectedFiles.length)))));
  });

  __webpack_require__(/*! @fof-upload */ "@fof-upload").components.FileManagerModal.prototype.showAllFiles = function () {
    if (document.querySelector('#allFilesButton').style.display == "inline") {
      document.querySelector('#hideUserFileList').style.display = "block";
      document.querySelector('#hideCurrentUserFileList').style.display = "none";
      document.querySelector('#allFilesButton').style.display = "none";
      document.querySelector('#currentFilesButton').style.display = "inline";
    } else {
      document.querySelector('#hideUserFileList').style.display = "none";
      document.querySelector('#hideCurrentUserFileList').style.display = "block";
      document.querySelector('#allFilesButton').style.display = "inline";
      document.querySelector('#currentFilesButton').style.display = "none";
    } // console.log(this.selectedFiles);

  };
}); // function showAllFiles() {
// document.querySelector('.Modal-body').append(
//   require('@fof-upload').components.UserFileList.component({
//     user: this.attrs.user
//   })
// <UserFileList
//   user={this.attrs.user}
//   selectable
//   onFileSelect={this.onFileSelect.bind(this)}
//   selectedFiles={this.selectedFiles}
//   restrictFileType={this.restrictFileType}
// /> 
// );
// }

/***/ }),

/***/ "@fof-upload":
/*!**************************************************!*\
  !*** external "flarum.extensions['fof-upload']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.extensions['fof-upload'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map