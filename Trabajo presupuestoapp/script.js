// Variables globales
let budget = 0;
let expenses = [];

// Función para calcular el presupuesto
function calculateBudget() {
  const budgetInput = document.getElementById('budgetInput');
  budget = parseFloat(budgetInput.value);
  document.getElementById('budget').textContent = `Presupuesto: ${budget}`;
  budgetInput.value = '';
}

// Función para añadir un gasto
function addExpense() {
  const expenseNameInput = document.getElementById('expenseNameInput');
  const expenseAmountInput = document.getElementById('expenseAmountInput');
  
  const expenseName = expenseNameInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);
  
  if (expenseName && expenseAmount) {
    expenses.push({ name: expenseName, amount: expenseAmount });
    
    // Mostrar el gasto en la lista
    const expenseItems = document.getElementById('expenseItems');
    const li = document.createElement('li');
    li.innerHTML = `${expenseName}: ${expenseAmount} <button class="deleteExpenseButton">Eliminar</button>`;
    expenseItems.appendChild(li);
    
    // Actualizar los totales y el saldo
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const balance = budget - totalExpenses;
    document.getElementById('expenses').textContent = `Gastos: ${totalExpenses}`;
    document.getElementById('balance').textContent = `Saldo: ${balance}`;
    
    // Limpiar los campos de entrada
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    
    // Agregar el listener para el botón de eliminación del gasto
    const deleteButtons = document.getElementsByClassName('deleteExpenseButton');
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', deleteExpense);
    }
  }
}

// Función para eliminar un gasto
function deleteExpense(event) {
  const listItem = event.target.parentElement;
  const expenseText = listItem.textContent;
  const expenseName = expenseText.split(':')[0].trim();
  const expenseAmount = parseFloat(expenseText.split(':')[1]);
  
  // Eliminar el gasto del arreglo
  expenses = expenses.filter(expense => expense.name !== expenseName || expense.amount !== expenseAmount);
  
  // Eliminar el gasto de la lista
  listItem.remove();
  
  // Actualizar los totales y el saldo
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const balance = budget - totalExpenses;
  document.getElementById('expenses').textContent = `Gastos: ${totalExpenses}`;
  document.getElementById('balance').textContent = `Saldo: ${balance}`;
}

// Event listeners
document.getElementById('calculateButton').addEventListener('click', calculateBudget);
document.getElementById('addExpenseButton').addEventListener('click', addExpense);
