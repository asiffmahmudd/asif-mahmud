import React, {useState} from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ScrollButton.css';
  
const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
  
    const scrollToTop = () =>{
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    
    window.addEventListener('scroll', toggleVisible);
  
    const scrollStyle = {
        visibility: visible ? 'visible' : 'hidden', 
        opacity: visible ? 1 : 0,
    }

    return (
        <span style={scrollStyle}  className="scroll-btn" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} color="goldenrod" />
        </span>
    );
}
  
export default ScrollButton;