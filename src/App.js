import ExpenseItem from './components/ExpenseItem';
const expenses = [
  {title : "Old Monk",
  price : "$24.39",
  date : new Date(2022,11,26)
   },
  {title : "Bus Tickets",
  price : "$4.69",
  date :new Date(2022,11,21)
   },
  {title : "Movie",
  price : "$5.40",
  date : new Date(2022,11,23)
   },
]
function App() {
  return (
    <div>
      <h2>December Expenses </h2>
      <ExpenseItem title ={expenses[0].title} date={expenses[0].date} price= {expenses[0].price} ></ExpenseItem>
      <ExpenseItem title ={expenses[1].title} date={expenses[1].date} price= {expenses[1].price} ></ExpenseItem>
      <ExpenseItem title ={expenses[2].title} date={expenses[2].date} price= {expenses[2].price} ></ExpenseItem>
    </div>
    
   

    
  );
}

export default App;
