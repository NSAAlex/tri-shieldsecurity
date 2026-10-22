import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div id="content">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Layout;