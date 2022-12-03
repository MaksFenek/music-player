import { Paper } from '@suid/material';
import { Component, JSX } from 'solid-js';
import styled from './Menu.module.css';

export const Menu: Component<{ children: JSX.Element }> = (props) => (
    <Paper class={styled.menu} elevation={5}>
        {props.children}
    </Paper>
);
