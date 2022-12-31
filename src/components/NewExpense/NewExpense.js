import './NewExpense.css';
import ExpenseFormButton from './ExpenseFormButton';


const NewExpense = (props)=>{

return(
    <div className="new-expense">
        <ExpenseFormButton onlatestExpense = {props.onlatestExpense}/>
    </div>
)
};

export default NewExpense;