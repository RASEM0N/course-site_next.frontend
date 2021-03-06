import { FunctionComponent, useState } from 'react'
import { Button } from '../components/Button/Button'
import { Htag } from '../components/Htag/Htag'
import { Layout } from '../components/layout/Layout'
import { Rating } from '../components/Rating/Rating'

const Home: FunctionComponent = () => {
    const [open, setOpen] = useState(false)
    const [rating, setRating] = useState<number>(3)

    return (
        <Layout>
            <Htag type="h1">Text</Htag>
            <Button appearance="primary">Кнопка</Button>
            <Button
                appearance="ghost"
                arrow={open ? 'down' : 'right'}
                onClick={() => setOpen(!open)}
            >
                Кнопка
            </Button>
            <Rating rating={rating} isEditable setRating={setRating} />
        </Layout>
    )
}

export default Home
