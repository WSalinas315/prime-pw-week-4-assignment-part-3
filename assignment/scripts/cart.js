console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create variable basket as empty array
let basket = [];

// Create function addItem to add item string to 
function addItem(item){
    basket.push(item);
    // console.log("Item", item, "has been added to your cart.");
    return true;
}

// Log empty basket contents to console
console.log(`Contents of basket are: ${basket}`);

// Test addItems function by adding a RTX 4090Ti, Spark Plug Wrench and Husky Puppy to the basket
console.log('Adding RTX 4090Ti (expect true)', addItem('RTX 4090Ti'));
console.log('Adding Spark Plug Wrench (expect true)', addItem('Spark Plug Wrench'));
console.log('Adding Husky Puppy (expect true)', addItem('Husky Puppy'));

// Console log updated basket contents
console.log(`Contents of basket are now: ${basket}`);

// Create function to list items in the basket
function listItems(){
    if(basket.length > 0){
        console.log('Your cart contains:');
        for(let item of basket){
            console.log(item);
        }
        return true;
    } else{
        //console.log('Your cart is empty.');
        return 'Your cart is empty.';
    }
}

// Tests the listItems function and prints out basket contents
listItems();

// Create function to empty the basket
function empty(){
    basket = [];
    //console.log('Your cart has been emptied.');
    return true;
}

// Run the empty function and test listItems for an empty basket
console.log('Emptying cart (expect true)', empty());
console.log(`Listing contents for empty cart (expect 'Your cart is empty')`, listItems());

// STRETCH GOALS
// define a maximum number of items of 5
const maxItems = 5;

// Create isFull function to test if the basket exceed maxItems
function isFull(){

}

