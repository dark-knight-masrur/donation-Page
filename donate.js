// //to get the money from input feid
// const buttons = document.querySelector('.donate-button')

// //loop through to all buttons
// for (const button of buttons) {

//     button.addEventListener('click', function () {
//         const donateAmmount = inputValueByClassName('.donate-money')


//         console.log(donateAmmount);

//         const currentBalance = textValueByClassName('#current-balance');
//         console.log(currentBalance);

//         // making donate button
//         const donate = currentBalance - donateAmmount
//         console.log(donate);



//         // //update the balance;

//         document.querySelector('.donate-ammount').innerText = donateAmmount;
//         document.getElementById('current-balance').innerText = donate;

//     })
// }

// //get the current balance


// Get all donation buttons
// const buttons = document.getElementsByClassName('donate-button');

// // Loop through all buttons
// for (const button of buttons) {
//     button.addEventListener('click', function () {

//         //get all cart by using closet
//         const card = this.closest('.hero-content')

//         //temporary add id
//         const donateInput = card.querySelector('.donate-money')
//         const ammountDisplay = card.querySelector('.donate-ammount')
//         donateInput.id = 'current-donate-input'
//         ammountDisplay.id = 'current-balance'

//         // Get values using your existing functions exactly as you wrote them
//         const donateAmmount = inputValueByClassName('#current-donate-input');
//         const currentBalance = textValueByClassName('#current-balance');

//         // Your exact calculation
//         const newBalance = currentBalance - donateAmmount;

//         // Your exact validation
//         if (donateInput > 0 && donateInput <= currentBalance) {
//             // 5. Update using YOUR functions
//             document.getElementById('current-donate-amount').innerText = 
//                 textValueByClassName('#current-donate-amount') + donateInput;
//             document.getElementById('current-balance').innerText = newBalance;
//         }
//     });
// }

// Get all donation buttons
const buttons = document.getElementsByClassName('donate-button');

// Loop through all buttons
for (const button of buttons) {
    button.addEventListener('click', function () {
        // 1. Find which card this button is in
        const card = this.closest('.hero-content');

        // 2. Temporarily add IDs to this card's elements
        const donateInput = card.querySelector('.donate-money');
        const amountDisplay = card.querySelector('.donate-ammount');
        donateInput.id = 'current-donate-input';
        amountDisplay.id = 'current-donate-amount';

        // 3. Use YOUR utility functions
        const donateAmount = inputValueByClassName('#current-donate-input');
        const currentBalance = textValueByClassName('#current-balance');

        // 4. Calculate and validate
        const newBalance = currentBalance - donateAmount;

        if (donateAmount > 0 && donateAmount <= currentBalance) {
            // 5. Update using YOUR functions
            document.getElementById('current-donate-amount').innerText =
                textValueByClassName('#current-donate-amount') + donateAmount;
            document.getElementById('current-balance').innerText = newBalance;

            // 6. Clear input
            document.getElementById('current-donate-input').value = '';
        } else {
            alert('Insufficient Balance or Wrong Amount');
        }

        // 7. Remove temporary IDs
        donateInput.removeAttribute('id');
        amountDisplay.removeAttribute('id');
    });
}