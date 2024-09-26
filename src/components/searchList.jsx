import { Button, FloatingLabel, Form, Table } from "react-bootstrap";
import SearchTable from "./searchTable";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SearchList = ({ transactions }) => {

    const [searchExpense, setSExpense] = useState("");
  const [searchIncome, setSIncome] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [inctable, setInctable] = useState([]);
  const [exptable, setExptable] = useState([]);

  useEffect(() => {
    let updatedIncomeAmount = 0;
    let updatedExpenseAmount = 0;

    const filteredIncomes = transactions.filter(
      (t) =>
        t.transactionType.toLowerCase() === "income" &&
        (searchIncome === "" ||
         ( t.transactionDesc.toLowerCase().includes(searchIncome.toLowerCase()) || t.transactionAmount.toString().includes(searchIncome.toLowerCase()))
    ));

    const filteredExpenses = transactions.filter(
      (t) =>
        t.transactionType.toLowerCase() === "expense" &&
        (searchExpense === "" ||
          t.transactionDesc.toLowerCase().includes(searchExpense.toLowerCase()))
    );

    filteredIncomes.forEach((t) => (updatedIncomeAmount += t.transactionAmount));
    filteredExpenses.forEach((t) => (updatedExpenseAmount += t.transactionAmount));

    setIncomeAmount(updatedIncomeAmount);
    setExpenseAmount(updatedExpenseAmount);

    setInctable(
      filteredIncomes.map((incdata) => <SearchTable key={incdata.id} data={incdata} />)
    );
    setExptable(
      filteredExpenses.map((expdata) => <SearchTable key={expdata.id} data={expdata} />)
    );
  }, [transactions, searchIncome, searchExpense]);

    

    return (
        <div className="searchlist d-flex">

            <div className="incomes w-50 mx-3">
                <FloatingLabel controlId="floatingInput" label="Search Income Transaction" className="mb-2 mt-2 ">
                    <Form.Control onChange={e =>( setSIncome(e.target.value),setIncomeAmount(0))} type="text" placeholder="ex:travel,salary,food" />
                </FloatingLabel>
                <div className="tdesc d-flex justify-content-evenly mb-3">
                    <button className="btn btn-success disabled" >Total Income:{incomeAmount } </button>
                    <Link to="/expenses/add-transaction" className="btn btn-outline-success">Add new transaction</Link>
                </div>
                <Table striped bordered size="sm" className="text-center" variant="success">
                    <thead>
                        <tr>
                            <th>Transaction description</th>
                            <th>Transaction Ammount</th>
                            <th>Transaction Date</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    {inctable}
                </Table>
            </div>
            <div className="expenses w-50 mx-3">
                <FloatingLabel controlId="floatingInput" label="Search Expense Transaction " className="mb-2 mt-2 ">
                    <Form.Control onChange={(e) => { return (setSExpense(e.target.value), setExpenseAmount(0)) }} type="text" placeholder="ex:travel,salary,food" />
                </FloatingLabel>
                <div className="tdesc d-flex justify-content-evenly mb-3">
                    <button className="btn btn-danger disabled">Total Expense:{expenseAmount} </button>
                    <Link to="/expenses/add-transaction" className="btn btn-outline-danger">Add new transaction</Link>
                </div>
                <Table bordered size="sm" className="rounded-4 text-center" striped variant="danger">
                    <thead>
                        <tr>
                            <th>Transaction description</th>
                            <th>Transaction Ammount</th>
                            <th>Transaction Date</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    {/* <SearchTable data={expenses}/> */}
                    {exptable}
                </Table>
            </div>
        </div>
    );
}

export default SearchList;

// const [searchExpense, setSExpense] = useState("");
    // const [searchIncome, setSIncome] = useState("");
    // let [IncomeAmount,setIncomeAmount]=useState(0);
    // let [ExpenseAmount,setExpenseAmount]=useState(0);
    // let incomeAmount = 0;let expenseAmount = 0;
    // let expenses = transactions.filter(t => { if (t.transactionType.toLowerCase() == "expense") { expenseAmount += t.transactionAmount; return t; } });
    // let incomes = transactions.filter(t => { if (t.transactionType.toLowerCase() == "income") { incomeAmount += t.transactionAmount; return t; } });
    // setExpenseAmount(expenseAmount); 
    // setIncomeAmount(incomeAmount);
    // expenseAmount = 0;
    // incomeAmount = 0;
    // let inctable; 
    // let exptable;

    
     
    // inctable = incomes.filter(t => {
    //     if (searchIncome == "") { incomeAmount += t.transactionAmount; return t; }
    //     else if ((t.transactionDesc.toLowerCase().includes(searchIncome.toLowerCase())) || (t.transactionDesc.toLowerCase().match(searchIncome.toLowerCase()))) {
    //         incomeAmount += t.transactionAmount; return t;
    //     }
    // }).map(incdata => {
    //     return <SearchTable data={incdata} />
    // })
    // setIncomeAmount(incomeAmount); incomeAmount=0;

    
    // exptable = expenses.filter(t => {
    //     if (searchExpense == "") { expenseAmount += t.transactionAmount; return t; }
    //     else if (t.transactionDesc.toLowerCase().includes(searchExpense.toLowerCase())) { expenseAmount += t.transactionAmount; return t; }
    // }).map(expdata => {
    //     return <SearchTable data={expdata} />
    // })
    // setExpenseAmount(expenseAmount); expenseAmount=0;