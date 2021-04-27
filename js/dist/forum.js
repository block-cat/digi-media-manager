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
/*! no exports provided */
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

/***/ "./src/forum/components/DropZone.js":
/*!******************************************!*\
  !*** ./src/forum/components/DropZone.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropZone; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserFileList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserFileList */ "./src/forum/components/UserFileList.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);






var DropZone = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DropZone, _Component);

  function DropZone() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DropZone.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.uploaded = false;
    this.enable = false;
    this.loading = false;
    this.contor = 0;
  };

  _proto.view = function view() {
    var _this = this;

    if (this.attrs.selectedFiles.length != 0) {
      this.uploaded = true;
    } else {
      this.uploaded = false;
    }

    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.fileListState.files.map(function (file) {
      if (!_this.attrs.selectedFiles.includes(file.id())) return;

      if (file.type().includes('image/') || file.type() === 'application/pdf') {
        _this.contor++;
      }

      if (_this.contor != 0) {
        _this.enable = true;
      } else {
        _this.enable = false;
      }
    });
    return m("div", {
      className: "DropZone"
    }, this.uploaded && _UserFileList__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      user: this.attrs.user,
      selectable: true,
      onFileSelect: this.attrs.onFileSelect.bind(this),
      selectedFiles: this.attrs.selectedFiles,
      restrictFileType: this.attrs.restrictFileType
    }), this.uploaded && m("div", {
      className: "UserFileList-buttons"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      className: "Button Button--primary",
      onclick: this.transliterate.bind(this),
      disabled: !this.enable,
      loading: this.loading
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('Transliterare'))), !this.uploaded && m("div", {
      className: "dropzone"
    }, m("div", {
      "class": "icon-container"
    }, m("i", {
      "class": "far fa-file-image fa-4x"
    }), m("i", {
      "class": "far fa-file-pdf fa-4x"
    }), m("i", {
      "class": "far fa-file-alt fa-4x"
    })), m("h1", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('digi-media-manager.forum.dropzone.title')), m("p", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('digi-media-manager.forum.dropzone.subtitle'))));
  };

  _proto.transliterate = function transliterate() {
    var _this2 = this;

    this.loading = true; // trans_file-name.txt

    var data = new FormData();
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.fileListState.files.map(function (file) {
      if (!_this2.attrs.selectedFiles.includes(file.id())) return;
      data.append('file', file.url());
    });
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      method: 'GET',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/trans/texts',
      body: data
    }).then(function (result) {
      return console.log(result);
    })["catch"](function (error) {
      _this2.loading = false;
      m.redraw();
      throw error;
    }); // console.log(file.type());
    // console.log(app);
    // console.log(this.attrs.selectedFiles);
  };

  return DropZone;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



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

/***/ "./src/forum/components/UserFileList.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UserFileList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserFileList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_mimeToIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/mimeToIcon */ "./src/forum/utils/mimeToIcon.js");









