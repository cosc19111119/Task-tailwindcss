import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import TextSection1 from './components/TextSection1.jsx'
import Seller from './components/Seller.jsx'
import Update from './components/Update.jsx'
function App() {

  return (
    <>
      <div className="bg-[url('public/assets/bgImage.png')] bg-cover h-[700px]">

        <Navbar />
        <TextSection1 />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Section3 />

      </div>

      <div className='bg-white'>
        <Section4 />

     

      
      <Seller />
      <Update />
      <Footer />

      </div>

    </>
  )
}

export default App
