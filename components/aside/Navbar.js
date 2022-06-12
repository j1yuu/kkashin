import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="#firstScreen">
                <a className="navbar__link" >Home</a>
            </Link>
            <Link href="#aboutMain">
                <a className="navbar__link">About</a>
            </Link>
            <Link href="#">
                <a className="navbar__link">Skills</a>
            </Link>
            <Link href="#">
                <a className="navbar__link">Portfolio</a>
            </Link>
            <Link href="#">
                <a className="navbar__link">Contacts</a>
            </Link>

            <style jsx>{`
                .navbar {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .navbar__link {
                    font-size: 1.6rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    transition: all .3s;
                }

                .navbar__link:not(:last-child) {
                    margin-bottom: 1.4rem
                }

                @media (min-width: 48em) {
                    .navbar__link:hover {
                        color: #69A1E6;
                        text-shadow: 4px 4px 4px rgba(105, 161, 230, 0.25);
                        text-decoration: underline;
                    }
                }
            `}</style>
        </div>
    )
}