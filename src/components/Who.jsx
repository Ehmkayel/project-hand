import Image from "next/image"

export const Who = () => {
  return (
    <div className="p-5 lg:p-20 items-center mx-auto max-w-[1728px]">
        <div className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-[44px] text-black font-bold">Who we are</h2>
        <p className="text-[10px] lg:text-[20px] xl:text-[30px] leading-[20px] lg:leading-[40.8px] font-medium mt-2 lg:mt-5 p-3">We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.</p>
        </div>
        <div className="lg:mt-20 mt-5 mx-auto max-w-[1528px]">
        <Image src="/mid-image.png" alt='five hands' height={629} width={1528}></Image></div>
        </div>
        
     
  )
}

