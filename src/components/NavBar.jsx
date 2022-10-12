import { FaSearch } from "react-icons/fa"

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="title">
                <h1>Welcome</h1>
                <span><h3>Smart Living</h3></span>
            </div>
            <div className="search">
                <form action="">
                    <input type="text" placeholder="Type here to serach" />
                    <FaSearch />
                </form>
            </div>
        </div>
    )
}