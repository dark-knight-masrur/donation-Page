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
const buttons = document.getElementsByClassName('donate-button');

// Loop through all buttons
for (const button of buttons) {
    button.addEventListener('click', function () {
        // Get values using your existing functions exactly as you wrote them
        const donateAmmount = inputValueByClassName('.donate-money');
        const currentBalance = textValueByClassName('#current-balance');

        // Your exact calculation
        const donate = currentBalance - donateAmmount;

        // Your exact validation
        if (donateAmmount > 0 && donateAmmount <= currentBalance) {
            // Your exact display updates
            document.querySelector('.donate-ammount').innerText = donateAmmount;
            document.getElementById('current-balance').innerText = donate;

            clearInputFields('.donate-money');
        } else {
            // Your exact alert message
            alert('insufficient Balance or Wrong ammount');
        }
    });
}

