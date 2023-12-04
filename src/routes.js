import { createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import App from "./pages/App";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            {/* <Route path="product" element={<Product/>}/> */}
            <Route path="contact" element={<Contact/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="app" element={<App/>}/>

        </Route>
    )
)

export default router