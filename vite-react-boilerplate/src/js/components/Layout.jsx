import {Link, Outlet} from 'react-router-dom';
import useAuthStore from '../hooks/useAuthStore';
import useThemeStore, { themes } from '../hooks/useThemeStore';

/* 
    A layout component that functions as a container component for all the different views the app creates.
    It usually holds some header with e.g. a navigation to the different pages
*/
function Layout() {
    // access the global authentication storage
    const authStore = useAuthStore();

    // access the two theme changing methods from the global theme storage
    const toggleTheme = useThemeStore(themeStore => themeStore.toggleTheme);
    const setTheme = useThemeStore(themeStore => themeStore.setTheme);

    const onThemeChange = evt => {
        const value = evt.target.value;
        setTheme(value);
    };

    return (
        <>
            <h2 style={{textAlign: 'center', fontSize: '18sp'}}>Welcome aboard, {authStore.isAuthenticated() ? authStore.user.fullname : 'Anonymous'}!</h2>
            <nav>
                <ul style={{
                    display: 'flex',
                    gap: '1em',
                    justifyContent: 'center'
                }}>
                    <li><Link to='/'>Home</Link></li>
                    {/* <li><Link to='/login'>Login</Link></li> */}
                    {/* <li><Link to='/register'>Register</Link></li> */}
                    <li><Link to='/counter'>Counter</Link></li>
                    <li><Link to='/protected'>Protected</Link></li>
                </ul>
            </nav>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => toggleTheme()}
            >Toggle theme</button>

            <select 
                onChange={onThemeChange}
            >
                <option value={themes.LIGHT}>Light</option>
                <option value={themes.DARK}>Dark</option>
            </select>

            <Outlet />
        </>
    );
}

export default Layout;