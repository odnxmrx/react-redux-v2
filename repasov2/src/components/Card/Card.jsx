import { Link } from "react-router-dom";

const Card = ({id, name, image}) => {
    return(
        <div>
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            </Link>
        </div>
    )
}

export default Card;