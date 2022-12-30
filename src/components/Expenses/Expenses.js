import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expenses.css';
function Expenses (props){
    return (
        <Card className="expenses">
          <ExpenseItem title ={props.expenses[0].title} date={props.expenses[0].date} price= {props.expenses[0].price} ></ExpenseItem>
          <ExpenseItem title ={props.expenses[1].title} date={props.expenses[1].date} price= {props.expenses[1].price} ></ExpenseItem>
          <ExpenseItem title ={props.expenses[2].title} date={props.expenses[2].date} price= {props.expenses[2].price} ></ExpenseItem>
        </Card>
    );
        
  }
  export default Expenses;