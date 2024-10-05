import react from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Contact from './components/Contact'
import Login from './components/Login'
import Footer from './components/Footer'
import TortoiseDiyaProducts from './components/TortoiseDiyaProducts'
import GanpatiDiyaProducts from './components/GanpatiDiyaProducts'
import ElephantDiyaProducts from './components/ElephantDiyaProducts'
import PeacockDiyaProducts from './components/PeacockDiyaProducts'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Product />
      <TortoiseDiyaProducts/>
      <GanpatiDiyaProducts/>
      <ElephantDiyaProducts/>
      <PeacockDiyaProducts/>
      <Contact/>
      <Cart/>
      <Login />
      <Footer />
    </>
  )
}

export default App
