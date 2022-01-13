import { useState } from "react"
import { Search } from "./Search"

export const Body = () => {
    const [search, setSearch] = useState<string>("");
    return (
        <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6x1 flex-grow md:mr-2.5">
            <Search search={search} setSearch={setSearch} />
        </section>
    )
}
