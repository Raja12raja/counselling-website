import { EventsCard } from "../Events Components/EventsCard";
import '../Events Components/events.css';
export const Event2k2021= [
    {
        title:"A webinar on enhancing concentration in online learning on 13th September 2020.",
        desc: "The Event consisted of: ",
        talk: "An Expert Talk on “Enhancing concentration and overcoming distractions during online learning” by Mr. Amal M. Das, Entrepreneur, Motivational Speaker, Author, Educationalist, Mentor, and alumnus of BTECH (Hons.), IIT Kharagpur.",
        details: "Covid Pandemic had brought up uncertainties in life. It requires a peaceful mind to be able to deal with situations. Through an intriguing and eye-opening story, Mr. Amal talked about ‘What is Real Peace’ and what you need to do to embrace peace amidst uncertainties. Distractions are commonplace but how exactly do we get distracted? Through the ‘Conscious choice mechanism’, It’s a must to know to come out of the distraction trap. In the session, participants learned about how to focus and where to focus with two relatable practical examples from the day-to-day life of the students.",
        activities: ""
    },
    {
        title:"On the occasion of World Mental Health Day on 10th October, A webinar was organized with the motive of mental awareness during the Covid pandemic and afterward on 1st November 2020.",
        desc: "The Event consisted of: ",
        talk: "An Expert Talk on “Mental Health Awareness During Pandemic and Beyond” by Dr. Abhilash Balakrishnan, Consultant Psychiatrist, Forensicare, Melbourne, Australia, and Dr. Ashutosh Singh, Consultant Psychiatrist & De-Addiction Specialist at Apollo Hospitals, Indore.",
        details: "Covid-19 Pandemic had led to unprecedented changes in mental health. The fear and stigma of infection have caused an epidemic of anxiety across the globe. Isolation protocols have increased social distance, loneliness, and depression. The importance of mental health during the COVID-19 pandemic has been stressed by the World Health Organization (WHO). The webinar is focused on the impact of a pandemic on our mental health and how we can take care of specific emotional health concerns.",
        activities:"",
    },
    {
        title:"In addition to this, Counselor of the institute Ms. Monika Gupta conducts online sessions for the students.",
        desc:"Online group motivational sessions on “dealing with new normal and stress management” were conducted by the Institute Counselor for students in quarantine at the campus.",
        talk:"",
        details:"",
        activities:"",
    },
    {
        title:"An online meeting with student mentors on 6th December 2021. The facilitators of the meeting are the Counselor, IIT, Indore, and the General secretary of Counseling, Outreach, and Alumni.",
        desc:"",
        talk:"",
        details:"",
        activities:""
    },
]
export default function Eventk2021(){				
  <div className="eventsPage">
  {Event2k2021.map((news, index) => {
    return (
      <EventsCard
        className="text-justify"
        title={news.title}
        text={news.desc}
        date={news.date}
        key={index}
        name={news.name}
        link={news.link || ""}
      />
    );
  })}
  </div>
}