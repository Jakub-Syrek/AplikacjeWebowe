import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">[C]reate</Link>
                    </li>
                    <li>
                        <Link to="/read">[R]ead</Link>
                    </li>
                    <li>
                        <Link to="/update">[U]pdate</Link>
                    </li>
                    <li>
                        <Link to="/delete">[D]elete</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
