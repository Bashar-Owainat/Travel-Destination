

function Tours({ tours }) {
    
    return (
        <>
            {
                tours.map((e) => {
                    return (
                        <div key={e.id}>
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