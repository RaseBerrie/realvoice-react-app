import './TopContainer.css'
import Github from "./lib/github.png"

// Top block container

function TopContainer() { return (
    <div className="container">

      <header>
        <h2
          style={{
            fontFamily: '"Garet"',
            display: "inline",
            fontSize: 20,
            paddingTop: 3
          }}
        >
          Real Voice
        </h2>
        <a href="https://github.com/RaseBerrie/RealVoice_ewha">
          <img
            src={Github}
            alt="깃허브"
            width={25}
            height={25}
            align="right"
          />
        </a>
      </header>

    </div>
) }

export default TopContainer;