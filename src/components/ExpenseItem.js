import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem (props){
    const expenseTitle =props.title ; 
    const expensePrice =props.price ; 
    const expenseDate = props.date;

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item_description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item_price" >{expensePrice}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;