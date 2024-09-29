

import {Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Componant/Navbar';
import Home from './Componant/Home';
import Search from './Componant/Search';
 import PlayingVideo from './Componant/PlayingVideo';
import Loading from './Componant/loading';
// import SideBar from './Componant/SideBar';
 import { useAuth } from './Componant/Context';



function App() {
   const {loading}=useAuth()
  //  console.log(loading)
  //  console.log(data)
     return (
    <>
             <BrowserRouter>
               { loading && <Loading />}
                   <Navbar />
               

                   <Routes>
                    <Route path='/' exact element={ <Home />} />
                    <Route path='/search/:searchQuery' element={ <Search/>} />
                    <Route path='/video/:id' element={ <PlayingVideo />} />
                   </Routes>

              </BrowserRouter>     
    </>
  )
}

export default App
