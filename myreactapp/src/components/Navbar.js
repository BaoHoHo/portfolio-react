
export default function Navbar() {
    return (
        <nav className="nav sticky-top">
            <a href="/home">Bao Ho</a>
            <ul>
                <li>
                    <a href="/resume">Resume</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>


        // <Navbar bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#features">Resume</Nav.Link>
        //             <Nav.Link href="#pricing">Contact</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
    )
}