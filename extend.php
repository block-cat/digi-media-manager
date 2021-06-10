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
use Flarum\Discussion\DiscussionValidator;
use Flarum\Post\PostValidator;
use Illuminate\Support\Str;
use s9e\TextFormatter\Configurator;

return [
    (new Extend\Routes('api'))
        ->get('/trans-texts', 'block-cat-dmm.texts', Api\Controllers\FindTransTexts::class),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    // (new Extend\Frontend('admin'))
    //     ->js(__DIR__.'/js/dist/admin.js')
    //     ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Formatter)
        ->configure(function(Configurator $config) {
            $config->BBCodes->addCustom(
                '[chirilic]{TEXT}[/chirilic]',
                '<span class="chirilic">{TEXT}</span>'
            );
            $config->BBCodes->addCustom(
                '[transliterat]{TEXT}[/transliterat]',
                '<span class="transliterat">{TEXT}</span>'
            );
        }),
    (new Extend\Validator(DiscussionValidator::class))
        ->configure(function ($flarumValidator, $validator) {
            $rules = $validator->getRules();

            if (!array_key_exists('title', $rules)) {
                return;
            }

            $rules['title'] = array_map(function(string $rule) {
                if (Str::startsWith($rule, 'max:')) {
                    return 'max:200';
                }
                
                return $rule;
            }, $rules['title']);

            $validator->setRules($rules);
        }),
    (new Extend\Validator(PostValidator::class))
        ->configure(function ($flarumValidator, $validator) {
            $rules = $validator->getRules();

            if (!array_key_exists('content', $rules)) {
                return;
            }

            $rules['content'] = array_map(function(string $rule) {
                if (Str::startsWith($rule, 'max:')) {
                    return 'max:16777215';
                }
                
                return $rule;
            }, $rules['content']);

            $validator->setRules($rules);
        }),
];
