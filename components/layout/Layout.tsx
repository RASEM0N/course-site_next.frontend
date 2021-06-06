import React, { Fragment, FunctionComponent, ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
// import styles from './Layout.module.css'

interface PropsType {
    children: ReactNode
}

export const Layout: FunctionComponent<PropsType> = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
            <Footer />
        </Fragment>
    )
}
