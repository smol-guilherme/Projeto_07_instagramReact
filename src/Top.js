export default function Top() {
    return (
        <div className="top-bar">
            <div className="border">
                <div className="top-menu">
                    <div className="logo">
                        <img className="top-icon" src="./images/logo-instagram.svg" alt="" />
                        <img className="brand-logo" src="./images/logo.png" alt="" />
                    </div>
                    <div>
                        <input className="search-bar" type="text" placeholder="Pesquisar" />
                        <img className="mobile brand-logo" src="./images/logo.png" alt="" />
                    </div>
                    <div className="settings-menu">
                        <img className="top-icon" src="./images/paper-plane-outline.svg" alt="" />
                        <img className="top-icon" src="./images/compass-outline.svg" alt="" />
                        <img className="top-icon" src="./images/heart-outline.svg" alt="" />
                        <img className="top-icon" src="./images/person-outline.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}