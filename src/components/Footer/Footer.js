import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const form = useRef();
  const rotate=()=>{
    transform:'rotateX(90deg)'
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3tx8t3h', 'template_podnb0j', form.current, 'oSSjkDOKSkcDvaJbi')
      .then((result) => {
          console.log(result.text);
          toast.success("Mail sent successfully!",{position:'bottom-center'});
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
<form ref={form} onSubmit={sendEmail} className='Form'>
  <h1>Write me something!</h1>
      <input type="text" name="user_name" placeholder="Enter your name" className='bull'/>
      <input type="email" name="user_email" placeholder="What's your email?" className='bull'/>
      <textarea name="message" placeholder='your message...' className='mess' />
      <input type="submit" value="Send"  className='Button' onClick={rotate()}/>
      <ToastContainer/>
    </form>
    <div className='futer'>
      <p>vishalbhati294@gmail.com</p>
      <p>+91-8572862193</p>
      <SocialIcons href="https://github.com/vshalbhati">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vishal-bhati-06uk/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram/vshalbhati_294">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </div>
    </div>

  );
};

export default Footer;
