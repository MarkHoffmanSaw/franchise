import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import SearchByName from "./SearchByName/SearchByName";

function Sidebar() {
    return (
        <div style={{ padding: "0 20px" }}>
            <SearchByName />
        </div>
    );
}
export default Sidebar;
