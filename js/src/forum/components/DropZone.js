import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import UserFileList from './UserFileList';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class DropZone extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.uploaded = false;
        this.enable = false;
        this.loading = false;
        this.content = '';
        this.files = '';
        this.text_original = Stream(!!this.attrs.text_original);
        this.text_transliterat = Stream(!!this.attrs.text_transliterat);
        this.files = '';

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
                {
                    this.loading &&
                    (
                        <div className="div_loading">
                            <img src="https://digi.emoldova.org/assets/files/2021-04-29/1619697698-204093-cyr-ocr-animation.gif" />
                        </div>
                    )
                }
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
                                {
                                    (this.files == '') ?
                                        Button.component({
                                            className: "Button Button--primary button_transliterare",
                                            onclick: this.transliterate.bind(this),
                                            disabled: !this.enable,
                                            loading: this.loading
                                        },
                                            app.translator.trans('digi-media-manager.forum.dropzone.transliterate_button')
                                        ) : ''
                                }

                                {this.files && (
                                    <div className='UserFileList-text'>
                                        <h3 class>Textul din imagine a fost recunoscut si transliterat. Selecteaza textul/textele pentru a continua.</h3>
                                        <div className="Form-group">
                                            <div>
                                                <label className="checkbox">
                                                    <input type="checkbox" bidi={this.text_original} oncha disabled={this.loading} />
                                                    {app.translator.trans('digi-media-manager.forum.dropzone.checkbox_text_original')}
                                                </label>
                                                <label className="checkbox">
                                                    <input type="checkbox" bidi={this.text_transliterat} disabled={this.loading} />
                                                    {app.translator.trans('digi-media-manager.forum.dropzone.checkbox_text_transliterat')}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                )
                                }
                                {(this.files !== '') ?
                                    Button.component({
                                        className: "Button Button--primary button_transliterare",
                                        onclick: this.addFilesAndText.bind(this),
                                    },
                                        app.translator.transChoice('digi-media-manager.forum.dropzone.add_to_composer_button', this.attrs.selectedFiles.length)
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
        this.files = '';
        let params = { user_id: app.session.user.id() };
        let maxFileSize = 0;

        app.fileListState.files.map((file) => {
            if (!this.attrs.selectedFiles.includes(file.id())) return;

            if (file.url().includes('imgur')) return;

            if (file.type().includes('image/') || file.type() === 'application/pdf') {
                eval(`params.id_${file.id()} = ${file.id()}`);
                if (file.size() > maxFileSize) {
                    maxFileSize = file.size();
                }
            }
        });

        if (maxFileSize === 0) {
            alert('One or more files no corresponding with requirement!');
            this.loading = false;
            m.redraw();
            return;
        }
        if (maxFileSize < 10485760) { // less than 10 MB
            this.request(params);
            return;
        }
        if (maxFileSize >= 10485760 && maxFileSize < 20971520) { // between 10 MB and 20 MB
            setTimeout(() => { this.request(params) }, 1000 * 60); // 1 minute... method one
            return;
        }
        if (maxFileSize >= 20971520) { // more than 20 MB
            setTimeout(this.request, 1000 * 60 * 2, params); // 2 minute... method two
            return;
        }
    }

    request(params) {
        return app
            .request({
                method: 'GET',
                url: app.forum.attribute('apiUrl') + '/trans-texts',
                params: params,
            })
            .then((data) => {
                this.files = data.data;
                this.loading = false;
                m.redraw();
            })
            .catch((error) => {
                this.loading = false;
                m.redraw();
                throw error;
            });
    }

    addFilesAndText() {
        app.modal.close();

        const text_original = this.text_original();
        const text_transliterat = this.text_transliterat();

        console.log(text_original)

        let k = 0;
        this.attrs.selectedFiles.map((fileId) => {
            const file = app.store.getById('files', fileId);

            try {
                if (file.id() === this.files[k].id) {
                    app.composer.editor.insertAtCursor(file.bbcode() + '\n\n');
                    if (text_original == true) {
                        app.composer.editor.insertAtCursor('[transliterat]\n' + this.files[k].attributes.url + '\n[/transliterat]\n\n');
                    }
                    if (text_transliterat == true) {
                        app.composer.editor.insertAtCursor('[chirilic]\n' + this.files[k++].attributes.path + '\n[/chirilic]\n\n');
                    }

                }
            } catch (error) {
                k++;
                app.composer.editor.insertAtCursor(file.bbcode() + '\n\n');
            }
        });
    }
}