<?php

/*
 * This file is part of block-cat/digi-media-manager.
 *
 * Copyright (c) 2021 .
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BlockCat\DigiMediaManager;

use Flarum\Extend;

return [
    (new Extend\Routes('api'))
        ->get('/trans/texts', 'block-cat-dmm.texts', Api\Controllers\FindTransTexts::class),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    // (new Extend\Frontend('admin'))
    //     ->js(__DIR__.'/js/dist/admin.js')
    //     ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale')
];
