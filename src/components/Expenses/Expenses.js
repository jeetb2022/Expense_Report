import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';


function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2022');
  const expenseYearSelectionHandler = (expenseYear) => {
    setSelectedYear(expenseYear);
  };
  
  const filteredExpenses = props.expenses.filter(
    (expense) => {
      return ((expense.date.getFullYear().toString() === selectedYear));
    }
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onexpenseYearSelection={expenseYearSelectionHandler} />
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );

}

export default Expenses;