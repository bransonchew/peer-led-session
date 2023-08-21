import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Box from '../components/Box'


export default function Boxes() {

    const [states, setStates] = useState([
        true,
        false,
        false
    ])

    function toggle(index) {
        setStates(prev => {
            prev[index] = !prev[index]
            return [...prev]
        })
    }

    const boxesEls = states.map((state, index) => (
         <Box key={ index } state={ state } value={ index + 1 } toggle={ toggle }/>
    ))

    // calculate number of red boxes
    const reds = states.reduce((total, curr) => curr ? total + 1 : total, 0)

    return (
        <>
            <Grid
                container
                direction={ 'row' }
                alignItems={ 'center' }
                justifyContent={ 'center' }
                spacing={ 2 }
                p={ 3 }
            >

                <Grid item xs={ 12 }>
                    <Typography variant={ 'h3' }>
                        Boxes in Red: { reds }
                    </Typography>
                </Grid>

                <Grid item xs={ 12 }>
                    <Stack direction={ 'row' } spacing={ 2 }>

                        {/*<Box state={ states[0] } value={ 1 }/>*/}

                        {/*<Box state={ states[1] } value={ 2 }/>*/}

                        {/*<Box state={ states[2] } value={ 3 }/>*/}

                        { boxesEls }

                    </Stack>
                </Grid>

            </Grid>
        </>
    )
}