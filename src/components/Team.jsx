import Image from "next/image"

const Team = () => {
  return (
    <div className="pt-30 lg:p:15">
        <div className="mt-30">
        <h3 className="text-center text-2xl font-bold lg:text-[44px] pb-8 lg:pb-50">Meet the heroes behind the magic</h3>
        </div>
      
    <div class="flex flex-col lg:flex-row gap-10 pt-30">
        <div class="rounded-xl bg-white shadow-xl p-4">
            <Image src="/Avatar-pink.png" alt='Esther Howard Avatar' height={376} width={393.32}></Image>
            <h3 className="mt-5 text-2xl lg:text-[34px] font-bold">Esther Howard</h3>
            <p className="mt-3 font-medium text-[24px]">Founder</p>
        </div>
        <div class="rounded-xl bg-white shadow-xl p-4">
            <Image src="/Avatar-green.png" alt="Cody Fisher Avatar" height={376} width={393.32}></Image>
            <h3 className="mt-5 text-2xl lg:text-[34px] font-bold">Cody Fisher</h3>
            <p className="mt-3 font-medium text-[24px]">Developer</p>
        </div>
        <div class="rounded-xl bg-white shadow-xl p-4">
            <Image src="/Avatar-neutral.png" alt="Cody Fisher Avatar" height={376} width={393.32}></Image> 
            <h3 className="mt-5 text-2xl lg:text-[34px] font-bold">Brooklyn Simmons</h3>
            <p className="mt-3 font-medium text-[24px]">Designer</p>
        </div>
        </div></div>
  )
}

export default Team