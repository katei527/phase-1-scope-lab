// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const LeastFavoriteCustomer = "new"

// function changeLeastFavoriteCustomer() {
//     return LeastFavoriteCustomer = "nice try"
// }

// tried arrow functions to practice
changeLeastFavoriteCustomer = () => LeastFavoriteCustomer = "nice try"; 
