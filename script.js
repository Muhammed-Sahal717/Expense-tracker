const expenses = [
    { id: 1, name: 'Groceries', amount: 50, category: 'Food' },
    { id: 2, name: 'Electricity Bill', amount: 75, category: 'Utilities' },
];

const expenseList = document.getElementById('expense-list');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const expenseCategory = document.getElementById('expense-category');
const expenseForm = document.getElementById('expense-form');
const categoryCount = document.getElementById('category-count');

expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = expenseName.value;
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    if (name && !isNaN(amount) && category) {
        const newExpense = {
            id: expenses.length + 1,
            name: name,
            amount: amount,
            category: category
        };
        expenses.push(newExpense);
        renderExpenses();
    }

    expenseName.value = '';
    expenseAmount.value = '';
    expenseCategory.value = '';
});

function renderExpenses() {
    const listItems = expenses.map(expense => {
        return `<li>${expense.name} - $${expense.amount}</li>`;
    });
    expenseList.innerHTML = listItems.join(''); /* The join method combines all list items into a single string */

    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

    const totalDisplay = document.getElementById('total-expense');
    totalDisplay.textContent = total;

    // category count using .reduce()
    const categoryMap = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + 1;
        return acc;
    }, {});

}
renderExpenses();



