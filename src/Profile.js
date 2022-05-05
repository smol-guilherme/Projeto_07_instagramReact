export default function Header() {
    const userFeed = [{ }]

    return (
        <div className="page-name">
            {userFeed.map((item) => {
                <a className="profile-link" href={item.url}>
                    <div className="post-picture">
                        <img className="featured-pfp" src={item.img} alt="" />
                        <p className="profile-name profile-header">{item.name}</p>
                    </div>
                </a>
            })}
        </div>
    )
}