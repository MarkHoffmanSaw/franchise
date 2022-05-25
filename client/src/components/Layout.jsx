import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
    return (
        <div>
            <Header />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <Outlet></Outlet>
            </div>
            <footer>footer</footer>
        </div>
    );
};
export { Layout };
