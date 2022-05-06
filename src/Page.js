import Sidebar from './Sidebar';
import Leftside from './Leftside';

export default function Content() {
    return (
        <div class="corpo">
            <Leftside />
            <Sidebar />
        </div>
    )
}