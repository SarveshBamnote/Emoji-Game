/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    emojiCLikedList: [],
    topScore: 0,
    youWon: false,
  }

  renderEmojiContainer = () => {
    const {emojisList} = this.props
    emojisList.sort(() => Math.random() - 0.5)

    return emojisList.map(eachEmoji => (
      <EmojiCard
        emojiClicked={this.emojiClicked}
        emojiDetails={eachEmoji}
        key={eachEmoji.id}
      />
    ))
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, youWon: true})
  }

  emojiClicked = id => {
    const {emojiCLikedList} = this.state
    console.log(emojiCLikedList)
    const {emojisList} = this.props

    const isEmojiPresent = emojiCLikedList.includes(id)
    const clickedEmojisLength = emojiCLikedList.length

    if (isEmojiPresent === true) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        emojiCLikedList: [...prevState.emojiCLikedList, id],
      }))
    }
  }

  resetGame = () => {
    this.setState({emojiCLikedList: [], youWon: false})
  }

  render() {
    const {emojiCLikedList, topScore, youWon} = this.state
    const {emojisList} = this.props

    const isWon = emojiCLikedList.length === emojisList.length

    return (
      <div className="main-container">
        <NavBar
          youWon={youWon}
          score={emojiCLikedList.length}
          topScore={topScore}
        />
        <div className="emoji-body-container">
          <ul className="emojis-list-container">
            {!youWon && this.renderEmojiContainer()}
          </ul>
          {youWon && (
            <WinOrLoseCard
              score={emojiCLikedList.length}
              onClickPlayAgain={this.resetGame}
              isWon={isWon}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
