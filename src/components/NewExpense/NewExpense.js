import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{
    const newExpenseHandler = (newExpense)=>{
        const newExpenseObject = {
            ...newExpense,
            id:Math.random().toString(),
        }
        console.log('logging from NewExpense()',newExpenseObject);
        props.onlatestExpense(newExpenseObject);
    };
return(
    <div className="new-expense">
        <ExpenseForm onNewExpense = {newExpenseHandler}/>
    </div>
)
};

export default NewExpense;