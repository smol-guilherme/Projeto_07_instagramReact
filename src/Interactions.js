import React from 'react';

const DEFAULTS = {
    name: 'heart-outline',
    color: 'md hydrated'
};

export default function Interactions() {

    const [icon, setIcon] = React.useState(DEFAULTS);

    function changeHeart() {
        if(icon.name === 'heart-outline') {
            setIcon( { name: 'heart', color: 'md hydrated red-heart' } );
        } else {
            setIcon( { name: 'heart-outline', color: 'md hydrated' });
        }
    }

    // <ion-icon name="heart"></ion-icon>
    return (
        <div class="fundo">
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
            <div class="curtidas">
                <img src="./assets/content/akira_feliz_02.jpg" />
                <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
    );
}