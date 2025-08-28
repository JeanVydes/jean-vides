export function SideLabel({ text, bgColor, position }) {
    const roundedClass = position === 'left' ? 'rounded-r-2xl' : 'rounded-l-2xl';

    return (
        <div className={`hidden md:flex items-center justify-center px-2 py-8 ${bgColor} ${roundedClass} text-white shadow-md`}>
            <p className="[writing-mode:vertical-rl] transform rotate-180 font-semibold tracking-wider text-sm">
                {text}
            </p>
        </div>
    );
}