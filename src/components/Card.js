import React, {useState, useCallback, useEffect, useMemo} from 'react'
import cards from './CardsData'
import './styles/styles.css'

export default function Card(props) {
    const {id, uniqueId, flip,  notMatch} = props
    const [isUnveil, setUnveil] = useState(true)
    const [isMatch, setMatch] = useState(notMatch)

    const hideImg = 'https://static7.depositphotos.com/1257959/746/v/600/depositphotos_7461846-stock-illustration-playing-card-back-side-60x90.jpg'
    
    const unveil = useCallback(()=>{
        setUnveil(prev => !prev)
        flip(uniqueId, id)
    }) 

    useEffect(()=>{
        if(isUnveil){
            setUnveil(prev => !prev)
        }
    },[notMatch])
   
    return (
        <div  className={isMatch ? 'hide' : 'show'}>
            <img onClick={unveil} src={isUnveil ? id : hideImg}/>
        </div>
    )
}
