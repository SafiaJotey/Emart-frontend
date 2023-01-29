import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import ProductProvider from './context/ProductProvider.jsx';
import CommingSoon from './pages/CommingSoon/CommingSoon.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import OrderReview from './pages/OrderReview/OrderReview';
import Payment from './pages/Payment/Payment.jsx';
import PopularProducts from './pages/PopularProducts/PopularProducts.jsx';
import Shop from './pages/Shop/Shop';
import Login from './pages/UserAuth/Login/Login.jsx';
import Register from './pages/UserAuth/Register/Register.jsx';
import ViewProduct from './pages/ViewProduct/ViewProduct.jsx';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Shop />} />

              <Route path="order" element={<OrderReview />} />
              <Route path="popular" element={<PopularProducts />} />
              <Route
                path="payment"
                element={
                  <PrivateRoute>
                    <Payment />
                  </PrivateRoute>
                }
              />
              <Route
                path="product/:id"
                element={
                  <PrivateRoute>
                    <ViewProduct />
                  </PrivateRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="comming" element={<CommingSoon />} />

              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
