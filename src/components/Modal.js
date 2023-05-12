import React, {useState} from "react";
import {modalsdata} from "../components/modals_data";
import {ModalsCard} from '../components/modal_card.js';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    return(
      <>
        <button
        className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
        >
        EVENTS
        </button>
        {showModal ? (
        <>
           <div className="flex justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
               <div className="relative w-auto my-6 mx-auto max-w-3xl">
                   <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                       <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                           <h3 className="text-3xl font=semibold">Events under the Counselling Cell</h3>
                           <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={() => setShowModal(false)}
                           >
                    <span className="text-black opacity-7 h-6 w-6 text-xl mx-0.5 block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  {modalsdata.map((news, index) => {
                    return (
                      <ModalsCard
                        className="text-justify"
                        title={news.title}
                        date={news.date}
                        key={index}
                        name={news.name}
                        link={news.link || ""}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      </>
    );
};

export default Modal;