import React from 'react';
import AllYears from '../components/Events Components/Allyears';
import '../components/Events Components/events.css';

export default function Events() {
	return (
		<>
			<div className="eventsPage pt-3 mt-3 mb-3 bg-light font-ubuntu container-fluid">
				<h2 className="max-w-lg text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center pt-2">
				EVENTS
				</h2>
				<AllYears></AllYears>
			</div>
		</>
	);
};
