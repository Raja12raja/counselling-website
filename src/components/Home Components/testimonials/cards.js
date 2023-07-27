import React from 'react'
import { Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Content from "./content";
import { render } from 'react-dom';

export default function Cards(props) {

  return (
        <div className="w-full relative flex items-center justify-center px-0" style={{display: "flex",flexDirection: "row-reverse"}}>
                        <ButtonNext role="button" aria-label="slide backward" className="z-30 left-0 ml-8 cursor-pointer" id="next">
                        <svg width={15} height={25} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className={"h-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700" + props.diff}>
                                    <Slide index={0}>
                                        <Content name="Ishaan Mittal"/>
                                    </Slide>
                                    <Slide index={1}>
                                        <Content name="Shagun Ghatak"/>
                                    </Slide>
                                    <Slide index={2}>
                                        <Content name="Mihir"/>
                                    </Slide>
                                    <Slide index={3}>
                                        <Content name="Aditi Ganvir"/>
                                    </Slide>
                                    <Slide index={4}>
                                        <Content name="Tarun Soni"/>
                                    </Slide>
                                    <Slide index={5}>
                                        <Content name="Mukul Jain"/>
                                    </Slide>
                                    <Slide index={6}>
                                        <Content name="Tarun Balaji"/>
                                    </Slide>
                                    <Slide index={7}>
                                        <Content/> 
                                    </Slide>
                                    <Slide index={8}>
                                        <Content/>
                                    </Slide>
                                    <Slide index={9}>
                                        <Content/>
                                    </Slide>
                                    <Slide index={10}>
                                        <Content/>
                                    </Slide>
                                    <Slide index={11}>
                                        <Content/>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonBack role="button" aria-label="slide forward" className="z-30 right-0 mr-8" id="prev">
                        <svg width={15} height={25} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                    </div>
  )
}