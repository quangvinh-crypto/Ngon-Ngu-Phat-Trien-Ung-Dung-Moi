let Product = function (id, name, price, quantity, category, isAvailable) {
    this.id = id,
        this.name = name,
        this.price = price,
        this.quantity = quantity,
        this.category = category,
        this.isAvailable = isAvailable
}

let product1 = new Product(1, 'Acer nitro 5', 22000, 20, 'Laptop', true);
let product2 = new Product(2, 'Samsum galaxy ', 30000, 20, 'Phone', false);
let product3 = new Product(3, 'Canon', 40000, 20, 'Camera', true);
let product4 = new Product(4, 'Asus gaming', 11100, 20, 'Laptop', true);
let product5 = new Product(5, 'Iphone', 55000, 20, 'Phone', false);

let listProduct = [];

listProduct.push(product1, product2, product3, product4, product5);
console.log(listProduct);
//new array chứa name và price
let newProduct = listProduct.map(function (e) { return e.name + " " + e.price });
console.log(newProduct);
//filter quantity > 0
let filterProduct = listProduct.filter(function (e) {
    if (e.quantity > 0)
        return e;
});
console.log(filterProduct);
//check price > 30
let checkPrice = listProduct.some(function (e) {
    return e.price > 30;
})
console.log(checkPrice);

//check category = "Access"
let checkCategory = listProduct.every(function (e) {
    return e.category === "Access";
})
console.log(checkCategory);
let checkCategory2 = listProduct.every(function (e) {
    if (e.category === "Laptop") {
        return e.isAvailable === true;
    }
    return true;
});
console.log("checkCategory2" + " " + checkCategory2);

//multi
let multiProduct = listProduct.reduce(function (multi, e) {
    return multi = e.quantity * e.price;
},);
console.log(multiProduct);
//use for ... of
console.log("Use for ... of");
for (const element of listProduct) {
    console.log(element.name + " " + element.category + "  " + element.isAvailable);
}

//use for ... in
console.log("Use for ... in");
for (const index in listProduct) {
    console.log(`${index}: ${listProduct[index]} `);
}

for (const product of listProduct) {
    for (const key in product) {
        console.log(`${key}: ${product[key]}`);
    }
    console.log("...");
}
// lây danh sach ban ra và con hang
let quantityProduct = listProduct.filter(function (e) {
    if (e.isAvailable === true && e.quantity > 0)
        return e;
})
console.log(quantityProduct);