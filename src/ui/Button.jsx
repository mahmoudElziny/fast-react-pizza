import { Link } from "react-router-dom"

export default function Button({ children, disabled, to }) {

    const className = `bg-yellow-400 uppercase\
    font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full
    hover: bg - yellow - 300 transition - colors duration - 300
    focus: outline - none focus:ring focus: ring - yellow - 300
    focus: ring - offset - 2 disabled: cursor - not - allowed sm: px - 6 sm: py - 4`;

    if (to) {
        return (
            <Link className={className} to={to}>{children}</Link>
        )
    }
    return (
        <button disabled={disabled} className={className}>
            {children}
        </button>
    )
}
