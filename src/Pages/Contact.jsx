import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
function ImageLink({ image, link }) {
  return (
    <a href={link} target="_blank">
      <img src={image} className='w-[45px] h-auto'></img>
    </a>
  )
}

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
    <div className='pt-20 not-md:pb-40 w-full bg-gray-100 flex flex-col md:justify-center items-start space-y-10 min-h-screen h-full'>

      <div className='mx-[10%] md:mx-[15%]'>
        <h1 className='text-7xl font-bold '>Drop a <span className='text-orange-600'>Message</span></h1>
      </div>

      <div className='w-full justify-center items-start flex md:flex-row-reverse flex-col not-md:space-y-10 animate-fade-in-up px-[5%] md:px-[15%] md:space-x-10 md:space-x-reverse'>

        <div className='w-full md:w-[80%] flex flex-col justify-center items-center space-y-10 bg-white/50 rounded-2xl p-[2%] drop-shadow-2xl'>

          <img src='AdityaBankaContact.jpg' className='lg:w-2/3 h-auto rounded-xl lg:rounded-2xl m-[1%] drop-shadow-2xl pointer-events-none select-none outline-1 outline-white/50'></img>
          <div className='flex flex-col text-gray-700 justify-center items-center text-center text-pretty m-5'>
            <h1 className='text-xl'>Reach directly via:</h1>
            <p>Phone/SMS: (+91) <span className='text-black font-semibold'>947 000 4041</span></p>
            <p>Email: <span className='text-black font-semibold'>adityabanka1947@gmail.com</span></p>
          </div>

          <div className='flex flex-row items-center justify-center space-x-5'>
            <ImageLink link="https://www.linkedin.com/in/adityabanka/" image="In-Blue-128@2x.png"></ImageLink>
            <ImageLink link="https://github.com/adityaBanka" image="github-mark.svg"></ImageLink>
            <ImageLink link="https://www.instagram.com/adityabanka.ig/" image="Instagram_Glyph_Gradient.png"></ImageLink>
            <ImageLink link="https://x.com/adityabankaX" image="logo-black.png"></ImageLink>
          </div>

        </div>

        <form className='w-full flex flex-col bg-white/50 rounded-2xl p-[5%] drop-shadow-2xl' onSubmit={handleSubmit}>
          <p className='md:visible mb-5 text-xl font-semibold'>Direct contact form (instant notification)</p>
          <label htmlFor='name' className='font-semibold'>Enter your name</label>
          <input ref={name} type='text' id='name' placeholder='John Doe' className='w-full rounded-lg border-2 border-slate-400 p-2' required />

          <label htmlFor='email' className='font-semibold mt-4'>Enter your Email-Id</label>
          <input ref={email} type='email' id='email' placeholder='johndoe@email.com' className='w-full rounded-lg border-2 border-slate-400 p-2' required />

          <label htmlFor='message' className='font-semibold mt-4'>Enter your message</label>
          <textarea ref={message} id='message' placeholder="What a lovely site you've made, I would like to offer you a job at [insert company name here]." className='w-full h-50 rounded-lg border-2 border-slate-400 p-2' required />

          <button type='submit' className='w-full rounded-lg border-2 border-slate-400 p-2 bg-sky-600 text-white hover:bg-black mt-4'>
            Submit
          </button>
        </form>

      </div>

    </div>
  );
}

export default Contact;
