import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-none">
                <div className="dropdown">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-bae-100 rounded-box w-52">
                        <li>
                            <a href="https://instagram.com/billalxcode_">Follow IG <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                            <a href="https://github.com/billalxcode">Follow Github <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">@billalxcode_</a>
            </div>
        </div>
    )
}