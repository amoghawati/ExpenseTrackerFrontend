import { CircleLoader } from "react-spinners";
const Loading = ({ rows }) => {
    return (
        <>
            <tr className="" >
                <td colSpan={5}>
                <div className="loading" >
                <CircleLoader color="#36d7b7"  size={250}  />
                </div>
                </td>
            </tr>
        </>
    );
}

export default Loading;