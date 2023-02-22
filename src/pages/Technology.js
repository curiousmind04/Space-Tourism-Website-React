import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function TechnologyPage() {
  const classHandler = useOutletContext();

  useEffect(() => {
    classHandler("technology");
  });

  const [vehicle, setVehicle] = useState(true);
  const [spaceport, setSpaceport] = useState(false);
  const [capsule, setCapsule] = useState(false);

  const vehicleChange = () => {
    setVehicle(true);
    setSpaceport(false);
    setCapsule(false);
  };
  const spaceportChange = () => {
    setVehicle(false);
    setSpaceport(true);
    setCapsule(false);
  };
  const capsuleChange = () => {
    setVehicle(false);
    setSpaceport(false);
    setCapsule(true);
  };

  return (
    <main id="main" className="grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>

      {vehicle && (
        <picture id="vehicle-image">
          <source
            media="(min-width: 45rem)"
            srcSet="assets/technology/image-launch-vehicle-portrait.jpg"
          />
          <img
            src="assets/technology/image-launch-vehicle-landscape.jpg"
            alt="launch vehicle"
          />
        </picture>
      )}

      {spaceport && (
        <picture id="spaceport-image">
          <source
            media="(min-width: 45rem)"
            srcSet="assets/technology/image-spaceport-portrait.jpg"
          />
          <img
            src="assets/technology/image-spaceport-landscape.jpg"
            alt="spaceport"
          />
        </picture>
      )}

      {capsule && (
        <picture id="capsule-image">
          <source
            media="(min-width: 45rem)"
            srcSet="assets/technology/image-space-capsule-portrait.jpg"
          />
          <img
            src="assets/technology/image-space-capsule-landscape.jpg"
            alt="space capsule"
          />
        </picture>
      )}

      <div
        className="number-indicators flex ff-serif fs-600"
        role="tablist"
        aria-label="technology list"
      >
        <button
          aria-selected={vehicle ? "true" : "false"}
          aria-controls="vehicle-tab"
          role="tab"
          data-image="vehicle-image"
          tabIndex="0"
          onClick={vehicleChange}
        >
          1
        </button>
        <button
          aria-selected={spaceport ? "true" : "false"}
          aria-controls="spaceport-tab"
          role="tab"
          data-image="spaceport-image"
          tabIndex="0"
          onClick={spaceportChange}
        >
          2
        </button>
        <button
          aria-selected={capsule ? "true" : "false"}
          aria-controls="capsule-tab"
          role="tab"
          data-image="capsule-image"
          tabIndex="0"
          onClick={capsuleChange}
        >
          3
        </button>
      </div>

      {vehicle && (
        <article
          className="technology-details flow"
          id="vehicle-tab"
          role="tabpanel"
          tabIndex="0"
        >
          <header className="flow flow--space-small">
            <h2 className="fs-200 ff-sans-cond letter-spacing-3 text-accent uppercase">
              The terminology...
            </h2>
            <p className="fs-700 uppercase ff-serif">Launch vehicle</p>
          </header>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </article>
      )}

      {spaceport && (
        <article
          className="technology-details flow"
          id="spaceport-tab"
          role="tabpanel"
          tabIndex="0"
        >
          <header className="flow flow--space-small">
            <h2 className="fs-200 ff-sans-cond letter-spacing-3 text-accent uppercase">
              The terminology...
            </h2>
            <p className="fs-700 uppercase ff-serif">Spaceport</p>
          </header>
          <p>
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </article>
      )}

      {capsule && (
        <article
          className="technology-details flow"
          id="capsule-tab"
          role="tabpanel"
          tabIndex="0"
        >
          <header className="flow flow--space-small">
            <h2 className="fs-200 ff-sans-cond letter-spacing-3 text-accent uppercase">
              The terminology...
            </h2>
            <p className="fs-700 uppercase ff-serif">Space capsule</p>
          </header>
          <p>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </article>
      )}
    </main>
  );
}

export default TechnologyPage;
