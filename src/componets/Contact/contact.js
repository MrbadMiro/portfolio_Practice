// import React, { useRef } from 'react'
// import './contact.css';
// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
// import FacebookIcon from '../../assets/facebook-icon.png';
// import TwitterIcon from '../../assets/twitter.png';
// import YouTube from '../../assets/youtube.png';
// import InstagramIcon from '../../assets/instagram.png';
// import emailjs from '@emailjs/browser';


// const Contact = () => {
//   const form = useRef;
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_bmib3ap', 'template_1v8hrvn', form.current, 'Ta7QZ9PqrZUQ3D3Nt_J4u')
//         .then((result) => {
//            console.log(result.text);
//           e.target.reset();
//           alert('Email sent!');
//         }, (error) => {
//           console.log(error.text);
//         });
//   };

//   return (
//     <section id="contactPage">
//       <div id="clients">
//         <h1 className='contactPageTitle'>My Clients</h1>
//         <p className="clientDesc">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa est
//           aspernatur dignissimos, dolor ratione aliquid reprehenderit quas vitae enim corrupti nostrum, assumenda
//           dolorem. Asperiores suscipit ullam qui voluptatibus? Incidunt, perferendis.
//         </p>
//         <div className="clientImgs">
//           <img src={Walmart} alt="" className='clientImg' />
//           <img src={Adobe} alt="" className='clientImg' />
//           <img src={Microsoft} alt="" className='clientImg' />
//           <img src={Facebook} alt="" className='clientImg' />
//         </div>
//       </div>
//       <div id="contact">
//         <h1 className="contactPageTitle">Contact Me</h1>
//         <span className="contactDesc">Please fill out the form bellow to discuss any work opportunities</span>
//         <form className='ContactForm'   ref={form} onSubmit={sendEmail}>
//           <input type="text" className="name" placeholder='Your Name' name='your_name'/>
//           <input type="email" className="email" placeholder='Your mail' name='your_email' />
//           <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
//           <button type="submit" value="send" className="submitBtn">Submit</button>
//           <div className="links">
//             <img src={FacebookIcon} alt="Facebook" className='link' />
//             <img src={TwitterIcon} alt="twitter" className='link' />
//             <img src={YouTube} alt="youtube" className='link' />
//             <img src={InstagramIcon} alt="instagram" className='link' />
//           </div>

//         </form>

//       </div>
//     </section>
//   )
// }

// export default Contact

import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTube from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bmib3ap', 'template_1v8hrvn', form.current, 'Ta7QZ9PqrZUQ3D3Nt_J4u')
      .then((result) => {
           console.log(result.text);
           e.target.reset();
           alert('Email sent!');
      }, (error) => {
           console.log(error.text);
      });
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className="clientDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa est
          aspernatur dignissimos, dolor ratione aliquid reprehenderit quas vitae enim corrupti nostrum, assumenda
          dolorem. Asperiores suscipit ullam qui voluptatibus? Incidunt, perferendis.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="" className='clientImg' />
          <img src={Adobe} alt="" className='clientImg' />
          <img src={Microsoft} alt="" className='clientImg' />
          <img src={Facebook} alt="" className='clientImg' />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form bellow to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name' />
          <input type="email" className="email" placeholder='Your email' name='your_email' />
          <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className='link' />
            <img src={TwitterIcon} alt="twitter" className='link' />
            <img src={YouTube} alt="youtube" className='link' />
            <img src={InstagramIcon} alt="instagram" className='link' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
