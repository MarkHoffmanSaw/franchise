import SearchByName from "./SearchByName/SearchByName";
import SearchByPrice from "./SearchByPrice/SearchByPrice";

function Sidebar() {
    return (
        <div style={{ padding: "0 20px", width: "300px" }}>
            <SearchByName />
            <SearchByPrice />
        </div>
    );
}
export default Sidebar;
