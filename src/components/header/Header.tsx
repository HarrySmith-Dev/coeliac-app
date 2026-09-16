import { headerContainer, headerSubtitle, headerTitle } from "./Header.css";

const Header = () => {
    return (
        <header className={headerContainer}>
            <h1 className={headerTitle}>Gluten Free & Me</h1>
            <p className={headerSubtitle}>Understanding coeliac disease</p>
        </header>
    )
}

export default Header;