export default function Followers() {
    const storiesList = [ { } ]

    return(
        <div className="follower-stories">
            {storiesList.map((item) => {
                <a href="" className="">
                    <div className="profile-picture">
                        <img className="stories-pfp" src={item.img} alt="" />
                        <div>{item.name}</div>
                    </div>
                </a>
            })}
        </div>
    )
}