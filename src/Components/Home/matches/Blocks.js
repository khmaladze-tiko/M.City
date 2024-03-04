import React, { useState, useEffect } from "react";
// import { Slide } from "react-toastify";
import { Slide } from "react-awesome-reveal";
import { matchesCollection } from "../../../firebase"


const Blocks = () => {
    const [lastVisible, setLastVisible] = useState(null);
    const [matches, setMatches] = useState(null);

    useEffect(() => {
            if(!matches) {
                matchesCollection.get().then(snapshot => {
                    const lastVisible = snapshot.docs[snapshot.docs.length - 1];
                    const matches = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
        
                    setLastVisible(lastVisible);
                    setMatches(matches);
        
        
                }).catch(error => {
                    // showToastError(error)
                    console.log(error);
                }).finally(() => {
                    // setLoading(false);
                    console.log('final');
                })
            }
      }, [matches])

      console.log(matches);
  
    


    return(
        <div>
            hello
        </div>
    )


}

export default Blocks;