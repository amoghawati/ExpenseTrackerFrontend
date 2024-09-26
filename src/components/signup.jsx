import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useThunk } from "../hooks/use-thunk";
import { addUser } from "../store/thunks/addUser";

const Signup = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [mobileError, setMobileError] = useState(false);

  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  let { data, message } = useSelector((state) => {
    return state.users;
  });
  let navigate = useNavigate();

  let handleSignup = async (e) => {
    e.preventDefault();
    let accountDetails = { name, email, password, phoneNumber };
    if (password == confirmPassword) {
      await doCreateUser(accountDetails);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password is not matching with confirmation password",
      });
    }
  };
  useEffect(() => {
    if (message !== "" && message !== undefined && password !== undefined && password !== "") {
      if (password === confirmPassword) {
        if (message === "user registered successfully") {
          Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password is not matching with confirmation password",
        });
      }
    }
  }, [data, message]);

  return (
    <div className="signup-cont">
      <div className="form-cont">
        <h1>Register</h1>
        <form onSubmit={handleSignup}>
          <input
            maxLength={15}
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            minLength={8}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            requiredF
          />
          <input
            minLength={8}
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required
          />
          <input
            type="tel"
            placeholder="phoneNumber"
            value={phoneNumber}
            onChange={(e) => { setPhoneNumber(e.target.value) }}
            required
            minLength={10}
          />
          

          <input type="submit" value="Signup" />
        </form>
      </div>
      <span>
        Already have an account ? <Link to="/login">Login here </Link>
      </span>
    </div>
  );
};

export default Signup;





// const numberHandle = (e) => {
  //   if (e.target.value.length < 11) {
  //     setMobileError(false);
  //     setPhoneNumber(e.target.value);
  //   } else {
  //     setMobileError(true);
  //   }
  // };