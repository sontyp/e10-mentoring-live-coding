const rewire = require("rewire");
const fs = require("fs");
const content = fs
    .readFileSync("./index.js")
    .toString("utf-8")
    .replace(/ /g, "");

const solution = rewire("../index.js");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("`CoffeeShop` Class", () => {
    it("`Coffeeshop` class exists and has a constructor", () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        expect(CoffeeShop).toBeDefined();
        expect(typeof CoffeeShop).toBe("function");
        expect(CoffeeShop.prototype.constructor).toBeDefined();
    });
    it("`CoffeeShop` has three instance properties *`name`*, *`menu`*, and *`orders`*", () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        // get the constructor of the class as a string
        const constructor = CoffeeShop.toString();
        expect(constructor).toContain("name");
        expect(constructor).toContain("menu");
        expect(constructor).toContain("orders");
        expect(CoffeeShop.prototype.constructor.length).toBe(3);
    });
});
describe("`addOrder` method", () => {
    it('`addOrder` method exists and accepts one parameter', () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = new CoffeeShop("CoffeeShop", [], []);
        expect(shop.addOrder).toBeDefined();
        expect(typeof shop.addOrder).toBe("function");
        expect(shop.addOrder.length).toBe(1);
    });
    it("`addOrder` method should be able to add items that exist on the menu array to the orders array", async () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = await new CoffeeShop("CoffeeShop", [{ item: "Coffee", price: 2.0, type: "drink" }, { item: "Mate", price: 2.0, type: "drink" }], []);
        // add Mate to the orders
        await shop.addOrder("Mate");
        expect(shop.orders).toContain("Mate");
    });
    it("`addOrder` should be not able to add items that do not exist on the menu array to the orders array and should return a string message", async () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = await new CoffeeShop("CoffeeShop", [{ item: "Coffee", price: 2.0, type: "drink" }, { item: "Mate", price: 2.0, type: "drink" }], []);
        // add Coke to the orders
        await shop.addOrder("Coke");
        expect(shop.orders).not.toContain("Coke");
        // get the return value of the addOrder method and check if it is a string message 
        const returnValue = await shop.addOrder("Coke").toString().toLowerCase().replace(/ /g, "");
        expect(returnValue).toContain("unavailable");
    });
});
describe("`fulfillOrder` method", () => {
    it("`fulfillOrder` method should return `order {item} ready` if order array isn't empty", async () =>{
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = new CoffeeShop("CoffeeShop", [{ item: "Coffee", price: 2.0, type: "drink" }, { item: "Tea", price: 2.0, type: "drink" }], []);
        await shop.addOrder("Coffee");
        expect(shop.addOrder("Coffee")).toBe("Order added!");
        expect(shop.addOrder("Tea")).toBe("Order added!");
        const returnValue = shop.fulfillOrder().toString().toLowerCase().replace(/ /g, "");
        expect(returnValue).toContain("coffeeisready");
    });
    it("`fulfillOrder` method should return 'All orders have been fulfilled!' if order array is empty", () =>{
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = new CoffeeShop("CoffeeShop", [], []);
        const returnValue = shop.fulfillOrder().toString().toLowerCase().replace(/ /g, "");
        expect(returnValue).toContain("fulfilled");
    });
});
describe("`listOrders` method", () => {
    it("`listOrders` method returns list of taken orders", async () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = await new CoffeeShop("CoffeeShop", [{ item: "Coffee", price: 2.0, type: "drink" }], []);
        await shop.addOrder("Coffee");
        expect(shop.listOrders()).toEqual(["Coffee"]);
    });
    it("`listOrders` method returns empty array if no orders are present", async () => {
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = await new CoffeeShop("CoffeeShop", [{ item: "Coffee", price: 2.0, type: "drink" }], []);
        await shop.addOrder("Coffee");
        await shop.fulfillOrder();
        expect(shop.listOrders()).toEqual([]);
    });
});
describe("`dueAmount` method", () => {
    it("`dueAmount` method returns the total amount of the orders", () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = new CoffeeShop("CoffeeShop", [{ item: "Coffee", price: 2.0, type: "drink" }, { item: "Tea", price: 2.0, type: "drink" }], []);
        shop.addOrder("Coffee");
        shop.addOrder("Tea");
        expect(shop.dueAmount()).toBe(4);
    });
});
describe("`cheapestItem` method", () => {
    it("`cheapestItem` method returns the cheapest item", () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = new CoffeeShop("CoffeeShop", [{ item: "Tea", price: 2.0, type: "drink" }, { item: "Cappuccino", price: 3.5, type: "drink" }, { item: "Latte", price: 3.0, type: "drink" }], []);
        expect(shop.cheapestItem()).toBe("Tea");
    });
});
describe("`drinksOnly` method", () => {
    it("`drinksOnly` method returns items of type 'drink'", () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = new CoffeeShop("CoffeeShop", [{ item: "Tea", price: 2.0, type: "drink" }, { item: "Cappuccino", price: 3.5, type: "drink" }, { item: "Latte", price: 3.0, type: "drink" },{ item: "ice", price: 1.0, type: "food" }], []);
        expect(shop.drinksOnly()).toEqual(["Tea", "Cappuccino", "Latte"]);
    });
});
describe("`foodOnly` method", () => {
    it("`foodOnly` method returns items of type 'food'", () => {
        const solution = rewire("../index.js");
        const CoffeeShop = solution.__get__("CoffeeShop");
        const shop = new CoffeeShop("CoffeeShop", [{ item: "Coffee", price: 2.0, type: "drink" }, { item: "Burger", price: 3.5, type: "food" }, { item: "Pizza", price: 3.0, type: "food" }], []);
        expect(shop.foodOnly()).toEqual(["Burger", "Pizza"]);
    });
});
