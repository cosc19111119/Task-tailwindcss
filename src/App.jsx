import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Section3 from './components/Section3.jsx'
import TextSection1 from './components/TextSection1.jsx'
import Update from './components/update/Update.jsx';
import Restaurant from './components/Restaurant/Restaurant.jsx'
import Seller from './components/seller/Seller.jsx';
function App() {

  return (
    <>
     <div className="bg-[url('public/assets/bgImage.png')] bg-cover h-[700px]">

     <Navbar/>
     <TextSection1/>
     </div>
     <div>
      <Section3/>
     </div>


    <div>
      <Seller />
    </div>
    <div>
      <Restaurant />
    </div>
     <div>
      <Update />
     </div>
 

     
      
    </>
  )
}

export default App
