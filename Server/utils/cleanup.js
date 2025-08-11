const calendarData = require('../Model/availabilitySchema');
const Counselor = require('../Model/counselorSchema');

// Remove outdated availability data
const removeOutdatedData = async () => {
  try {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    
    // Check if the current time is after 12:10 AM
    if (currentHour > 0 || (currentHour === 0 && currentMinute >= 10)) {
      const currentDateStr = currentDate.toISOString().split('T')[0];
      
      await calendarData.deleteMany({ 
        date: { $lt: currentDateStr } 
      });
      console.log('Outdated data removed successfully.');
    } else {
      console.log('Cleanup skipped because it\'s before 12:10 AM.');
    }
  } catch (error) {
    console.error('Error removing outdated data:', error);
  }
};

async function addCounselors() {
  try {
    // Check if counselors already exist in the database
    const existingCounselors = await Counselor.find();
    
    if (existingCounselors.length === 0) {
      // Insert counselor data into the database
      await Counselor.insertMany([
        {
          img: "https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Deepesh Bansal",
          education: "professor",
          address: "iit indore",
          email: "me220003023@iiti.ac.in",
          phone: "934244244",
          counsellingType: "Community Counseling",
          credentials: "Ph.D. in Community Counseling",
          link: "https://calendar.google.com/calendar/embed?src=rt12122003%40gmail.com&ctz=Asia%2FKolkata",
          Description: "Dr. Deepesh is a compassionate Community Counselor with extensive experience in supporting individuals and communities. They provide a safe and non-judgmental space for clients to address mental health concerns and work towards positive change. With expertise in various counseling approaches, Dr. Deepesh empowers clients to gain insights, develop coping skills, and achieve emotional well-being."
        },
        {
          img: "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Raja",
          education: "professor",
          address: "iit indore",
          email: "mems220005041@iiti.ac.in",
          phone: "934244244",
          counsellingType: "Community Counseling",
          credentials: "Ph.D. in Community Counseling",
          link: "https://calendar.google.com/calendar/embed?src=rt12122003%40gmail.com&ctz=Asia%2FKolkata",
          Description: "Dr. Raja is a compassionate Community Counselor with extensive experience in supporting individuals and communities. They provide a safe and non-judgmental space for clients to address mental health concerns and work towards positive change. With expertise in various counseling approaches, Dr. Raja empowers clients to gain insights, develop coping skills, and achieve emotional well-being."
        },
        {
          img: "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "test3",
          education: "professor",
          address: "iit indore",
          email: "test3@gmail.com",
          phone: "934244244",
          counsellingType: "Community Counseling",
          credentials: "Ph.D. in Community Counseling",
          link: "https://calendar.google.com/calendar/embed?src=rt12122003%40gmail.com&ctz=Asia%2FKolkata",
          Description: "Dr. test3 is a compassionate Community Counselor with extensive experience in supporting individuals and communities. They provide a safe and non-judgmental space for clients to address mental health concerns and work towards positive change. With expertise in various counseling approaches, Dr. test3 empowers clients to gain insights, develop coping skills, and achieve emotional well-being."
        },
        {
          img: "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "test4",
          education: "professor",
          address: "iit indore",
          email: "test4@gmail.com",
          phone: "934244244",
          counsellingType: "Community Counseling",
          credentials: "Ph.D. in Community Counseling",
          link: "https://calendar.google.com/calendar/embed?src=rt12122003%40gmail.com&ctz=Asia%2FKolkata",
          Description: "Dr. test4 is a compassionate Community Counselor with extensive experience in supporting individuals and communities. They provide a safe and non-judgmental space for clients to address mental health concerns and work towards positive change. With expertise in various counseling approaches, Dr. test4 empowers clients to gain insights, develop coping skills, and achieve emotional well-being."
        }
      ]);
      console.log('Counselors seeded successfully');
    }
  } catch (err) {
    console.error('Error seeding counselors:', err);
  }
}

module.exports = {
  removeOutdatedData,
  addCounselors
};
