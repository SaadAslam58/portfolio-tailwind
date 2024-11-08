import ContactForm from '@/components/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div 
    style={{backgroundImage: "url(/img/bg-3.jpg)"}}  
    className='w-screen h-screen bg-cover bg-center flex items-center justify-center'>
     <div 
     style={{backgroundImage: "url(/img/atombg-comp.webp)"}}
     className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white'>
      <div className='absolute left-14 md:left-20 bottom-24 md:bottom-16 w-[70%] md:w-[30%]'>
         <ContactForm/>
      </div>
     </div>
    </div>
  )
}

export default page