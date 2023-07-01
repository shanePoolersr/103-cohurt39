console.log("Script");

var product = "item";
var price = "howMuch";
var qty = "howMany";
var todayDate= new Date();


document.write(`
<p>todayDate: ${new Date}</p>
<p>Name: ${product}</p>
<p>price: ${howMuch}</p>
<p>qty: ${howMany}</p>
`);

let canvas = 30;
let blkFnPen = 3;
let orangePaint = 15;
let gumEraser = 5;
let rulerLarge = 7;
let total =0;

function addCart(product, price,){
    return total += price;
    }

    function calculateTaxes(total){
        return 1.11 * total;
        }

console.log(total);
const totalToPay= calculateTaxes(total);
console.log(`The total is : ${totalToPay}`);


function subtotal(){
	let product = 'Canvas';
	 //setting product variable to Canvas 
	 //note: if you want to add more options you can pass product in as a perameter from an options drop down along with price
	
	let price = 30 ;
	//setting the price to number value 30
	
	let qty = Number(prompt("Enter how many" + product + " you want:")) ;
	//sending a pop-up to enter how many and setting it to a NUMBER
	
	let subtotal = price * qty;
	 //multiply price and what the value of the pop-up is
	
	document.getElementById('receipt').innerHTML = `
	<ul>
	<li>Product: ${product}</li>
	<li>Price: $${price}</li>
	<li>Quantity: ${qty}</li>
	<li>Your subtotal is $${subtotal}</li>
	</ul>
	<button onclick="taxes(${subtotal})">Calculate Tax</button>
	`;
	//the button is adding a onclick atribute with this HTML block we are sending which will send out subtotal value into the taxes function where it can be picked up
	
}
function taxes(subtotal){
	let tax = 1.11;
	let sub = subtotal ;
	//setting the picked up value from the subtotal button HTML block
	
	console.log("This is coming from the subtotal function: " + subtotal);
	console.log("We are setting that subtotal value to a new variable as an example " + sub);
	
	let total = tax * sub;
	document.getElementById('taxTotal').innerHTML = `
	<p>Your Grand total is ${total.toFixed(2)}</p>
	`;
}