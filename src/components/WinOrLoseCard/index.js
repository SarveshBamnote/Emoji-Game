import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain, isWon} = props

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <div className="score-details-container">
        <h1 className="game-status">{resultText}</h1>
        <p className="your-score-status">{scoreLabel}</p>
        <p className="your-score">{score}/12</p>
        <button
          className="play-again-button"
          onClick={onClickPlayAgain}
          type="button"
        >
          Play Again
        </button>
      </div>
      <div className="image-section-container">
        <img className="win-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
