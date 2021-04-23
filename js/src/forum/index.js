import { extend, override } from 'flarum/common/extend';
import Button from 'flarum/components/Button';
import UploadButton from './components/UploadButton';

const {
  UserFileList
} = require('@fof-upload').components;

app.initializers.add('block-cat/digi-media-manager', () => {
  // console.log(app);
  override(require('@fof-upload').components.FileManagerButton.prototype, 'view', function(original) {
    return Button.component({
      className: 'Button fof-upload-button Button--icon',
      onclick: this.fileManagerButtonClicked.bind(this),
      icon: 'fas fa-folder-open',
      title: app.translator.trans('fof-upload.forum.buttons.media'),
    });
  });

  override(require('@fof-upload').components.FileManagerModal.prototype, 'view', function(original) {
    // console.log(app);
    return (
      <div className={`Modal modal-dialog ${this.className()}`}>
          <div className="Modal-content">
              <div className="fof-modal-buttons App-backControl">
                  <UploadButton uploader={this.uploader} disabled={app.fileListState.isLoading()} isMediaUploadButton />
              </div>

              <div className="fof-drag-and-drop">
                  <div className="fof-drag-and-drop-release">
                      <i className="fas fa-cloud-upload-alt" />

                      {app.translator.trans('fof-upload.forum.file_list.release_to_upload')}
                  </div>
              </div>

              <div className="Modal-header">
                  <h3 className="App-titleControl App-titleControl--text">{app.translator.trans('fof-upload.forum.media_manager')}</h3>
              </div>

              {this.alertAttrs && (
                  <div className="Modal-alert">
                      <Alert {...this.alertAttrs} />
                  </div>
              )}

              <div className="Modal-body">
                <div id="hideUserFileList" style="display: none;">
                  <UserFileList
                      user={this.attrs.user}
                      selectable
                      onFileSelect={this.onFileSelect.bind(this)}
                      selectedFiles={this.selectedFiles}
                      restrictFileType={this.restrictFileType}
                  />
                </div>
                <div id="hideCurrentUserFileList" style="display: block">
                  TikTak
                </div>
              </div>

              <div className="Modal-footer">
                <Button id="allFilesButton" onclick={this.showAllFiles.bind(this)} className="Button Button--primary" style="display: inline;">
                  {app.translator.trans('All Files')}
                </Button>
                <Button id="currentFilesButton" onclick={this.showAllFiles.bind(this)} className="Button Button--primary" style="display: none;">
                  {app.translator.trans('Current Files')}
                </Button>

                <Button onclick={this.hide.bind(this)} className="Button">
                    {app.translator.trans('fof-upload.forum.buttons.cancel')}
                </Button>

                <Button
                    onclick={this.onSelect.bind(this)}
                    disabled={this.selectedFiles.length === 0 || (!this.multiSelect && this.selectedFiles.length > 1)}
                    className="Button Button--primary"
                >
                    {app.translator.transChoice('fof-upload.forum.file_list.confirm_selection_btn', this.selectedFiles.length)}
                </Button>
              </div>
          </div>
      </div>
    );
  });

  require('@fof-upload').components.FileManagerModal.prototype.showAllFiles = function () {
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
    }
    // console.log(this.selectedFiles);
  }
});

// function showAllFiles() {
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