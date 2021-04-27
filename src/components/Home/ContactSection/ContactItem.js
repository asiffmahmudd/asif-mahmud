import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactItem.css';

const ContactItem = ({contactItem}) => {
    return (
        <div className="contact-item col-lg-4  mt-3">
            <a href={contactItem.action} target="_blank" rel="noreferrer" className="align-items-center d-flex justify-content-center bg-cstm pt-4 pb-4 item-container">
                <FontAwesomeIcon icon={contactItem.icon} color="white" size="2x"/>
                <span className="text-goldenrod ml-4 cstm-underline"> {contactItem.info}</span>
            </a>
        </div>
    );
};

export default ContactItem;