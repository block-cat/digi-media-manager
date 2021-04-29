module.exports=function(t){var e={};function i(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=16)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e,i){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}i.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.extensions["fof-upload"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/utils/classList"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/components/Alert"]},function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DropZone}));var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),flarum_common_app__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__),flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__),_UserFileList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14),flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__),DropZone=function(_Component){function DropZone(){return _Component.apply(this,arguments)||this}Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.a)(DropZone,_Component);var _proto=DropZone.prototype;return _proto.oninit=function(t){_Component.prototype.oninit.call(this,t),this.uploaded=!1,this.enable=!1,this.loading=!1,this.content="",this.files="",this.contor=0},_proto.view=function(){var t=this;return 0!=this.attrs.selectedFiles.length?this.uploaded=!0:this.uploaded=!1,flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.fileListState.files.map((function(e){t.attrs.selectedFiles.includes(e.id())&&((e.type().includes("image/")||"application/pdf"===e.type())&&t.contor++,0!=t.contor?t.enable=!0:t.enable=!1)})),m("div",null,m("div",{className:"div_loading"},m("img",{src:"https://digi.emoldova.org/assets/files/2021-04-29/1619697698-204093-cyr-ocr-animation.gif"})),m("div",{className:"NoDropZone"},this.uploaded&&_UserFileList__WEBPACK_IMPORTED_MODULE_3__.a.component({user:this.attrs.user,selectable:!0,onFileSelect:this.attrs.onFileSelect.bind(this),selectedFiles:this.attrs.selectedFiles,restrictFileType:this.attrs.restrictFileType}),this.uploaded&&m("div",{className:"UserFileList-buttons"},flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({className:"Button Button--primary button_transliterare",onclick:this.transliterate.bind(this),disabled:!this.enable,loading:this.loading},flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("Transliterare")),""!==this.files?flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({className:"Button Button--primary button_transliterare",onclick:this.saveText.bind(this)},flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("Arata")):"")),!this.uploaded&&m("div",{className:"dropzone"},m("div",{class:"icon-container"},m("i",{class:"far fa-file-image fa-4x"}),m("i",{class:"far fa-file-pdf fa-4x"}),m("i",{class:"far fa-file-alt fa-4x"})),m("h1",null,flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("digi-media-manager.forum.dropzone.title")),m("p",null,flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("digi-media-manager.forum.dropzone.subtitle"))))},_proto.transliterate=function transliterate(){var _this2=this;this.loading=!0;var params={};return document.getElementsByClassName("div_loading")[0].style.display="block",flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.fileListState.files.map((function(file){_this2.attrs.selectedFiles.includes(file.id())&&(file.type().includes("image/")||"application/pdf"===file.type())&&eval("params.id_"+file.id()+" = "+file.id())})),flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({method:"GET",url:flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("apiUrl")+"/trans-texts",params:params}).then((function(t){_this2.files=t.data,_this2.loading=!1,document.getElementsByClassName("div_loading")[0].style.display="none",m.redraw()})).catch((function(t){throw _this2.loading=!1,document.getElementsByClassName("div_loading")[0].style.display="none",m.redraw(),t}))},_proto.saveText=function(){console.log(this.files)},DropZone}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a)},function(t,e,i){"use strict";i.d(e,"a",(function(){return B}));var a=i(4),o=i(3),n=i.n(o),l=i(2),s=i.n(l),r=i(10),p=i.n(r),u=i(7),c=i.n(u),d=i(8),f=i.n(d),_=i(11),h=i.n(_),b=["image/png","image/jpg","image/jpeg","image/svg+xml","image/gif"],g=["application/zip","application/x-7z-compressed","application/gzip","application/vnd.rar","application/x-rar-compressed"],y=["text/html","text/css","text/javascript","application/json","application/ld+json","text/javascript","application/x-httpd-php"],M=["application/x-abiword","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf"];var B=function(t){function e(){return t.apply(this,arguments)||this}Object(a.a)(e,t);var i=e.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e),app.fileListState.setUser(e.attrs.user||app.session.user),this.inModal=e.attrs.selectable,this.restrictFileType=e.attrs.restrictFileType||null,this.downloadOnClick=this.attrs.downloadOnClick||!1,this.filesBeingHidden=[],this.user=app.fileListState.user,this.showFiles=this.attrs.selectedFiles},i.view=function(){var t=this,e=app.fileListState;return m("div",{className:"fof-upload-file-list","aria-live":"polite"},e.isLoading()&&0===e.files.length&&m("div",{className:"fof-upload-loading"},app.translator.trans("fof-upload.forum.file_list.loading"),m(c.a,null)),this.inModal&&e.empty()&&m("p",{className:"fof-upload-empty"},m("i",{className:"fas fa-cloud-upload-alt fof-upload-empty-icon"}),app.translator.trans("fof-upload.forum.file_list.modal_empty_"+("phone"!==app.screen()?"desktop":"phone"))),!this.inModal&&e.empty()&&m("p",{className:"fof-upload-empty"},app.translator.trans("fof-upload.forum.file_list.empty")),m("ul",null,e.files.map((function(e){if(t.showFiles.includes(e.id())){var i,a=(i=e.type(),b.includes(i)?"image":i.includes("image/")?"far fa-file-image":i.includes("video/")?"far fa-file-video":g.indexOf(i)>=0?"far fa-file-archive":"application/pdf"===i?"far fa-file-pdf":M.indexOf(i)>=0?"far fa-file-word":i.includes("audio/")?"far fa-file-audio":y.indexOf(i)>=0?"far fa-file-code":"far fa-file"),o=!t.restrictFileType||t.isSelectable(e),n=f()(["fof-file","image"===a&&"fof-file-type-image",t.attrs.selectedFiles&&t.attrs.selectedFiles.indexOf(e.id())>=0&&"fof-file-selected"]),l=e.baseName(),r=t.filesBeingHidden.includes(e.uuid());return m("li",{"aria-busy":r},app.session.user&&(t.user===app.session.user||app.session.user.deleteOthersMediaLibrary())&&m(s.a,{className:"Button Button--icon fof-file-delete",icon:"far fa-trash-alt","aria-label":app.translator.trans("fof-upload.forum.file_list.delete_file_a11y_label",{fileName:l}),disabled:r,onclick:t.hideFile.bind(t,e)}),m("button",{className:n,onclick:function(){return t.onFileClick(e)},disabled:!o||r,"aria-label":h()(app.translator.trans("fof-upload.forum.file_list.select_file_a11y_label",{fileName:l}))},m("figure",null,"image"===a?m("img",{src:e.url(),className:"fof-file-image-preview",draggable:!1,alt:""}):m("span",{className:"fof-file-icon",role:"presentation"},m("i",{className:"fa-fw "+a})),m("figcaption",{className:"fof-file-name"},l),r&&m("span",{class:"fof-file-loading",role:"status","aria-label":app.translator.trans("fof-upload.forum.file_list.hide_file.loading")},m(c.a,null)))))}}))))},i.onFileClick=function(t){this.attrs.onFileSelect?this.attrs.onFileSelect(t):this.attrs.downloadOnClick&&window.open(t.url())},i.isSelectable=function(t){var e=t.type();return Array.isArray(this.restrictFileType)?this.restrictFileType.indexOf(e)>=0:"image"===this.restrictFileType?e.includes("image/"):"audio"===this.restrictFileType?e.includes("audio/"):"video"===this.restrictFileType&&e.includes("video/")},i.hideFile=function(t){var e=this,i=t.uuid();if(!this.filesBeingHidden.includes(i))if(this.filesBeingHidden.push(i),confirm(h()(app.translator.trans("fof-upload.forum.file_list.hide_file.hide_confirmation",{fileName:t.baseName()}))))app.request({method:"PATCH",url:app.forum.attribute("apiUrl")+"/fof/upload/hide",body:{uuid:i}}).then((function(){app.alerts.show(p.a,{type:"success"},app.translator.trans("fof-upload.forum.file_list.hide_file.hide_success"))})).catch((function(){app.alerts.show(p.a,{type:"error"},app.translator.trans("fof-upload.forum.file_list.hide_file.hide_fail",{fileName:t.fileName()}))})).then((function(){var t=app.fileListState,a=t.files.findIndex((function(t){return i===t.uuid()}));t.files.splice(a,1);var o=e.filesBeingHidden.indexOf(i);e.filesBeingHidden.splice(o,1)}));else{var a=this.filesBeingHidden.indexOf(i);this.filesBeingHidden.splice(a,1)}},e}(n.a)},,function(t,e,i){"use strict";i.r(e);var a=i(9),o=i(5),n=i.n(o),l=i(4),s=i(1),r=i.n(s),p=i(3),u=i.n(p),c=i(2),d=i.n(c),f=i(7),_=i.n(f),h=i(8),b=i.n(h),g=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var i=e.prototype;return i.oninit=function(e){var i=this;t.prototype.oninit.call(this,e),this.attrs.uploader.on("uploaded",(function(){i.$("form")[0].reset(),m.redraw()})),this.isMediaUploadButton=e.attrs.isMediaUploadButton||!1},i.oncreate=function(e){t.prototype.oncreate.call(this,e),this.isMediaUploadButton||this.$().tooltip()},i.view=function(){var t=this.attrs.uploader.uploading?r.a.translator.trans("fof-upload.forum.states.loading"):r.a.translator.trans("fof-upload.forum.buttons.upload"),e=!this.isMediaUploadButton&&t||" ";return m(d.a,{className:b()(["Button","hasIcon","fof-upload-button",!this.isMediaUploadButton&&!this.attrs.uploader.uploading&&"Button--icon",!this.isMediaUploadButton&&!this.attrs.uploader.uploading&&"Button--link",this.attrs.uploader.uploading&&"uploading"]),icon:!this.attrs.uploader.uploading&&"fas fa-file-upload",onclick:this.uploadButtonClicked.bind(this),title:e,disabled:this.attrs.disabled},this.attrs.uploader.uploading&&m(_.a,{size:"tiny",className:"LoadingIndicator--inline Button-icon"}),(this.isMediaUploadButton||this.attrs.uploader.uploading)&&m("span",{className:"Button-label"},t),m("form",null,m("input",{type:"file",multiple:!0,onchange:this.process.bind(this)})))},i.process=function(t){var e=this.$("input").prop("files");0!==e.length&&this.attrs.uploader.upload(e,!this.isMediaUploadButton)},i.uploadButtonClicked=function(t){this.$("input").click()},e}(u.a),y=i(13),M=i(0),B=i.n(M);B.a.initializers.add("block-cat/digi-media-manager",(function(){Object(a.extend)(i(6).components.FileManagerModal.prototype,"oninit",(function(){B.a.forum.data.attributes.userFileListVisibility=!1})),Object(a.override)(i(6).components.FileManagerButton.prototype,"view",(function(t){return n.a.component({className:"Button fof-upload-button Button--icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:B.a.translator.trans("fof-upload.forum.buttons.media")})})),Object(a.override)(i(6).components.FileManagerModal.prototype,"view",(function(t){return m("div",{className:"Modal modal-dialog "+this.className()},m("div",{className:"Modal-content"},m("div",{className:"fof-modal-buttons App-backControl"},m(g,{uploader:this.uploader,disabled:B.a.fileListState.isLoading(),isMediaUploadButton:!0})),m("div",{className:"fof-drag-and-drop"},m("div",{className:"fof-drag-and-drop-release"},m("i",{className:"fas fa-cloud-upload-alt"}),B.a.translator.trans("fof-upload.forum.file_list.release_to_upload"))),m("div",{className:"Modal-header"},m("h3",{className:"App-titleControl App-titleControl--text"},B.a.translator.trans("fof-upload.forum.media_manager"))),this.alertAttrs&&m("div",{className:"Modal-alert"},m(Alert,this.alertAttrs)),m("div",{className:"Modal-body"},B.a.forum.attribute("userFileListVisibility")?i(6).components.UserFileList.component({user:this.attrs.user,selectable:!0,onFileSelect:this.onFileSelect.bind(this),selectedFiles:this.selectedFiles,restrictFileType:this.restrictFileType}):y.a.component({user:this.attrs.user,onFileSelect:this.onFileSelect.bind(this),selectedFiles:this.selectedFiles,restrictFileType:this.restrictFileType})),m("div",{className:"Modal-footer"},B.a.forum.attribute("userFileListVisibility")?n.a.component({id:"currentFilesButton",onclick:this.showAllFiles.bind(this),className:"Button Button--primary"},B.a.translator.trans("digi-media-manager.forum.current_files")):n.a.component({id:"allFilesButton",onclick:this.showAllFiles.bind(this),className:"Button Button--secundary"},B.a.translator.trans("digi-media-manager.forum.all_files")),m(n.a,{onclick:this.hide.bind(this),className:"Button"},B.a.translator.trans("fof-upload.forum.buttons.cancel")),m(n.a,{onclick:this.onSelect.bind(this),disabled:0===this.selectedFiles.length||!this.multiSelect&&this.selectedFiles.length>1,className:"Button Button--primary"},B.a.translator.transChoice("fof-upload.forum.file_list.confirm_selection_btn",this.selectedFiles.length)))))})),i(6).components.FileManagerModal.prototype.showAllFiles=function(){B.a.forum.data.attributes.userFileListVisibility^=!0}}))}]);
//# sourceMappingURL=forum.js.map