<?php

namespace BlockCat\DigiMediaManager\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class TextSerializer extends AbstractSerializer {
    protected $type = 'texts';

    protected function getDefaultAttributes($model) {
        return [
            'text'  => $model->url
        ];
    }
}