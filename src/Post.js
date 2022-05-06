import Interactions from "./Interactions"
import Header from "./Header";

function Content(props) {
    return (
        <div class="conteudo">
            <img src={props.content} />
        </div>
    );
}

export default function Post(props) {
    return (
        <div className="post">
            <Header url={props.url} pic={props.pic} name={props.name} />
            <Content content={props.content} />
            <Interactions />
        </div>
    );
}