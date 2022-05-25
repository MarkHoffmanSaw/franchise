import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>HEADER</header>
            <div style={{ display: "flex" }}>
                <div>Sidebar</div>
                <Outlet></Outlet>
            </div>
            <footer>footer</footer>
        </div>
    );
};
export { Layout };
