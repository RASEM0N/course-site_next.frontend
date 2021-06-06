import React, { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactNode } from 'react'
import styles from './Button.module.css'
import ArrowIcon from './arrow.svg'
import cName from 'classnames'

type ButtonHTMLProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface PropsType extends ButtonHTMLProps {
    children: ReactNode
    appearance: 'primary' | 'ghost'
    arrow?: 'right' | 'down' | 'none'
}

export const Button: FunctionComponent<PropsType> = ({
    arrow = 'none',
    children,
    appearance,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={cName(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
        >
            {children}
            {arrow !== 'none' && (
                <span
                    className={cName(styles.arrow, {
                        [styles.down]: arrow === 'down',
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    )
}
