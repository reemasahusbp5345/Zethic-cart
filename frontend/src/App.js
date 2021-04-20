import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Backdrop from './components/Backdrop';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  const [sideToggle, setSideToggle]=useState(false)
  return (
    <div className="App">
      <Navbar click={()=>setSideToggle(!sideToggle)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(!sideToggle)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(!sideToggle)}/>
     <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/products/:id" component={ProductPage}/>
        <Route exact path="/cart" component={CartPage}/>
     </Switch>
    </div>
  );
}

export default App;
