import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
