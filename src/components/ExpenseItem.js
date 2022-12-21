import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem (props){
    const expenseTitle =props.title ; 
    const expensePrice =props.price ; 
    const expenseDate = props.date;

    return (
        <div className="expense-item">
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item_description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item_price" >{expensePrice}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;