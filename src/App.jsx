import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop/index.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Cart from './Pages/Cart/index.jsx';
import Header from './Componenets/Header/index.jsx';
import User from './Pages/User/index.jsx';
import Login from './Pages/Login/index.jsx';
import SignUp from './Pages/Signup/index.jsx';
import Layout from './Layouts/DefaultLayout.jsx';
import Home from './Pages/Home/index.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/user' element={<User />}>
          <Route path='login' element={<Login />} ></Route>
          <Route path='signup' element={<SignUp />}></Route>
        </Route>

        <Route element={<Layout />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<PrivateRoute> <Cart /> </PrivateRoute>} />
        <Route>
        </Route>
        </Route>


      </Routes>
    </>
  );
}

export default App;
