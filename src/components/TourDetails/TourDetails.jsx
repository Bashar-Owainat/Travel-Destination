import { useParams } from "react-router-dom";
import Header from "../header/Header";


function TourDetails({ tours }) {
    console.log(tours, "Tour Details")
    
    const { id } = useParams();
    console.log();
    return (
        <>
        <Header/>
            <h1>Tour Details </h1>
            {

                tours.map((e) => {
                     if(e.id == id){
                        return (
                            <>

                            <p> {e.name}</p>
                            <img src={e.image} alt="" />
                            <p>Description: {e.info}</p>
                            <p>Price: {e.price}</p>
                            </>
                            )
                        }
                })
            }



        </>
    )
}

export default TourDetails;