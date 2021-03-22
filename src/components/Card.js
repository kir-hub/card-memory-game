import React, {useState, useCallback} from 'react'

export default function Card(props) {
    const {id, match} = props
    const [isUnveil, setUnveil] = useState(false)
    const [isMatch, setMatch] = useState(false)

    const unveil = useCallback(()=>{
        setUnveil(prev => !prev)

    },[])


    return (
        <div onClick={unveil}>
            <h1>{isUnveil ? id : 'hide'}</h1>        
        </div>
    )
}
