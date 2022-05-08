import React from 'react';

const DEFAULTS = {
    name: 'heart-outline',
    color: 'md hydrated',
};

let likeFromImage = 0;

function Actions(props) {
    const [icon, setIcon] = React.useState(DEFAULTS);
    function changeHeart() {
        if (icon.name === 'heart-outline') {
            setIcon({ name: 'heart', color: 'md hydrated red-heart' });
        } else {
            setIcon({ name: 'heart-outline', color: 'md hydrated' });
        }
    }

    if(props.liked && props.liked > likeFromImage ) {
        likeFromImage = props.liked
        setIcon({ name: 'heart', color: 'md hydrated red-heart' });
    }
    
    return (
        <div class="acoes">
            <div>
                <ion-icon onClick={changeHeart} name={icon.name} class={icon.color}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function Metrics() {
    return (
        <div class="curtidas">
            <img src="./assets/content/akira_feliz_02.jpg" />
            <div class="texto">
                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
        </div>
    )
}

export default function Interactions(props) {
    return (
        <div class="fundo">
            <Actions liked={props.isLiked} />
            <Metrics />
        </div>
    );
}