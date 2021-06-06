import { FunctionComponent } from 'react'
import { Layout } from '../components/layout/Layout'

export const withLayout =
    <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
    (props: T): JSX.Element =>
        (
            <Layout>
                <Component {...props} />
            </Layout>
        )
