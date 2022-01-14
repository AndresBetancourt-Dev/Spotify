import { useEffect, useState } from "react"
import { useSession } from 'next-auth/react';
import { Search } from "./Search"

export const Body = () => {

    const { data: session } = useSession();
    const { accessToken } = session;
    const [search, setSearch] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Array<Object>>([]);
    const [newReleases, setNewReleases] = useState<Object[]>([]);


    useEffect(() => {
        if (!accessToken) return
    }, [])

    return (
        <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6x1 flex-grow md:mr-2.5">
            <Search search={search} setSearch={setSearch} />
            <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">

            </div>
        </section>
    )
}
