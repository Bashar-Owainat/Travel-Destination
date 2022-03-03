import "../tour/Tour.css"
import { Link } from "react-router-dom";

function Tour({ tours }) {
    console.log(tours);

    
    return (
        <>

            {
                tours.map((e) => {
                    return (
                        <Link to={"/city/"+e.id} >
                            <div id="container"key={e.id}>

                                <p>{e.name}</p>
                                <img src={e.image} alt="" />
                            </div>
                        </Link>
                    )
                })
            }

        </>
    )
}

export default Tour;