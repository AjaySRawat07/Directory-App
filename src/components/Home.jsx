import Chart from "./Chart";

const Home = () => {
    return(
        <div>
            <h1 className="text-center py-6 px-4  bg-blue-300">Ajay Rawat Directory App</h1>
            <div>
                <button>Add New Person</button>
                <button>Retrieve Information</button>
            </div>
            <Chart/>
        </div>
    )
}

export default Home;