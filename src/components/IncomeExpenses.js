import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState"

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const Income = () => {
        let incomeamount = 0;
        //console.log(transactions[2])
        for (var i = 0; i < transactions.length; i++) {
            //console.log(transactions[i])
            if (transactions[i].amount > 0) {
                incomeamount += transactions[i].amount
            }
        }
        return incomeamount
    }

    const Expense = () => {
        let expenseamount = 0;
        //console.log(transactions[2])
        for (var i = 0; i < transactions.length; i++) {
            //console.log(transactions[i])
            if (transactions[i].amount < 0) {
                expenseamount += transactions[i].amount
            }
        }
        return Math.abs(expenseamount)
    }


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{Income()}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-{Expense()}</p>
            </div>
        </div>
    )
}
export default IncomeExpenses