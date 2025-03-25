import './Card.css';

function Card(props){
    return<div className='Card'>
        {props.childern}
    </div>;
}

export default Card;