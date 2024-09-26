import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchUsers } from "../store/thunks/fetchUser";
import { useThunk } from '../hooks/use-thunk';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const [doFetchUser, isLoadingUser, loadingUserError] = useThunk(fetchUsers);
    const { data, message } = useSelector((state) => {
        return state.users;
    });
    let data1;
    if (data1) { data = data[0]; }
    let handleLogin = async (e) => {
        e.preventDefault();
        let login = { email, password }
        await doFetchUser(login);
    }
    useEffect(() => {
        if ( message) {
            if (message == "logged in successfully") {
                Swal.fire({
                    title: "Success",
                    text: message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000
                })
                navigate("/expenses/home");

            } else if (message == "wrong password ! please type valid password") {
                Swal.fire({
                    title: "Error",
                    text: message,
                    icon: "error",
                    button: "Ok",
                })
            }
        }else if(message=="Invalid Credentials, Please signup first....!"){
            Swal.fire({
                title: "Error",
                text: message,
                icon: "error",
                button: "Ok",
            })
    }
    }, [message])

return (
    <div className="signup-cont">
        <div className='form-cont'>
            <h1>Login Here</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                <input type="submit" value="Login" />
            </form>
        </div>
        <span>Dont Have an account ? <Link to="/">Signup here </Link></span>
    </div>
);
}
export default Login;