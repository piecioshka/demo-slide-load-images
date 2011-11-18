# slide-load-images

## opis

1. Ładuje się pierwszy obrazek.
2. Po intervale czasowym do DOM'a dodaje się kolejny obrazek, ale nie jest on widoczny.
3. Kiedy został w całości załadowany to pierwszy element zostaje usunięcty, a tym samym obrazek który się załadował jest widoczny.
4. Kiedy ten zostanie załadowany zegar intervałowy zaczyna tykać, a po tym czasie do drzewa DOM dodaje się kolejny obrazek oraz się ładuje.

## konfiguracja

- Adresy do obrazków znajdują się w tablicy `config.images`.
- Identyfikator kontenera w którym obrazki będą ładowane znajduje się w zmiennej `config.placeholder`.
- Interval czasowy można modyfiikować dzięki zmiennej `config.interval`.

## licencja

GPL 3.0 License ( [http://www.gnu.org/licenses/gpl-3.0.txt](http://www.gnu.org/licenses/gpl-3.0.txt "GNU 3.0 License") )

## autorzy

* Piotr Kowalski ( [http://piecioshka.pl/](http://piecioshka.pl/ "piecioshka homepage") )