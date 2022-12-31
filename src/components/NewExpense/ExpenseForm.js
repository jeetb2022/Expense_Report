import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props)=>{
    const [title,setTitle] = useState("");
    const titleChangeHandler = (ele)=>{
        setTitle(ele.target.value);
    };
    const [price,setPrice] = useState("");
    const priceChangeHandler = (ele)=>{
        setPrice(ele.target.value);
    };
    const [date,setDate] = useState("");
    const dateChangeHandler = (ele)=>{
        setDate(ele.target.value);
    };    
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title : title,
            price : price,
            date : new Date(date),
        }

        console.log(expenseData);
        props.onNewExpense(expenseData);
        setTitle("");
        setDate("");
        setPrice("");
    };

    const clickHandler = ()=>{
        props.disappearForm();
    }
    //*************** alternative approach in the comments ***************

//    const [enteredExpense,setEnteredExpense]= useState({
//         enteredTitle : "",
//         enteredPrice : "",
//         enteredDate : "" 
//     });
//     const titleChangeHandler = (ele)=>{
//         // setEnteredExpense({
//         //     ...enteredExpense,
//         //     enteredTitle : ele.target.value,
//         // })
//         setEnteredExpense((prevState)=>{
//             return({...prevState,enteredTitle : ele.target.value})
//         })
//     };
//     const priceChangeHandler = (ele)=>{
//         // setEnteredExpense({
//         //     ...enteredExpense,
//         //     enteredPrice : ele.target.value, 
//         // })
//         setEnteredExpense((prevState)=>{
//             return({...prevState,enteredPrice : ele.target.value})
//         })
//     };
//     const dateChangeHandler = (ele)=>{
//         // setEnteredExpense({
//         //     ...enteredExpense,
//         //     enteredDate : ele.target.value,
//         // })
//         setEnteredExpense((prevState)=>{
//             return({...prevState,enteredDate : ele.target.value})
//         })
//     };
//     console.log(enteredExpense);
return(
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense_control">
                    <label>Price</label>
                    <input type="text" value={price} onChange={priceChangeHandler}/>
                </div>

            </div>
                <div className="new-expense_action">
            <button onClick={clickHandler}>
                Cancel
            </button>
                    <button type="submit">Add Expense</button>
                </div>
        </form>
        
)
};

export default ExpenseForm;
