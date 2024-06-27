import Image from "next/image"
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center mt-10 lg:mt-20 xl:mt-60">
        <div className="">
          <Image src="/contactImage.png" alt="Cody Fisher Avatar" height={891} width={622}></Image>
            </div>
            <div className="max-w-screen-lg mx-auto px-4">
            <ContactForm/>
              
              </div></div>
  )
}

export default Contact