import { IPlayer } from "types";

interface Props extends IPlayer {
  toggleDetails: (details: IPlayer | undefined) => void;
}

const Player = (props: Props) => {
  const {
    firstname,
    lastname,
    picture,
    country: { code },
    data: { rank, points },
    toggleDetails,
  } = props;

  return (
    <div
      className="player-card"
      onClick={() => {
        toggleDetails(props);
      }}
    >
      <div className="player-card__img-box">
        <img src={picture} alt={`portrait ${firstname} ${lastname}`} />
      </div>
      <div className="player-card__details">
        <h3 className="player-card__title">{`${firstname} ${lastname}`}</h3>
        <div className="player-card__info">
          <div className="player-card__block">
            <h5 className="subtitle">Rank</h5>
            <p className="text">#{rank}</p>
          </div>
          <div className="player-card__block">
            <h5 className="subtitle">Points</h5>
            <p className="text">{points}</p>
          </div>
          <div className="player-card__block">
            <h5 className="subtitle">Country</h5>
            <p className="text">{code}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
