import React from "react";
import Featured from "./featured";
import MatchesHome from "./matches";
import MeetPlayers from "./meetPlayers";
import Promition from "./promotion";

const Home = () => {
    return(
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
            <MeetPlayers/>
            <Promition/>
        </div>

    )
}

export default Home;