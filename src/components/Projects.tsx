const ProjectItem = ({ title, description, tags, link, imageUrl }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group mb-16 md:mb-24">
        <div className="overflow-hidden rounded-lg mb-6">

        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 mt-2 mb-4 max-w-3xl">{description}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
            {tags.map(tag => (
                <span key={tag} className="text-sm font-mono text-gray-500">
                    #{tag}
                </span>
            ))}
        </div>
    </a>
);

export function Projects() {
    const projectData = [
        { title: "AI Tools Suite (Prototype)", description: "A suite of AI-powered tools for various applications, designed for scalability and performance.", tags: ["Next.js", "Rust", "ShadCn", "Postgres", "AI"], link: "https://github.com/JeanVydes/grindless", preview: "https://github.com/JeanVydes/grindless/raw/main/images/landing-desktop.png?raw=true" },
        { title: "Nervio Limiter", description: "A context-agnostic rate-limiting library for Rust, built for high-throughput systems.", tags: ["Rust", "Redis", "Library", "Performance"], link: "https://github.com/JeanVydes/nervio-limiter", preview: null },
        { title: "SaaS API Template", description: "A robust template for building subscription-based APIs with integrated payment and email services.", tags: ["Rust", "LemonSqueezy", "Brevo", "Postgres", "Template"], link: "https://github.com/JeanVydes/subscription-based-api", preview: null },
        { title: "Dashboard for Discord Bot", description: "A feature-rich and user-friendly dashboard for managing and configuring Discord bots.", tags: ["Node.js", "Express", "MongoDB", "Discord"], link: "https://github.com/JeanVydes/dashboard-discord-ejs", preview: "https://github.com/JeanVydes/dashboard-discord-ejs/raw/master/images/Screenshot%20from%202021-07-23%2017-31-27.png?raw=true" },
    ];

    return (
        <section id="projects" className="py-24 max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
                <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500">[ Selected Works ]</h2>
                <a href="https://github.com/JeanVydes" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-500 hover:text-white transition-colors ml-4">Checkout my Github {"->"}</a>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
                {projectData.map((p, index) => (
                    <ProjectItem
                        key={p.title}
                        {...p}
                        imageUrl={p.preview != null ? p.preview : `https://placehold.co/1200x675/1e293b/ef4444?text=${encodeURIComponent(p.title)}`}
                    />
                ))}
            </div>
        </section>
    );
}
