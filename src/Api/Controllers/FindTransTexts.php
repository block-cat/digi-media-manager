<?php

namespace BlockCat\DigiMediaManager\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Foundation\Paths;

use FoF\Upload\File;
use FoF\Upload\Api\Serializers\FileSerializer;
use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Laminas\HttpHandlerRunner\Exception\EmitterException;

class FindTransTexts extends AbstractListController {
    // Need for serialize...
    // After return $result
    public $serializer = FileSerializer::class;
    protected $path;
    protected $translator;

    public function __construct(Paths $paths, Translator $translator)
    {
        $this->path = $paths->public;
        $this->translator = $translator;
    }

    protected function data(ServerRequestInterface $request, Document $document) {
        // Get sent params on request
        $params = $request->getQueryParams();

        // Extract 'user_id' from params
        $userId = array_shift($params);

        // Set all sent file ids from params in array
        $sentFileIds = [];
        foreach ($params as $param) {
            array_push($sentFileIds, $param);
        }
        
        // Set query depends on 'user_id' and file ids
        $query = File::where('actor_id', $userId)->whereIn('id', $sentFileIds);
        
        // Get all files from database
        // depends on 'user_id' and file ids
        // and order 'desc'
        $results = $query
        ->orderBy('id', 'desc')
        ->get();

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

            $time = 0;
            $maxTime = 5; // 5 minutes
            $timeToSleep = 5;  // seconds

            while(!file_exists($this->path . "/assets/files/" . $fileTextPath) && $time < $maxTime * 60 / 5) {
                sleep($timeToSleep);
                $time++;
            }

            if ($time >= $maxTime * 60 / 5) {
                throw new ValidationException(['file' => "Time limit overload!"]);
            }
            
            $result->url = file_get_contents($this->path . "/assets/files/" . $fileTextPath);
        }

        return $results;
    }
}