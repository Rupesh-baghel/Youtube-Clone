
import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";
import { MdWifiTethering } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { SlBulb } from "react-icons/sl";
import { FaTshirt } from "react-icons/fa";
import { MdPodcasts } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { FaSquareYoutube } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
const SideBar = () => {

    const sideItems = [
        {
            id: 1,
            name: "Home",
            icon: <MdHomeFilled />
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />

        },
        {
            id: 3,
            name: "Subscription",
            icon: <MdOutlineSubscriptions />
        }
    ]
    const sideItems2 = [

        {
            id: 1,
            name: "Your Channel",
            icon: <IoMdContact />
        },
        {
            id: 2,
            name: "History",
            icon: <MdHistory />
        },
        {
            id: 3,
            name: "Playlists",
            icon: <MdOutlinePlaylistPlay />
        },
        {
            id: 4,
            name: "Your Video",
            icon: <MdOndemandVideo />
        },
        {
            id: 5,
            name: "Watch later",
            icon: <MdOutlineWatchLater />
        },
        {
            id: 6,
            name: "Liked Videos",
            icon: <AiOutlineLike />
        },

    ]
    const sideItems3 = [
        {
            id: 1,
            name: "Trending",
            icon: <IoIosTrendingUp />
        },
        {
            id: 2,
            name: "Shopping",
            icon: <MdOutlineShoppingBag />
        },
        {
            id: 3,
            name: "Music",
            icon: <IoMusicalNoteOutline />
        },
        {
            id: 4,
            name: "Films",
            icon: <PiFilmSlateBold />
        },
        {
            id: 5,
            name: "Live",
            icon: <MdWifiTethering />
        },
        {
            id: 6,
            name: "Gaming ",
            icon: <SiYoutubegaming />
        },
        {
            id: 7,
            name: "News ",
            icon: <IoNewspaperOutline />
        }, {
            id: 8,
            name: "Sport",
            icon: <CiTrophy />
        }, {
            id: 9,
            name: "Courses ",
            icon: <SlBulb />
        }, {
            id: 10,
            name: "Fashion & Beauty",
            icon: <FaTshirt />
        }, {
            id: 11,
            name: "Podcasts ",
            icon: <MdPodcasts />
        },
    ]
    const sideItems4 = [
        {
            id: 1,
            name: "Youtube Premium",
            icon: <FaYoutube />
        },
        {
            id: 2,
            name: "Youtube Studio",
            icon: <FaSquareYoutube />
        },
        {
            id: 3,
            name: "Youtube Music",
            icon: <SiYoutubemusic />
        },
        {
            id: 4,
            name: "Youtube Kids",
            icon: <SiYoutubekids />
        },

    ]
    const sideItems5 = [
        {
            id: 1,
            name: "Settings",
            icon: <IoSettingsOutline />
        },
        {
            id: 2,
            name: "Reports History",
            icon: <CiFlag1 />
        },
        {
            id: 3,
            name: "Help",
            icon: <IoIosHelpCircleOutline />
        },
        {
            id: 4,
            name: "Send Feedback",
            icon: <MdOutlineFeedback />
        },

    ]
    return (
        <>
            <div className='px-6 w-[33%] overflow-y-scroll overflow-x-hidden h-[calc(100vh-6.625rem)]  '>
                <div className='space-y-3  items-center'>
                    {/* <div className=' flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                        <MdHomeFilled className='text-xl cursor-pointer' />
                         <span className='cursor-pointer'>Home</span>
                    </div>
                    <div className=' flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                        <SiYoutubeshorts className='text-xl cursor-pointer' /> 
                        <span className='cursor-pointer'>Shorts</span>
                    </div>
                    <div className=' flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                        <MdOutlineSubscriptions className='text-xl cursor-pointer' />
                         <span className='cursor-pointer'>Subscription</span>
                    </div> */}

                    {
                        sideItems.map((items) => {
                            return (
                                <div key={items.id} className=' flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                                    <div className='text-xl cursor-pointer' > {items.icon} </div>
                                    <span className='cursor-pointer'>{items.name}</span>
                                </div>

                            )
                        })
                    }

                </div> <br />
                <hr />
                <div className='space-y-3 mt-4 items-center'>
                    <div className='flex items-center space-x-2'>
                        <h1>You</h1> <MdOutlineArrowForwardIos />
                    </div>
                    {
                        sideItems2.map((items) => {
                            return (
                                <div key={items.id} className=' flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                                    <div className='text-xl cursor-pointer' > {items.icon} </div>
                                    <span className='cursor-pointer'>{items.name}</span>
                                </div>
                            )
                        })
                    }
                </div> <br />
                <hr />
                <div className='space-y-3 mt-4 items-center'>
                    <div className='flex items-center space-x-2'>
                        <h1>Explore</h1> <MdOutlineArrowForwardIos />
                    </div>
                    {
                        sideItems3.map((items) => {
                            return (
                                <div key={items.id} className=' flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                                    <div className='text-xl cursor-pointer' > {items.icon} </div>
                                    <span className='cursor-pointer'>{items.name}</span>
                                </div>

                            )
                        })
                    }

                </div> <br />
                <hr />
                <div className='space-y-3 mt-4 items-center'>
                    <div className='flex items-center space-x-2'>
                        <h1>More for Youtube</h1> <MdOutlineArrowForwardIos />
                    </div>
                    {
                        sideItems4.map((items) => {
                            return (
                                <div key={items.id} className='  flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                                    <div className='text-xl cursor-pointer text-red-600'  > {items.icon} </div>
                                    <span className='cursor-pointer'>{items.name}</span>
                                </div>

                            )
                        })
                    }
                </div> <br />
                <hr />
                <div className='space-y-3 mt-4 items-center'>
                    {/* <div className='flex items-center space-x-2'>
                        <h1>More for Youtube</h1> <MdOutlineArrowForwardIos />
                     </div> */}
                    {
                        sideItems5.map((items) => {
                            return (
                                <div key={items.id} className=' flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
                                    <div className='text-xl cursor-pointer' > {items.icon} </div>
                                    <span className='cursor-pointer'>{items.name}</span>
                                </div>
                            )
                        })
                    }
                </div> <br />
                <hr /> <br />
                <span className=' text-xs font-semibold text-gray-500'>About Press Copyright<br />Contact us Creators <br />AdvertiseDevelopers
                    <p>TermsPrivacyPolicy & Safety <br />How YouTube works <br />Test new features</p>
                </span> <br />
                <p className=' text-xs text-gray-600'>
                    &copy;2024 design by Rupesh
                </p>
            </div>
        </>
    )
}
export default SideBar;