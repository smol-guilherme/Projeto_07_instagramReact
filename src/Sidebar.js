import Recommendations from "./Recommendations";
import User from "./User";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User />
            <Recommendations />
        </div>
    );
}
