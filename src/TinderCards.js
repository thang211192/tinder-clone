import React,{useState, useEffect} from 'react'
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'
import database from './firebase';


function TinderCards() {
    const [people, setpeople] = useState([]);

    useEffect(() => {
      const unsubscribe = database.collection('people').onSnapshot(snapshot => (
           setpeople(snapshot.docs.map(doc => doc.data()))
       ));
       return () => {
           unsubscribe();
       }
    }, [])

    console.log('people: ', people);
    return (
        <div>
            <div className='tinderCards__cardContainer'>
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}

                >
                    <div 
                    style={{backgroundImage:`url(${person.url})`}}
                    className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
