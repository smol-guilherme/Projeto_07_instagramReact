export default function User() {
    const currentUser = { url: 'https://www.instagram.com/heygiggs', img: './content/heygiggsig.jpg', name: 'heygiggs', extra_info: 'Guilherme' }
    return (
        <div>
            <a href={currentUser.url}>
                <div className="post-picture">
                    <img className="stories-pfp" src={currentUser.img} alt="" />
                    <div>
                        <div className="profile-name">{currentUser.name}</div>
                        <div className="extra-info">{currentUser.extra_info}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}