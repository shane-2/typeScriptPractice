"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collection = [
    {
        Name: "Kilimanjaro",
        Height: 19341
    },
    {
        Name: "Everest",
        Height: 29029
    },
    {
        Name: "Denali",
        Height: 20310
    }
];
function findNameOfTallestMountain(allmountains) {
    var tallmountain = allmountains[0];
    allmountains.forEach(function (m) {
        if (m.Height > tallmountain.Height) {
            tallmountain = m;
        }
    });
    return tallmountain.Name;
}
var Products = [
    {
        Name: "Burgers",
        Price: 10
    },
    {
        Name: "Tacos",
        Price: 29
    },
    {
        Name: "Pizza",
        Price: 20
    },
    {
        Name: "motor",
        Price: 10.00
    },
    {
        Name: "sensor",
        Price: 12.50
    },
    {
        Name: "LED",
        Price: 1.00
    }
];
function calcAverageProductPrice(allproducts) {
    var result = 0;
    var count = 0;
    allproducts.forEach(function (p) {
        result += p.Price;
        count++;
    });
    result = result / count;
    return result;
}
var inventory = [
    {
        quantity: 10,
        product: {
            Name: "motor",
            Price: 10.00
        }
    },
    {
        quantity: 4,
        product: {
            Name: "sensor",
            Price: 12.50
        }
    },
    {
        quantity: 20,
        product: {
            Name: "LED",
            Price: 1.00
        }
    }
];
function calcInventoryValue(allInventory) {
    var result = 0;
    allInventory.forEach(function (i) {
        result = result + (i.product.Price * i.quantity);
    });
    return result;
}
console.log(calcInventoryValue(inventory));
console.log(calcAverageProductPrice(Products));
console.log(findNameOfTallestMountain(collection));
