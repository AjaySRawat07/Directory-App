import Button from "./Button"

const DisplayUsers = ({user}) => {
  return (
    <div className="flex justify-between items-center border-b border-t border-black px-6 py-3 bg-red-400 mt-2 text-white ">
      <div>{user.name}</div>
      <div>{user.dob}</div>
      <div>{user.aadharNo}</div>
      <div>{user.mobileNo}</div>
      <div>{user.age}</div>
      <Button handleClick={() => {}} title={"Delete"} />
      <hr />
    </div>
  );
}

export default DisplayUsers