import React, { useState } from "react";
import TabNavItem from "../UG/NavItems";
import TabContent from "../UG/NavContent";
import Coordinators from "./Coordinators";
import Coa from "./Coa";
import Mentors from "./Mentors";

export default function UG(){
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs grid grid-cols-6 gap-5">
      <div className="nav">
        <TabNavItem title="GS COA" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Coordinators" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Student Mentors" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      <div className="outlet col-span-5 p-4">
        <TabContent id="tab2" activeTab={activeTab}>
          <Coordinators></Coordinators>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Mentors></Mentors>
        </TabContent>
        <TabContent id="tab1" activeTab={activeTab}>
          <Coa></Coa>
        </TabContent>
      </div>
    </div>
  );
};