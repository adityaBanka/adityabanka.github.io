import { useRef } from 'react';
// eslint-disable-next-line react/prop-types
function ImageLink({ image, link }) {
  return (
    <a href={link} target="_blank">
      <img src={image} className='w-[45px] h-auto drop-shadow-2xl'></img>
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
    <div className='pt-20 bg-gray-100 flex flex-col items-center justify-center space-y-20 px-[5%] md:px-[10%]'>

      <h1 className='w-full text-7xl font-bold text-start'>Drop a <span className='text-orange-600'>Message</span></h1>

      <div className='flex flex-col md:flex-row md:justify-between space-y-30 md:space-x-30'>

        <div className='p-[2%] flex flex-col justify-center items-center bg-white/50 rounded-2xl drop-shadow-2xl text-gray-700'>

          <img src='AdityaBankaContact.jpg' className='md:w-[95%] rounded-xl md:rounded-2xl drop-shadow-2xl'></img>

          <div className='flex flex-col justify-center items-center m-5'>
            <h1 >Reach directly via:</h1>
            <p>Phone/SMS: (+91) <span className='text-black font-semibold'>9470004041</span></p>
            <p>Email: <span className='text-black font-semibold'>adityabanka1947@gmail.com</span></p>
          </div>

          <div className='flex flex-row items-center justify-center space-x-5 m-5'>
            <ImageLink link="https://www.linkedin.com/in/adityabanka/" image="Logos/In-Blue-128@2x.png"></ImageLink>
            <ImageLink link="https://github.com/adityaBanka" image="Logos/github-mark.svg"></ImageLink>
            <ImageLink link="https://www.instagram.com/adityabanka.ig/" image="Logos/Instagram_Glyph_Gradient.png"></ImageLink>
            <ImageLink link="https://x.com/adityabankaX" image="Logos/logo-black.png"></ImageLink>
          </div>

        </div>


        <div className='w-full h-fit p-[2%] bg-white/50 rounded-2xl drop-shadow-2xl text-gray-700'>
        <form className='flex flex-col m-5' onSubmit={handleSubmit}>
          <p className='mb-5 text-xl font-semibold'>Direct contact form (instant notification)</p>
          <label htmlFor='name'>Enter your name</label>
          <input ref={name} type='text' id='name' placeholder='John Doe' className='rounded-xl border-2 border-slate-400 p-2' required />

          <label htmlFor='email' className='mt-4'>Enter your Email-Id</label>
          <input ref={email} type='email' id='email' placeholder='johndoe@email.com' className='rounded-xl border-2 border-slate-400 p-2' required />

          <label htmlFor='message' className='mt-4'>Enter your message</label>
          <textarea ref={message} id='message' placeholder="What a lovely site you've made, I would like to offer you a job at [insert company name here]." className='h-30 rounded-xl border-2 border-slate-400 p-2' required />

          <button type='submit' className='w-full rounded-xl border-2 border-sky-700 bg-sky-600 text-white font-semibold hover:bg-sky-700 duration-100 text-xl p-2 mt-4'>
            Submit
          </button>
        </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;
