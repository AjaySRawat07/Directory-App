import { useState } from "react";
import Button from "./Button";
import UserData from "./UserData";

const RetrieveInfo = () => {
  const [searchedData, setSearchedData] = useState("");
  return (
    <div>
      <div className="pl-20 pt-10 flex gap-10">
        <input type="number" className="border border-black py-3 w-96" />
        <Button title={"Find"} handleClick={() => {}} />
      </div>
      <div className="mt-10 flex justify-center">
        {!searchedData ? (
          <h1 className="text-3xl font-bold">No Data</h1>
        ) : (
          <UserData />
        )}
      </div>
    </div>
  );
};

export default RetrieveInfo;
