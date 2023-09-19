// import React, { useState } from "react";
// import './login.css'
// import user_icon from '../Components/Assests/user.png'
// import email_icon from '../Components/Assests/email.png'
// import password_icon from '../Components/Assests/lock.png'

// export default function Login() {
//   const [action,setAction] =useState("Login")
//   return(
//     <>
//     <div className="container">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underLine"></div>
//       </div>
//       <div className="inputs">
//         {action==="Login"?<div></div>: <div className="input">
//           <img src={user_icon} alt=""/>
//           <input type="text" placeholder="Name" />
//         </div>}

//         <div className="input">
//           <img src={email_icon} alt=""/>
//           <input type="email"  placeholder="input"/>
//         </div>
//         <div className="input">
//           <img src={password_icon} alt=""/>
//           <input type="password" placeholder="password"/>
//         </div>
//        {action==="Sign Up" ?<div></div>:<div className="forgot-password">Lost password ?<span>Click here</span></div>}

//         <div className="submit-container">

//           <div className={action==="Sign Up" ? "submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
//           <div className={action==="Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//         </div>

//       </div>

//     </div>

//     </>
//   )
// }
// import React, { useState } from "react";
// import "./login.css";
// import user_icon from "../Components/Assests/user.png";
// import email_icon from "../Components/Assests/email.png";
// import password_icon from "../Components/Assests/lock.png";

// export default function Login() {
//   const [action, setAction] = useState("Login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [usernameError, setUsernameError] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//     setUsernameError("");
//   };

//   const handleLogin = () => {
//     // Validation logic for email, password, and username
//     if (!email) {
//       setEmailError("Email is required");
//     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setEmailError("Invalid email address");
//     }

//     if (!password) {
//       setPasswordError("Password is required");
//     }else if(password.length < 8){
//       setPasswordError("Password is maximun 8 character");
//     }

//     if (action === "Sign Up") {
//       if (!username) {
//         setUsernameError("Username is required");
//       }
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="submit-container">
//           <div
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Login");
//             }}
//           >
//             Login
//           </div>
//           <div
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Sign Up");
//             }}
//           >
//             Sign Up
//           </div>
//         </div>
//         <div className="inputs">
//           {action === "Login" ? (
//             <div></div>
//           ) : (
//             <div className="input">
//               <img src={user_icon} alt="" />
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={username}
//                 onChange={handleUsernameChange}
//               />
//               <div className="error">{usernameError}</div>
//             </div>
//           )}

//           <div className="input">
//             <img src={email_icon} alt="" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <div className="error">{emailError}</div>
//           </div>
//           <div className="input">
//             <img src={password_icon} alt="" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <div className="error">{passwordError}</div>
//           </div>
//           {action === "Sign Up" ? (
//             <div></div>
//           ) : (
//             <div className="forgot-password">
//               Lost password ?<span>Click here</span>
//             </div>
//           )}
//         </div>
//         <div className="btn-box">
//           <button  type="submit" onClick={handleLogin}>Submit</button>
//         </div>
//       </div>
//     </>
//   );
// }
// import React, { useState } from "react";
// import "./login.css";
// import user_icon from "../Components/Assests/user.png";
// import email_icon from "../Components/Assests/email.png";
// import password_icon from "../Components/Assests/lock.png";

// export default function Login() {
//   const [action, setAction] = useState("Login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [usernameError, setUsernameError] = useState("");
//   const [message, setMessage] = useState("")

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//     setUsernameError("");
//   };
 
  

//   return (
//     <>
//    <div className="form-section">
//       <div className="container">
//         <div className="submit-container">
//           <div
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Login");
//             }}
//           >
//             Login
//           </div>
//           <div
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Sign Up");
//             }}
//           >
//             Sign Up
//           </div>
//         </div>
//         <p className="message">{message}</p>
//         {/* <form onSubmit={handleLogin}> */}
//           <div className="inputs">
//             {action === "Login" ? (
//               <div></div>
//             ) : (
//               <div className="input">
//                 <img src={user_icon} alt="" />
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={username}
//                   onChange={handleUsernameChange}
//                 />
//                 <div className="error">{usernameError}</div>
//               </div>
//             )}

//             <div className="input">
//               <img src={email_icon} alt="" />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//               <div className="error">{emailError}</div>
//             </div>
//             <div className="input">
//               <img src={password_icon} alt="" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//               <div className="error">{passwordError}</div>
//             </div>
//             {action === "Sign Up" ? (
//               <div></div>
//             ) : (
//               <div className="forgot-password">
//                 Lost password ?<span>Click here</span>
//               </div>
//             )}
//           </div>
//           {/* <div className="btn-box">
//             <button type="submit">Submit</button>
//           </div> */}
//         {/* </form> */}
//       </div>
//       </div>
//     </>
  
    
//   );
// }
import React, { useState } from "react";
import "./login.css";
import user_icon from "../Components/Assests/user.png";
import email_icon from "../Components/Assests/email.png";
import password_icon from "../Components/Assests/lock.png";

export default function Login() {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here, you can add your logic to handle the form submission.
    // For example, you can validate the input fields and perform the login or sign-up action.
    // You can use the values in 'email', 'password', and 'username' states.

    if (action === "Login") {
      if (!email || !password) {
        // Display an error message for empty fields
        setMessage("Please fill in both email and password fields.");
        setEmailError('email is required')
        setPasswordError('passsword is required')
        return;
      }

      // Simulate authentication (replace with actual API call)
      const isAuthenticated = true; // Replace with your authentication logic

      if (isAuthenticated) {
        // Redirect to the dashboard or another page
        window.location.href = "/";
      } else {
        // Display an error message for failed authentication
        setMessage("Invalid email or password. Please try again.");
      }
    } else if (action === "Sign Up") {
      // Handle sign-up logic here
      if (!email || !password || !username) {
        // Display an error message for empty fields
        setMessage("Please fill in all required fields.");
        setUsernameError('username is required')
        return;
      }

      // Simulate sign-up (replace with actual API call)
      const isSignupSuccessful = true; // Replace with your sign-up logic

      if (isSignupSuccessful) {
        // Display a success message and optionally redirect to the login page
        setMessage("Account created successfully. Please log in.");
        setAction("Login"); // Redirect to the login page after successful sign-up
      } else {
        // Display an error message for failed sign-up
        setMessage("Sign-up failed. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="form-section">
        <div className="container">
          <div className="submit-container">
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
          </div>
          <p className="message">{message}</p>

          <form onSubmit={handleFormSubmit}>
            <div className="inputs">
              {action === "Login" ? (
                <div></div>
              ) : (
                <div className="input">
                  <img src={user_icon} alt="" />
                  <input
                    type="text"
                    placeholder="Name"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  <div className="error">{usernameError}</div>
                </div>
              )}

              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="error">{emailError}</div>
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                  <div className="error">{passwordError}</div>
              </div>
              {action === "Sign Up" ? (
                <div></div>
              ) : (
                <div className="forgot-password">
                  Lost password ?<span>Click here</span>
                </div>
              )}
            </div>
            <div className="btn-box">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

