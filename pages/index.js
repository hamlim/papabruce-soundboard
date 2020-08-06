import React, { useRef, useState } from "react";

let audioSnippets = [
  {
    name: "Bruce's Gooses",
    src: "/static/sounds/BrucesGooses.wav",
  },
  {
    name: "Call Me Crazy",
    src: "/static/sounds/CallMeCrazy.wav",
  },
  {
    name: "Call Myself Bruce",
    src: "/static/sounds/CallMyselfBruce.wav",
  },
  {
    name: "Cartoon Creep",
    src: "/static/sounds/CartoonCreep.wav",
  },
  {
    name: "Farts don't smell",
    src: "/static/sounds/FartsDontSmell.wav",
  },
  {
    name: "I love Mexico",
    src: "/static/sounds/ILoveMexico.wav",
  },
  {
    name: "Men Don't get Scared",
    src: "/static/sounds/MenDontGetScared.wav",
  },
  {
    name: "Nazi Army",
    src: "/static/sounds/NaziArmy.wav",
  },
  {
    name: "They don't Own my Asshole",
    src: "/static/sounds/OwnAsshole.wav",
  },
  {
    name: "Ska came befoer Reggae",
    src: "/static/sounds/SkaBeforeReggae.wav",
  },
  {
    name: "Son of Bitch",
    src: "/static/sounds/SonOfABitch.wav",
  },
  {
    name: "Stupid Fat Hairy",
    src: "/static/sounds/StupidFatHairy.wav",
  },
  {
    name: "Tommy Likes Corndogs",
    src: "/static/sounds/TommyLikesCorndogs.wav",
  },
  {
    name: "We Get it and thats it!",
    src: "/static/sounds/WeGetIt.wav",
  },
  {
    name: "Were In Love",
    src: "/static/sounds/WereInLove.wav",
  },
  {
    name: "Whats your Problem?",
    src: "/static/sounds/WhatsYourProblem.wav",
  },
  {
    name: "Wheeze 1",
    src: "/static/sounds/Wheeze1.wav",
  },
  {
    name: "Wheeze 2",
    src: "/static/sounds/Wheeze2.wav",
  },
  {
    name: "Wheeze 3",
    src: "/static/sounds/Wheeze3.wav",
  },
  {
    name: "What the Fuck are Scrobbles?",
    src: "/static/sounds/WTFScrobbles.wav",
  },
];
export default function Index() {
  let queue = useRef([]);
  let refs = useRef([]);
  let [isPlaying, setPlaying] = useState(false);

  return (
    <main className="Root">
      {audioSnippets.map((snippet, index) => {
        return (
          <audio
            src={snippet.src}
            key={index}
            ref={(node) => {
              refs.current.push(node);
            }}
          />
        );
      })}
      <div className="Grid Grid--withGutter">
        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[0].play();
          }}
        >
          Come on Down to Bruce's Gooses!
        </button>
        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[1].play();
          }}
        >
          Some people call me crazy
        </button>
        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[2].play();
          }}
        >
          I call myself Bruce
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[3].play();
          }}
        >
          Cartoon Creeping
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[4].play();
          }}
        >
          My farts don't smell
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[5].play();
          }}
        >
          I Love Mexico, What?
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[6].play();
          }}
        >
          Men Don't Get Scared by anything
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[7].play();
          }}
        >
          I wanna be in the nazi army
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[8].play();
          }}
        >
          They don't own my asshole
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[9].play();
          }}
        >
          Ska came before Reggae
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[10].play();
          }}
        >
          Son of a Bitch
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[11].play();
          }}
        >
          Stupid, Fat, Hairy Piece of Shit
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[12].play();
          }}
        >
          Tommy Likes Corndogs
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[13].play();
          }}
        >
          We get it and thats it
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[14].play();
          }}
        >
          We're in love, you stupid bitch
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[15].play();
          }}
        >
          Whats your problem?
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[16].play();
          }}
        >
          Wheeze 1
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[17].play();
          }}
        >
          Wheeze 2
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[18].play();
          }}
        >
          Wheeze 3
        </button>

        <button
          className="button Grid-item"
          onClick={(_) => {
            refs.current[19].play();
          }}
        >
          What the fuck are scrobbles?
        </button>
      </div>
      <style>{`
          .button {
            background-color: var(--a);
            border: solid 2px var(--b);
            padding: 1rem 2rem;
            border-radius: 4px;
            font-size: 3rem;
          }
          .Grid-item {
            justify-content: center;
            align-items: center;
          }
          .Grid {
            grid-template-columns: 1fr;
            grid-template-rows: 150px;
          }
          @media screen and (min-width: 70rem) {
            .Grid {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
        `}</style>
    </main>
  );
}
