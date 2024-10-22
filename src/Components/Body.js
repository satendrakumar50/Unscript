import React from 'react'
import img1 from '../Components/Assets/CompanyName.jpg';
import img2 from '../Components/Assets/VideoContent.jpg';
const Body = () => {
  return (
    <div className='text-center'>
        <div className='mt-8'>
    <h1 className='font-bold text-2xl'>Create <p className='text-blue-400'>Professional Videos</p>in a Minutes with AI Avatars</h1>
    </div>

    <h1 className='text-sm mt-8'>Transform your text into engaging video content instantly, while saving and cutting costs.</h1>
    <div className='space-x-3 mt-4'>
    <input className=' p-1 border-2 border-blue-400  rounded-md focus:outline-none focus:border-blue-400' placeholder='Email'/>
    <button className=' border p-1 border-blue-400 rounded-md bg-blue-600 text-white'>Get Demo</button>
    </div>
    <div className='flex justify-center mt-20'>
    <img className='h-80 w-4/6 rounded-md ' alt='content' src='https://s3-alpha-sig.figma.com/img/a84c/c203/8787c150e77d063d364776dc65cf0852?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oRLE7QdpAnmYJaMgwKeJuYkhlGNBEMcYUiFN8aEyrgjHJHgQ0DsRjHJvYH1Umce~Qj2FQCMJiGHeaZLyRFyKNSs8uhTs2Mi4FwgzRCI2BlxvAYMTR9NM6m0mCGmct3NS6H05f68jUu1Fv3Z0YJmNk2T1PrdL1HFEX2dNnq7dDifwm3uSNcR4BT8BTwilQbxwQJMxb~Qaqqy83W1PjjogPHdtNUQg3nCHWAiBSn~GU6XR7K7g~m3vqBJDp-Ndtls2Cx23iyCyJ3PCIljpZNBHZUvjVM79JLIbKrvYUXtl7d0pcSo7Ea2K~6d-u8SmxxHk0gmqw8XbCLxiTXxzXuKGAA__'/>
    </div>
    <div className='flex justify-center mt-20'>
      <img  className='h-80 w-4/6 ' alt='companyName' src={img1}/>
    </div>
    <div className='flex justify-center mt-20'>
        <img  className=' w-4/6 ' alt='VideoContent' src={img2}/>
    </div>
    </div>
  )
}

export default Body