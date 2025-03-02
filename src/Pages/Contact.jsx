import React from 'react';
import { useRef } from 'react';

function Contact() {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jasvfy4dj1.execute-api.ap-south-1.amazonaws.com/default/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name.current.value,
          "email": email.current.value,
          'message': message.current.value,
        }),
      });
      const result = await response.json();
      console.log(result);

      // Reset form fields after submission
      name.current.value = '';
      email.current.value = '';
      message.current.value = '';

      alert("Message sent successfully!");

    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <div className='w-screen h-fit min-h-screen pt-20 p-[10%] bg-[#f5f5f7]'>
      <div className='w-full flex flex-col md:flex-row items-center justify-center space-y-10'>
        <div className='md:w-[40%] w-full flex flex-col md:mr-10 space-y-10'>
          <div className='flex flex-col w-fit'>
            <p className='text-2xl'>Drop a message at:</p>
            <p>Phone Number: +91 - 947 000 4041</p>
            <p>Email: adityabanka@gmail.com</p>
          </div>

          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='name' className='font-semibold'>Enter your name</label>
            <input ref={name} type='text' id='name' placeholder='John Doe' className='w-full rounded-lg border-2 border-slate-400 p-2' required />

            <label htmlFor='email' className='font-semibold mt-4'>Enter your Email-Id</label>
            <input ref={email} type='email' id='email' placeholder='johndoe@gmail.com' className='w-full rounded-lg border-2 border-slate-400 p-2' required />

            <label htmlFor='message' className='font-semibold mt-4'>Enter your message</label>
            <textarea ref={message} id='message' placeholder="What a lovely site you've made, I would like to offer you a job at [insert company name here]." className='w-full h-50 rounded-lg border-2 border-slate-400 p-2' required />

            <button type='submit' className='w-full rounded-lg border-2 border-slate-400 p-2 bg-sky-600 text-white hover:bg-black mt-4'>Submit</button>
          </form>
        </div>

        <div className='md:w-[60%]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
