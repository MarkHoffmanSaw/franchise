import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <div>
            <Header />
            <div style={{ display: "flex" }}>
                <div>Sidebar</div>
                <Outlet></Outlet>
            </div>
            <footer>footer</footer>
        </div>
    );
};
export { Layout };
