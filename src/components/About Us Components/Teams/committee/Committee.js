import React, { useState } from "react";
import TabNavItem from "./NavItems";
import TabContent from "./NavContent";
import FCC from "./FCC";
import SCC from "./SCC";

export default function Coordinators() {
  const [activeTab, setActiveTab] = useState("tab2");

  return (
    <div className="Tabs sm:grid sm:grid-cols-5 sm:gap-5">
      <div className="nav flex flex-col items-center sm:items-start">
        <TabNavItem
          title="Faculty Counselling Coordinators"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Student Counselling Coordinators"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="outlet col-span-4 p-4">
        <TabContent id="tab2" activeTab={activeTab}>
          <FCC></FCC>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <SCC></SCC>
        </TabContent>
      </div>
    </div>
  );
}
