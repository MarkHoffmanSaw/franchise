import SearchByCategory from "./SearchByCategory/SearchByCategory";
import SearchByName from "./SearchByName/SearchByName";
import SearchByPrice from "./SearchByPrice/SearchByPrice";

function Sidebar() {
    return (
        <div style={{ padding: "0 20px", width: "300px", flexShrink: 0 }}>
            <SearchByName />
            <SearchByPrice />
            <SearchByCategory />
        </div>
    );
}
export default Sidebar;
