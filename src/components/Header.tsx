const NavLink = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300 tracking-widest uppercase text-xs">
        {children}
    </a>
);

export function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80">
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-700/50">
                <a href="#home" className="text-base font-semibold tracking-wider text-white uppercase">
                    Jean Vides <span className="text-red-500">•</span> Software Engineer
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </nav>
            </div>
        </header>
    );
}
