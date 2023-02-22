import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function DestinationPage() {
  const classHandler = useOutletContext();

  useEffect(() => {
    classHandler("destination");
  });

  const [moon, setMoon] = useState(true);
  const [mars, setMars] = useState(false);
  const [europa, setEuropa] = useState(false);
  const [titan, setTitan] = useState(false);

  const moonChange = () => {
    setMoon(true);
    setMars(false);
    setEuropa(false);
    setTitan(false);
  };
  const marsChange = () => {
    setMoon(false);
    setMars(true);
    setEuropa(false);
    setTitan(false);
  };
  const europaChange = () => {
    setMoon(false);
    setMars(false);
    setEuropa(true);
    setTitan(false);
  };
  const titanChange = () => {
    setMoon(false);
    setMars(false);
    setEuropa(false);
    setTitan(true);
  };

  return (
    <>
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <picture hidden={moon ? false : true} id="moon-image">
          <source
            srcSet="assets/destination/image-moon.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-moon.png" alt="the moon" />
        </picture>

        <picture hidden={mars ? false : true} id="mars-image">
          <source
            srcSet="assets/destination/image-mars.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-mars.png" alt="the planet mars" />
        </picture>

        <picture hidden={europa ? false : true} id="europa-image">
          <source
            srcSet="assets/destination/image-europa.webp"
            type="image/webp"
          />
          <img
            src="assets/destination/image-europa.png"
            alt="the planet europa"
          />
        </picture>

        <picture hidden={titan ? false : true} id="titan-image">
          <source
            srcSet="/assets/destination/image-titan.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-titan.png" alt="the moon titan" />
        </picture>

        <div
          className="tab-list underline-indicators flex"
          role="tablist"
          aria-label="destination list"
        >
          <button
            aria-selected={moon ? "true" : "false"}
            role="tab"
            aria-controls="moon-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex="0"
            data-image="moon-image"
            onClick={moonChange}
          >
            Moon
          </button>
          <button
            aria-selected={mars ? "true" : "false"}
            role="tab"
            aria-controls="mars-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex="0"
            data-image="mars-image"
            onClick={marsChange}
          >
            Mars
          </button>
          <button
            aria-selected={europa ? "true" : "false"}
            role="tab"
            aria-controls="europa-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex="0"
            data-image="europa-image"
            onClick={europaChange}
          >
            Europa
          </button>
          <button
            aria-selected={titan ? "true" : "false"}
            role="tab"
            aria-controls="titan-tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            tabIndex="0"
            data-image="titan-image"
            onClick={titanChange}
          >
            Titan
          </button>
        </div>

        <article
          className="destination-info flow"
          hidden={moon ? false : true}
          id="moon-tab"
          tabIndex="0"
          role="tabpanel"
        >
          <h2 className="fs-800 uppercase ff-serif">Moon</h2>

          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">3 days</p>
            </div>
          </div>
        </article>

        <article
          className="destination-info flow"
          hidden={mars ? false : true}
          id="mars-tab"
          tabIndex="0"
          role="tabpanel"
        >
          <h2 className="fs-800 uppercase ff-serif">Mars</h2>

          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">225 mil. km</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">9 months</p>
            </div>
          </div>
        </article>

        <article
          className="destination-info flow"
          hidden={europa ? false : true}
          id="europa-tab"
          tabIndex="0"
          role="tabpanel"
        >
          <h2 className="fs-800 uppercase ff-serif">Europa</h2>

          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">628 mil. km</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">3 years</p>
            </div>
          </div>
        </article>

        <article
          className="destination-info flow"
          hidden={titan ? false : true}
          id="titan-tab"
          tabIndex="0"
          role="tabpanel"
        >
          <h2 className="fs-800 uppercase ff-serif">Titan</h2>

          <p>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">1.6 bil. km</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">7 years</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default DestinationPage;
