<?php

namespace BlockCat\DigiMediaManager\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Foundation\Paths;

use FoF\Upload\File;
use FoF\Upload\Api\Serializers\FileSerializer;

class FindTransTexts extends AbstractListController {
    public $serializer = FileSerializer::class;
    protected $path;

    public function __construct(Paths $paths)
    {
        $this->path = $paths->public;
    }

    protected function data(ServerRequestInterface $request, Document $document) {
        $params = $request->getQueryParams();

        $sentFileIds = [];
        foreach ($params as $param) {
            array_push($sentFileIds, $param);
        }
        
        $query = File::where('actor_id', '1')->whereIn('id', $sentFileIds);
        
        $results = $query
        ->orderBy('id', 'desc')
        ->get();
        
        $content = '';
        
        foreach ($results as $result) {
            $pos = strrpos($result->path, "\\");
            $last_str = substr($result->path, $pos + 1);
            $filePath = substr_replace($result->path, "\\trans_" . $last_str, $pos);
            
            if (str_ends_with($filePath, '.jpg') || str_ends_with($filePath, '.png')
                || str_ends_with($filePath, '.pdf')) {
                    $pos = -4;
                };
            if (str_ends_with($filePath, '.jpeg') || str_ends_with($filePath, '.tiff')) {
                    $pos = -5;
                };

            $fileTextPath = substr_replace($filePath, ".txt", $pos);

            $result->url = file_get_contents($this->path . "/assets/files/" . $fileTextPath);
            // var_dump($content);
        }

        // var_dump($arr);
        return $results;
    }
}