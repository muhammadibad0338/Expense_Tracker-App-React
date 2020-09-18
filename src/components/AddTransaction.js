import React, { useState,useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const AddTransaction = () => {
    const [text, settext] = useState('');
    const [amount, setamount] = useState(0)

    const { addTransaction }=useContext(GlobalContext)
    const onSubmit = e=>{
        e.preventDefault()
        const newTransaction={
            id: Math.floor(Math.random()*100),
            text,
            amount:Number(amount)
        }
        addTransaction(newTransaction)
        settext('')
        setamount(0)
    }

    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} required onChange={(e) => { settext(e.target.value) }} placeholder="Enter Text ..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Text</label><br />
                    <input type="number" value={amount} required onChange={(e) => { setamount(e.target.value) }} placeholder="Enter Amount ..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )

}
export default AddTransaction