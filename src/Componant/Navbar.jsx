
import React from 'react';
import logo from "../../public/logo.png"
// import profile from "../../public/profile-logo.jpg"
import profile from "../../public/logo3.jpeg"
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import Avatar from 'react-avatar';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

 const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };


  return (
     <div className=' flex justify-between  fixed top-0 w-[100%] bg-white items-center px-6 py-2'>
        <div className=' flex  items-center space-x-4    '>
             <IoMdMenu  className='cursor-pointer text-xl  '/>
              <img src={logo} className='w-28 cursor-pointer' alt="" />
             </div>
        <div className='flex w-[35%] items-center'>
            <div className=' w-[100%] px-3 py-2 border border-gray-400 rounded-l-full  '>   
                <input type="text"  placeholder="Search" className=' outline-none '     onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}  />
             </div>
             <button className='border px-4 py-2 border-gray-400 rounded-r-full bg-gray-100 hover:bg-gray-200' onClick={()=>searchQueryHandler("searchButton")} > 
                 <IoIosSearch title='search' size={"24px"} />
                 </button> 

               <FaMicrophone title='search with your voice' className=' ml-3 border rounded-full p-2 cursor-pointor bg-gray-100 hover:bg-gray-200 duration-200 ' size={"40px"} />
             
             </div>
        <div className=" flex space-x-5 items-center ">
             <div>
             <MdOutlineVideoCall className='text-2xl' />
             </div>
            
             <CiBellOn className='text-2xl' />
              <div>
                <Avatar src={profile} size='32'  round={true}   />
              </div>
             

              
        </div>
     </div>
  )
}



export default Navbar;