import React from "react"

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&#169; {currentYear} #VANLIFE</p>
        </footer>
    )
}
