import React from 'react';
import wmhd from '../Images/World_mental_health_day.png';
import august_29 from '../Images/seminar_29_august.png';
import august_7 from '../Images/Seminar_7_august.png';
import august_6 from '../Images/Seminar_6_august.png';
import feb_12 from '../Images/webinar_12_feb.png';
import dec_6 from '../Images/meet_dec_6.png';

export default function Events() {
  return (
    <div className="mx-1.5 my-1">
      <h1 className="title-font sm:text-4xl text-3xl font-semibold text-black md:px-16 my-10 text-center md:text-left">
        Counselling Services
        <br className="inline-block"/>
        <span className="font-medium sm:text-3xl text-2xl">IIT Indore</span>
      </h1>
      <div className='lg:container mx-auto flex md:px-16 px-10 md:flex-row flex-col items-center'>
        <p className="leading-relaxed lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          The Counselling center is involved in student life at the campus through different levels of interactive processes that are all over seen and 
          directed by the counsellor herself. <br/><br/>
          The Counselling center’s mental health activities focus on early Identification & intervention, as well as prevention of mental health 
          problems of students. Individual counselling sessions are conducted by the counsellor for the students who seek help on their own or are 
          referred. The referrals usually come from Institute Medical officers, and Academic office .The volunteers and Gymkhana members also share 
          mental health concerns of their peers with the counsellor.<br/><br/>
          For new students and parents the orientation programme itself is the time where the counselling center is introduced and its various 
          functions highlighted by the counsellor. Counsellor herself observes and interacts with new students in the institute and hostel campus in 
          formal and informal settings by visiting them during their labs, tutorials, free slots etc.<br/><br/>
          The student volunteers of the center and student Gymkhana members also help freshers by extending their helping hand both for academic and 
          non-academic concerns. The center facilitates the peer tutoring classes where students help and each other with academic difficulties in 
          topics.
        </p>
      </div>
      <h2 className="max-w-lg py-10 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
        EVENTS
      </h2>
      <div className='my-12 mx-16'>
        <h3 className='text-bold text-lg underline decoration-double'>
          World Mental Health Day programme on 13th and 14th October 2022
        </h3>
        <p>
          The Event consisited of Expert Talks by Vijendra Singh,  MD (Psychiatry)- HOD, Department of Psychiatry at All India Institute of 
          Medical Sciences (AIIMS) Bhopal, Dr Lilavati Krishnan, a retired professor of psychology from the Department of Humanities & Social 
          Sciences, IIT Kanpur and Dr Ashutosh Singh, MBBS, DNB (Psychiatry), Consultant Psychiatrist & De-Addiction Specialist at 
          Apollo Hospitals, Indore. The events also had competitions for the IITI community such as the Poster Making Competition and Digital 
          Logo Making Competition.
        </p>
        <img src={wmhd} alt='World Mental Health Day'/>
      </div>
      <div className='my-12 mx-16'>
        <h3 className='text-bold text-lg underline decoration-double'>
          Seminar for IIT Community on 29th august, 2022 
        </h3>
        <p>
          The Seminar started by an expert talk by Dr Meghna Verma, Associate Professor at Ramaiah Institute of Management, Bengaluru on the 
          topic- "How to drive productivity under tough circumstances." This was followed by a plantation drive with the speaker.
        </p>
        <img src={august_29} alt='World Mental Health Day'/>
      </div>
      <div className='my-12 mx-16'>
        <h3 className='text-bold text-lg underline decoration-double'>
          Expert Talk for PG and PhD students on 7th august, 2022 
        </h3>
        <p>
          The Seminar started by an expert talk by Ms. SashiRekha, Mumbai Based Psychotherapist and Life Coach with over 25 years’ experience in the field on the 
          topic- "Mind, Matter and Me" a workshop on self-management.”
        </p>
        <img src={august_7} alt='World Mental Health Day'/>
      </div>
      <div className='my-12 mx-16'>
        <h3 className='text-bold text-lg underline decoration-double'>
          Expert Talk for UG students on 6th august, 2022 
        </h3>
        <p>
          The Seminar started by an expert talk by Ms. SashiRekha, Mumbai Based Psychotherapist and Life Coach with over 25 years’ experience in the field on the 
          topic- "Managing Self, Stressors and Student Life- The Theory of Almost Everything."
        </p>
        <img src={august_6} alt='World Mental Health Day'/>
      </div>
      <div className='my-12 mx-16'>
        <h3 className='text-bold text-lg underline decoration-double'>
          A webinar on 12th February, 2022 
        </h3>
        <p>
          The Seminar started by an expert talk by Professor Pradeep. R. Bijwe, Ex- IIT Delhi on the 
          topic- “Be joyful to be successful.” 
        </p>
        <img src={feb_12} alt='World Mental Health Day'/>
      </div>
      <div className='my-12 mx-16'>
        <h3 className='text-bold text-lg underline decoration-double'>
          Online meeting with Student Mentors on 6th December, 2021 
        </h3>
        <p>
          The meeting was facilitated by the Counselor, IITI and General secretary of Counseling, Outreach and Alumni. 
        </p>
        <img src={dec_6} alt='World Mental Health Day'/>
      </div>
      <div className='my-12 mx-16'>
        <h3 className='text-bold text-lg underline decoration-double'>
          Webinar on 1st November 2020
        </h3>
        <p>
          The meeting was facilitated by the Counselor, IITI and General secretary of Counseling, Outreach and Alumni. 
        </p>
        <img src={dec_6} alt='World Mental Health Day'/>
      </div>
    </div>
  );
}