const menuTypes = {
    food: 'food',
    drink: 'drink'
};

class CoffeShop {
    #name; // defined as a private property, because it shouldn't be accessed directly

    constructor(name, menu, orders=[]) {
        this.#name = name;
        this.menu = menu;

        // since the orders argument has default value, it can omitted on instantiation of the class
        this.orders = orders;
    }

    shopName() {
        return `Shop's name: ${this.#name}`;
    }

    addOrder(menuItemName) {
        const menuItem = this.menu.find(item => {
            return item.item.toLowerCase() === menuItemName.toLowerCase();
        });

        // (!menuItem) means (menuItem === undefined)
        if (!menuItem) return 'This item is currently unavailable!'; // early return

        // Add the name of the menuItem to the orders-array
        this.orders.push(menuItem.item);
        return 'Order added!';
    }

    fulfillOrder() {
        // remove and store the first item in the array (first one is the oldest one as well)
        const oldestItem = this.orders.shift();

        // return some result depending on whether an item has been found or not
        return (!oldestItem) ? 'All orders have been fulfilled!' : `The ${oldestItem} is ready!`;
    }

    listOrders() {
        return this.orders;
    }


    dueAmount() {
        return this.orders.reduce((acc, curr) => {
            // find the menu-item by the name of the order
            const menuItem = this.menu.find(item => item.item === curr);

            // add the price of the found item to yet accumalated price
            return acc + menuItem.price;
        }, 0.0);
    }

    cheapestItem() {
        let cheapestItem = this.menu[0];

        for (let i = 1; i < this.menu.length; i++) {
            if (this.menu[i].price < cheapestItem.price) cheapestItem = this.menu[i];
        }

        // this.menu.forEach(item => {
        //     if (item.price < cheapestItem.price) cheapestItem = item;
        // });

        return cheapestItem;
    }


    drinksOnly() {
        // const drinks = [];
        // this.menu.forEach(menuItem => {
        //     if (menuItem.type === 'drink') drinks.push(menuItem.item);
        // });
        // return drinks;


        return this.menu.reduce((acc, curr) => {
            return (curr.type === menuTypes.drink) ? [...acc, curr.item] : acc;
        }, []);
    }

    foodOnly() {
        // const foods = [];
        // this.menu.forEach(menuItem => {
        //     if (menuItem.type === 'food') foods.push(menuItem.item);
        // });
        // return foods;

        return this.menu.reduce((acc, curr) => {
            return (curr.type === menuTypes.food) ? [...acc, curr.item] : acc;
        }, []);
    }
}

const menu = [
    {
        item: 'Black Coffee',
        type: menuTypes.drink,
        price: 4.30
    },
    {
        item: 'Carrot cake',
        type: menuTypes.food,
        price: 2.20
    },
    {
        item: 'Cappucino',
        type: menuTypes.drink,
        price: 5.60
    },
    {
        item: 'Brownie',
        type: menuTypes.food,
        price: 3.15
    }
];
const coffeeshop = new CoffeShop("Patty's Cafe", menu);
console.log(coffeeshop.shopName());

console.log(coffeeshop.addOrder('black coffee'));
console.log('orders', coffeeshop.listOrders());
console.log(coffeeshop.addOrder('frappucino'));
console.log('orders', coffeeshop.listOrders());


console.log(coffeeshop.fulfillOrder());
console.log('orders', coffeeshop.listOrders());
console.log(coffeeshop.fulfillOrder());

console.log('dueAmount', coffeeshop.dueAmount());
coffeeshop.addOrder('black coffee');
coffeeshop.addOrder('carrot cake');
console.log('dueAmount', coffeeshop.dueAmount());

console.log('cheapestItem', coffeeshop.cheapestItem());
console.log(coffeeshop.menu);


console.log('drinksOnly', coffeeshop.drinksOnly());
console.log('foodOnly', coffeeshop.foodOnly());



/* class CoffeeShop {
  constructor (name, menu, orders) {
    this.name = name
    this.menu = menu
    this.orders = orders
  }
  shopName = () => this.name
  addOrder = (item) => {
    if (this.menu.filter(m => m.item == item).length) {
      this.orders.push(item)
      return "Order added!" 
    }
    return "This item is currently unavailable!"
  }
  fulfillOrder = () => this.orders.length ? `The ${this.orders.shift()} is ready!` : "All orders have been fulfilled!"
  listOrders = () => this.orders
  dueAmount = () => +this.orders.reduce((t, x) => t + this.menu.filter(m => m.item == x)[0].price, 0.0).toFixed(2)
  cheapestItem = () => this.menu.reduce(([n, p], x) => x.price < p ? [x.item, x.price] : [n, p], ["", 100.0])[0]
  drinksOnly = () => this.menu.filter(m => m.type == "drink").map(n => n.item)
  foodOnly = () => this.menu.filter(m => m.type == "food").map(n => n.item)
} */