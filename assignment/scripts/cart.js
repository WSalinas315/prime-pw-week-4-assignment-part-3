console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create variable basket as empty array
let basket = [];

// define a maximum number of items of 5
const maxItems = 5;

// Create function addItem to add item string to basket if basket does not exceed maxItems
function addItem(item){
    if(isFull() == false){
        basket.push(item);
        return true;
    } else{
        return false;
    }
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
        return 'Your cart is empty.';
    }
}

// Tests the listItems function and prints out basket contents
listItems();

// Create function to empty the basket
function empty(){
    basket = [];
    return true;
}

// Run the empty function and test listItems for an empty basket
console.log('Emptying cart (expect true)', empty());
console.log(`Listing contents for empty cart (expect 'Your cart is empty')`, listItems());

// STRETCH GOALS

// Create isFull function to test if the basket exceed maxItems
function isFull(){
    if(basket.length < maxItems){
        return false;
    } else{
        return true;
    }
}

// Testing isFull function for both empty and full baskets
console.log('Running isFull (expect false)', isFull());
console.log('Adding Husky Puppy (expect true)', addItem('Husky Puppy'));
console.log('Adding Beagle Puppy (expect true)', addItem('Beagle Puppy'));
console.log('Adding Samoyed Puppy (expect true)', addItem('Samoyed Puppy'));
console.log('Adding Yellow Lab Puppy (expect true)', addItem('Yellow Lab Puppy'));
console.log('Adding Tamaskan Puppy (expect true)', addItem('Tamaskan Puppy'));
console.log('Adding Poodle Puppy (expect false)', addItem('Poodle Puppy'));
console.log('Running isFull (expect true)', isFull());

// Verifying that basket does not contain the Poodle Puppy
listItems();

// Create removeItem function to remove a specified item from the basket
function removeItem(item){
    if(basket.indexOf(item) != -1){
        basket.splice(basket.indexOf(item),1);
        return item;
    } else{
        return null;
    }
}

// Testing removeItem function for one item not in the basket and one that is
console.log('Removing Corgi Puppy (expect null)', removeItem('Corgi Puppy'));
console.log(`Contents of basket are: ${basket}`);
console.log('Removing Yellow Lab Puppy (expect Yellow Lab Puppy)', removeItem('Yellow Lab Puppy'));
console.log(`Contents of basket are now: ${basket}`);