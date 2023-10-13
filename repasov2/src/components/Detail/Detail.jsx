import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getCharacterDetail, cleanDetail } from "../../redux/actions"; //importo accion para poder hacer dispatch

const Detail = () => {

    const params = useParams(); // trae { id: 1 }
    //console.log(params)
    const dispatch = useDispatch();

    const { characterDetail } = useSelector(state => state);

    React.useEffect(() => {
        dispatch(getCharacterDetail(params?.id))
        //es necesario limpiar el estado al desmontar
        return () => dispatch(cleanDetail()); //simula el desmontaje
    }, [params?.id])

    return(
        <div>
            <h2>{characterDetail?.name}</h2>
            <p>Status: {characterDetail?.status}</p>
            <p>Specie: {characterDetail?.species}</p>
            <p>Gender: {characterDetail?.gender}</p>
            <p>Origin: {characterDetail?.origin?.name}</p>
            <img src={characterDetail?.image} alt={characterDetail?.name} />
        </div>
    )
}

export default Detail;