var UserFileList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserFileList, _Component);

  function UserFileList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserFileList.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode); // Load file list


    app.fileListState.setUser(vnode.attrs.user || app.session.user);
    this.inModal = vnode.attrs.selectable;
    this.restrictFileType = vnode.attrs.restrictFileType || null;
    this.downloadOnClick = this.attrs.downloadOnClick || false;
    /**
     * @type {string[]} List of file UUIDs currently being hidden.
     */

    this.filesBeingHidden = [];
    /**
     * The user who's media we are dealing with
     */

    this.user = app.fileListState.user; // Uploaded files

    this.showFiles = this.attrs.selectedFiles;
  };

  _proto.view = function view() {
    var _this = this;

    /**
     * @type {{empty(): boolean, files: import('../../common/models/File').default[]}}
     */
    var state = app.fileListState;
    return m("div", {
      className: "fof-upload-file-list",
      "aria-live": "polite"
    }, state.isLoading() && state.files.length === 0 && m("div", {
      className: 'fof-upload-loading'
    }, app.translator.trans('fof-upload.forum.file_list.loading'), m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a, null)), this.inModal && state.empty() && m("p", {
      className: "fof-upload-empty"
    }, m("i", {
      className: "fas fa-cloud-upload-alt fof-upload-empty-icon"
    }), app.translator.trans("fof-upload.forum.file_list.modal_empty_" + (app.screen() !== 'phone' ? 'desktop' : 'phone'))), !this.inModal && state.empty() && m("p", {
      className: "fof-upload-empty"
    }, app.translator.trans('fof-upload.forum.file_list.empty')), m("ul", null, state.files.map(function (file) {
      if (!_this.showFiles.includes(file.id())) return;
      var fileIcon = Object(_utils_mimeToIcon__WEBPACK_IMPORTED_MODULE_7__["default"])(file.type());
      var fileSelectable = _this.restrictFileType ? _this.isSelectable(file) : true;
      var fileClassNames = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()(['fof-file', // File is image
      fileIcon === 'image' && 'fof-file-type-image', // File is selected
      _this.attrs.selectedFiles && _this.attrs.selectedFiles.indexOf(file.id()) >= 0 && 'fof-file-selected']);
      /**
       * File's baseName (file name + extension)
       * @type {string}
       */

      var fileName = file.baseName();

      var isFileHiding = _this.filesBeingHidden.includes(file.uuid());

      return m("li", {
        "aria-busy": isFileHiding
      }, app.session.user && (_this.user === app.session.user || app.session.user.deleteOthersMediaLibrary()) && m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "Button Button--icon fof-file-delete",
        icon: "far fa-trash-alt",
        "aria-label": app.translator.trans('fof-upload.forum.file_list.delete_file_a11y_label', {
          fileName: fileName
        }),
        disabled: isFileHiding,
        onclick: _this.hideFile.bind(_this, file)
      }), m("button", {
        className: fileClassNames,
        onclick: function onclick() {
          return _this.onFileClick(file);
        },
        disabled: !fileSelectable || isFileHiding,
        "aria-label": flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(app.translator.trans('fof-upload.forum.file_list.select_file_a11y_label', {
          fileName: fileName
        }))
      }, m("figure", null, fileIcon === 'image' ? m("img", {
        src: file.url(),
        className: "fof-file-image-preview",
        draggable: false // Images should always have an `alt`, even if empty!
        //
        // As we already state the file name as part of the
        // button alt label, there's no point in restating it.
        //
        // See: https://www.w3.org/WAI/tutorials/images/decorative#decorative-image-as-part-of-a-text-link
        ,
        alt: ""
      }) : m("span", {
        className: "fof-file-icon" // Prevents a screen-reader from traversing this node.
        //
        // This is a placeholder for when no preview is available,
        // and a preview won't benefit a user using a screen
        // reader anyway, so there is no benefit to making them
        // aware of a lack of a preview.
        ,
        role: "presentation"
      }, m("i", {
        className: "fa-fw " + fileIcon
      })), m("figcaption", {
        className: "fof-file-name"
      }, fileName), isFileHiding && m("span", {
        "class": "fof-file-loading",
        role: "status",
        "aria-label": app.translator.trans('fof-upload.forum.file_list.hide_file.loading')
      }, m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a, null)))));
    })), state.hasMoreResults() && m("div", {
      className: 'fof-load-more-files'
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: 'Button Button--primary',
      disabled: state.isLoading(),
      loading: state.isLoading(),
      onclick: function onclick() {
        return state.loadMore();
      }
    }, app.translator.trans('fof-upload.forum.file_list.load_more_files_btn'))));
  }
  /**
   * Execute function on file click
   *
   * @param {import('../../common/models/File').default} file
   */
  ;

  _proto.onFileClick = function onFileClick(file) {
    // Custom functionality
    if (this.attrs.onFileSelect) {
      this.attrs.onFileSelect(file);
      return;
    } // Download on click


    if (this.attrs.downloadOnClick) {
      window.open(file.url());
      return;
    }
  }
  /**
   * Check if a file is selectable
   *
   * @param {import('../../common/models/File').default} file
   */
  ;

  _proto.isSelectable = function isSelectable(file) {
    var fileType = file.type(); // Custom defined file types

    if (Array.isArray(this.restrictFileType)) {
      return this.restrictFileType.indexOf(fileType) >= 0;
    } // Image
    else if (this.restrictFileType === 'image') {
        return fileType.includes('image/');
      } // Audio
      else if (this.restrictFileType === 'audio') {
          return fileType.includes('audio/');
        } // Video
        else if (this.restrictFileType === 'video') {
            return fileType.includes('video/');
          }

    return false;
  }
  /**
   * Begins the hiding process for a file.
   *
   * - Shows a native confirmation dialog
   * - If confirmed, sends AJAX request to the hide file API
   *
   * @param {import('../../common/models/File').default} file File to hide
   */
  ;

  _proto.hideFile = function hideFile(file) {
    var _this2 = this;

    /**
     * @type {string} File UUID
     */
    var uuid = file.uuid();
    if (this.filesBeingHidden.includes(uuid)) return;
    this.filesBeingHidden.push(uuid);
    var confirmHide = confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(app.translator.trans('fof-upload.forum.file_list.hide_file.hide_confirmation', {
      fileName: file.baseName()
    })));

    if (confirmHide) {
      app.request({
        method: 'PATCH',
        url: app.forum.attribute('apiUrl') + "/fof/upload/hide",
        body: {
          uuid: uuid
        }
      }).then(function () {
        app.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: 'success'
        }, app.translator.trans('fof-upload.forum.file_list.hide_file.hide_success'));
      })["catch"](function () {
        app.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: 'error'
        }, app.translator.trans('fof-upload.forum.file_list.hide_file.hide_fail', {
          fileName: file.fileName()
        }));
      }).then(function () {
        // Remove hidden file from state

        /**
         * @type {{ files: import('../../common/models/File').default[] }}
         */
        var state = app.fileListState;
        var index = state.files.findIndex(function (file) {
          return uuid === file.uuid();
        });
        state.files.splice(index, 1); // Remove file from hiding list

        var i = _this2.filesBeingHidden.indexOf(uuid);

        _this2.filesBeingHidden.splice(i, 1);
      });
    } else {
      // Remove file from hiding list
      var i = this.filesBeingHidden.indexOf(uuid);
      this.filesBeingHidden.splice(i, 1);
    }
  };

  return UserFileList;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var _components_DropZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DropZone */ "./src/forum/components/DropZone.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_4__);





flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.initializers.add('block-cat/digi-media-manager', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(__webpack_require__(/*! @fof-upload */ "@fof-upload").components.FileManagerModal.prototype, 'oninit', function () {
    flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.forum.data.attributes.userFileListVisibility = false;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(__webpack_require__(/*! @fof-upload */ "@fof-upload").components.FileManagerButton.prototype, 'view', function (original) {
    return flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button fof-upload-button Button--icon',
      onclick: this.fileManagerButtonClicked.bind(this),
      icon: 'fas fa-folder-open',
      title: flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.translator.trans('fof-upload.forum.buttons.media')
    });
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(__webpack_require__(/*! @fof-upload */ "@fof-upload").components.FileManagerModal.prototype, 'view', function (original) {
    return m("div", {
      className: "Modal modal-dialog " + this.className()
    }, m("div", {
      className: "Modal-content"
    }, m("div", {
      className: "fof-modal-buttons App-backControl"
    }, m(_components_UploadButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      uploader: this.uploader,
      disabled: flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.fileListState.isLoading(),
      isMediaUploadButton: true
    })), m("div", {
      className: "fof-drag-and-drop"
    }, m("div", {
      className: "fof-drag-and-drop-release"
    }, m("i", {
      className: "fas fa-cloud-upload-alt"
    }), flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.translator.trans('fof-upload.forum.file_list.release_to_upload'))), m("div", {
      className: "Modal-header"
    }, m("h3", {
      className: "App-titleControl App-titleControl--text"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.translator.trans('fof-upload.forum.media_manager'))), this.alertAttrs && m("div", {
      className: "Modal-alert"
    }, m(Alert, this.alertAttrs)), m("div", {
      className: "Modal-body"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.forum.attribute('userFileListVisibility') ? __webpack_require__(/*! @fof-upload */ "@fof-upload").components.UserFileList.component({
      user: this.attrs.user,
      selectable: true,
      onFileSelect: this.onFileSelect.bind(this),
      selectedFiles: this.selectedFiles,
      restrictFileType: this.restrictFileType
    }) : _components_DropZone__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      user: this.attrs.user,
      onFileSelect: this.onFileSelect.bind(this),
      selectedFiles: this.selectedFiles,
      restrictFileType: this.restrictFileType
    })), m("div", {
      className: "Modal-footer"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.forum.attribute('userFileListVisibility') ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      id: "currentFilesButton",
      onclick: this.showAllFiles.bind(this),
      className: "Button Button--primary"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.translator.trans('digi-media-manager.forum.current_files')) : flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      id: "allFilesButton",
      onclick: this.showAllFiles.bind(this),
      className: "Button Button--secundary"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.translator.trans('digi-media-manager.forum.all_files')), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onclick: this.hide.bind(this),
      className: "Button"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.translator.trans('fof-upload.forum.buttons.cancel')), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onclick: this.onSelect.bind(this),
      disabled: this.selectedFiles.length === 0 || !this.multiSelect && this.selectedFiles.length > 1,
      className: "Button Button--primary"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.translator.transChoice('fof-upload.forum.file_list.confirm_selection_btn', this.selectedFiles.length)))));
  });

  __webpack_require__(/*! @fof-upload */ "@fof-upload").components.FileManagerModal.prototype.showAllFiles = function () {
    flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.forum.data.attributes.userFileListVisibility ^= true;
  };
});

