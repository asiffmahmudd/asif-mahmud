import React from 'react';
import './ContactSection.css';
import contactItems from './ContactInfos';
import ContactItem from './ContactItem';

const ContactSection = () => {
    return (
        <section className="contact-section section-padding" id="contact" data-aos="fade-down" data-aos-easing="ease-out-cubic"
        data-aos-duration="1200">
            <div className="container">
                <h5 className="text-center text-goldenrod">Contact me</h5>
                <h2 className="text-white text-center mb-3">Ways To Contact Me</h2>
                <p className="text-center text-white col-md-6 mx-auto mt-3">I am active on LinkedIn and also available on gmail and Facebook. You can also find me on Whatsapp in the given number. Just give me a message and I will respond as soon as possible</p>
                <div className="cstm-border-container d-flex justify-content-center mb-5">
                    <span className="cstm-brdr"></span>
                </div>
                <div className="row justify-content-center">
                    {
                        contactItems.map((contactItem,index) => <ContactItem key={index} contactItem={contactItem}></ContactItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ContactSection;