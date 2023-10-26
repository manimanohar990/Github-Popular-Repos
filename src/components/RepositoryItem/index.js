// Write your code here
import {Component} from 'react'

import './index.css'

class RepositoryItem extends Component {
  render() {
    const {details} = this.props

    const updatedDetails = {
      id: details.id,
      name: details.name,
      starsCount: details.stars_count,
      avatarUrl: details.avatar_url,
      forksCount: details.forks_count,
      issuesCount: details.issues_count,
    }

    const {
      name,
      starsCount,
      forksCount,
      avatarUrl,
      issuesCount,
    } = updatedDetails

    return (
      <li className="card-container">
        <img src={avatarUrl} alt={name} className="avatar" />
        <h1 className="card-head">{name}</h1>
        <div className="con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="logo"
          />
          <p className="card-para">{starsCount} stars</p>
        </div>
        <div className="con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="logo"
          />
          <p className="card-para">{forksCount} forks</p>
        </div>
        <div className="con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="logo"
          />
          <p className="card-para">{issuesCount} open issues</p>
        </div>
      </li>
    )
  }
}
export default RepositoryItem
