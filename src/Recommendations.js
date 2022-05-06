import Users from "./Users";

function Top() {
    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    );
}

function Eula() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function Extra() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM FROM META
        </div>
    );
}

export default function Recommendations() {
    const pageRecs = [
        {
            url: "https://www.instagram.com/prof.dennysxavier/",
            img: "./assets/content/prof.dennys.jpg",
            name: "prof.dennysxavier"
        },
        {
            url: "https://www.instagram.com/raquelrealoficial/",
            img: "./assets/content/raquelreal.jpg",
            name: "raquelrealoficial"
        },
        {
            url: "https://www.instagram.com/genshashin/",
            img: "./assets/content/genshashin.jpg",
            name: "genshashin"
        },
        {
            url: "https://www.instagram.com/catioro.reflexivo/",
            img: "./assets/content/catioro.jpg",
            name: "catioro.reflexivo"
        }
    ];

    return (
        <div class="sugestoes">
            <Top />
            { pageRecs.map((user) => <Users url={user.url} pic={user.img} name={user.name} />) }
            <Eula />
            <Extra />
        </div>
    );
}