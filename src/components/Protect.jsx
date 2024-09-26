import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protect = ({ child }) => {
    const { data } = useSelector((state) => {
        return state.users;
      });

    // console.log(Object.keys(data).length);
    return (
    <>
        { 
            (Object.keys(data).length) ? (child) : (<Navigate to="/login" replace/>)
        }
    </>
    );
}


export default (Protect);