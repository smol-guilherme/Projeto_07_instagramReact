function Actions() {
    return (
        <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    )
}

function Profile(props) {
    return (
        <div href={props.url} className="usuario">
            <img src={props.pic} alt="" />
            {props.name}
        </div>
    )
}

export default function Header(props) {
    return (
        <div className="topo">
            <Profile url={props.url} pic={props.pic} name={props.name} />
            <Actions />
        </div>
    )
}