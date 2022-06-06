import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ setCards }) => {
    return (
        <div>
            <Header />
            <div style={{ display: "flex" }}>
                <Sidebar setCards={setCards} />
                <Outlet></Outlet>
            </div>
            <footer>footer</footer>
        </div>
    );
};
export { Layout };
