import React, {useState, useCallback, useEffect, useMemo} from 'react'
import cards from './CardsData'

export default function Card(props) {
    const {id, match, isFlipped, uniqueId, flip} = props
    const [isUnveil, setUnveil] = useState(false)
    const [isMatch, setMatch] = useState(false)

    const unveil = useCallback(()=>{

        setUnveil(prev => !prev)
        match(id)
    },[])
console.log(uniqueId);

const multipleHandler = ()=>{
    
    flip(uniqueId, id)
    match()
}
    
    return (
        <div onClick={multipleHandler}>
            <h1> {isFlipped ? id : 'hide'}</h1>
        </div>
    )
}
