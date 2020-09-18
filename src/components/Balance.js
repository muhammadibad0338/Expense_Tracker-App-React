import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState"


const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = () => {
        let totalamount = 0;
        //console.log(transactions[2])
        for (var i = 0; i < transactions.length; i++) {
            //console.log(transactions[i])
            totalamount+=transactions[i].amount
        }
       // console.log(totalamount)
        return totalamount
    }

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total()} </h1>
        </>
    )
}
export default Balance