function Button() {
    return (
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.pic} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}

export default function Stories() {
    const storiesList = [
        {
            img: "./assets/content/akira_feliz_02.jpg",
            name: "blog_da_akira"
        },
        {
            img: "./assets/content/9gag.jpg",
            name: "9gag"
        },
        {
            img: "./assets/content/girlwiththedogs.jpg",
            name: "perfectpoochesgrooming"
        },
        {
            img: "./assets/content/greengodictionary.jpg",
            name: "greengodictionary"
        },
        {
            img: "./assets/content/duolingo.jpg",
            name: "duolingo"
        },
        {
            img: "./assets/content/genshin.jpg",
            name: "genshin"
        },
        {
            img: "./assets/content/soothing.slot.jpg",
            name: "soothing.sloth"
        },
        {
            img: "./assets/content/ifunny.jpg",
            name: "ifunny.co"
        }
    ];

    return (
        <div className="stories">
            {storiesList.map((story) => <Story pic={story.img} name={story.name} />)}
            <Button />
        </div>
    )
}