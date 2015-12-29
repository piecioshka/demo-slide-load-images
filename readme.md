# test-slide-load-images

1. Ładuje się pierwszy obrazek.
2. Po interwale czasowym do DOM-a dodaje się kolejny obrazek, ale nie jest on widoczny.
3. Kiedy został w całości załadowany to pierwszy element zostaje usunięty, a tym samym obrazek który się załadował jest widoczny.
4. Kiedy ten zostanie załadowany zegar interwałowy zaczyna tykać, a po tym czasie do drzewa DOM dodaje się kolejny obrazek oraz się ładuje.

## Konfiguracja

 * Adresy do obrazków znajdują się w tablicy `config.images`.
 * Identyfikator kontenera w którym obrazki będą ładowane znajduje się w zmiennej `config.placeholder`.
 * Interval czasowy można modyfikować dzięki zmiennej `config.interval`.
