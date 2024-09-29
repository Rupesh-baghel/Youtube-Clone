
import React from 'react'
import { Link } from 'react-router-dom'
import Time from './Time'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { abbreviateNumber } from 'js-abbreviation-number';
function Video({ video }) {
    console.log(video)
    return (
        <div className=''>

            <Link to={`video/${video?.videoId}`} >
                <div className='flex flex-col'>
                    <div className='relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden '>
                        <img src={video?.thumbnails[0]?.url} className='h-full w-full' alt="" />
                        {/*  video thumbnail and time  */}
                        {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
                    </div>

                    <div className='flex  space-x-2 mt-3'>
                        <div className=' flex  items-start'>
                            {/* logo */}
                            <div className=' flex h-9 w-9 rounded-full overflow-hidden border '>
                                <img className='h-full w-full rounded-full overflow-hidden ' src={video?.author?.avatar[0].url} alt="" />
                            </div>
                        </div>
                        {/* video title */}
                        <div>
                            <span className='text-sm font-bold line-clamp-2'>{video?.title}</span>
                            <span className=' flex items-center font-semibold mt-2 text-[12px] text-gray-600'>
                                {video?.author?.title}
                             
                                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <IoCheckmarkCircleSharp className="text-gray-600 ml-1 text-[12px]" />
                )}
                            </span>
                            <div className='flex text-gray-500 text-[12px]'>
                                <span>{`${abbreviateNumber(video?.stats?.views, 2)}views`}</span>
                                <span className='flex text-[24px] font-bold relative leading-none  top-[-10px] mx-1'>.</span>
                                <span>{video?.publishedTimeText}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </ Link>

        </div>
    )
}

export default Video