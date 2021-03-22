import React,{useCallback, useState} from 'react'
import Card from './Card'

export default function Field() {

    const [cards, setCards] = useState([{id: 1, sort: 85}, {id: 2, sort: 65}, {id: 3, sort: 35}, {id: 4, sort: 96}])

    const match = useCallback(()=>{

    },[])

    return (
        <div>
            {cards.map((item)=><div key={item.id}><Card id={item.id} match={match}/></div> )}    
        </div>
    )
}
