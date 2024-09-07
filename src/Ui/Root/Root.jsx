import { Outlet } from "react-router-dom"
import Header from "../Pages/Header/Header"
import Footer from "../Pages/Footer/Footer"

const Root = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root