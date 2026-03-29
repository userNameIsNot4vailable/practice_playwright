Gyors indítás:

npm install

npx playwright install

npx playwright test

node version: 24.14.0

Teszt stratégia:

E2E: Leginkább próbáltam reprodukálni egy valós átlag user valószínűsíthető cselekvéseit, mint pl.: belépés, új termékek hozzáadása, törlése, a termékhez tartozó oldal megnyitása, eljutás a checkoutig. Illetve nem akartam telerakni assertion-nel az e2e tesztet mert vannak már implicit assertion-nek alapból, inkább egy-egy user folyamat tesztbe raknék több assertion-t. Pl.: Login, Products, Cart. Nem akartam nagyon elnyújtani se a feladatot, nyilván lenne még mit finomhangolni rajta, de így is jóval több időt ültem felette mint 3-3 és fél óra. Az egész E2E részt magamtól írtam, az api-nál már használtam AI-t.
