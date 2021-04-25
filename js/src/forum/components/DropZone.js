import app from 'flarum/common/app';
import Component from 'flarum/common/Component';

export default class DropZone extends Component {
    oninit(vnode) {
        super.oninit(vnode);

    }

    oncreate(vnode) {
        super.oncreate(vnode);

    }

    view() {
        return (
            <div className="dropzone">
                <div class="icon-container">
                    <i class="far fa-file-image fa-4x"></i>
                    <i class="far fa-file-pdf fa-4x"></i>
                    <i class="far fa-file-alt fa-4x"></i>
                </div>
                <h1>{app.translator.trans('digi-media-manager.forum.dropzone.title')}</h1>
                <p>{app.translator.trans('digi-media-manager.forum.dropzone.subtitle')}</p>
                
            </div>
        );
    }

    
}