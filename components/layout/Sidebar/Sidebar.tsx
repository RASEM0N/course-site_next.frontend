import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react'
// import styles from './Sidebar.module.css'

type PropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Sidebar: FunctionComponent<PropsType> = ({ ...props }) => {
    return <div {...props}>Sidebar</div>
}
