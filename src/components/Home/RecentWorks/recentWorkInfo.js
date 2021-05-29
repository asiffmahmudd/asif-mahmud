import reduxBookshelf from '../../../img/recentWorks/redux-bookshelf.png'
import restCountries from '../../../img/recentWorks/countries.JPG';
import emaJohn from '../../../img/recentWorks/ema-john.JPG';
import transportFare from '../../../img/recentWorks/transport-fare.png';
import tripAdvisor from '../../../img/recentWorks/trip-advisor.png';
import volunteer from '../../../img/recentWorks/volunteer-network.png';

const recentWorks = [
    {
        title: "Redux Bookshelf",
        img: reduxBookshelf,
        live: "https://redux-bookshelf.web.app/",
        gitClient: "https://github.com/asiffmahmudd/redux-book-shelf",
        gitServer: "https://github.com/asiffmahmudd/redux-bookshelf-server",
        technologies: "React, Redux, Express, NodeJs, MongoDB, Bootstrap, JSX, CSS, Firebase, Heroku",
        desc: "A bookshelf management system. You can add different books on different lists depending on the status."
    },
    {
        title: "Ema-John",
        img: emaJohn,
        live: "https://ema-john-10238.web.app/",
        gitClient: "https://github.com/asiffmahmudd/ema-john-simple",
        gitServer: "https://github.com/asiffmahmudd/ema-john-server",
        technologies: "React, HTML, CSS, Bootstrap, Firebase, MongoDB",
        desc: "An e-commerce site where you can buy different gadgets and accessories"
    },
    {
        title: "Rest Countries",
        img: restCountries,
        live: "https://boring-aryabhata-445861.netlify.app/",
        gitClient: "https://github.com/asiffmahmudd/rest-countries",
        technologies: "Rest Countries API, React, HTML, CSS, Bootstrap",
        desc: "You can search for different countries and see their infos"
    },
    {
        title: "Transport Fare",
        img: transportFare,
        live: "https://jovial-beaver-bf6a7a.netlify.app/",
        gitClient: "https://github.com/asiffmahmudd/transport-fare",
        technologies: "React, HTML, CSS, Bootstrap, Firebase, MongoDB",
        desc: "A site where you can find the fare of different vehicles depending on the routes in Dhaka"
    },
    {
        title: "Trip Advisor",
        img: tripAdvisor,
        live: "https://travel-agency-a2b4d.web.app/",
        gitClient: "https://github.com/asiffmahmudd/travel-agency",
        gitServer: "https://github.com/asiffmahmudd/travel-agency-server",
        technologies: "React, HTML, CSS, Bootstrap, Firebase, MongoDB, stripe",
        desc: "This site gives advice on trips planning and other stuffs. You can book an appointment for a particular service and see your bookings on the user panel"
    },
    {
        title: "Volunteer Network",
        img: volunteer,
        live: "https://volunteer-network-67cb1.web.app/",
        gitClient: "https://github.com/asiffmahmudd/volunteer-network",
        gitServer: "https://github.com/asiffmahmudd/volunteer-network-server",
        technologies: "React, HTML, CSS, Bootstrap, Firebase, MongoDB",
        desc: "A site where you can register for different volunteer activities"
    }
]

export default recentWorks;