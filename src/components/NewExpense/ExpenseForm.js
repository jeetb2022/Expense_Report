import './ExpenseForm.css';

const ExpenseForm = ()=>{
return(
        <form>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" />
                </div>
                <div className="new-expense_control">
                    <label>Price</label>
                    <input type="text" />
                </div>

            </div>
                <div className="new-expense_action">
                    <button type="submit">Add Expense</button>

                </div>
        </form>
)
};

export default ExpenseForm;