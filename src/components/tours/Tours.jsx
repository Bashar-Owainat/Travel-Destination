import Tour from "./tour/Tour";
import "../tours/Tours.css";
function Tours({ tours }) {
    console.log(tours)
    return (
        <>
            {
                tours.map(element => {
                    return (
                        <div key={element.id} id="container">
                            <Tour name={element.name} image={element.image} id={element.id} />
                        </div>
                    )
                })
            }

        </>


    )


}

export default Tours;