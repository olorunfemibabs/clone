import React from 'react'
import { ThreeCircles } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className='fixed w-[100%]'>
        <div className="bg-[#FFFFFF] h-[200px] w-[300px] rounded-lg shadow-2xl mx-[30%] my-[10%]">
            <div className="mx-auto w-[100px] h-[100px] py-[50px]">
            <ThreeCircles
                height="100"
                width="100"
                color="#1A1941"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
            </div>
        </div>
    </div>
  )
}

export default Loading
