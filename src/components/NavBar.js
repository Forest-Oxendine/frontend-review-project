// Pulled from Mood tracker app Project1
import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

// imported components


function NavBar (){
    return(
<>
<header>
    <Bar>
        <NavItem>
            <NavLink to="/" end>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/AboutMe">About Me</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Project1">Project #1</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Project2">Project #2</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/Project3">Project #3</NavLink>
        </NavItem>
    </Bar>
</header>

</>
    );
}
export default NavBar;

const Bar = styled.ul`
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;
`;

const NavItem = styled.li`
display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    float: left;

    a{
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    a:hover:not(.active){
        background-color: #ADD8E6;
        color: #000000;
    }

    .active{
        background-color: #ADD8E6;
        color: #000000;
    }
`;