import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { getAllCharacters } from '../../redux/actions';
import Card from '../Card/Card'

const Cards = () => {

    const dispatch = useDispatch();

    const { allCharacters } = useSelector((state) => state);

    React.useEffect(() => { //ciclo de vida del componente
        dispatch(getAllCharacters()) //al montar el componente
    }, [])

    return (
        <>
            <h1>My Cards</h1>
            {
                allCharacters?.map((character) => {
                    return (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                        />
                    )
                })
            }
        </>
    )
}

export default Cards;