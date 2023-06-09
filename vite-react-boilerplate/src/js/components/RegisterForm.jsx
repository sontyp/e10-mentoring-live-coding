import { useState } from 'react';
import axios from 'axios';

/* 
  A component for user registration.
  It is capable of sending the collected data to some backend
  and indicate to the user whether that went well.
*/
function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [city, setCity] = useState('');
    const [errors, setErrors] = useState([]);
    const [registerSuccessful, setRegisterSuccessful] = useState(false);

    function submitHandler(evt) {
        evt.preventDefault();
        
        // Create an object for the request body sent to the login endpoint
        let registrationData = {
          username: username,
          email: email,
          password: password,
          fullname: fullname,
          city: city
        };
    
        // Send the request to the /register endpoint of the API
        axios.post('http://localhost:8080/auth/register', registrationData)
          .then(response => {
            console.log(response); // TODO
            setErrors([]);
            setRegisterSuccessful(true);
          })
          .catch(error => {
            console.error(error);

            setErrors([error.response.data.message.split(',')]);
          });
    }

    const successMsg = <p style={{color: 'green'}}>
      Register successful! <br />
      We've sent you an e-mail to verify your e-mail address. Please follow the provided link. <br />
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Resend E-Mail
      </a><br />
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Go to Login
      </a>
    </p>;

    const errorBox = errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });

    return (
        <>
        {
          registerSuccessful
          ?  (successMsg)
          : (
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/12 mx-auto my-6" onSubmit={submitHandler}>
              {(errors.length > 0) && (<ul style={{backgroundColor: 'rgba(255,0,0,0.5)', border: '1px solid red'}}>{errorBox}</ul>)}
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
              </div>

              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      E-Mail
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="user@example.com" value={email} onChange={(evt) => setEmail(evt.target.value)} />
              </div>

              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                      Full Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="John Doe" value={fullname} onChange={(evt) => setFullname(evt.target.value)} />
              </div>

              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                      City (optional)
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="New York" value={city} onChange={(evt) => setCity(evt.target.value)} />
              </div>

              <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(evt) => setPassword(evt.target.value)} />
              </div>

              <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Sign Up
                  </button>
                  {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                      Forgot Password?
                  </a> */}
              </div>
            </form>
          )
        }
        </>

        
    );
}

export default RegisterForm;