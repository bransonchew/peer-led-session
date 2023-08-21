import Typography from '@mui/material/Typography'
import { useState } from 'react'


export default function Box({ state, value, toggle }) {

    // const [on, setOn] = useState(state)
    //
    // const bgcolor = on ? 'red' : 'white'
    //
    // function toggle() {
    //     setOn(prev => !prev)
    // }

    const bgcolor = state ? 'red' : 'white'

    return (
        <>
            <Typography
                variant={ 'body1' }
                bgcolor={ bgcolor }
                height={ '100px' }
                width={ '100px' }
                // onClick={ toggle }
                onClick={ () => toggle(value - 1) }
                border={ '1px solid grey' }
                borderRadius={ 3 }
                textAlign={ 'center' }
            >
                { value }
            </Typography>
        </>
    )
}