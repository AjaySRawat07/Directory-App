
const AddPerson = () =>{
    return(
        <div>
            <div>
                <button>Selected Bar</button>
            </div>
            <div className="grid grid-cols-6 justify-evenly">
                <h2 className="border border-black px-2">Name</h2>
                <h2 className="border border-black px-2">Date of birth</h2>
                <h2 className="border border-black px-2">Aadhar Number</h2>
                <h2 className="border border-black px-2">Mobile Number</h2>
                <h2 className="border border-black px-2">Age</h2>
                <h2 className="border border-black px-2">Actions</h2>
            </div>
        </div>
    )
}

export default AddPerson;