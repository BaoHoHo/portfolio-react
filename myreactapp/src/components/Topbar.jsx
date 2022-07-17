import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Topbar() {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="dark">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
        // <nav className="nav sticky-top">
        //     <a href="/">Bao Ho</a>
        //     <ul>
        //         <li>
        //             <a href="/resume">Resume</a>
        //         </li>
        //         <li>
        //             <a href="/contact">Contact</a>
        //         </li>
        //     </ul>
        // </nav>
    )
}