import React from 'react'
import CommitteeCard from './CommitteeCard';
import{
  harshwardhan,
  purna,
  shubham,
}
from '../../../../Images';
export default function SCC() {
  return (
    <div className='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-2'>
      <CommitteeCard name="Mr. Harshwardhan Chaube" department="Student Coordinator for UG Students" email="ee200002039@iiti.ac.in" image={harshwardhan}/>
      <CommitteeCard name="Ms. Purna Kukadiya" department="Student Coordinator for Ph.D." email="phd2101102005@iiti.ac.in" image={purna}/>
      <CommitteeCard name="Mr. Shubham Alte" department="Student Coordinator for PG Students" email="msc2203141012@iiti.ac.in" image={shubham}/>
    </div>
  )
}
