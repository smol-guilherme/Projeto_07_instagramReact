function Actions() {
    return (
        <div className="page-actions">
            <a href="">
                <img src="./images/ellipsis-horizontal-outline.svg" alt="" />
            </a>
        </div>
    )
}

function Profile(props) {
    return (
        <div className="page-name">
            <a className="profile-link" href={props.url}>
                <div className="post-picture">
                    <img className="featured-pfp" src={props.img} alt="" />
                    <p className="profile-name profile-header">{props.name}</p>
                </div>
            </a>
        </div>
    )
}

export default function Header() {
    const userFeed = [{
        page_url: "https://www.instagram.com/gsd.cutie/",
        page_pic: "./content/akira_feliz_02.jpg",
        page_content: "./content/akira_frango.jpg",
        page_name: "blog_da_akira"
    },
    {
        page_url: "https://www.instagram.com/neezlebums/",
        page_pic: "./content/alex_pfp.jpg",
        page_content: "./content/alex_zelda.jpg",
        page_name: "neezlebums"
    },
    {
        page_url: "https://www.instagram.com/neezlebums/",
        page_pic: "./content/alex_pfp.jpg",
        page_content: "./content/alex_cat.jpg",
        page_name: "neezlebums"
    },
];

    return (
        <div className="post-header">
            <Actions />
            { userFeed.map((user) => <Profile link={user.page_url} image={user.page_pic}  /> )}
        </div>
    )
}