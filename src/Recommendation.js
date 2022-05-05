import User from "./User";
import Eula from "./Eula";
import Extra from "./Extra";
import Context from './Context';

export default function Recommendation() {
    const content = [{ url: 'https://www.instagram.com/prof.dennysxavier/', img: './content/prof.dennys.jpg', name: 'prof.dennysxavier' },
    { url: 'https://www.instagram.com/raquelrealoficial/', img: './content/raquelreal.jpg', name: 'raquelrealoficial' },
    { url: 'https://www.instagram.com/genshashin/', img: './content/genshashin.jpg', name: 'genshashin' },
    { url: 'https://www.instagram.com/catioro.reflexivo/', img: './content/catioro.jpg', name: 'catioro.reflexivo' }];
    return (
        <div className="recommendations">
            <User />
            <Context />
            {content.map((item) => {
                <div className="sidebar-actions">
                    <a href={item.url}>
                        <div className="post-picture">
                            <img className="featured-pfp" src={item.img} alt="" />
                            <div>
                                <div className="profile-name">{item.name}</div>
                                <div className="extra-info">sugerido para você</div>
                            </div>
                        </div>
                        <div>
                            <p className="follow-action">Seguir</p>
                        </div>
                    </a>
                </div>
            })}
            <Eula />
            <Extra />
        </div>
    )
}