/***/ }),

/***/ "./src/forum/utils/mimeToIcon.js":
/*!***************************************!*\
  !*** ./src/forum/utils/mimeToIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mimeToIcon; });
var image = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg+xml', 'image/gif'];
var archive = ['application/zip', 'application/x-7z-compressed', 'application/gzip', 'application/vnd.rar', 'application/x-rar-compressed'];
var code = ['text/html', 'text/css', 'text/javascript', 'application/json', 'application/ld+json', 'text/javascript', 'application/x-httpd-php'];
var word = ['application/x-abiword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'];
/**
 * Returns a FontAwesome icon class for a specified MIME type.
 *
 * If it's a known image type, it returns `image` instead.
 *
 * @param {string} fileType MIME type
 * @returns {string} Icon for MIME type
 */

function mimeToIcon(fileType) {
  // Display image (do not display for)
  if (image.includes(fileType)) {
    return 'image';
  } // Display image icon for other types
  else if (fileType.includes('image/')) {
      return 'far fa-file-image';
    } // Video icon
    else if (fileType.includes('video/')) {
        return 'far fa-file-video';
      } // Archive icon
      else if (archive.indexOf(fileType) >= 0) {
          return 'far fa-file-archive';
        } // PDF icon
        else if (fileType === 'application/pdf') {
            return 'far fa-file-pdf';
          } // Word
          else if (word.indexOf(fileType) >= 0) {
              return 'far fa-file-word';
            } // Audio icon
            else if (fileType.includes('audio/')) {
                return 'far fa-file-audio';
              } // Code files
              else if (code.indexOf(fileType) >= 0) {
                  return 'far fa-file-code';
                }

  return 'far fa-file';
}

/***/ }),

/***/ "@fof-upload":
/*!**************************************************!*\
  !*** external "flarum.extensions['fof-upload']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.extensions['fof-upload'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

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

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Alert'];

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

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

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