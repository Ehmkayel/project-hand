import Image from "next/image"

const Team = () => {
  return (
    <div className="pt-30 lg:p-20">
        <div className="mt-10 xl:mt-20">
        <h3 className="text-center text-2xl font-bold lg:text-[44px] pb-8 lg:mb-30 xl:mb-50">Meet the heroes behind the magic</h3>
        </div>
      
    <div className="flex flex-col lg:flex-row gap-10 mt-10 xl:mt-50">
        <div className="rounded-xl bg-white shadow-darkbox p-4">
            <Image src="/Avatar-pink.png" alt='Esther Howard Avatar' height={376} width={393.32}></Image>
            <h3 className="mt-5 text-2xl  lg:text-[20px] xl:text-[34px] font-bold">Esther Howard</h3>
            <p className="mt-3 font-medium lg:text-[16px] xl:text-[24px]">Founder</p>
        </div>
        <div className="rounded-xl bg-white shadow-darkbox p-4">
            <Image src="/Avatar-green.png" alt="Cody Fisher Avatar" height={376} width={393.32}></Image>
            <h3 className="mt-5 text-2xl lg:text-[20px] xl:text-[34px] font-bold">Cody Fisher</h3>
            <p className="mt-3 font-medium lg:text-[16px] xl:text-[24px]">Developer</p>
        </div>
        <div className="rounded-xl bg-white shadow-darkbox p-4">
            <Image src="/Avatar-neutral.png" alt="Cody Fisher Avatar" height={376} width={393.32}></Image> 
            <h3 className="mt-5 text-2xl lg:text-[20px] xl:text-[34px] font-bold">Brooklyn Simmons</h3>
            <p className="mt-3 font-medium lg:text-[16px] xl:text-[24px]">Designer</p>
        </div>
        </div></div>
  )
}

export default Team