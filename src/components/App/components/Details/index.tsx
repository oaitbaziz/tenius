import { IPlayer } from "../../../../types";
import { useEffect } from "react";

interface Props {
  homeRef: React.Ref<HTMLElement>;
  details: IPlayer;
  toggleDetails: (details: IPlayer | undefined) => void;
}

const Details = ({
  details: {
    firstname,
    lastname,
    picture,
    country: { code, picture: countryPicture },
    data: { rank, points, age, weight, height },
  },
  toggleDetails,
}: Props) => {
  useEffect(() => {
    // Close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleDetails(undefined);
      }
    };

    document.addEventListener("keyup", handleEscape);

    return () => document.removeEventListener("keyup", handleEscape);
  });

  return (
    <div className="details-modal" title="details">
      <button
        className="close"
        title="close details"
        onClick={() => {
          toggleDetails(undefined);
        }}
      >
        <span className="close__line"></span>
        <span className="close__line"></span>
      </button>
      <div className="details-modal__content">
        <img className="details-modal__picture" src={picture} alt="" />
        <div className="details-modal__inner">
          <div className="details-modal__inner-wrapper">
            <div className="details-modal__header">
              <h2 className="details-modal__name">
                <span
                  className="details-modal__firstname"
                  data-firstname={firstname}
                >
                  {firstname}
                </span>
                <span className="details-modal__lastname">{lastname}</span>
              </h2>
              <div className="details-modal__country">
                <img src={countryPicture} alt="country" />
                <span className="details-modal__country-name">{code}</span>
              </div>
            </div>
            <div className="details-modal__body">
              <div className="details-modal__info">
                <div className="details-modal__block">
                  <h5 className="subtitle">Rank</h5>
                  <p className="text">#{rank}</p>
                </div>
                <div className="details-modal__block">
                  <h5 className="subtitle">Points</h5>
                  <p className="text">{points}</p>
                </div>
                <div className="details-modal__block">
                  <h5 className="subtitle">Country</h5>
                  <p className="text">{code}</p>
                </div>
                <div className="details-modal__block">
                  <h5 className="subtitle">Age</h5>
                  <p className="text">{age}</p>
                </div>
                <div className="details-modal__block">
                  <h5 className="subtitle">Weight</h5>
                  <p className="text">{weight}</p>
                </div>
                <div className="details-modal__block">
                  <h5 className="subtitle">Height</h5>
                  <p className="text">{height}</p>
                </div>
              </div>
              <div className="details-modal__titles">
                <h5 className="subtitle">Career titles</h5>
                <div className="details-modal__title-year">
                  <p className="text">
                    2021 <span>- 5</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Indoor/Hard)</li>
                    <li>Wimbledon (Outdoor/Grass)</li>
                    <li>Roland Garros (Outdoor/Clay)</li>
                    <li>Belgrade 2 (Outdoor/Clay)</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
                <div className="details-modal__title-year">
                  <p className="text">
                    2020 <span>- 4</span>
                  </p>
                  <ul>
                    <li>ATP Masters 1000 Paris (Outdoor/Clay)</li>
                    <li>ATP Masters 1000 Cincinnati (Outdoor/Hard)</li>
                    <li>Dubai Outdoor/Hard</li>
                    <li>Australian Open (Outdoor/Hard)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
