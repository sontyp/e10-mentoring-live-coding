[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)
### Coffee Shop App

- Work in the provided `index.js` file

Write a **class** named `CoffeeShop` which has **three instance properties**:

1.  **name** : a string (name of the shop)
2.  **menu** : an array of objects each containing the properties **`item`** (name of the item), **`type`** ("food" or "drink") and **`price`**.
3.  **orders** : an empty array

and **eight methods**:

1. **`shopName`**: returns the name of the coffee shop
  
2.  **`addOrder`**: accepts one parameter to adds the **name** of the item to the end of the **orders** array if it exists on the **menu** and returns a message `"Order added!"`. Otherwise returns `"This item is currently unavailable!"`
3.  **`fulfillOrder`**: if the **`orders`** array is **not empty**, removes the oldest item from the array and returns `"The {item} is ready!"`. If the **`orders`** array is empty, returns `"All orders have been fulfilled!"` **IMPORTANT**: Orders are fulfilled in a **FIFO** (first-in, first-out) order. Make sure that the oldest order is processed first and removed from the orders array.
4.  **`listOrders`**: returns the list of **orders** taken or an **empty** array if none exist.
5.  **`dueAmount`**: returns the total amount due for the **`orders`** taken.
6.  **`cheapestItem`**: returns the **name** of the cheapest item on the menu.
7.  **`drinksOnly`**: returns only the item  **names** of type  **"drink"** from the menu.
8.  **`foodOnly`**: returns only the item  **names** of type  **"food"** from the menu.


### Examples

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

### Notes

Round **due amount** up to **two decimal** places.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### `CoffeeShop` Class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `Coffeeshop` class exists and has a constructor |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `CoffeeShop` has three instance properties *`name`*, *`menu`*, and *`orders`* |

### `addOrder` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `addOrder` method exists and accepts one parameter |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `addOrder` method should be able to add items that exist on the menu array to the orders array |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `addOrder` should be not able to add items that do not exist on the menu array to the orders array and should return a string message |

### `fulfillOrder` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `fulfillOrder` method should return `order {item} ready` if order array isn't empty |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `fulfillOrder` method should return 'All orders have been fulfilled!' if order array is empty |

### `listOrders` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | `listOrders` method returns list of taken orders |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `listOrders` method returns empty array if no orders are present |

### `dueAmount` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | `dueAmount` method returns the total amount of the orders |

### `cheapestItem` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | `cheapestItem` method returns the cheapest item |

### `drinksOnly` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | `drinksOnly` method returns items of type 'drink' |

### `foodOnly` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | `foodOnly` method returns items of type 'food' |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Classes-CoffeeShop-App)


[//]: # (autograding info end)