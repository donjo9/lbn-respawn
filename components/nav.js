import React from "react";
import Link from "next/link";
import styled from "styled-components";

const links = [
    { href: "/", label: "Home" },
    { href: "/origin", label: "Origin" },
    { href: "/legends", label: "Legends" },
    { href: "/dadsbyday", label: "DadsByDay" }
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
});

const NavContainer = styled.nav`
    z-index: 2;
    width: 100vw;
    max-width: 800px;
    justify-self: center;
    text-align: center;
    background-color: #08081c;
    /*max-height: 10vh;*/
`;

const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 4px 16px;
    list-style: none;
`;
const NavItem = styled.li`
display: block;
    padding: 6px 8px;
`;

const NavLink = styled.a`
    background: var(--gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: initial;
    :focus, 
    :hover{
        text-decoration: underline;
        text-decoration-color: #719cff;
    }
`;

const Nav = () => (
    <NavContainer>
        <NavList>
            {links.map(({ key, href, label }) => (
                <NavItem key={key}>
                    <Link href={href}>
                        <NavLink>{label}</NavLink>
                    </Link>
                </NavItem>
            ))}
            <NavItem>
                
                    <NavLink href="https://epparel.net/team-shops/lamersbynight/" target="_blank"  rel="noopener norefferer">Webshop</NavLink>
                
            </NavItem>

        </NavList>
    </NavContainer>
);

export default Nav;
/*
 
*/
