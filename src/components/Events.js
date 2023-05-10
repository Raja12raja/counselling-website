import React from 'react';
import wmhd from '../Images/World_mental_health_day.png';
import august_29 from '../Images/seminar_29_august.png';
import august_7 from '../Images/Seminar_7_august.png';
import august_6 from '../Images/Seminar_6_august.png';
import feb_12 from '../Images/webinar_12_feb.png';
import dec_6 from '../Images/meet_dec_6.png';

export default function Events() {
	return (
		<>
			<div className="eventsPage pt-3 mt-3 mb-3 bg-light font-ubuntu container-fluid">
				<h2 className="max-w-lg text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center pt-2">
				EVENTS
				</h2>				
				<div>
					{data.map((news, index) => {
						return (
							<EventsCard
								className="text-justify"
								img={news.image}
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
			</div>
		</>
	);
};
