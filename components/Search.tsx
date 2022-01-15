import { Dispatch, SetStateAction } from "react"
import { MdOutlineShortText } from "react-icons/md";
interface SearchProps {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

export const Search = ({ search, setSearch }: SearchProps) => {
    return (
        <div className="search">
            <div className="search-icon" />
            <input className="search-input" type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search..." />
            <div className="search-filters">
                <div className="search-tags">
                    <button className="tag">Minimal</button>
                    <button className="tag">House</button>
                    <button className="tag">Minimal</button>
                </div>
                <div className="other-filters">
                    <MdOutlineShortText className="text-2xl animate-pulse" />
                    <span className="font-medium text-sm">Filters</span>
                </div>
            </div>
        </div>
    )
}
