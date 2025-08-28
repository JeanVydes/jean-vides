const InfoBlock = ({ title, items }) => (
    <div>
        <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">{title}</h3>
        <ul className="space-y-2">
            {items.map(item => <li key={item} className="text-base text-gray-300">{item}</li>)}
        </ul>
    </div>
);

export function About() {
    const skills = ["Rust", "Go", "Node.js", "Java", "Redis", "Docker & Kubernetes", "AWS", "API", "Microservices", "PostgreSQL", "Kafka", "Terraform", "Prometheus"];
    const interests = ["Systems Design", "Distributed Computing", "Open Source", "High Performance Systems"];

    return (
        <section id="about" className="py-24 max-w-6xl mx-auto">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-12">[ About Me ]</h2>
            <div className="grid md:grid-cols-3 gap-16">
                <div className="md:col-span-2">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        I'm Jean Vides, a backend engineer driven by a passion for building robust, scalable, and elegant systems. My work is a blend of <span className="text-red-400">technical precision</span> and a deep appreciation for the <span className="text-orange-400">emotional impact</span> of well-crafted software. I believe the best code tells a story—one of efficiency, reliability, and thoughtful design.
                    </p>
                </div>
                <div className="space-y-8">
                    <InfoBlock title="[ Core Skills ]" items={skills} />
                    <InfoBlock title="[ Interests ]" items={interests} />
                </div>
            </div>
        </section>
    );
}