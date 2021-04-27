import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import UserFileList from './UserFileList';
import Button from 'flarum/common/components/Button';

export default class DropZone extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.uploaded = false;
        this.enable = false;
        this.loading = false;

        this.contor = 0;
    }

    view() {
        if (this.attrs.selectedFiles.length != 0) {
            this.uploaded = true;
        } else {
            this.uploaded = false;
        }

        app.fileListState.files.map((file) => {
            if (!this.attrs.selectedFiles.includes(file.id())) return;

            if (file.type().includes('image/') || file.type() === 'application/pdf') {
                this.contor++;
            }
            
            if (this.contor != 0) {
                this.enable = true;
            } else {
                this.enable = false;
            }
        });

        return (
            <div >
                <div className='NoDropZone'>
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
                </div>
                
                
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

    transliterate() {
        this.loading = true;
        // trans_file-name.txt
        const data = new FormData();

        app.fileListState.files.map((file) => {
            if (!this.attrs.selectedFiles.includes(file.id())) return;

            data.append('file', file.url());
        });

        return app
            .request({
                method: 'GET',
                url: app.forum.attribute('apiUrl') + '/trans/texts',
                body: data
            })
            .then((result) => console.log(result))
            .catch((error) => {
                this.loading = false;
                m.redraw();

                throw error;
            });
            // console.log(file.type());
        // console.log(app);
        // console.log(this.attrs.selectedFiles);
    }
}