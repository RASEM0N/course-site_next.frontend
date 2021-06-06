import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react'
// import styles from './Footer.module.css'

type PropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Footer: FunctionComponent<PropsType> = ({ ...props }) => {
    return <div {...props}>Footer</div>
}
