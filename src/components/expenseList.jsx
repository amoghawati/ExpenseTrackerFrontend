import { useSelector } from "react-redux";
import { useFetchTransactionsQuery } from "../store";
import { CircleLoader } from "react-spinners";
import Loading from "./loading";
import SearchList from "./searchList";

const ExpenseList = () => {
    const {users}=useSelector((state)=>{ return state; })
    const { data, error, isFetching } = useFetchTransactionsQuery(users.data);
   
    let content;
   if (isFetching) {
    content= <CircleLoader color="#36d7b7"  size={250}  />
   }else if(error){
    content=<h1>Error fetching data {error}</h1>
   }else{
    content=<SearchList transactions={data}/>;
   }
    return (
        <div className="expenselist">
            <h3 className="text-center mt-2 shadow-lg"><span>Search Expenses</span> </h3>
            {content}
        </div>
      );
}
 
export default ExpenseList;