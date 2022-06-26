// class

// importing modules created
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

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
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// ul element
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// submit event
form.addEventListener('submit', (e: Event) => {
	let docs: HasFormatter
	e.preventDefault();
	if (type.value === 'invoice') {
		docs = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
	}
	else {
		docs = new Payment(toFrom.value, details.value, amount.valueAsNumber);
	}
	list.render(docs, type.value, 'end' )
});
