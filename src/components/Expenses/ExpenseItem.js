import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import '../Expenses/ExpenseItem.css';
import {useState} from 'react';

function ExpenseItem (props){
    // let expenseTitle =props.title ; 
    const expensePrice =props.price ; 
    const expenseDate = props.date;
    const [expenseTitle,setExpenseTitle] = useState(props.title);
    const clickHandler = ()=>{
        setExpenseTitle("696969")
        console.log(" I am Clicked!!!");
    };
    // console.log(" I am Clicked outside!!!");

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item_description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item_price" >{expensePrice}</div>
            </div>
            <button onClick={clickHandler}>Press Me</button>
        </Card>
    );
}
export default ExpenseItem;