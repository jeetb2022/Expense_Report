import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2022');
  const expenseYearSelectionHandler = (expenseYear) => {
    setSelectedYear(expenseYear);
    console.log(expenseYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onexpenseYearSelection={expenseYearSelectionHandler} />
      {
        props.expenses.map(
          (expense) => {
            return (
            <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
            );
          }
        )
      }

    </Card>
  );

}
export default Expenses;