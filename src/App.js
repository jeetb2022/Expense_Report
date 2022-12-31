import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const expenses = [
  {
    id : Math.random().toString(),
    title: "American Pride",
    price: "$24.39",
    date: new Date(2022, 11, 26)
  },
  {
    id : Math.random().toString(),
    title: "Bus Tickets",
    price: "$4.69",
    date: new Date(2022, 11, 21)
  },
  {
    id : Math.random().toString(),
    title: "Movie",
    price: "$5.40",
    date: new Date(2022, 11, 23)
  },
];
function App() {
  const [updatedExpenses, setUpdatedExpenses] = useState(expenses);
  const latestExpenseHandler = (newExpenseObject) => {
    setUpdatedExpenses(
      (prevState) => {
        return ([...prevState, newExpenseObject]);
      }
    );
  };
  return (
    <div className='backGround'>
      <NewExpense onlatestExpense={latestExpenseHandler} />
      <Expenses expenses={updatedExpenses} />
    </div>
  );
}

export default App;
