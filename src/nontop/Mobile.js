function Button(props) {
    return(
        <a href=""><img src={props.image} href={props.link} alt="" /></a>
    )
}

export default function Mobile() {
    return (
        <div className="mobile-buttons mobile">
            <Button image="./images/home.svg" link="/" />
            <Button image="./images/search-outline.svg" link="/" />
            <Button image="./images/add-circle-outline.svg" link="/" />
            <Button image="./images/heart-outline.svg" link="/" />
            <Button image="./images/person-outline.svg" link="/" />
        </div>
    )
}