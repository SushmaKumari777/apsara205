// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import Halfstyle from './components/Halfstyle';
import Jsr from './components/Jsr';
import Footer from './components/Footer';
import ViewProduct from './components/ViewProduct';
import Category from './components/Category';
import Buy from './components/Buy';
import Carts from './components/Carts';
import Example from './components/Example';
import Checkout from './components/Checkout';
import Gender from './components/Gender';
import Pooh from './components/Pooh';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Address from './components/Address';
import Wishlist from './components/Wishlist';
import Account from './components/Account';
import AdminProduct from './components/AdminProducts';
import AdminOrders from './components/AdminOrders';
import AddCategory from './components/AddCategory';
import AdminDashboard from './components/AdminDashboard';
import Orders from './components/Orders';
import Contact from './components/Contact';
import Example2 from './components/Example2';
import AllProducts from './components/AllProducts';
import CartDetails from './components/CartDetails';


function App() {
  return (
    <div>
      <Header> </Header>

      {/* <Home> </Home> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/halfstyle" element={<Halfstyle />} />
        <Route path="/jsr" element={<Jsr />} />
        <Route path="/viewProduct/:productId" element={<ViewProduct />} />
        <Route path="/category/:categoryName" element={<Category />} />
        {/* <Route path="/gender/:idealFor" element={<Gender />} /> */}
        <Route path="/gender/:idealFor" element={<Gender />} />
        <Route path="/buy/:productId" element={<Buy />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/example" element={<Example />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pooh" element={<Pooh />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/adminProduct" element={<AdminProduct />} />
        <Route path="/adminOrders" element={<AdminOrders />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/example2" element={<Example2 />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/cartDetails" element={<CartDetails />} />
      






        <Route path='*' element={<Home />} />
        <Route path="/footer" element={<Header />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
