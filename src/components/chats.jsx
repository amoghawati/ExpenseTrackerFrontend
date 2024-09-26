import React from 'react';
import {  Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Button } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const Charts = ({ transactions }) => {
   
    let expenses = 0; let incomes = 0; let tTransaction = 0;
    transactions.map(x => {
        if (x.transactionType.toLowerCase() == "expense") {
            expenses += x.transactionAmount;
        }
        if (x.transactionType.toLowerCase() == "income") {
            incomes += x.transactionAmount;
        }
        tTransaction += x.transactionAmount;
    })

    transactions.map(x => {

    })
    
    let bclass;
    if (incomes > expenses) {
        bclass = "btn btn-outline-success ms-3";
    } else {
        bclass = "btn btn-outline-danger ms-3";
    }
    const data = {
        labels: ['Expenses', 'Incomes'],
        datasets: [
            {
                label: `out of ${tTransaction} total transaction `,
                data: [expenses, incomes],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <div className="charts d-flex">
                <Doughnut data={data} />
                <div className="chartdetails d-flex flex-column ">
                    <>
                    <div className="td d-flex">
                        <button className='btn btn-danger  ms-3 '>Total Expenses<br/>{expenses}</button>
                        <button className='btn btn-success  ms-3 '>Total Incomes<br/>{incomes}</button>
                    </div>
                    <div className="tt d-flex mt-4">
                        <button className="btn btn-outline-info ms-3">Total Transactions<br/>{tTransaction}</button>
                        <button className={bclass}>Total Amount<br/>{incomes - expenses}</button>
                    </div>
                    </>
                    <div className="linktonav d-flex flex-column mt-5 ">
                        <Link to="/expenses/add-transaction" className='btn btn-warning mb-3 '>+ Add New Transaction</Link>
                        <Link  to="/expenses/expense-list" className='btn btn-outline-info mt-3 '>View Transaction list</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Charts;