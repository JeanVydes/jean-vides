export function Contact() {
    return (
        <section id="contact" className="py-24 text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">[ Let's Collaborate ]</h2>
            <p className="text-lg text-gray-400 mb-8">
                Have an interesting project? I'm always ready to dive into new challenges.
            </p>
            <a
                href="mailto:j@lojur.com"
                className="text-3xl md:text-5xl font-bold text-white hover:text-red-500 transition-colors duration-300 inline-block"
            >
                j@lojur.com
            </a>
        </section>
    );
}