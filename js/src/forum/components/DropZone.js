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
        this.content = '';
        this.files = '';

        this.contor = 0;
    }

    view() {
        // console.log(app);
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
                <div className="div_loading">
                    <img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" />
                </div>
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
                            <div className='UserFileList-buttons'>
                                {Button.component({
                                    className: "Button Button--primary button_transliterare",
                                    onclick: this.transliterate.bind(this),
                                    disabled: !this.enable,
                                    loading: this.loading
                                },
                                    app.translator.trans('Transliterare')
                                )}
                                {(this.files !== '') ?
                                    Button.component({
                                        className: "Button Button--primary button_transliterare",
                                        onclick: this.saveText.bind(this),
                                    },
                                        app.translator.trans('Arata')
                                    ) : ''}
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
        let params = {};

        document.getElementsByClassName("div_loading")[0].style.display = "block";

        app.fileListState.files.map((file) => {
            if (!this.attrs.selectedFiles.includes(file.id())) return;

            if (file.type().includes('image/') || file.type() === 'application/pdf') {
                eval(`params.id_${file.id()} = ${file.id()}`);
            }
        });

        return app
            .request({
                method: 'GET',
                url: app.forum.attribute('apiUrl') + '/trans-texts',
                params: params,
            })
            .then((data) => {
                this.files = data.data;
                this.loading = false;
                document.getElementsByClassName("div_loading")[0].style.display = "none";
                m.redraw();
            })
            .catch((error) => {
                this.loading = false;
                document.getElementsByClassName("div_loading")[0].style.display = "none";
                m.redraw();
                throw error;
            });
    }

    saveText() {
        console.log(this.files);
    }
}