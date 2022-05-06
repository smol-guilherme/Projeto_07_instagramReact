export default function Users(props) {
    return (
        <div class="sugestao">
            <div href={props.url} class="usuario">
                <img src={props.pic} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}