import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import styles from './Text.module.css'
import cName from 'classnames'

type PHTMLProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

interface PropsType extends PHTMLProps {
    size?: 'small' | 'large' | 'medium'
    children: ReactNode
}

export const Text: FunctionComponent<PropsType> = ({ size, children, className, ...props }) => {
    return (
        <p
            className={cName(styles.text, className, {
                [styles.small]: size === 'small',
                [styles.medium]: size === 'medium',
                [styles.large]: size === 'large',
            })}
            {...props}
        >
            {children}
        </p>
    )
}
