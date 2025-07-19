
import {useState} from 'react';
function card({id,image,name,info,price,removeTour}){
    const [readmore, setReadmore] = useState(false);
    const description = `${info.substring(0, 200)}....`

    function readmorehandler(){
        setReadmore(!readmore);
    }
    return (
        <div classname="card">
            <img src={image} className="image"></img>
            <div classname="tour-info">
            <div classname="tour-details">
                <h4 classname="tour-price">{price}</h4>
                <h4 classname="tour-name">{name}</h4>
            </div>

            <div classname="description">
                {description}
                < span classname="read-more" onClick={readmorehandler} > {readmore ? 'show less' : 'read more' } </span>

            </div>

            </div>
         

            <button classname="btn-red" onClick={() => removeTour(id)}> Not interested </button>
           
        </div>
       
        
    );

}

export default card;