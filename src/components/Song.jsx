import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import supershy from '../assets/supershy.jpeg'


export default function Song({ song }) {

    const theme = useTheme()

    return (
        <Card sx={ { display: 'flex' } }>
            <Box width={ '250px' } sx={ { display: 'flex', flexDirection: 'column' } }>
                <CardContent sx={ { flex: '1 0 auto' } }>
                    <Typography component="div" variant="h5">
                        { song.name }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        { song.artist }
                    </Typography>
                </CardContent>
                <Box sx={ { display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent: 'center' } }>
                    <IconButton aria-label="previous">
                        { theme.direction === 'rtl' ? <SkipNextIcon/> : <SkipPreviousIcon/> }
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={ { height: 38, width: 38 } }/>
                    </IconButton>
                    <IconButton aria-label="next">
                        { theme.direction === 'rtl' ? <SkipPreviousIcon/> : <SkipNextIcon/> }
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={ { width: 200 } }
                image={ supershy }
                alt="Super Shy cover"
            />
        </Card>
    )
}
