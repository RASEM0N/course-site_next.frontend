import React, { FunctionComponent, ReactNode } from 'react'
import styles from './Text.module.css'
import cName from 'classnames'

interface PropsType {
    size?: 'small' | 'large' | 'medium'
    children: ReactNode
}

export const Text: FunctionComponent<PropsType> = ({ size, children }) => {
    return (
        <p
            className={cName(styles.text, {
                [styles.small]: size === 'small',
                [styles.medium]: size === 'medium',
                [styles.large]: size === 'large',
            })}
        >
            {children}
        </p>
    )
}
