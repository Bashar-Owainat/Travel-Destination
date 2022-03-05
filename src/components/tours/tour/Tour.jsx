import "../tour/Tour.css"
import { Link } from "react-router-dom";

function Tour({ name, image, id}) {
    console.log(name, image, id);


    return (
        <>

            {


                <Link to={"/city/" + id} >
                    <h3>{name}</h3>
                    <img src={image} alt="" />
                </Link>
                    
                
            }

        </>
    )
}

export default Tour;