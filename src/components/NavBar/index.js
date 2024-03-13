import './index.css'

const NavBar = props => {
  const {score, topScore, youWon} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-sub-container">
        <div className="logo-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {!youWon && (
          <div className="scores-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
