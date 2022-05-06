import Stories from "./Stories";
import Posts from "./Posts";
import Mobile from "./Mobile";

export default function Content() {
    return (
        <div className="content">
            <Stories />
            <Posts />

            <Mobile />
        </div>
    )
}