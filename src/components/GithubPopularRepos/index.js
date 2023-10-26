import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'
// import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {repoDetails: [], activeTab: 'ALL', isLoading: false, view: true}

  componentDidMount() {
    this.getDetails()
    this.setState({isLoading: true})
  }

  getDetails = async () => {
    const {activeTab} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTab}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({repoDetails: data.popular_repos, isLoading: false})
    } else {
      this.failureDuty()
    }
  }

  failureDuty = () => {
    this.setState({view: false, isLoading: false})
  }

  changeActiveTab = id => {
    console.log(id)
    this.setState({activeTab: id, isLoading: true}, this.getDetails)
  }

  render() {
    const {repoDetails, activeTab, isLoading, view} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Popular</h1>
        <div className="tab-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              item={each}
              changeActiveTab={this.changeActiveTab}
              key={each.id}
              activeTab={activeTab}
            />
          ))}
        </div>
        <>
          {view ? (
            <>
              {isLoading ? (
                <div data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#0284c7"
                    height={80}
                    width={80}
                  />
                </div>
              ) : (
                <ul className="item-container">
                  {repoDetails.map(each => (
                    <RepositoryItem details={each} key={each.id} />
                  ))}
                </ul>
              )}
            </>
          ) : (
            <div className="failure-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
                alt="failure view"
                className="failure-image"
              />
              <h1 className="heading">Something Went Wrong</h1>
            </div>
          )}
        </>
      </div>
    )
  }
}
export default GithubPopularRepos
