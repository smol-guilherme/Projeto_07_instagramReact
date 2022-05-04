import ReactDOM from 'react-dom';
import './reset.css';
import './style.css';

function Top() {
    return (
        <div className="top-bar">
            <div className="border">
                <div className="top-menu">
                    <div className="logo">
                        <img className="top-icon" src="../content/logo-instagram.svg" alt="" />
                        <img className="brand-logo" src="../content/logo.png" alt="" />
                    </div>
                    <div>
                        <input className="search-bar" type="text" placeholder="Pesquisar" />
                        <img className="brand-logo" src="../content/logo.png" alt="" />
                    </div>
                    <div className="settings-menu">
                        <img className="top-icon" src="../content/paper-plane-outline.svg" alt="" />
                        <img className="top-icon" src="../content/compass-outline.svg" alt="" />
                        <img className="top-icon" src="../content/heart-outline.svg" alt="" />
                        <img className="top-icon" src="../content/person-outline.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="anchor">
                <div className="recommendations">
                    <a href="">
                        <div className="post-picture">
                            <img className="stories-pfp" src="../content/heygiggsig.jpg" alt="" />
                            <div>
                                <div className="profile-name">heygiggs</div>
                                <div className="extra-info">Guilherme</div>
                            </div>
                        </div>
                    </a>
                    <div className="sidebar-actions">
                        <h2>Sugestões para você</h2>
                        <a className="new-tab" href="">Ver tudo</a>
                    </div>
                    <div className="sidebar-actions">
                        <a href="">
                            <div className="post-picture">
                                <img className="featured-pfp" src="../content/SAM_logo.jpg" alt="" />
                                <div>
                                    <div className="profile-name">southamericamemes</div>
                                    <div className="extra-info">popular</div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <p className="follow-action">Seguir</p>
                        </a>
                    </div>
                    <div className="sidebar-actions">
                        <a href="https://www.instagram.com/prof.dennysxavier/">
                            <div className="post-picture">
                                <img className="featured-pfp" src="../content/prof.dennys.jpg" alt="" />
                                <div>
                                    <div className="profile-name">prof.dennysxavier</div>
                                    <div className="extra-info">sugerido para você</div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <p className="follow-action">Seguir</p>
                        </a>
                    </div>
                    <div className="sidebar-actions">
                        <a href="https://www.instagram.com/raquelrealoficial/">
                            <div className="post-picture">
                                <img className="featured-pfp" src="../content/raquelreal.jpg" alt="" />
                                <div>
                                    <div className="profile-name">raquelrealoficial</div>
                                    <div className="extra-info">sugerido para você</div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <p className="follow-action">Seguir</p>
                        </a>
                    </div>
                    <div className="sidebar-actions">
                        <a href="https://www.instagram.com/genshashin/">
                            <div className="post-picture">
                                <img className="featured-pfp" src="../content/genshashin.jpg" alt="" />
                                <div>
                                    <div className="profile-name">genshashin</div>
                                    <div className="extra-info">sugerido para você</div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <p className="follow-action">Seguir</p>
                        </a>
                    </div>
                    <div className="sidebar-actions">
                        <a href="https://www.instagram.com/catioro.reflexivo/">
                            <div className="post-picture">
                                <img className="featured-pfp" src="../content/catioro.jpg" alt="" />
                                <div>
                                    <div className="profile-name">catioro.reflexivo</div>
                                    <div className="extra-info">segue você</div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <p className="follow-action">Seguir</p>
                        </a>
                    </div>
                    <div className="eula">
                        <a className="extra-info" href=""><div>Sobre</div></a>゜
                        <a className="extra-info" href=""><div>Ajuda</div></a>゜
                        <a className="extra-info" href=""><div>Imprensa</div></a>゜
                        <a className="extra-info" href=""><div>API</div></a>゜
                        <a className="extra-info" href=""><div>Carreiras</div></a>゜
                        <a className="extra-info" href=""><div>Privacidade</div></a>゜
                        <a className="extra-info" href=""><div>Termos</div></a>゜
                        <a className="extra-info" href=""><div>Localizações</div></a>゜
                        <a className="extra-info" href=""><div>Contas mais relevantes</div></a>゜
                        <a className="extra-info" href=""><div>Hashtags</div></a>゜
                        <a className="extra-info" href=""><div>Idiomas</div></a>゜
                    </div>
                    <div className="extra-info-logo">© 2021 INSTAGRAM FROM META</div>
                </div>
            </div>
        </div>
    )
}

const pageBody = document.querySelector('.root');
const pageTop = Top();

ReactDOM.render(pageTop, pageBody);
