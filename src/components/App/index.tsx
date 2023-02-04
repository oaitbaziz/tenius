import { useState, useRef } from "react";
import { IPlayer } from "types";

import { Player, SearchBox, Details } from "./components";

interface Props {
  data: {
    players: IPlayer[];
  };
}

const App = ({ data }: Props) => {
  const [players, setPlayers] = useState(data.players);
  const [details, setDetails] = useState<IPlayer | undefined>(undefined);

  const homeRef = useRef<HTMLElement>(null);

  const toggleDetails = (details: IPlayer | undefined) => {
    homeRef?.current?.classList.toggle("details-is-open");

    if (details) {
      setDetails(details);
      return;
    }

    setDetails(undefined);
  };

  return (
    <main ref={homeRef} className="global home">
      <div className="container">
        <div className="players">
          <SearchBox players={players} setPlayers={setPlayers} />

          {players.length && (
            <div className="player-list">
              {players.map(({ ...player }) => (
                <Player
                  key={player.id}
                  {...player}
                  toggleDetails={toggleDetails}
                />
              ))}
            </div>
          )}

          {details && (
            <Details
              homeRef={homeRef}
              details={details}
              toggleDetails={toggleDetails}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
