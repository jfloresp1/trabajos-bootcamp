let budget = 0;
let expenses = [];

function calculateBudget() {
  let budgetInput = document.getElementById('budgetInput');
  budget = parseFloat(budgetInput.value);
  document.getElementById('budget').textContent = `Presupuesto: ${budget}`;
  budgetInput.value = '';
}

function addExpense() {
 let expenseNameInput = document.getElementById('expenseNameInput');
  let expenseAmountInput = document.getElementById('expenseAmountInput');
  
 let expenseName = expenseNameInput.value;
  let expenseAmount = parseFloat(expenseAmountInput.value);
  
  if (expenseName && expenseAmount) {
    expenses.push({ name: expenseName, amount: expenseAmount });
    
    let expenseItems = document.getElementById('expenseItems');
    let li = document.createElement('li');
    li.innerHTML = `${expenseName}: ${expenseAmount} <button class="deleteExpenseButton">Eliminar</button>`;
    expenseItems.appendChild(li);
    
    let totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    let balance = budget - totalExpenses;
    document.getElementById('expenses').textContent = `Gastos: ${totalExpenses}`;
    document.getElementById('balance').textContent = `Saldo: ${balance}`;
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    
    let deleteButtons = document.getElementsByClassName('deleteExpenseButton');
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', deleteExpense);
    }
  }
}
function deleteExpense(event) {
  let listItem = event.target.parentElement;
  let expenseText = listItem.textContent;
  let expenseName = expenseText.split(':')[0].trim();
  let expenseAmount = parseFloat(expenseText.split(':')[1]);
    expenses = expenses.filter(expense => expense.name !== expenseName || expense.amount !== expenseAmount);
    listItem.remove();
  
  let totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  let balance = budget - totalExpenses;
  document.getElementById('expenses').textContent = `Gastos: ${totalExpenses}`;
  document.getElementById('balance').textContent = `Saldo: ${balance}`;
}

document.getElementById('calculateButton').addEventListener('click', calculateBudget);
document.getElementById('addExpenseButton').addEventListener('click', addExpense);
