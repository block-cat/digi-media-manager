<?php

namespace BlockCat\DigiMediaManager\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FindTransTexts extends AbstractListController {
    protected function data(ServerRequestInterface $request, Document $document) {
        $attributes = $request->getParsedBody();
        var_dump($attributes);
    }
}