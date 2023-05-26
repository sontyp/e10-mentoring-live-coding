import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {


    return (
        <div>
            <nav>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to='/details/1'>
                        Details of ID 1
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/search?name=peter'>
                        Search Peter
                    </NavLink>
                </li>
            </nav>

            <Outlet />
        </div>
    );
};