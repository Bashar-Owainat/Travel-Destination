import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer"
import "../TourDetails/TourDetails.css";

function TourDetails({ tours }) {
    console.log(tours, "Tour Details")

    const { id } = useParams();
    console.log();
    return (
        <>
            <Header />
            <h1>Tour Details </h1>
            {

                tours.map((e) => {
                    if (e.id == id) {
                        return (
                            <div id="details">

                                <h3> {e.name}</h3>
                                <p>Description: {e.info}</p>
                                <img src={e.image} alt="" />
                                <p>Price: {e.price}</p>

                            </div>
                        )
                    }
                })
            }

            <Footer/>

        </>
    )
}

export default TourDetails;