import React from 'react'
import Link from 'next/link'

const links = [
    { href: '/', label: 'Home' },
    { href: '/origin', label: 'Origin' },
    { href: '/legends', label: 'Legends' },
    { href: '/dadsbyday', label: 'DadsByDay' },
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav = () => (
    <nav>
        <ul>
            {links.map(({ key, href, label }) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>

        <style jsx>{`
      nav {
          max-width: 800px;
          width: 100%;
          justify-self: center;
        text-align: center;
        background-color: #08081c;
        max-height: 10vh;
      }
      ul {
        display: flex;
        justify-content: space-around;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        background: -webkit-linear-gradient(rgb(206, 184, 111), rgb(182,152,83),rgb(182,152,83), rgb(206, 184, 111));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: none;
        font-size: 1.5rem;
      }
    `}</style>
    </nav>
)

export default Nav
