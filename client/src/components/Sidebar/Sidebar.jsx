import SearchByCategory from "./SearchByCategory/SearchByCategory";
import SearchByName from "./SearchByName/SearchByName";
import SearchByPrice from "./SearchByPrice/SearchByPrice";

function Sidebar({ setCards }) {
    return (
        <div style={{ padding: "0 20px", width: "250px", flexShrink: 0 }}>
            <SearchByName />
            <SearchByPrice />
            <SearchByCategory setCards={setCards} />
        </div>
    );
}
export default Sidebar;
