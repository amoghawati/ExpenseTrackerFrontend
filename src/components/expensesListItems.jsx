import { Button } from "react-bootstrap";
import { GoSync, GoTrashcan } from 'react-icons/go';
import {  } from "react-bootstrap";
import { useRemoveTransactionMutation } from "../store";

const ExpensesListItems = ({ data, key }) => {

    const [removeTransaction,results]=useRemoveTransactionMutation();

    const handleRemove=(e)=>{
        e.preventDefault();
        removeTransaction(data);
    }

    let removeIcon;
    if(results.isLoading){
        removeIcon=<GoSync className="spinner-border "/>
    }else{
        removeIcon=<GoTrashcan className="bg "/>
    }
    let bdClass="";
    // bg-opacity-75
    if(data.transactionType=="income"){
        bdClass="bg-info rounded-2 bg-opacity-75 bg-gradient  opacity-75 text-white align-items-center !important";
    }else if(data.transactionType=="expense"){
        bdClass="bg-secondary rounded-2 bg-opacity-75 bg-gradient opacity-75  text-white !important";
    }
    return (
        <>

            <tbody key={key} className="" >
                <tr key={key}  className={bdClass}>
                    <td className="fw-bold text-white  align-middle ">{data.transactionType} </td>
                    <td className="fw-bold text-white align-middle">{data.transactionDesc} </td>
                    <td className="fw-bold text-white align-middle">{data.transactionAmount} </td>
                    <td className="fw-bold text-white align-middle">{data.transactionDate} </td>
                    <td className="align-middle"><button onClick={handleRemove} loading={results.isLoading} className="btn btn-outline-danger opacity-100 ">{removeIcon}</button> </td>
                    
                </tr>
            </tbody>

        </>
    );
}

export default ExpensesListItems;