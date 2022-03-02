
import data from "./data/db.json";

import Home from "./components/home/Home";
function App() {

    return (
        <>
        <Home tours={data}/>
        </>
    )
};

export default App;