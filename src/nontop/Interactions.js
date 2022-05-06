export default function Interactions() {
    return (
        <div className="user-actions">
            <div className="ua-buttons">
                <div>
                    <img src="/projeto2-instagram/images/heart-outline.svg" alt="" />
                    <img src="/projeto2-instagram/images/chatbubble-outline.svg" alt="" />
                    <img src="/projeto2-instagram/images/paper-plane-outline.svg" alt="" />
                </div>
                <div>
                    <img src="/projeto2-instagram/images/bookmark-outline.svg" alt="" />
                </div>
            </div>
            <div className="post-metrics">
                Curtido por
                <a className="text-highlight" href="">
                    <img className="featured-pfp-mini" src="/projeto2-instagram/content/girlwiththedogs.jpg" alt="pagina em destaque curtiu" />
                    perfectpoochesgrooming
                </a>
                e
                <a className="text-highlight" href="">
                    outras 13.524 pessoas
                </a>
            </div>
        </div>
    )
}