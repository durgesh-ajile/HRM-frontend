import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WhiteButton from './WhiteButton';
import AvatarComponent from './Avatar ';
import { Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './../../redux/counter/counterSlice'

// eslint-disable-next-line react/prop-types
const ClientsCard = ({ value }) => {

    // eslint-disable-next-line react/prop-types
    const { first_name, last_name, email } = value;

    // const count = useSelector((state) => state.counter.value)
    // const dispatch = useDispatch()

    return (
        <Card sx={{ width: "300px", backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '10px' }}>
            <CardContent sx={{ width: '100%' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                    <MoreVertIcon sx={{ cursor: 'pointer', fontSize: '30px', color: 'gray' }} />
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <AvatarComponent />
                </Box>
                <Typography sx={{ fontSize: 20, marginTop: '15px', fontWeight: '700' }} color="text.secondary" gutterBottom>
                    {first_name}
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: '700' }} color="text.secondary" gutterBottom>
                    {last_name}
                </Typography>
                <Typography sx={{ fontSize: 10, fontWeight: '700' }} color="text.secondary" gutterBottom>
                    {email}
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
        </Card>
    )
}

export default ClientsCard
