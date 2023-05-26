import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {


    return (
        <div>
            <nav style={{
                marginTop: '2em',
                marginBottom: '2em',
                display: 'flex',
                justifyContent: 'center',
                gap: '2em'
            }}>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/details/1'>
                    Details of ID 1
                </NavLink>
                <NavLink to='/search?name=peter'>
                    Search Peter
                </NavLink>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
};