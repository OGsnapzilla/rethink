import { Outlet } from "react-router-dom";
import MenuComponent from './components/Header';
import Footer from "./components/Footer";

function Layout () {
    return (
        <>
            <MenuComponent></MenuComponent>
            <main className="mainpart">
                <Outlet/>
            </main>
            <Footer></Footer>
        
        </>
    )
}

export default Layout;