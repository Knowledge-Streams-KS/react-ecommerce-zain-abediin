import { Outlet } from "react-router-dom";

const User = () => {

    return(
        <>
          <h1>Start of User page</h1>
           <Outlet />
          <h2>End of User </h2>

        </>
    )
}
export default User;