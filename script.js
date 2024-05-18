// Задание 1
let shoppinglist = [];
function printShoppinglist()
{
    let Purchased = shoppinglist.filter(item => item.purchased);
    let notPurchased = shoppinglist.filter(item => !item.purchased);
    for (let i = 0; i < notPurchased.length; i++) {
        const item = notPurchased[i];
        console.log(`${item.name} (${item.quantity}) - not purchased`);
    }
    for (let i = 0; i < Purchased.length; i++) {
        const item = Purchased[i];
        console.log(`${item.name} (${item.quantity}) - purchased`);
    }
 
}
 
function addPurchase(name, quantity) {
    let existingItem = shoppinglist.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        shoppinglist.push({ name: name, quantity: quantity, purchased: false });
    }
   
}
function purchaseItem(name) {
    let item = shoppinglist.find(item => item.name === name);
    if (item) {
        item.purchased = true;
    } else {
        console.log("Not found, try again");
    }
}
addPurchase("Milk", 2);
addPurchase("Bread", 3);
printShoppinglist();
purchaseItem("Bread");
printShoppinglist();
// Задание 2
let receipt = [];

function addItem(name, quantity, price) {
    receipt.push({ name, quantity, price });
}

function printReceipt(receipt) {
    console.log('Receipt:');
    for (let i = 0; i < receipt.length; i++) {
        let item = receipt[i];
        console.log(`${item.name} - Quantity: ${item.quantity}, Price per unit: $${item.price}`);
    }
}

function calculateTotal(receipt) {
    let total = 0;
    for (let i = 0; i < receipt.length; i++) {
        total += receipt[i].quantity * receipt[i].price;
    }
    return total;
}

function getMostExpensiveItem(receipt) {
    if (receipt.length === 0) return null;
    let mostExpensiveItem = receipt[0];
    for (let i = 1; i < receipt.length; i++) {
        if (receipt[i].quantity * receipt[i].price > mostExpensiveItem.quantity * mostExpensiveItem.price) {
            mostExpensiveItem = receipt[i];
        }
    }
    return mostExpensiveItem;
}

function calculateAveragePrice(receipt) {
    if (receipt.length === 0) return 0;
    let totalCost = 0;
    let totalQuantity = 0;
    for (let i = 0; i < receipt.length; i++) {
        totalCost += receipt[i].quantity * receipt[i].price;
        totalQuantity += receipt[i].quantity;
    }
    return totalCost / totalQuantity;
}
addItem('Apples', 2, 3);
addItem('Bread', 1, 2);
addItem('Milk', 3, 1.5);
addItem('Cheese', 1, 5);

printReceipt(receipt); 
let total = calculateTotal(receipt);
console.log(`Total: $${total}`);  

let mostExpensiveItem = getMostExpensiveItem(receipt);
if (mostExpensiveItem) {
    console.log(`Most expensive item: ${mostExpensiveItem.name} - Total price: $${mostExpensiveItem.price * mostExpensiveItem.quantity}`);
}

let averagePrice = calculateAveragePrice(receipt);
console.log(`Average price per item: $${averagePrice}`); 
// Задание 3
let styles = [
    { name: 'color', value: 'yellow' },
    { name: 'font-size', value: '20px' },
    { name: 'text-align', value: 'center' },
    { name: 'text-decoration', value: 'underline' },
    { name: 'font-weight', value: 'bold' }
];
function writeStyledText(styles, text) {
    let styleString = '';
    for (let i = 0; i < styles.length; i++) {
        styleString += `${styles[i].name}: ${styles[i].value}; `;
    }
    styleString = styleString.trim();
    document.write(`<p style="${styleString}">${text}</p>`);
}
writeStyledText(styles, 'Hello, World!');
// Задание 4
let audits = [
    { name: '101', seats: 15, faculty: 'Engineering' },
    { name: '102', seats: 18, faculty: 'Engineering' },
    { name: '201', seats: 12, faculty: 'Humanities' },
    { name: '202', seats: 20, faculty: 'Humanities' },
    { name: '301', seats: 10, faculty: 'Sciences' },
    { name: '302', seats: 16, faculty: 'Sciences' }
];

function displayAllAuditoriums(auditoriums) {
    console.log('All Auditoriums:');
    auditoriums.forEach(auditorium => {
        console.log(`Name: ${auditorium.name}, Seats: ${auditorium.seats}, Faculty: ${auditorium.faculty}`);
    });
}

function displayAuditoriumsForFaculty(auditoriums, faculty) {
    console.log(`Auditoriums for ${faculty} Faculty:`);
    auditoriums.forEach(auditorium => {
        if (auditorium.faculty === faculty) {
            console.log(`Name: ${auditorium.name}, Seats: ${auditorium.seats}`);
        }
    });
}
function displaySuitableAuditoriumsForGroup(auditoriums, group) {
    console.log(`Suitable Auditoriums for Group ${group.name}:`);
    auditoriums.forEach(auditorium => {
        if (auditorium.seats >= group.students && auditorium.faculty === group.faculty) {
            console.log(`Name: ${auditorium.name}, Seats: ${auditorium.seats}`);
        }
    });
}
function sortAuditoriumsBySeats(auditoriums) {
    return auditoriums.sort((a, b) => a.seats - b.seats);
}

function sortAuditoriumsByName(auditoriums) {
    return auditoriums.sort((a, b) => a.name.localeCompare(b.name));
}

displayAllAuditoriums(auditoriums); 
displayAuditoriumsForFaculty(auditoriums, 'Humanities');
displaySuitableAuditoriumsForGroup(auditoriums, { name: 'Group 1', students: 12, faculty: 'Engineering' });
console.log('Auditoriums sorted by seats:');
displayAllAuditoriums(sortAuditoriumsBySeats(auditoriums));
console.log('Auditoriums sorted by name:');
displayAllAuditoriums(sortAuditoriumsByName(auditoriums));  