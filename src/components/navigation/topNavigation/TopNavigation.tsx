import {
  topNavigationContainer,
  topNavigationSubtitle,
  topNavigationTitle,
} from './TopNavigation.css'

const TopNavigation = () => {
  return (
    <header className={topNavigationContainer}>
      <h1 className={topNavigationTitle}>Gluten Free & Me</h1>
      <p className={topNavigationSubtitle}>Understanding coeliac disease</p>
    </header>
  )
}

export default TopNavigation
