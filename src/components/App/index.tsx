import { useState } from "react";
import { IPlayer } from "../../types";
import { Player, SearchBox } from "./components";

interface Props {
  data: {
    players: IPlayer[];
  };
}

const App = ({ data }: Props) => {
  const [players, setPlayers] = useState(data.players);

  return (
    <main className="global home">
      <div className="container">
        <div className="players">
          <SearchBox players={players} setPlayers={setPlayers} />

          {players.length && (
            <div className="player-list">
              {players.map(({ ...player }) => (
                <Player key={player.id} {...player} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
