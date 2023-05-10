import carousel1 from '../../Images/young-family-teenage-boy-office-family-therapist-psychologist-vector-flat-cartoon-illustration-psychotherapy-165822058.jpg';
import carousel2 from '../../Images/online-psychotherapy-1585671734500 1.jpg';
import carousel3 from '../../Images/istockphoto-1288914845-612x612.jpg';
import carousel4 from '../../Images/clipart-doctor-counselling.png';
import React from "react";

import { Carousel, Typography} from "@material-tailwind/react";
 
export default function carousel() {
  return (
    <Carousel className="rounded-xl carousel">
      <div className="relative height  w-full">
        <img
          src={carousel2}
          alt="1"
          className="object-fill h-full w-full rounded-md"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative height w-full">
        <img
          src={carousel1}
          alt="2"
          className="object-fill h-full w-full rounded-md"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative height w-full">
        <img
          src={carousel3}
          alt="3"
          className="object-fill h-full w-full rounded-md"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
        </div>
      <div className="relative height w-full">
        <img
          src={carousel4}
          alt="4"
          className="object-fill h-full w-full rounded-md"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}