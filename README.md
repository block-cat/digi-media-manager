# BkC Media Manager

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/block-cat/digi-media-manager.svg)](https://packagist.org/packages/block-cat/digi-media-manager)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**

Aceasta este o extensie [Flarum](https://flarum.org/) care oferă posibilitate utilizatorilor de a translitera textele vechi chirilice în texte cu grafie latină.

În spatele aceste extensii este utilizat un sistem avansat de digitalizare și transliterare.

Extensia este integrată în editorul [Flarum](https://flarum.org/). Marea majoritate a functionalităților sunt realizate în extensia `fof/upload`, de aceea, este necesar ca aceasta din urmă să fie instalată și activată în panoul de administrare.

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.0.2` de [Flarum](https://flarum.org/).

De asemenea, `BkC Media Manager` rescrie sau redirecționează unele funcționalități ale extensiei `fof/upload`, de accea, este necesară ultima versiune a acesteea.

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require block-cat/digi-media-manager *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update block-cat/digi-media-manager
php flarum migrate
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove block-cat/digi-media-manager
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/block-cat/digi-media-manager)
- [Changelog](CHANGELOG.md)