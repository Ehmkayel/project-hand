import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-yellow p-5 lg:p-20'>
        <h1 className='text-2xl lg:text-[100px] text-center leading-[50px] lg:leading-[110px]'>Let’s create something great together.</h1>
        <Image src="/hero-image.svg" alt='five hands' height={388} width={1468}></Image>
    </div>
  )
}

export default Hero