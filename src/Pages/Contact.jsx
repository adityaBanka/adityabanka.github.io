import { useRef } from 'react';
// eslint-disable-next-line react/prop-types
function ImageLink({ image, link }) {
  return (
    <a href={link} target="_blank">
      <img src={image} className='w-[40px] h-auto drop-shadow-2xl'></img>
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
    <div className='flex flex-col bg-gray-100 min-h-screen py-20 md:pt-60 space-y-20 md:space-y-50 px-[5%] justify-center items-center'>

      <div className='flex flex-col justify-center items-start md:items-center space-y-5'>

        <h1 className='text-7xl font-bold text-gray-800'>Let&apos;s get in <span className='text-orange-600'>touch</span>, drop a <span className='text-orange-600'>message</span></h1>

        <div className="flex flex-row items-center justify-center space-x-5">
          <ImageLink
            link="https://github.com/adityaBanka"
            image="Logos/github-mark.svg"
          ></ImageLink>
          <ImageLink
            link="https://www.linkedin.com/in/adityabanka/"
            image="Logos/In-Blue-128@2x.png"
          ></ImageLink>
          <ImageLink
            link="https://www.instagram.com/adityabanka.ig/"
            image="Logos/Instagram_Glyph_Gradient.png"
          ></ImageLink>
          <ImageLink
            link="https://x.com/adityabankaX"
            image="Logos/logo-black.png"
          ></ImageLink>
        </div>

      </div>

      <div className='w-full md:w-180 p-[5%] md:p-[2%] bg-white/50 rounded-2xl drop-shadow-2xl text-gray-700 space-y-10'>

        <div className='flex flex-col-reverse md:flex-row space-y-5 space-y-reverse md:space-x-5 items-start justify-between md:bg-white/25 md:drop-shadow-2xl md:rounded-2xl md:p-[2%]'>
          <div className='flex flex-col space-y-1 text-2xl md:text-right'>
            <p className='text-3xl'>Reach directly to me at:</p>
            <p><span className='text-xl'>Phone/SMS: </span><span className='font-semibold'>+91 9470004041</span></p>
            <p><span className='text-xl'>Email: </span><span className='font-semibold'>adityabanka1947@gmail.com</span></p>
          </div>
          <img src="AdityaBankaContact.jpg" className='w-full md:w-[30%] h-auto rounded-2xl drop-shadow-2xl'></img>
        </div>

        <p className='text-xl'>Or fill out the <span className='text-3xl'>Contact form</span> below.</p>

        <form className='flex flex-col space-y-5' onSubmit={handleSubmit}>

          <div className='flex flex-col'>
            <label htmlFor='name'>Enter your name</label>
            <input ref={name} type='text' id='name' placeholder='John Doe' className='rounded-xl border-2 border-sky-600 p-2 focus:outline-orange-600 caret-orange-700' required />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='email'>Enter your Email-Id</label>
            <input ref={email} type='email' id='email' placeholder='johndoe@email.com' className='rounded-xl border-2 border-sky-600 p-2 focus:outline-orange-600 caret-orange-700' required />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='message'>Enter your message</label>
            <textarea ref={message} id='message' placeholder="What a lovely site you've made, I would like to offer you a job at [insert company name here]." className='h-30 rounded-xl border-2 border-sky-600 p-2 focus:outline-orange-600 caret-orange-700' required />
          </div>

          <button type='submit' className='rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 duration-100 text-xl p-2 mt-4'>
            Submit
          </button>
        </form>
      </div>

      {/* big letters and number and email */}
    </div>
  );
}

export default Contact;
