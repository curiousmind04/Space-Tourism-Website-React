import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function CrewPage() {
  const classHandler = useOutletContext();

  useEffect(() => {
    classHandler("crew");
  });

  const [commander, setCommander] = useState(true);
  const [specialist, setSpecialist] = useState(false);
  const [pilot, setPilot] = useState(false);
  const [engineer, setEngineer] = useState(false);

  const commanderChange = () => {
    setCommander(true);
    setSpecialist(false);
    setPilot(false);
    setEngineer(false);
  };
  const specialistChange = () => {
    setCommander(false);
    setSpecialist(true);
    setPilot(false);
    setEngineer(false);
  };
  const pilotChange = () => {
    setCommander(false);
    setSpecialist(false);
    setPilot(true);
    setEngineer(false);
  };
  const engineerChange = () => {
    setCommander(false);
    setSpecialist(false);
    setPilot(false);
    setEngineer(true);
  };

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div
        className="dot-indicators flex"
        role="tablist"
        aria-label="crew member list"
      >
        <button
          aria-selected={commander ? "true" : "false"}
          aria-controls="commander-tab"
          role="tab"
          data-image="commander-image"
          tabIndex="0"
          onClick={commanderChange}
        >
          <span className="sr-only">The commander</span>
        </button>
        <button
          aria-selected={specialist ? "true" : "false"}
          aria-controls="mission-tab"
          role="tab"
          data-image="mission-image"
          tabIndex="0"
          onClick={specialistChange}
        >
          <span className="sr-only">The mission specialist</span>
        </button>
        <button
          aria-selected={pilot ? "true" : "false"}
          aria-controls="pilot-tab"
          role="tab"
          data-image="pilot-image"
          tabIndex="0"
          onClick={pilotChange}
        >
          <span className="sr-only">The pilot</span>
        </button>
        <button
          aria-selected={engineer ? "true" : "false"}
          aria-controls="crew-tab"
          role="tab"
          data-image="crew-image"
          tabIndex="0"
          onClick={engineerChange}
        >
          <span className="sr-only">The crew engineer</span>
        </button>
      </div>

      {commander && (
        <article
          className="crew-details flow"
          id="commander-tab"
          role="tabpanel"
          tabIndex="0"
        >
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">Commander</h2>
            <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
          </header>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>
      )}

      {specialist && (
        <article
          className="crew-details flow"
          id="mission-tab"
          role="tabpanel"
          tabIndex="0"
        >
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">Mission Specialist</h2>
            <p className="fs-700 uppercase ff-serif">Mark SHuttleworth</p>
          </header>
          <p>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </article>
      )}

      {pilot && (
        <article
          className="crew-details flow"
          id="pilot-tab"
          role="tabpanel"
          tabIndex="0"
        >
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">Pilot</h2>
            <p className="fs-700 uppercase ff-serif">Victor Glover</p>
          </header>
          <p>
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </article>
      )}

      {engineer && (
        <article
          className="crew-details flow"
          id="crew-tab"
          role="tabpanel"
          tabIndex="0"
        >
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">Flight Engineer</h2>
            <p className="fs-700 uppercase ff-serif">Anousheh Ansari</p>
          </header>
          <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </article>
      )}

      {commander && (
        <picture id="commander-image">
          <source
            srcSet="assets/crew/image-douglas-hurley.webp"
            type="image/webp"
          />
          <img
            src="assets/crew/image-douglas-hurley.png"
            alt="Douglas Hurley"
          />
        </picture>
      )}

      {specialist && (
        <picture id="mission-image">
          <source
            srcSet="assets/crew/image-mark-shuttleworth.webp"
            type="image/webp"
          />
          <img
            src="assets/crew/image-mark-shuttleworth.png"
            alt="Douglas Hurley"
          />
        </picture>
      )}

      {pilot && (
        <picture id="pilot-image">
          <source
            srcSet="assets/crew/image-victor-glover.webp"
            type="image/webp"
          />
          <img src="assets/crew/image-victor-glover.png" alt="Douglas Hurley" />
        </picture>
      )}

      {engineer && (
        <picture id="crew-image">
          <source
            srcSet="assets/crew/image-anousheh-ansari.webp"
            type="image/webp"
          />
          <img
            src="assets/crew/image-anousheh-ansari.png"
            alt="Douglas Hurley"
          />
        </picture>
      )}
    </main>
  );
}

export default CrewPage;
