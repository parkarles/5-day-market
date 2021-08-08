import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { CartIcon, MyPageIcon } from "../static/svg";
import palette from "../lib/styles/palette";
import useHeader from "../lib/hooks/useHeader";
// export type HomePageProps = {};

const Header = () => {
    const { menu: currentMenu, onMenuClick } = useHeader();
    const listItems = [{ title: 'MAGAZINE', link: '/' },
    { title: 'MARKET', link: '/market' },
    { title: 'CONTACT', link: '/contact' },
    { title: 'ABOUT', link: '/about' }];

    useEffect(() => {
        console.log('currentMenu : ', currentMenu)
    }, [currentMenu]);

    return (
        <Block>
            <Inner>
                <Menu>
                    <ul>
                        {
                            listItems.map((item) => (
                                <li className={item.title === currentMenu ? 'action' : undefined} key={item.title} onClick={() => onMenuClick(item.title)}>
                                    <Link to={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </Menu>
                <UserMenu>
                    <CartIcon />
                    <MyPageIcon />
                </UserMenu>
            </Inner>
        </Block>
    );
}

const Block = styled.div`
  height: 13rem;
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`;

const Menu = styled.div`
    max-width: 400px;
    ul {
        margin: 0px;
        padding: 0px;
    }
    li {
        list-style: none;
        margin-bottom: 30px;
        &.action a {
                color: ${palette.orange0};
            }
        a {
            color: ${palette.brown3};
            text-decoration: none;
            font-size: 1.125rem;
            font-weight: bold;            
        }
}
`;

const UserMenu = styled.div`
`;

export default Header;