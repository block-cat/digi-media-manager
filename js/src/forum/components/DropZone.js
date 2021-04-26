import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import UserFileList from './UserFileList';
import Button from 'flarum/common/components/Button';

export default class DropZone extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.uploaded = false;
    }

    view() {
        if (this.attrs.selectedFiles.length != 0) {
            this.uploaded = true;
        } else {
            this.uploaded = false;
        }

        return (
            <div className='DropZone'>
                {
                    this.uploaded &&
                    (UserFileList.component({
                        user: this.attrs.user,
                        selectable: true,
                        onFileSelect: this.attrs.onFileSelect.bind(this),
                        selectedFiles: this.attrs.selectedFiles,
                        restrictFileType: this.attrs.restrictFileType
                    }))
                }
                {
                    this.uploaded && (
                        <div className = 'UserFileList-buttons'>
                        {Button.component({
                            className: "Button Button--primary",
                        },
                        app.translator.trans('Transliterare')
                        )}
                        </div>
                    )
                }
                
                {!this.uploaded &&
                (<div className="dropzone">
                    <div class="icon-container">
                        <i class="far fa-file-image fa-4x"></i>
                        <i class="far fa-file-pdf fa-4x"></i>
                        <i class="far fa-file-alt fa-4x"></i>
                    </div>
                    <h1>{app.translator.trans('digi-media-manager.forum.dropzone.title')}</h1>
                    <p>{app.translator.trans('digi-media-manager.forum.dropzone.subtitle')}</p>
                </div>)}
            </div>
        );
    }
}