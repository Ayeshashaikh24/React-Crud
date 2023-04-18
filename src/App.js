
import './App.css';
import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Main from './main/Main';
import Products from './admin/Products';
import ProductCreate from './admin/ProductCreate';
import ProductEdit from './admin/ProductEdit';
import Nav from './admin/components/Nav';


function App() {
  return (
    <>


    <BrowserRouter>
    <Routes>
    <Route path="/" exact Component={Main}  />
    <Route path="/admin/products" Component={Products}  />
    <Route path="/admin/products/create" Component={ProductCreate}  />
   <Route path="/admin/products/:id/edit" Component={ProductEdit}  />
   </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
