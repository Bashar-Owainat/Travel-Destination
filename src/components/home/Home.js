
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

import data from "../../data/db.json";

function Home(){
console.log("test");
 console.log(data);
    return(
        
        <>
        <Header/>
        <Tours tours={data} />
        <Footer/>
        </>
    )
}

export default Home;