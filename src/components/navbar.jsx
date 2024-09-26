import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { BsPersonCircle, BsPersonVcard } from "react-icons/bs";
import { BsPersonCircle, BsPersonVcard } from "react-icons/bs";
import { useThunk } from "../hooks/use-thunk";
import { logout } from "../store";
import Swal from "sweetalert2";
const Navbar = () => {
    let navigate=useNavigate();
    const { data,message } = useSelector((state) => {
        return state.users;
    });
    const [doLogout]=useThunk(logout);
    const body={
        height:"220vh",
        width:"10vw",
    }
    const lilt={
        width:"5vw ",
    }
    const handleLogout=async(e)=>{
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await Swal.fire({
                title:'Logged out!',
                text:'Logged out successfully',
                icon: 'success',
                showConfirmButton:false,
                timer:1500,
              })
              await doLogout();
              navigate("/login");
            }
          })

        
    }
    return (
        <div style={{body}} className="navbar1 bg-secondary bg-gradient text-warning">
            <div className="nav1  ">
                <Link to="/expenses/home" className="logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAAB1CAMAAAB3eo3qAAABa1BMVEX/4WdHHQT////nrCz/42gAzXL/5WkAkGz/52rx02L/1V+hjkD/6WpaTyNCNRf+3mUajmTEtFVyOBprNBc4BQBZKA5gGwz/0lN9SCEAYWqfdTX/4F7/7WyUZRlqLRTrzV7+99ZlJBDJo0urgTvMrU+VZy94QB29mEWDTyXgwVm1j0H/3oEzOTP/z0n/8sRIDwD/5Xz+65uLWykAbzvZt1QxZjQ+DQBXAAD/vi87PR7//PFHfD8Av2oAoVkArmAAj04AamqOw7EwTjb602+YmZqfbhr+8LT/3E/+6I3Rz4HS5eDt8/BsiUAAYjA1f1xpl4KGpniVqE+7vFjg1WKAnk1VeT0Af0IAXDQAnmwAemsAV2oAXVcvdD0ArWzaqzuOcDIzQjAxVi0zQyFupGCZwp+WuXi4xmkqAAA6LRsYW0EAPCoAHBHzwUxnUkh+dG13gnlRUlKVon/Ir3YAbU9VNShPm1zBiym/t0JyZCuTO4I6AAAKQklEQVR4nO2ajV/bxhnHhXO5nKhSUUEvRngSkixLVkpIZAFOANOG5WUdpONlkKRhadZtbTKadaVd8ufvee5sI7uAxRaZxNUvwZblMx99+T3Pc8+drCiFChUqVKhQoUKFChUqVKhQoULvv2Zu3Zi56GsYlmZLNy/6EoajmVul0uxvw9aZO6VS6eFvgXXmPpCWZi/6Moahm2hqqXRr9G2VppZKdx5c9JXkrpultu6Puq0PZjuod0Z8wpl5WOrqxkVfTN66qdwSnOTmiLuqyA4CUEc9U1Ft1AGjHo6C59lQ74xCgc6CCmNGoUBnQcWOagRszYA6c2M05t0MqLKj+vCL9MwfvvzyjzCvUkoIoeSkETdkO9W30CMdDec634HIxmbj0Vd/2tre3tne3d6hv6LtdlS9zhNdVXUdHlTlA4ElO39eXWmt7TU2FxYW9jeXd3cYo71Dum1yz0KPuWEsVLb7xr+vIjsLK5eFVlqrq2uN/f3lrR5rZS7LEE6jaoFjlFGG/cG4unA5pdW91lpjcwMCmbUHzNyfnRWr99nZ2XQR1gIe26r6AQUw3d5Mo66twUNrbfPZxnYKQIRw32SDqAqVdUmWJlGh5E/7s8dVSwzqVrDU6SGWNbrdSKPurcnn1tr+bjcFZ05D1eVl6qqOlw1Fiii6TlVb1cVniQKHChUljBDVtvFYoTAARuBHaWfAcFC39tKojVb7YKWxvNO5hgGotO77dchuLw6obZpBaISmCp9lttk+ZInvRWEtNOtUIarnl2vlOCEwwAtrsacyZSiiG2snorYajWcqHYCqMBA4GfOIsMQyEq1es0LPNJwYbQx5HMR4qLkWnp50QpVQ33FiL/ISGABvBmE3OHJHXV5Nka40Vo6Tdq/jq0R92I/qhNUkSao2UPKarZiOR2i9ZtQrlcSwqpTBALWiho5LtaoFh5XE4olm1yxXAzGFdgcMxVZCuz72oK7g6cYGoWehTjqc86WAEBZyzzacOhOoEMs+YCM7RLHJPYKoNhQgi7sV8L3eRoO3ANhzzKGUJqJurqRQVzuJ2xLFqrEsWE9DLUeoOuaiY/iOrykSVdE8bhLVd1yNVjCl26iawV1NrVmmzkSt8p2gAgMcXx8CKUyr6OPK4ytXDrpzjTjYk94KX09B5T7BSJRXbVnI2EGNeAyZaHkQ4B4kaxoVPueErq2JVI3qSd2zYnUYqGwbUFtPnk5PT0/gXLO30lOeVjZ3IRwHTTbwawLLiiEMO6iBRMUA50vlNCojxK1xpxxoULYsi3MYU1aHEcAM5pqVJ9Oop+Dr3tdPr0jEbs5uUDIQFa/acBJ2kqsgJe2qQhitxhaPGLjqJVVQMpQSrMFcc/BUoE4/ATO/np5+nA7kyy3wdSCq5vKyx2NKjnPVx1wNKkxMRyyNiuOJCWGtxzgAi3F+pHq7DEDEVZ6tXn7cRv0cPATUz8HQxvEM1NrcOn1epbKx02o8sNFWgQr1tVOB26VV60NVNJiEbQIVWMsNkkD3dq2jGR3W4oB60EVt7ePzAdTfVFlu7W9LVFy696La0NepNh6GKougkiJqUqFJDedV16klVMM1YU+uCp8jCzLYdcoJ05iWR2cIoOPj423Sub88B91+sbDwmdQ3Cy9u4/OLhRd/XUA921s7ODh4PPHt374A/R30j+NQA772Ik6FpAsorRuiW5qMI68suiVoogwvCII6dksC1cLJBs5EpgGzLWQzr4kBObAi6DHqve8WFxfH5ufnx9pqH+GZeanFu1d69Hiny6oFVk3IsbEXgonGdEx0FUqOE+NynaomVFhuoMEClU0iaohl2fEgz6nqYwm2qu++WxqXunY4NzcHP/emxgZq/vujNOrEzvFv0yptEQY/EDKViibLkqpX5MpG02A5WwGQ7ggGDwqcZPgajmG9IwbkQnp4eEmqeW/q08lPB7P2oH5ydmMjcpWl+ryT1qOEHuf8KTt3/6eko5eO9bupSWMg6tg8xPCE+J8RNY/MO5+kpZfOjTo2//LVy1evXv3zKBvqZHLRqPqvSLOijn0jWV9mQi2XL9xVvS96z+Nq9lyFri/H1iebhKnHlIfnQb17DtSLF+kN3/p1e2RRlbSp69dR6yOM2snUQ8CEf4cjiqqn4hc4D9cxW8+LepRGJbj6kjq74kI/nz/fsXpSVaJmzdUfXr/+lwQ9SqMS1evIPHN2Ia5XHWZNJulUxQBeP8yI+sPvQV8J1Jc9rqrOEnbquKHinrHoJNRc8i4MVZal9Uy5ugigP77+97cTL4/6UEkdVLYCeDxrZwhQ+QWiXjoUsIdZXAXUz378ae7B9qM+VIVSppedqtZ77znd3Is7VX2oue/4kv6ucB2ieDyLq68xgH+CRZ+9fHTUV4GJCqiYp5pGKJQnQmSZkjS4vaCxNirRRHGicltfFDX4U2l5bLfo/agQxXoWV39G1uBSE2AnTkMlgWfbkRcQNfDD0Hdxc40oiRmGZiBRiR54LpDaXhx6CcNiFdl2EAV5FOeeeRUq8HjGAAbYn338VLP5pn9ebaMS4vOYLy2Fim36fmxx3BAmEXdC3/d1gUoDbiWE2vCe7/Aqw72Y2Flacir5oHaSVTZL2bulKf9Qsv5yGqpp1QLXTTBwddW1eJ2RumF5Ys8eUalddiIYaDq+quBuP9V9qxa5bh73pYjYZ+lWJZxaM7cQU8/F1NRsbp0WwEBTYZSKPQeqhzzQWMBrOhP3xBHV5CEUKLtsJIzZNSthuu9EFUrzWe7hxlk6V7O3+1PP5Wean5zqKqCKM5RRDcI50jST+6LmiFytcquOt66Msg3lOoQIRtTctoDHe1nPhbouUasTZ7iKJ1g9Mr0oBArNd+QpgvuIsRNB+rKqVbYZrcQ8yBdV7HTP/Y+o65lcZS7nRlg2EDXmXVTLsMRXm1jVMfB+lcMjmivqCawZURejAaiKL7iIUrbw6z0xBnDc6yp2EeBqzcMbsl5C8kVVZgRr89yoY+51WZZ2T0JlXVRFd5wEljkiV31udnM1qnN4Q2GJ1fniWt6oBFihE+ga27yXCXUxlJW7eTgxwFWVO7jIEaieE7IOqqdFjqESuUc8FFT0dU6q2cT2Jxvqd/+RpGjqma4ScDWASQdRadWBoguzieyW8E4qoXjDlTHxDdXcUYk+l1aWGxljY/ckKGbqgAAmvlNz6wGWJQXgQhdWPbJbgjQVX3nhlgnnbHSV54uKrcS1c6HOf+yKGGjObU2cgBoaIoBNS1w3rceTnIe+Aa9Y3Z/E21A29SzogTXTClWFRWVc5YY2dktR/psTegf22vPFQaTf3320+wYsvfTmlxP3lmy5Vm0/KVRNqomqildUr1eTxCb4Jv5VwGDojO3ErSbgqjybuzorRvvtx4N0W+jq1dsdva32oLbvLXVvMeGNp+4NJzgQzaJ8KZa1+J5c3+ZyV+pUqR+9vXpePU+GeIHvTnry0blVHco3jN69dPX8eu+3gQsVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChS5M/wVZB78jIO3izQAAAABJRU5ErkJggg==" alt="logo" />
                </Link>
                <ul className="ulli" >
                    <Link className="links" to="/expenses/home">Home</Link>
                    <Link className="links" to="/expenses/add-transaction">Add Expense</Link>
                    <Link className="links" to="/expenses/expense-list">Expense List</Link>
                    <Link className="links" onClick={handleLogout} to="/login">Log Out</Link>
                </ul>
            </div>
            <div className="userinnav text-center align-items-center">
                
                <button className="btn btn-warning w-75  fs-5 rounded-5 text-capitalize"><BsPersonCircle/> &nbsp;  <b>{data.name} </b></button>
            </div>
        </div>
    );
}

export default Navbar;