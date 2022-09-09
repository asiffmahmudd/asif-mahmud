import { /*faSkype,*/ faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const contactInfos = [
    {
        icon: faEnvelope,
        info: "asifmahmud3472@gmail.com",
        action: "mailto:asifmahmud3472@gmail.com"
    },
    {
        icon: faPhone,
        info: "+14373391076",
        action: "tel:+14373391076"
    },
    {
        icon: faFacebook,
        info: "Asif Mahmud",
        action: "https://www.facebook.com/asiffmahmudd/"
    },
    // {
    //     icon: faSkype,
    //     info: "live:asifmahmud3472",
    //     action: "skype:live:asifmahmud3472?chat"
    // },
]

export default contactInfos;