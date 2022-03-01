

function Tours(props){
console.log(props, "props")
    return(
        <>
            {
            props.tours.map((e) =>{
                return(
                    <div>
                       <p>{e.name}</p> 
                       <img src={e.image} alt="" />
                    </div>
                )
            })
            }
        </>
    )
}

export default Tours;