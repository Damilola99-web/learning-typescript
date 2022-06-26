// class
// importing modules created
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
// let docOne:HasFormatter = new Invoice("Dammy", "happy happy biscuit", 5)
// let docTwo:HasFormatter = new Payment("Dammy", "dance comedy", 50)
// let docs : HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs);
// // an invoice
// const invOne = new Invoice('mario', 'work on website', 400)
// const invTwo = new Invoice('dammy', 'workspace setup', 900)
// //! we are setting a type here so that only object with class of invoice can be added
// let invoices : Invoice[] = []
// //* showing that only object with invoice class can be added to the array
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv =>{
//     console.log(inv.format())
// })
// form element
const form = document.querySelector('.new-item-form');
// ul element
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// submit event
form.addEventListener('submit', (e) => {
	let values;
	values = [ toFrom.value, details.value, amount.valueAsNumber ];
	let docs;
	e.preventDefault();
	if (type.value === 'invoice') {
		docs = new Invoice(...values);
	}
	else {
		docs = new Payment(...values);
	}
	list.render(docs, type.value, 'end');
});
