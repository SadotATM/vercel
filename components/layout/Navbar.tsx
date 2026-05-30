export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
                <h2 className="font-bold text-xl">CreaCrew</h2>

                <div className="flex gap-6">
                    <a href="#services">Servicios</a>
                    <a href="#portfolio">Portafolio</a>
                    <a href="#contact">Contacto</a>
                </div>
            </nav>
        </header>
    );
}