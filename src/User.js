export default function User() {
    const currentUser = { url: 'https://www.instagram.com/heygiggs', img: './assets/content/heygiggsig.jpg', name: 'heygiggs', extra_info: 'Guilherme' }
    return (
        <div class="usuario">
            <img src={currentUser.img} />
            <div class="texto">
                <strong>{currentUser.name}</strong>
                {currentUser.extra_info}
            </div>
        </div>
    );
}