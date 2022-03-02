
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";



function Home({tours}){
console.log("test");
 
    return(
        
        <>
        <Header/>
        <Tours tours={tours} />
        <Footer/>
        </>
    )
}

export default Home;