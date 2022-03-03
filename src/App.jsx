import { Routes, Route } from "react-router-dom";
import data from "./data/db.json";

import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails";

function App() {


    return (
        <>
        <Routes>
        <Route path="/" element={<Home tours={data}/>} /> 
        <Route path="/city/:id" element={<TourDetails tours={data}/>} />

        </Routes>
        </>
    )
};

export default App;