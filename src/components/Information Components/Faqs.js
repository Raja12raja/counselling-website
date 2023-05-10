import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Faqs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} >
        <AccordionHeader onClick={() => handleOpen(1)} 
        className={`border-b-0 transition-colors ${
          open === 1 ? "active "
          : "hover:text-indigo-600" }`}>
          When is counselling relevant for me as a student?
        </AccordionHeader>
        <AccordionBody className="text-black">
        Student life is full of challenges. Mostly we are able to cope with these as we go along. Sometimes however we may find that our academics, friends of family are posing odds that we find too complex to deal with creating emotional imbalances and stress. This may be the time when counselling sessions may prove useful and relevant in helping us find solutions to our problems.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}
        className={`border-b-0 transition-colors ${
          open === 1 ? "active "
          : "hover:text-indigo-600" }`}>
          What kind of help can a student expect from a counsellor?
        </AccordionHeader>
        <AccordionBody>
          A counsellor is a sounding board, a confidant and an expert at emotional and circumstantial problem solving. Whether a problem comes suddenly as a crises or has been present for a long time, it can be looked into and helped. The counsellor builds a supportive environment and slowly helps a person build inner resources that enable effective coping.
        </AccordionBody>
      </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "active "
            : "hover:text-indigo-600" }`}>
            Is sharing with a friend the same as sharing with a counsellor?
          </AccordionHeader>
          <AccordionBody>
            Sharing with friends is both useful and natural. Sometimes sharing is enough and helps automatically. However if after repeated sharing one still feels overwhelmed with one's problems counselling may be a better alternative to seek. 
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "active "
            : "hover:text-indigo-600" }`}>
          Is going to a counsellor a sign of weakness or insanity?
          </AccordionHeader>
          <AccordionBody>
          Absolutely not. We all need help time and again so that we can be happy and well adjusted. A counsellor functions with this understanding and it helps if the counselee sees the process as normal and useful too. Unnecessary fears and stigma is a sign of lack of information about the counselling process and are best ignored. 
          </AccordionBody>
        </Accordion>
    </Fragment>
  );
}
