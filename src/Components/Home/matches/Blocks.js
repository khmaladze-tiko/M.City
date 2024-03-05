import React, { useState, useEffect } from "react";
// import { Slide } from "react-toastify";
import { Slide } from "react-awesome-reveal";
import { matchesCollection } from "../../../firebase"
import MatchesBlock from "../../Utils/matches_block";



const Blocks = () => {
    // const [lastVisible, setLastVisible] = useState(null);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
            if(!matches.lenght > 0) {
                matchesCollection.get().then(snapshot => {
                    // const lastVisible = snapshot.docs[snapshot.docs.length - 1];
                    const matches = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
        
                    // setLastVisible(lastVisible);
                    setMatches(matches);
        
        
                }).catch(error => {
                    // showToastError(error)
                    console.log(error);
                })
                // .finally(() => {
                //     // setLoading(false);
                //     console.log('final');
                // })
            }
      }, [matches]);

  
    const showMatches = (matches) => (
        matches ? 
            matches.map((match) => (
                <Slide bottom key={match.id} className="item" triggerOnce>
                    <div>
                        <div className="wrapper">
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            ))
        :
        null
    )


    return(
        <div className="home_matches">
            {showMatches(matches)}
        </div>
    )


}

export default Blocks;