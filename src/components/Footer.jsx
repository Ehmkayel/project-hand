import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row mt-10 lg:mt-20 xl:mt-60 justify-between mx-auto p-5 lg:p-20 bg-veryLightGray text-lightGray'>
        <div className='flex flex-col gap-6'>
          <Image src="/logo.svg" alt="logo" width={61} height={24}/>
          <p className=''>We love what we do and create partnerships</p>
        </div>
        <div className='flex flex-col gap-6'>
          <a href type="submit" className="bg-black text-white py-2 lg:py-5 px-3 lg:px-8 rounded-lg">Start a Project</a>
          <p>hello@devseal.tech</p>
       
          <div className='flex flex-row'>
            <div className="rounded-full overflow-hidden bg-gray-200 w-12 h-12 flex items-center justify-center">
              <Image src="/x-logo.svg" alt="x logo" width={35} height={35} />
            </div>
            <div className="rounded-full overflow-hidden bg-gray-200 w-12 h-12 flex items-center justify-center">
              <Image src="/linkedin.svg" alt="Linkedin logo" width={35} height={35} />
            </div>
            <div className="rounded-full overflow-hidden bg-gray-200 w-12 h-12 flex items-center justify-center">
              <Image src="/facebook.svg" alt="Facebook logo" width={35} height={35} />
            </div>
            <div className="rounded-full overflow-hidden bg-gray-200 w-12 h-12 flex items-center justify-center">
              <Image src="/instagram.svg" alt="Instagram logo" width={35} height={35} />
            </div>
          </div>
        </div>
        </div>
        
      <div className='bg-veryLightGray mx-auto px-10 items-center'>
      <hr className='lg:p-3'></hr>
      <div className='flex flex-col lg:flex-row justify-between text-lightGray '>
      <p className='text-lightGray'>© 2024 hand. All Rights Reserved</p>
      <div>
        <ul className='flex flex-row gap-5 '>
          <Link href ="/">Privacy Policy</Link>
          <Link href ="/">Media Kit</Link>
        </ul>
      </div>
      </div>
     
      </div>
      </div>

    
  )
}

export default Footer