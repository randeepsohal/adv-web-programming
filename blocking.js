/**
 * Created by rande on 9/8/2016.
 */
//link to the node filessytem library to read the text files
var fs = require('fs');

//open and read food list
var food = fs.readFileSync('food.txt','utf8');

//print food heading
console.log('FOOD');

//print food list
console.log(food);

//open and read drinks list
var drinks = fs.readFileSync('drinks.txt','utf8');

//print drinks heading
console.log('\nDRINKS');

//print drinks list
console.log(drinks);