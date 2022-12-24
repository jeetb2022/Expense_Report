import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <div className='backGround'>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
