import React from 'react'
import { Link } from 'react-router-dom'

export default function Activities() {
  return (
    <div className='sm:mx-3'>
        <p>
        The Counselling center is involved in student life at the campus through different levels of interactive processes that are all over seen and directed by the counsellor herself.
        </p>
        <br/>
        <p>
        The Counselling center's mental health activities focus on early Identification & intervention, as well as prevention of mental health problems of students. Individual counselling sessions are conducted by the counsellor for the students who seek help on their own or are referred. The referrals usually come from Institute Medical officers, and Academic office .The volunteers and Gymkhana members also share mental health concerns of their peers with the counsellor.
        </p>
        <br/>
        <p>
        For new students and parents the orientation programme itself is the time where the counselling center is introduced and its various functions highlighted by the counsellor. Counsellor herself observes and interacts with new students in the institute and hostel campus in formal and informal settings by visiting them during their labs, tutorials, free slots etc.
        </p>
        <br/>
        <p className='mb-4'>
        The student volunteers of the center and student Gymkhana members also help freshers by extending their helping hand both for academic and non-academic concerns. The center facilitates the peer tutoring classes where students help and each other with academic difficulties in topics.
        </p>
        <div className="pt-5 border-t border-gray-500">
          <Link to="/events" class="hover:underline text-indigo-600">Event Gallery</Link>
        </div>
    </div>
  )
}
