### Coffee Shop App

Schreibe eine **Klasse** namens **CoffeeShop**, die **drei Instanzvariablen** hat:

1.  **name** : eine Zeichenkette (im Wesentlichen der Name des Ladens)
2.  **menu** : ein Array von Artikeln (vom Typ Objekt), wobei jeder Artikel den **item** (Name des Artikels), **type** (ob _food_ oder ein _drink_) und **price** enthält.
3.  **orders** : ein leeres Array

und **sieben Methoden**:

1.  **addOrder**: fügt den **name** des Artikels an das Ende des Arrays **orders** an, wenn er im **menu** vorhanden ist. Andernfalls wird zurückgegeben: `"This item is currently unavailable!"`
2.  **fulfillOrder**: Wenn das Array **orders** **nicht leer** ist, gibst du zurück: `"The {item} is ready!"`. Wenn das Array **orders** leer ist, gibst du zurück: `"All orders have been fulfilled!"`
3.  **listOrders**: gibt die Liste der **orders** zurück, ansonsten ein **leeres** Array.
4.  **dueAmount**: gibt den fälligen Gesamtbetrag für die **orders** zurück.
5.  **cheapestItem**: gibt den **name** des billigsten Artikels auf der Speisekarte zurück.
6.  **drinksOnly**: gibt nur die **names** der Artikel vom Typ **drink** aus der Speisekarte zurück.
7.  **foodOnly**: gibt nur die **names** von _Typ_ **food** aus dem Menü zurück.

**WICHTIG**: Bestellungen werden in einer **FIFO** (first-in, first-out) Reihenfolge ausgeführt.


### Beispiele

```
tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
```


### Anmerkungen

Runde den **due amount** auf bis zu **zwei Dezimalstellen** auf.
