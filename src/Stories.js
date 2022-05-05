import Followers from "./Followers"
import Button from "./Button";
import Posts from "./Posts";
import Mobile from "./Mobile";

export default function Stories() {
    return(
        <div className="stories">
            <Button />
            <Followers />
            <Posts />
            <Mobile />
        </div>
    )
}