import { useContext, useState } from "react";
import UserDataContext from "../contexts/UserDataContext";
import Button from "./Button";
import Form from "./Form";
import DisplayUsers from "./DisplayUsers";

const AddPerson = () => {
  const { usersData } = useContext(UserDataContext);
  console.log("usersData", usersData);
  const [isFormActive, setIsFormActive] = useState(false);

  return (
    <div className="text-lg font-semibold h-screen">
      <div className="mx-10 h-3/5">
        <div className="flex justify-between items-center border border-black px-6 py-4 bg-blue-600 mt-6 text-white ">
          <h2 className="">Name</h2>
          <h2 className="">Date of birth</h2>
          <h2 className="">Aadhar Number</h2>
          <h2 className="">Mobile Number</h2>
          <h2 className="">Age</h2>
          <h2 className="">Actions</h2>
        </div>
        <div className="text-center max-h-[86%] border-r border-l border-b border-black py-4 overflow-y-scroll">
          {usersData.length === 0 && <h1>No Data</h1>}
          {usersData && usersData.map((user) => <DisplayUsers user={user} />)}
        </div>
        {isFormActive && <Form setIsFormActive={setIsFormActive} />}
      </div>
      <Button
        title={"Add"}
        handleClick={() => {
          setIsFormActive(true);
        }}
        className={"absolute w-20 bottom-4 right-4"}
      />
    </div>
  );
};

export default AddPerson;
