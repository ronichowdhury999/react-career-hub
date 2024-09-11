import { Outlet } from "react-router-dom"
import Header from "../Pages/Header/Header"
import Footer from "../Pages/Footer/Footer"
import { ToastContainer } from "react-toastify"

const Root = () => {
    return (
        <div>
            <Header />
            <div className=" mx-auto">
                <Outlet />
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Root