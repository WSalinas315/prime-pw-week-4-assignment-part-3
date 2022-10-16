console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create variable basket as empty array
let basket = [];

// Create function addItem to add item string to 
function addItem(item){
    basket.push(item);
    // Log item and updated basket to the console
    console.log("Item", item, "has been added to your cart. Cart now contains:", basket);
    return true;
}

//Test addItems function by adding a RTX 4090Ti, Spark Plug Wrench and Husky Puppy to the basket
addItem('RTX 4090Ti');
addItem('Spark Plug Wrench');
addItem('Husky puppy');

// Create function to list items in the basket
function listItems(){
    console.log('Your cart contains:');
    for(let item of basket){
        console.log(item);
    }
}

// Tests the listItems function and prints out basket contents
listItems();

// 
