import { useMemo, useEffect, useRef } from "react";
import { IPlayer } from "../../../../types";

interface Props {
  players: IPlayer[];
  setPlayers: (players: IPlayer[]) => void;
}

const SearchBox = ({ players, setPlayers }: Props) => {
  // Prevent the initial value from mutating on re-renders :)
  // eslint-disable-next-line
  const initialPlayers = useMemo(() => players, []);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // focus the input on mount
    inputRef?.current?.focus();
  });

  const handleSearch = (value: string) => {
    const SEARCH_VALUE_MIN_LENGTH = 2;

    if (value.length >= SEARCH_VALUE_MIN_LENGTH) {
      const filtredPlayers = players.filter(
        ({ firstname, lastname }) =>
          firstname.toLowerCase().includes(value) ||
          lastname.toLowerCase().includes(value)
      );

      if (filtredPlayers.length) {
        setPlayers(filtredPlayers);
      }

      return;
    }

    // reset initial data
    setPlayers(initialPlayers);
  };

  return (
    <div className="search-box">
      <input
        ref={inputRef}
        type="text"
        className="search-box__input"
        placeholder="Rechercher un joueur"
        onChange={(e) => handleSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBox;
