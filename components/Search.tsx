import { Dispatch, SetStateAction } from "react"
import { MdOutlineShortText } from "react-icons/md";
interface SearchProps {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

export const Search = ({ search, setSearch }: SearchProps) => {
    return (
        <div className="search">
            <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
            <input className="bg-[#1a1a1a] text-white border-none outline-none lg:w-full focus:ring-0 placeholder-[#fafafa] text-xs" type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search..." />
            <div className="flex items-center divide-dotted divide-x-2 divide-[#333333] ml-auto">
                <div className="flex space-x-2 pr-5 ">
                    <button className="tag">Minimal</button>
                    <button className="tag">House</button>
                    <button className="tag">Minimal</button>
                </div>
                <div className="flex items-center space-x-1.5 text-[#cecece] pl-4">
                    <MdOutlineShortText className="text-2xl animate-pulse" />
                    <span className="font-medium text-sm">Filters</span>
                </div>
            </div>
        </div>
    )
}
