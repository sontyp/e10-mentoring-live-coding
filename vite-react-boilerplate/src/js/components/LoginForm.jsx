import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthStore from '../hooks/useAuthStore';
import { useLocation, useNavigate } from 'react-router-dom';

/* 
    Login component that send collected login information to the backend
    and stores the user information in the global authentication storage if the login succeeded.
    It also provides a 'redirect-to-referrer'-mechanic.
*/
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [notVerified, setNotVerified] = useState(false);
    const authStore = useAuthStore();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('location.state:', location.state);
    }, []);
    
    // Submit Handler for the login form
    async function loginSubmitHandler(evt) {
        evt.preventDefault();

        let body = {
            username: username,
            password: password
        };

        if ( (username.length < 1) || password.length < 1 ) {
            let errorsSet = new Set(errors);

            errorsSet.add('Username and password must not be empty');

            setErrors([...errorsSet]);
            return;
        }

        try {
            let resp = await axios.post('http://localhost:8080/auth/login', body, {
                // withCredentials: true
            });

            console.log(resp);
            
            // set the user information in the global auth storage
            authStore.authenticate(resp.data);
            // localStorage.setItem('token', resp.data.token);
            // sessionStorage.setItem('token', resp.data.token);

            setUsername('');
            setPassword('');
            setErrors([]);

            console.log('Success: token stored in localStorage and sessionStorage');

            // In case there was a referrer, redirect the user to the referrer route
            if (location.state?.from) navigate(location.state.from);

        } catch (error) {
            console.error(error);
            if (error.response.status === 403) setNotVerified(true);
            setErrors([error.response.data.message]);
        }
    }

    // Login success message
    const loginSuccess = <p style={{color: 'green'}}>Login successful!</p>;
    
    // Error display
    const errorBox = errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
    });

    return (
        <>
            {/* If logged -> show login success message */}
            {authStore.isAuthenticated() && loginSuccess}

            {
                // If logged in -> show logout-button
                // or else the login form
                authStore.isAuthenticated() ? 
                    (<button onClick={evt => authStore.logout()} style={{border: '1px solid grey', backgroundColor: 'white', padding: '0.5em'}}>Logout</button>) 
                : 
                    (
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/12 mx-auto my-6" onSubmit={loginSubmitHandler}>
                        {(errors.length > 0) && (<ul style={{backgroundColor: 'rgba(255,0,0,0.5)', border: '1px solid red'}}>{errorBox}</ul>)}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
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


export default LoginForm;