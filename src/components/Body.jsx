import RetrieveInfo from "./RetrieveInfo";
import Button from "./Button";
import AddPerson from "./AddPerson";
import { useState } from "react";

const Body = () => {
  const [isAddPersonActive, setIsAddPersonActive] = useState(true);
  return (
    <div className="w-full px-20 h-5/6 py-6">
      <div className="w-full flex gap-10 mb-4">
        <Button
          title={"Add New Person"}
          handleClick={() => setIsAddPersonActive(true)}
        />
        <Button
          title={"Retrieve Information"}
          handleClick={() => setIsAddPersonActive(false)}
        />
      </div>
      <div className="border border-black h-full relative">
        <div className="border-b border-r w-fit px-5 py-2 border-black">
          {isAddPersonActive ? "Add New Person" : "Retrieve Information"}
        </div>
        {isAddPersonActive ? <AddPerson /> : <RetrieveInfo />}
        
      </div>
    </div>
  );
};

export default Body;
