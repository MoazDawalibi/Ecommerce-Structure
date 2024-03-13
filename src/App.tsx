import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Auth from './Pages/Auth/Page';
import Page from './Pages/Home/Page';
import Product from './Pages/Product/Product';
import CartPage from './Pages/Cart/CartPage';
import Products from './Pages/Product/Products';
const Page404 = lazy(() => import("./Layout/app/NotFoundPage"))

const App = () => {

  
  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/auth" element={<Suspense fallback={<Loading />}> <Auth /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Loading />}> <Page /></Suspense>} />
      <Route path="/product/:id" element={<Suspense fallback={<Loading />}> <Product /></Suspense>} />
      <Route path="/products" element={<Suspense fallback={<Loading />}> <Products /></Suspense>} />
      <Route path="/cart" element={<Suspense fallback={<Loading />}> <CartPage /></Suspense>} />

    </Routes>

        
     
  )
}

export default App