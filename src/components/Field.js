import React,{useCallback, useEffect, useState} from 'react'
import Card from './Card'
import initialState from './CardsData'
import './styles/styles.css'


export default function Field() {

    const [cards, setCards] = useState(initialState)
    const [storedValue, setStoredValue] = useState([])
    const [leftCards, setLeftCards] = useState([...cards])
    const [notMatch, setNotMatch] = useState(false)
    
    const flip =(uniqueId, id)=>{
        setStoredValue([...storedValue, {id: id, uniqueId: uniqueId}]);
    }

    useEffect(()=>{
        matching()
    },[storedValue])
    
    const matching = ()=>{
        if(storedValue.length == 2){
            if(storedValue[0].id == storedValue[1].id && storedValue[0].uniqueId !== storedValue[1].uniqueId){
                const newCards = cards.filter((item)=> item.id !== storedValue[0].id)  
                setTimeout(()=>setCards([...newCards]),500 ) 
                setLeftCards([...newCards])
                setStoredValue([])
                clearTimeout(setTimeout(()=>setCards([...newCards]),500 ) )
            }else if(storedValue[0].id !== storedValue[1].id){
                setTimeout(()=> setCards([...leftCards]),500) 
                setTimeout(()=> setNotMatch(prev => !prev),500)
                setStoredValue([])
                clearTimeout(setTimeout(()=> setCards([...leftCards]),500))
                clearTimeout(setTimeout(()=> setNotMatch(prev => !prev),500))
            }
        }
    };

    return (
        <div className='parent'>
            {cards.map((item, index)=><div key={cards[index].uniqueId}><Card notMatch={notMatch}  id={cards[index].id} uniqueId={cards[index].uniqueId} flip={flip}  /></div> )}    
        </div>
    )
}
