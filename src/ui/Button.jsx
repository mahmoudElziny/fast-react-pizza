import { Link } from "react-router-dom"

export default function Button({ children, disabled, to, type }) {

    const base = `bg-yellow-400 uppercase text-sm
    font-semibold text-stone-800 inline-block tracking-wide rounded-full
    hover:bg-yellow-300 transition-colors duration-300
    focus:outline-none focus:ring focus:ring-yellow-300
    focus:ring-offset-2 disabled:cursor-not-allowed`;

    const styles = {
        primary: base + ' py-3 px-4 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary: `text-sm uppercase border-2 border-stone-300 py-2.5 px-4 md:px-6 md:py-3.5
    font-semibold text-stone-400 inline-block tracking-wide rounded-full
    hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300
    focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200
    focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed`
    }

    if (to) {
        return (
            <Link className={styles[type]} to={to}>{children}</Link>
        )
    }
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}
