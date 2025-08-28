export function Footer() {
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/JeanVydes" },
        { name: "X", url: "https://x.com/lojurcom" },
    ];

    return (
        <footer className="px-8 md:px-16 py-8 border-t border-gray-700/50 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-sm text-gray-500">
                <p>&copy; 2025 Jean Vides. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    {socialLinks.map(link => (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
