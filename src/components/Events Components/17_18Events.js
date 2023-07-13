import { EventsCard } from "../Events Components/EventsCard";
import '../Events Components/events.css';
export const Event2k1718 = [
    {
        title:"An event was organized to create awareness and sensitization for mental health issues and enhance positive well-being on 9th September 2017.",
        desc: "The Event consisited of: ",
        talk: "An Expert Talk on “The Individual and the institution - the nature and scope of student growth” by Dr. Shekher Seshadri, psychiatrist and Head of the Department of Child and Adolescent Psychiatry in NIMHANS, Bangalore, India.",
        details: "An institution needs to appreciate that students are not an amorphous mass of humanity when they enter the college gate. They are individuals who come from their unique universes, each with her limitations and troubles. Recognizing that a student in a class is troubled for whatever reason, calls for acknowledging her unique individuality and alert sensitivity on part of the teacher. This is not to say that parents need not develop this sensitivity. It’s just that a college system shouldn’t encourage the idea that the validity of a person depends only on academic excellence.",
        activities: "Screening of a short film on suicide awareness “Suicide - It's not an option”- by ‘Cinephiles’ movie-making club of IIT Indore. Street Play - by ‘Aaina’ the dramatics club of IIT Indore. Prize Distribution - for poetry, story writing, and poster competitions organized by Literary Club and Kalakriti."
      },
      {
        title:"An event was organized to create awareness and sensitization of mental health issues for the IIT Indore community on 27th October 2018",
        desc: "The Event consisted of: ",
        talk: "An Expert Talk on “Building Resilience- encouraging positive mental health” by Dr. Ashutosh Singh, Consultant Psychiatrist & De-Addiction Specialist at Apollo Hospitals, Indore.",
        details: "As many as 5 crore people in India suffer from depression, according to a report by the World Health Organisation. Suicide is 2nd leading cause of death in the 15-30 years age group, after road accidents. Increasing awareness about depression, early identification, and effective treatment can help reduce this silent epidemic in the young Indian population.",
      },
]
export default function Eventk1718(){				
  <div className="eventsPage">
  {Event2k1718.map((news, index) => {
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