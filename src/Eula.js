function Info(props) {
    return(
        <a className="extra-info" href="/"><div>{props.name} ·</div></a>
    )
}

export default function Eula() {
    return (
        <div className="eula">
            <Info name="Sobre" />
            <Info name="Ajuda" />
            <Info name="Imprensa" />
            <Info name="API" />
            <Info name="Carreiras" />
            <Info name="Privacidade" />
            <Info name="Termos" />
            <Info name="Localizações" />
            <Info name="Contas mais relevantes" />
            <Info name="Hashtags" />
            <Info name="Idiomas" />
        </div>
    )
}