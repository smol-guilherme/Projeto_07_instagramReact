import Interactions from "./Interactions"
import Header from "./Header";
import React from 'react';

const DEFAULTS = 0

function Content(props) {
    return (
        <div class="conteudo">
            <img onClick={props.click}  src={props.content} />
        </div>
    );
}

export default function Post(props) {
    const [signal, setSignal] = React.useState(DEFAULTS)
    function Like() {
        setSignal(signal + 1);
    }

    return (
        <div className="post">
            <Header url={props.url} pic={props.pic} name={props.name} />
            <Content click={Like} content={props.content} />
            <Interactions isLiked={signal} />
        </div>
    );
}