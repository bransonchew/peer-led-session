import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { getSongs } from '../api'
import Song from '../components/Song'


export default function Songs() {

    const [songs, setSongs] = useState([])

    useEffect(() => {

        getSongs()
            .then(data => {
                setSongs([...data])
            })

    }, [])

    const songElements = songs.map((song, index) => (
        <Song key={ index } song={ song }/>
    ))

    return (
        <Box m={ 3 }>
            <Typography variant={ 'h3' } mb={ 3 }>
                My Songs
            </Typography>
            <Stack
                direction={  'column' }
                alignItems={ 'flex-start' }
                spacing={ 3 }
            >
                { songElements }
            </Stack>
        </Box>
    )
}