import React from 'react'
import CommitteeCard from './CommitteeCard'
import appina from '../../../../Images/Dr Appina Balasubramanyam.jpg'
import girish from '../../../../Images/Dr Girish Chandra Verma.jpg'
import chandresh from '../../../../Images/Dr Chandresh kumar Maurya.png'

export default function FCC() {
  return (
    <div className='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-2'>
    <CommitteeCard name="Dr. Appina Balasubramanyam" department="Discipline of Electrical Engineering" email="appina@iiti.ac.in"  image={appina}/>
    <CommitteeCard name="Dr. Girish Chandra Verma" department="Discipline of Mechanical Engineering" email="girish.verma@iiti.ac.in" image={girish}/>
    <CommitteeCard name="Dr. Chandresh kumar Maurya" department="Discipline of Computer Science & Engg." email="chandresh@iiti.ac.in" image={chandresh}/>
  </div>
  )
}
