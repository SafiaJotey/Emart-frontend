import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Login from './pages/Login/Login.jsx';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import OrderReview from './pages/OrderReview/OrderReview';
import Register from './pages/Register/Register.jsx';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="order" element={<OrderReview />} />
          <Route path="manage" element={<ManageInventory />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
