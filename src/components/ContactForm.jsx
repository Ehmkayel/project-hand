"use client"
import { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [url, setUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { name, email, website: url}
    
        console.log(formData)
    };

    return (
        <form onSubmit={handleSubmit} className='lg:w-full'>
            <h3 className='text-center xl:text-right text-xl lg:text-[25px] xl:text-[44px] font-bold leading-3 lg:leading-[60.1px] mb-5 break-words lg:max-w-[368px]'>We'd love to hear from you</h3>
            <div className='border py-5 rounded-lg px-5 mb-5'>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required  className="w-full lg:w-auto"/>
            </div>
            <div className='border py-5 rounded-lg px-5 mb-5'>
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full lg:w-auto"
                />
            </div>
            <div className='border py-5 rounded-lg px-5 mb-5'>
                <label htmlFor="website">Website Url*</label>
                <input type="text" id="website" value={url} onChange={(e) => setUrl(e.target.value)} required className="w-full lg:w-auto"/>
            </div>
            <div className='border rounded-lg px-5 mb-5 text-start p-2 '>
                <label htmlFor="message">Project Details*</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows="5" cols="50" className="w-full lg:w-auto" />
            </div>
            <div className="flex justify-center ">
                <a href type="submit" className="bg-black text-white py-5 px-8 rounded-lg lg:w-full">Send Proposal</a>
            </div>
        </form>

    );
};

export default ContactForm;
