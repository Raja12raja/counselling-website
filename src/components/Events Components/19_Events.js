import { EventsCard } from "../Events Components/EventsCard";
import '../Events Components/events.css';
export const Event2k19 = [
    {
        title:"An interactive meeting between first year students of B.Tech 2019 and their parents with a respective faculty advisor and student mentors on 24th July 2019 during the orientation programme.",
        desc: "Interaction of B. Tech. 2019 batch students and their parents with respective faculty advisors and student mentors were facilitated by counselling cell during the orientation program on 24th July 2019, to introduce IIT, Indore to the new students and their parents and to enable the students to get acquainted with the new environment at IIT, Indore.",
        talk: "",
        details: "",
        activities: ""
    },
    {
        title:"Counselling cell, in association with the Office of the Dean of student affairs, organized a training session on mentorship for student mentors on 9th September 2019.",
        desc: "The Event consisted of: ",
        talk: "Training Session - “A perspective on the roles and the impact of mentors on the lives of students” by Dr. Satasuryaa.",
        details: "These training sessions help the student mentors to get acquainted with their duties, responsibilities, and their importance in the life of the students they mentor. A mentor is a person that unfetters us from our self-doubts and aids us in becoming confident people and realizing our true potential.",
        activities:"",
    },
    {
        title:"An interactive meeting between Dr Alok Bajpai and the Core group of student mentors on 18th October 2019.",
        desc:"A meeting was held for student mentors to understand their roles and responsibilities, during this meeting mentors discussed their concerns with Dr. Alok Bajpai, in turn, Dr. Bajpai introduced them to the methods which helps them during dealing with the issues faced by their mentees.",
        talk:"",
        details:"",
        activities:"",
    },
    {
        title:"A mental health awareness programme on 19th October 2019.",
        desc:"The Event consisted of: ",
        talk:"“Is Mind Trainable?” by Dr. Alok Bajpai, Psychiatrist trained at NIMHANS, Bangalore, and part of Counselling Cell, IIT Kanpur and “Depression, why can’t we still identify it in time?” by Dr. Ashutosh Singh, Consultant Psychiatrist & De-Addiction Specialist at Apollo Hospitals, Indore.",
        details:"The event aimed at raising awareness and addressing the stigma related to mental health issues. It was an enriching session, where experts shared their thoughts and strategies to enhance inner resources and improve positive well-being, to prevent and early identify various mental health problems. The panel discussion provided an interactive platform for the participants to understand the wider range of concerns related to everyday stress. Dr Bajpai's talk was mainly focused on the exploration of the inner resources which helps a person to focus on their abilities to resolve their issues, Dr. Ashutosh Singh talked about the identification and treatment of depression.",
        activities:"An interesting panel discussion between participants and experts. Street Play by ‘Aaina’ the dramatics club of IIT Indore. Screening of a short film over anxiety by the ‘Cinephiles’ movie-making club of IIT Indore. Followed by Prize Distribution for various competitions as part of the programme."
    },
]
export default function Eventk1718(){				
  <div className="eventsPage">
  {Event2k19.map((news, index) => {
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