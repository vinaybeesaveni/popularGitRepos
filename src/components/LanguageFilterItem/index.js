import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, changeActiveTab, isActive} = props
  const {language, id} = eachLanguage
  const activeClassName = isActive ? 'active' : ''
  const onClickingTabItem = () => {
    changeActiveTab(id)
  }
  return (
    <li>
      <button
        type="button"
        className={`language-btn ${activeClassName}`}
        onClick={onClickingTabItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
