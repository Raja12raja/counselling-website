import React, { useState } from "react";
import TabNavItem from "./NavItems";
import TabContent from "./NavContent";
import PG from "./PG";
import Coa from "./Coa";
import UG from "./UG";

export default function Coordinators() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs sm:grid sm:grid-cols-6 sm:gap-5">
      <div className="nav flex flex-col items-center sm:items-start">
        <TabNavItem
          title="GS COA"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="UG Team"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="PG Team"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="outlet col-span-5 p-4">
        <TabContent id="tab2" activeTab={activeTab}>
          <UG></UG>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <PG></PG>
        </TabContent>
        <TabContent id="tab1" activeTab={activeTab}>
          <Coa></Coa>
        </TabContent>
      </div>
    </div>
  );
}
