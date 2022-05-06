import Post from "./Post"

export default function Posts() {
    const userFeed = [
        {
            url: "https://www.instagram.com/gsd.cutie/",
            img: "./assets/content/akira_feliz_02.jpg",
            name: "blog_da_akira",
            content: "./assets/content/akira_frango.jpg"
        },
        {
            url: "https://www.instagram.com/neezlebums/",
            img: "./assets/content/alex_pfp.jpg",
            name: "neezlebums",
            content: "./assets/content/alex_zelda.jpg"
        },
        {
            url: "https://www.instagram.com/neezlebums/",
            img: "./assets/content/alex_pfp.jpg",
            name: "neezlebums",
            content: "./assets/content/alex_cat.jpg"
        }
];

    return (
        <div className="posts">
            {userFeed.map((post) => <Post url={post.url} pic={post.img} name={post.name} content={post.content} />)}
        </div>
    )
}