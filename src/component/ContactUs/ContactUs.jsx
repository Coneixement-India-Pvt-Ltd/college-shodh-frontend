import React from 'react'

function ContactUs() {
    const emailAddress = 'coneixementindia@gmail.com';
    const emailStyle = {
        color: 'blue',
      };
  return (
    <>
    <div className='border border-black-800 rounded-lg p-1 mt-5 mb-5 ml-10 mr-10 hover:shadow-lg'>
      <h1 className="text-2xl font-serif font-bold text-gray-800 mt-10 mb-1">About Us</h1>
      <p className='text-gray-700'>Have a question? Need Some Help?</p>
      <p className='text-gray-700'>Any suggestion and feedback is welcome.</p>
      <p className='text-gray-700'>We would love to hear from you..</p>
      <h3 className='font-bold text-gray-700 mb-1 mt-3'>WE ARE LOCATED AT</h3>
      <p className='text-xs'>Coneixement India Private Limited</p>
      <p className='text-xs'>Galorte Tech Park, Bavdhan</p>
      <p className='mt-3 text-gray-700'>For any queries contact us on</p>
      <p className='font-bold text-gray-700 mt-1 mb-10'>
        EMAIL:{' '}
        <a href={`mailto:${emailAddress} `}>
        <span style={emailStyle}>{emailAddress}</span>
        </a>.
      </p>

      </div>
    </>
    
  )
}

export default ContactUs
