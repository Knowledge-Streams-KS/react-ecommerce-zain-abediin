import { Outlet } from "react-router-dom";
import Header from "../Componenets/Header";
const Layout = () => {

    return(
        <>  
            <Header/>
            <h1>Start of Layout</h1>
                <Outlet />
            <h1> End of Layout</h1>
        </>
    )
}

export default Layout;