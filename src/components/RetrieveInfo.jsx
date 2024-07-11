import { useContext, useState } from "react";
import Button from "./Button";
import UserData from "./UserData";
import UserDataContext from "../contexts/UserDataContext";

const RetrieveInfo = () => {
  const [searchedData, setSearchedData] = useState({});
  const [searchedId, setSearchedId] = useState("");
  const { usersData } = useContext(UserDataContext);

  const findUser = () => {
    const user = usersData.find((u) => u.aadharNo === searchedId);
    console.log("user found", user);
    if (!user) alert("User not found");
    setSearchedData({ ...user });
    console.log("searchedData",searchedData);
  };

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };
  return (
    <div>
      <div className="pl-20 pt-10 flex gap-10">
        <input
          type="number"
          className="border border-black py-3 w-96"
          value={searchedId}
          onChange={(e) => setSearchedId(e.target.value)}
        />
        <Button title={"Find"} handleClick={findUser} className={"w-28"} />
      </div>
      <div className="mt-10 flex justify-center">
        {isEmpty(searchedData) ? (
          <h1 className="text-3xl font-bold">No Data</h1>
        ) : (
          <UserData user={searchedData} />
        )}
      </div>
    </div>
  );
};

export default RetrieveInfo;
