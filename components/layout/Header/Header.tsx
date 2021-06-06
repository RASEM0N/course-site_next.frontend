import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react'
// import styles from './Header.module.css'

type PropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Header: FunctionComponent<PropsType> = ({ ...props }) => {
    return <div {...props}>Header</div>
}
