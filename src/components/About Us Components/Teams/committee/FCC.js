import React from 'react'
import CommitteeCard from './CommitteeCard'
import{
  appina,
  girish,
  chandresh,
  kaustav,
  abhinav,
  amit,
  chandan,
  kedarmal,
  mirza,
  naresh,
  swadesh
} from '../../../../Images';

export default function FCC() {
  return (
    <div className='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-2'>
      <CommitteeCard name="Dr. Appina Balasubramanyam" department="Discipline of Electrical Engineering" email="appina@iiti.ac.in"  image={appina}/>
      <CommitteeCard name="Dr. Girish Chandra Verma" department="Discipline of Mechanical Engineering" email="girish.verma@iiti.ac.in" image={girish}/>
      <CommitteeCard name="Dr. Chandresh kumar Maurya" department="Discipline of Computer Science & Engg." email="chandresh@iiti.ac.in" image={chandresh}/>
      <CommitteeCard name="Dr. Kaustav Bakshi" department="Discipline of Civil Engineering" email="kaustav.bakshi@iiti.ac.in" image={kaustav}/>
      <CommitteeCard name="Dr. Abhinav Raghuwanshi" department="Discipline of Chemistry" email="r.abhinav@iiti.ac.in" image={abhinav}/>
      <CommitteeCard name="Dr. Amit Shukla" department="Discipline of Astronomy" email=" amit.shukla@iiti.ac.in" image={amit}/>
      <CommitteeCard name="Dr. Chandan Halder" department="Discipline Metallurgy Engineering and Material Science" email=" chalder@iiti.ac.in" image={chandan}/>
      <CommitteeCard name="Dr. Kedarmal Verma" department="Humanities and Social Sciences" email="kverma@iiti.ac.in" image={kedarmal}/>
      <CommitteeCard name="Dr. Mirza S. Baig" department="Discipline of Biosciences & Biomedical Engg." email="msb.iit@iiti.ac.in" image={mirza}/>
      <CommitteeCard name="Dr. Naresh Kumar Kumawat" department="Discipline of Physics" email="nkumawat@iiti.ac.in" image={naresh}/>
      <CommitteeCard name="Dr. Swadesh Kumar Sahoo" department="Discipline of Mathematics" email="swadesh@iiti.ac.in" image={swadesh}/>
  </div>
  )
}
