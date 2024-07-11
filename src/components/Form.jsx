import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import UserDataContext from "../contexts/UserDataContext";

const Form = ({ setIsFormActive }) => {
  const { usersData, setUsersData } = useContext(UserDataContext);
  const [userData, setUserData] = useState({
    name: "",
    dob: "",
    aadharNo: "",
    mobileNo: "",
    age: 0,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const addUser = () => {
    const age = new Date().getFullYear() - new Date(userData.dob).getFullYear();
    console.log("Age", age);
    console.log("dob", userData.dob);
    setUserData({ ...userData, age });
    setUsersData([...usersData, userData]);
    setIsFormActive(false);
    setUserData({ name: "", dob: "", aadharNo: "", mobileNo: "", age: "" });
  };

  useEffect(() => {
    if (userData.name && userData.dob && userData.aadharNo && userData.mobileNo) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [userData.name, userData.dob, userData.aadharNo, userData.mobileNo]);

  return (
    <div className="w-full bg-blue-600 py-1 mt-4 border border-black">
      <h1 className="text-center text-white">Fill Form for below Entry</h1>
      <div className="flex justify-center gap-1 items-center">
        <input
          required
          type="text"
          placeholder="Name"
          value={userData.name}
          onChange={(e) => {
            const name = e.target.value;
            setUserData({ ...userData, name });
          }}
        />
        <input
          required
          type="date"
          value={userData.dob}
          onChange={(e) => {
            const dob = e.target.value;
            setUserData({ ...userData, dob });
          }}
        />
        <input
          required
          type="number"
          placeholder="Aadhar Number"
          value={userData.aadharNo}
          onChange={(e) => {
            const aadharNo = e.target.value;
            setUserData({ ...userData, aadharNo });
          }}
        />
        <input
          required
          type="number"
          placeholder="Mobile Number"
          value={userData.mobileNo}
          onChange={(e) => {
            const mobileNo = e.target.value;
            setUserData({ ...userData, mobileNo });
          }}
        />
        <input type="number" disabled placeholder="Age" />
        <Button
          title={"Save"}
          handleClick={addUser}
          className={"bg-transparent text-sm underline"}
          disabled={!isFormValid}
        />
      </div>
    </div>
  );
};

export default Form;
