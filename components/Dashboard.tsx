import { Body } from "./Body"
import { Right } from "./Right"
import { Sidebar } from "./Sidebar"

export const Dashboard = () => {
    return (
        <main>
            <Sidebar />
            <Body />
            <Right />
        </main>
    )
}
