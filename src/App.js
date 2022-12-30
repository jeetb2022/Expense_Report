import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
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
];
function App() {
  

    const latestExpenseHandler = (newExpenseObject)=>{
      const latestExpenseObject = {
        ...newExpenseObject,
      };
      console.log('logging form App()',latestExpenseObject);

    };
  return (
    <div className='backGround'>
      <NewExpense onlatestExpense = {latestExpenseHandler}/>
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
