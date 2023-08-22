export{}
interface Mountain{
    Name: string;
    Height: number;
}
let collection: Mountain [] = [
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
}];

function findNameOfTallestMountain(allmountains: Mountain[]): string{
let tallmountain:Mountain = allmountains[0];

allmountains.forEach((m:Mountain) =>{
    if(m.Height > tallmountain.Height){
        tallmountain=m;
    }
});
return tallmountain.Name;
}


interface Product{
    Name: string;
    Price: number; 
}

let Products: Product [] = [
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

function calcAverageProductPrice(allproducts: Product[]): number{
    let result = 0;
    let count = 0;
    allproducts.forEach((p:Product) => {
        result += p.Price;
        count++;
    })
    result = result / count
    return result;
}

interface Inventory{
    product: Product;
    quantity: number;
}
let inventory: Inventory[] = [
    {
        quantity: 10,
        product: {
        Name: "motor",
        Price: 10.00
        }
    },
    {
        quantity: 4,
        product:{
        Name: "sensor",
        Price: 12.50
        }
    },
    {
        quantity: 20,
        product:{
        Name: "LED",
        Price: 1.00
        }
    }
    
]

function calcInventoryValue(allInventory: Inventory[]):number{
    let result = 0;
allInventory.forEach((i:Inventory) =>{
result = result + (i.product.Price * i.quantity)
})


    return result;
}

console.log(calcInventoryValue(inventory));
console.log(calcAverageProductPrice(Products));
console.log(findNameOfTallestMountain(collection));
























