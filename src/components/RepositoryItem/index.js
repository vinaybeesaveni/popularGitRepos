import './index.css'

const RepositoryItem = props => {
  const {eachRepo} = props
  const {name, issuesCount, starsCount, forksCount, avatarUrl} = eachRepo
  return (
    <li className="repo-list-item">
      <img src={avatarUrl} alt={name} className="repo-img" />
      <h1 className="name">{name}</h1>
      <div className="all-stars-container">
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="stars-img"
          />
          <p className="stars-count">{starsCount} stars</p>
        </div>
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="stars-img"
          />
          <p className="stars-count">{forksCount} forks</p>
        </div>
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="stars-img"
          />
          <p className="stars-count">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
