// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {item, changeActiveTab, activeTab} = props
  const {id, language} = item

  const cond = activeTab === id

  const style = cond ? 'active' : 'btn'

  const tabClicked = () => {
    changeActiveTab(id)
  }

  return (
    <button type="button" className={style} onClick={tabClicked}>
      {language}
    </button>
  )
}
export default LanguageFilterItem
