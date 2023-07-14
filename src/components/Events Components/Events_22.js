import { EventsCard } from "./EventsCard";
import '../Events Components/events.css';
export const Event2k22= [
    {
        title:"A webinar on how to make things joyful to be successful in our life on 12th February 2022.",
        desc: "The Event consisted of: ",
        talk: "“Be joyful to be successful” by Retired Prof. Pradeep R. Bijwe, department of electrical engineering, Indian Institute of Technology, Delhi.",
        details: "Prof. Bijwe explains the true purpose of life and the purpose of IIT education. Provides simple, practical, and minimum time-consuming suggestions for improving happiness and success in all spheres of life. Suggests an alternative to comparison and competition. Focuses on the growth mindset where you believe that you can improve in everything you wish to do. Recommends a balanced growth in which you seek academic excellence as well as hobbies, sports, and relationships.",
        activities: ""
    },
    {
        title:"A webinar on digital addiction on 24th March 2022.",
        desc: "The Event consisted of: ",
        talk: "An Expert Talk on “Digital Detox Dilemma” by Ms. Sashi Rekha T, Psychotherapist and Life Skills Coach, Mumbai.",
        details: " Nowadays dependency on devices is increasing day by day, in some cases, it turns into the compulsivity of device usage which is termed digital addiction. Based on her experience in the field from both India and Abroad, Ms. Sashi Rekha T. has delivered an eclectic witty approach to life skills development. She shares her insights into emotional and behavioral issues related to digital addiction and methods to overcome them.",
        activities:"",
    },
    {
        title:"An Expert Talk on techniques to overcome the stressors of student life on 6th August 2022.",
        desc:"The Event consisted of: ",
        talk:"An Expert Talk on “Managing Self, Stressors and Student Life – The Theory of Almost Everything” by Ms. Sashi Rekha T, Psychotherapist, and Life Skills Coach, Mumbai.",
        details:"Most competitive stress, social anxiety, and dysfunctional choices are generally the result of the thinking, assumption, and belief of a person. Techniques of Rational Emotive Behavioural Therapy are discussed with the student during the talk and participants learned how to implement it and overcome their stressors in life.",
        activities:"",
    },
    {
        title:"An Expert Talk on motivation and how to enrich life’s perspective on 7th August 2022.",
        desc:"The Event consisted of: ",
        talk:"An Expert Talk on “Mind, Matter and Me” by Ms. Sashi Rekha T, Psychotherapist and Life Skills Coach, Mumbai.",
        details:"Emotions and behaviors result from cognitive processes; if you change your cognitive processes, you can achieve different ways of feeling and behaving. In this talk, elegant techniques and exercises from cognitive behavior therapy were illustrated to the participants. The expert said these techniques and exercises will help the participant to develop self-insight, motivation, and an enriched perspective.",
        activities:""
    },
    {
        title:"A seminar on how to increase productivity in our life on 29th August 2022.",
        desc:"The Event consisted of: ",
        talk:"An Expert Talk on “How to drive productivity under tough circumstances” by Dr. Meghna Verma, Associate Professor at Ramaiah Institute of Management, Bengaluru.",
        details:"In our daily life we are required to be productive most of the time. It may be projects, assignments, or at work. Many things can affect our motivation and productivity. During this seminar, our expert speaker taught the participants how to stay motivated during the toughest time of their life and remain productive through activity-based learning. During this experts talked about how to be self-reliant, take their problems head-on and carve their own path of productivity.",
        activities:"A Plantation Drive with the expert speaker in IIT, Indore Campus.",
    },
    {
        title:"On the occasion of World Mental Health Day on 10th October, an event was organized for mental awareness and Well-being on 13th &14th October 2022.",
        desc:"The Event consisted of: ",
        talk:"An Expert Talk on “Understanding the Mental Health Issues in Professionals and Management Strategies” by Dr Vijender Singh, MD (Psychiatry)- HOD, Department of Psychiatry at All India Institute of Medical Sciences (AIIMS) Bhopal, “Self-esteem and Resilience in Mental Health: Making Life Personally Meaningful” by Dr Lilavati Krishnan, a retired professor of psychology from the Department of Humanities & Social Sciences, IIT Kanpur and “Mental Health issue: why can’t we still identify it in time?” by Dr Ashutosh Singh, MBBS, DNB (Psychiatry), Consultant Psychiatrist & De-Addiction Specialist at Apollo Hospitals, Indore.",
        details:"The theme of World Mental Health Day 2022 was “Making Mental Health and Wellbeing for a Global Priority” – WHO. The heart and Brain are vital organs of our body but still, we neglect the wounds of the second one. In this Talk, Dr Vijender Singh talked about how stress affects the productivity of a person and if persists it results in burnout. He said psychosocial interventions based on mindfulness or cognitive behavioral approaches, or problem-solving training, may be considered to reduce this problem. In the same series Rtd. Prof. Lilavati Krishnan ma’am spoke about Self-esteem and resilience in mental health, she talked about the ways to make life meaningful after that Dr Ashutosh Singh talked about the issues which affect the early identification of mental health problems. He also talked about the various surveys and schemes of the Indian Government regarding mental health. After finishing the talk, experts answered the concerns and doubts of the participants.",
        activities:"Logo Designing Competition organized by Counselling Cell and Gymkhana of IIT, Indore. Paint Your Perspective, an Art Competition organized by Counselling Cell and Gymkhana, and Kalakriti club of IIT, Indore. Prize Distribution for Logo Designing Competition and Paint Your Perspective competitions organized by Counselling Cell and Gymkhana, and Kalakriti club.",
    },
    {
        title:"Series of Interactive Faculty Advisor Meeting.",
        desc:"First Interactive Faculty Advisor meeting with first year BTech students of 2023 batch and their parents was organized on 27th October 2022, it aims to facilitate interaction between Faculty Advisors, Student Mentors, first year btech students and their parents.",
        talk:"Second Interactive Faculty Advisor meeting with  first year BTech students of 2023 batch was held on 1st December in which after meeting Director sir, Dean of Academic Affairs, Dean of student affairs and Head, Counselling services addressed to the students and answered their doubts and issues and given the tips for the preparation of the upcoming mid-semester examination.",
        details:"Third Interactive Faculty Advisor meeting with  first year BTech students and first year students of PG programme of 2022 batch was held on 17th February in which after a student mentor and faculty advisor meeting, Director sir addressed the students and answered their concerns.",
        activities:"",
    },
    {
        title:"Orientation of Counselling Cell with new Btech students was held on 25th – 26th November 2022.",
        desc:"",
        talk:"",
        details:"",
        activities:"",
    },
    {
        title:"The Counselling Cell team had organized a Time Management workshop for the students of Btech 2023 batch from 13th December to 16th December 2022.",
        desc:"",
        talk:"",
        details:"",
        activities:"",
    },
    {
        title:"A seminar on How much is too much screen use A psychological insight on 29th August 2022.",
        desc:"The Event consisted of: ",
        talk:"An Expert Talk on “How Much is Too Much Screen Use: A Psychological Insight” by Dr. Manoj Kumar Sharma , Professor at NIMHANS, Bengaluru.",
        details:"In the current context, digital addiction is becoming a growing problem. According to the article Digital Addiction: A conceptual overview of University of Nebraska “Digital Addiction is referred to an impulsive control disorder that involves the obsessive use of the digital devices, digital technologies, and digital platforms.” During this seminar expert talked about the various concerns related to the excessive usage of the devices such as zero inbox syndrome and  effective methods to stop excessive usage of the device and methods to identify how much is too much usage.",
        activities:"",
    },
]
export default function Eventk22(){
    return(				
        <div className="eventsPage">
        {Event2k22.map((news, index) => {
            return (
            <EventsCard
                className="text-justify"
                title={news.title}
                text={news.desc}
                talk = {news.talk}
                details = {news.details}
                activities = {news.activities}
                date={news.date}
                key={index}
                name={news.name}
                link={news.link || ""}
            />
            );
        })}
        </div>
    )
}