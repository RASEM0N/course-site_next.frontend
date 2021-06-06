import { FunctionComponent, useState } from 'react'
import { Button } from '../components/Button/Button'
import { Htag } from '../components/Htag/Htag'

const Home: FunctionComponent = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Htag type="h1">Text</Htag>
            <Button appearance="primary">Кнопка</Button>
            <Button
                appearance="ghost"
                arrow={open ? 'down' : 'right'}
                onClick={() => setOpen(!open)}
            >
                Кнопка
            </Button>
        </div>
    )
}

export default Home
