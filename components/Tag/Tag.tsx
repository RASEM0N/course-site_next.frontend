import { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import styles from './Tag.module.css'
import cName from 'classnames'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
    size?: 'small' | 'medium'
	children: ReactNode
    href?: string
}

export const Tag: FunctionComponent<PropsType> = ({
    size = 'small',
    children,
    color = 'ghost',
    href,
    className,
    ...props
}) => {
    return (
        <div
            className={cName(styles.tag, className, {
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.grey]: color == 'grey',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',
                [styles.s]: size == 'small',
                [styles.m]: size == 'medium',
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    )
}
