import Card from './card'
function Tours({Tours, removeTour}){
    return (
        <div>
            <div>
            <h2>  Plan with love </h2>
            <div>
                {
                    tours.map((tour)=> {
                        return <card
                        {...tour} removeTour={removeTour}></card>
                    }) 

                }
            </div>
            </div>
        </div>
    )
}

export default Tours;