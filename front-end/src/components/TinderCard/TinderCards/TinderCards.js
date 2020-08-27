import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../../../service/firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);
  //Update people list
  //setPeople([...people,'newPeople1','newPeople1'])
  useEffect(() => {
    //this is where the code runs...
    const unsubscribe = database.collection("people").onSnapshot((snapShot) => {
      setPeople(snapShot.docs.map((doc) => doc.data()));
    });

    return () => {
      //this is the clean up...
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <div className="tinderCard_Container">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url('${person.url}')` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
