import { GoSync, GoTrashcan } from 'react-icons/go';
import { useRemoveTransactionMutation } from '../store';
const SearchTable = ({ data }) => {
    console.log("list:",data);
    const [removeTransaction, results] = useRemoveTransactionMutation();

    const handleRemove = (e) => {
        e.preventDefault();
        removeTransaction(data);
    }

    let removeIcon;
    if (results.isLoading) {
        removeIcon = <GoSync className="spinner-border" />
    } else {
        removeIcon = <GoTrashcan className=" " />
    }
    return (
        <>
            <tbody >
                <tr key={data._id}>
                    <td>{data.transactionDesc} </td>
                    <td>{data.transactionAmount} </td>
                    <td>{data.transactionDate} </td>
                    <td><button onClick={handleRemove} loading={results.isLoading} className="btn btn-outline-danger">{removeIcon}</button> </td>
                </tr>
            </tbody>
        </>
    );
}

export default SearchTable;