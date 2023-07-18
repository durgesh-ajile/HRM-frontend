import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WhiteButton from './WhiteButton';
import AvatarComponent from './Avatar ';
import { Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './../../redux/counter/counterSlice'

const ClientsCard = () => {

    // const count = useSelector((state) => state.counter.value)
    // const dispatch = useDispatch()

    return (
        <Card sx={{ width: "400px", backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '10px' }}>
            <CardContent sx={{ width: '100%' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                    <MoreVertIcon sx={{cursor:'pointer',fontSize:'30px',color:'gray'}} />
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <AvatarComponent />
                </Box>
                <Typography sx={{ fontSize: 20, marginTop: '15px', fontWeight: '700' }} color="text.secondary" gutterBottom>
                    designetion
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: '700' }} color="text.secondary" gutterBottom>
                    client name
                </Typography>
                <Typography sx={{ fontSize: 10, fontWeight: '700' }} color="text.secondary" gutterBottom>
                    CEO
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    <Box sx={{ marginRight: '10px' }}>
                        <WhiteButton text={'Message'} />
                    </Box>
                    <Box>
                        <WhiteButton text={'View Profile'} />
                    </Box>
                </Box>
            </CardContent>
            {/* <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button> */}
        </Card>
    )
}

export default ClientsCard
