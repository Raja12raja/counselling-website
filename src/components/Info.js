import React,{ useState } from 'react';
import TabContent from './About Us Components/Teams/coordinators/NavContent';
import NavItem from '../components/Information Components/NavItems';
import Parents from './Information Components/Parents';
import Faculty from './Information Components/Faculty';
import Activities from './Information Components/Activities';
import Process from './Information Components/Process';
import Faqs from './Information Components/Faqs';
import External from './Information Components/external';

export default function Info() {
  const [activeTab,setActiveTab]=useState("1");

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <h2 className="max-w-lg py-10 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            INFORMATION
            </h2>
            <div class="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1 sm:px-0 px-6 gap-5">
              <NavItem
                title="Note For Faculty Members"
                id="1"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavItem
                title="Note For Parents"
                id="2"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavItem
                title="Activities"
                id="3"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavItem
                title="Counselling Process"
                id="4"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavItem
                title="FAQs"
                id="5"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavItem
                title="External Links"
                id="6"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div class="shadow-xl border border-gray-100 font-light p-8 rounded text-gray-700 bg-white mt-6">
              <TabContent id="1" activeTab={activeTab}>
                <Faculty></Faculty>
              </TabContent>
              <TabContent id="2" activeTab={activeTab}>
                <Parents></Parents>
              </TabContent>
              <TabContent id="3" activeTab={activeTab}>
                <Activities></Activities>
              </TabContent>
              <TabContent id="4" activeTab={activeTab}>
                <Process></Process>
              </TabContent>
              <TabContent id="5" activeTab={activeTab}>
                <Faqs></Faqs>
              </TabContent>
              <TabContent id="6" activeTab={activeTab}>
                <External></External>
              </TabContent>
            </div>
    </div>
  );
}