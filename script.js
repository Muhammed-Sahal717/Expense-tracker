const expenses = [
    { id: 1, name: 'Groceries', amount: 50, category: 'Food' },
    { id: 2, name: 'Electricity Bill', amount: 75, category: 'Utilities' },
];

const expenseList = document.getElementById('expense-list');

const listItems = expenses.map(expense => {
    return `<li> ${expense.name} - $${expense.amount} </li>`;
});

expenseList.innerHTML = listItems.join(''); /* The join method combines all list items into a single string */

const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount
}, 0);

const totalDisplay = document.getElementById('total-expense');
totalDisplay.textContent = total;