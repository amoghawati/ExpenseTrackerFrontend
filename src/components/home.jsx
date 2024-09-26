import { useSelector } from "react-redux";
import { useFetchTransactionsQuery } from "../store/apis/transactionApi";
import Loading from "./loading";
import Charts from "./chats";

const HOME = () => {
    const { users, transactions } = useSelector((state) => {
        return state;
    });
    const { data, error, isFetching } = useFetchTransactionsQuery(users.data);
    let content;
    if (isFetching) {
        content = <Loading size={300} />
    } else if (error) {
        content = <h1>Error fetching data{error}</h1>
    } else {
        content = <Charts transactions={data} />;
    }
    return (

        <div className="home">
            <h1 className="text-center mt-2 shadow-lg text-warning text-capitalize">Hi <span>{users.data.name}</span></h1>
            <div className="transactionshome">
                {content}

            </div>

        </div>
    );
}

export default HOME;
