import React,{useCallback, useState} from 'react'
import Card from './Card'

export default function Field() {
    const initialState = [
        {id: 1, uniqueId: 0, isFlipped: false},
        {id: 2, uniqueId: 1, isFlipped: false},
        {id: 3, uniqueId: 2, isFlipped: false},
        {id: 4, uniqueId: 3, isFlipped: false},
        {id: 1, uniqueId: 4, isFlipped: false},
        {id: 2, uniqueId: 5, isFlipped: false},
        {id: 3, uniqueId: 6, isFlipped: false},
        {id: 4, uniqueId: 7, isFlipped: false},
    ]

    const [cards, setCards] = useState(initialState)
    const [storedValue, setStoredValue] = useState([])

    // const match = useCallback((id)=>{
    //     if()
    // },[])

    const flip = ((uniqueId, id)=>{
        setCards([...cards, cards[uniqueId].isFlipped = !cards[uniqueId].isFlipped ])
        const newCards = [...cards]
        setCards([...newCards])
        console.log(cards);
        setStoredValue([id, ...storedValue])
    })
        console.log(storedValue);

    const matching = ()=>{
        if(storedValue.length == 2){
            if(storedValue[0] == storedValue[1]){
                const newCards = [...cards]
                newCards.filter((item)=> item.id !== id )
                setCards([...newCards])
                setStoredValue([])
            }else{
                setStoredValue([])
            }
        }
    }



    return (
        <div>
            {cards.map((item, index)=><div key={cards[index].uniqueId}><Card isFlipped={cards[index].isFlipped} id={cards[index].id} uniqueId={cards[index].uniqueId} flip={flip} match={matching}/></div> )}    
        </div>
    )
}
