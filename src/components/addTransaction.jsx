import { Button, FloatingLabel, Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import {useAddTransactionMutation,useFetchTransactionsQuery,} from "../store/apis/transactionApi";
import Loading from "./loading";
import { useRef, useState } from "react";
import ExpensesListItems from "./expensesListItems";
import Swal from "sweetalert2";

// import {  } from "@material-ui/core";
import { GoX } from "react-icons/go";
import AddtransactionPopUp from "./AddTransactionPopUp";
import AddTransactionPopUp from "./AddTransactionPopUp";
// const pause = (duration) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, duration);
//     });
// };

const AddTransaction = () => {
  let tType = useRef();
  let tDescriptions = useRef();
  let tAmount = useRef();
  let tDate = useRef();
  const { users } = useSelector((state) => {
    return state;
  });
  const [addtpopup,setaddtpopup]=useState(false);
  const { data, error, isFetching } = useFetchTransactionsQuery(users.data);
  const [addTransaction, results] = useAddTransactionMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id = users.data.id;
    let transactionType = tType.current.value;
    let transactionDesc = tDescriptions.current.value;
    let transactionAmount = tAmount.current.value;
    let transactionDate = tDate.current.value;
    let tData = {
      id,
      transactionType,
      transactionDesc,
      transactionAmount,
      transactionDate,
    };

    await addTransaction(tData);
    Swal.fire({
      icon: "success",
      title: results.message,
      text: "Transaction added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setaddtpopup(false);
    tType.current.value = "";
    tDescriptions.current.value = "";
    tAmount.current.value = "";
    tDate.current.value = "";
  };
  const handleAddTransaction = () => {
    setaddtpopup(true);
    // Swal.fire({
    //   title: "Add Transaction",
    //   text: "Transaction Type",
    //   input: "select",
    //   inputOptions: {income:"income",expense:"expense"},
    //   inputPlaceholder: "Select Transaction Type",
    //   html:'<label>transaction Descriptions</label>'+
    //   '<input type="text" >'+
    //   '<section><option value="">gewdwj</option><option value="">gewdwj</option><option value="">gewdwj</option><option value="">gewdwj</option><option value="">gewdwj</option></section>',
    // });
  };
  const handleClosePopUp=()=>{
    setaddtpopup(false);
  }
  let content;
  if (isFetching) {
    content = <Loading rows={8} />;
  } else if (error) {
    content = <errorList />;
  } else {
    content = data.map((d) => {
      return <ExpensesListItems key={d._id} data={d} />;
    });
  }
  let addtransactioncss;let addtformd;
  if(addtpopup){
    addtransactioncss={
        opacity:0.4     
      }
      addtformd={
        position:"fixed",
      }
  }
  return (
    <div className="addtransaction" style={{addtransactioncss}}>
      <h1 className="text-center text-warning text-gradient mt-2">Add Transaction</h1>
      <div className="addformbtn  w-25 px-1  ">
          <button className="btn btn-outline-info my-2 px-4 mt-0" onClick={handleAddTransaction}>+ Add Transaction</button>
        </div>
      <section className="addtransactions d-flex flex-column">
       
        <div className="transactionlist text-center w-75 px-2 mx-auto ">
          <Table striped hover size="sm" bordered className="">
            <thead className="bg-warning rounded-2 fs-5">
              <tr>
                <th>Transaction Type</th>
                <th>Transaction description</th>
                <th>Transaction Ammount</th>
                <th>Transaction Date</th>
                <th>Remove</th>
              </tr>
            </thead>

            {content}
          </Table>
        </div>
      </section>
        <div className="addtpopup w-50">
        <AddTransactionPopUp setaddtpopup={setaddtpopup} handleSubmit={handleSubmit} handleClosePopUp={handleClosePopUp}
        addtpopup={addtpopup} tType={tType} tDescriptions={tDescriptions} tAmount={tAmount} tDate={tDate} />
        </div>
    </div>
  );
};

export default AddTransaction;
 {/* <Form onSubmit={handleSubmit}>
                        <FloatingLabel label="Transaction Type ">
                            <Form.Select ref={tType} aria-label="Default select example">
                                <option>Select Transaction Type</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Transaction Description" className="mb-2 mt-2 ">
                            <Form.Control ref={tDescriptions} type="text" placeholder="ex:travel,salary,food" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Transaction Amount">
                            <Form.Control ref={tAmount} type="number" placeholder="Transaction Amount" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Date of Transacton" className="mt-2">
                            <Form.Control ref={tDate} type="date" placeholder="Enter date or current system date will bw taken as default" />
                        </FloatingLabel>

                        <Form.Group className="mb-2 mt-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                       <div className="formbtns d-flex justify-content-evenly">
                       <Button variant="" type="submit" className="btn-outline-success ">Submit</Button>
                        <Button variant="" type="cancel" onClick={handleClosePopUp} className="btn-outline-danger">cancel</Button>
                       </div>
                    </Form> */}