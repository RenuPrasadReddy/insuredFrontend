import React from 'react';
import './Layout.css';

export function Layout(props) {
    return <div className='Layout-container'>{props.children}</div>
}

export function LayoutLeftItem(props) {
    return <div className='Layout-left-item'>{props.children}</div>
}

export function LayoutRightItem(props) {
    return <div className='Layout-right-item'>{props.children}</div>
}