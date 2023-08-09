import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import WhiteButton from '../WhiteButton';
import { Link, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { asyncThunkDeclineContractor, asyncThunkForgotPassword } from '../../../redux/createAsyncThunk';
import { forwardRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line react/prop-types
export default function AlertDialogSlide({ _id, UI_Type }) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputForgotPassword, setInputForgotPassword] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { ForgotPasswordData: [{ isEmailSend }] } = useSelector(store => store.admin)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeInput = e => {
        setInputValue(e.target.value)
    }

    const handleChangeInputForgotPassword = e => {
        setInputForgotPassword(prev => (prev[e.target.name] = e.target.value, { ...prev }))
    }

    const handleDeclineProfile = (contractorId) => {
        const payload = { contractorId, feedback: inputValue }; dispatch(asyncThunkDeclineContractor(payload))
        setOpen(false);
    };

    const handleForgotPassword = () => {
        dispatch(asyncThunkForgotPassword(inputForgotPassword))
        setOpen(false);
        navigate(`/signin`)
        // const url = `https://www.google.com/search?q=${encodeURIComponent('https://mail.google.com/')}`;
        // window.open(url, '_blank');
        // navigate(`https://www.google.com/search?q=${`https://mail.google.com/`}`)
    };


    const DeclineUI = () => {
        return (<>
            <DialogTitle>{"Are you sure you want to decline the Contractor ?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    If you decline the contractor. Contractor can&apos;t see the profile
                </DialogContentText>
                <TextField onChange={e => handleChangeInput(e)} fullWidth type='text' id="standard-basic" label="Feedback for the Contractor" variant="standard" />
            </DialogContent>
            <DialogActions>
                <WhiteButton onClick={handleClose} text={'Cancle'} />
                <WhiteButton onClick={() => handleDeclineProfile(_id)} text={'Decline'} />
            </DialogActions>
        </>)
    };
    const ForgotPasswordUI = () => {
        return (<>
            <DialogTitle>{"Are you sure you want to Change the Password ?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Enter your Email and Click on the Send button then check your email
                </DialogContentText>
                <TextField onChange={e => handleChangeInputForgotPassword(e)} fullWidth type='email' name='email' id="standard-basic" label="Type your Email Here" variant="standard" />
            </DialogContent>
            <DialogActions>
                <WhiteButton onClick={handleClose} text={'Cancle'} />
                <WhiteButton onClick={() => handleForgotPassword()} text={'Send'} />
            </DialogActions>
        </>)
    };


    // const ForgotPasswordUI = () => {
    //     return (
    //         <>
    //             <DialogTitle>{"Are you sure you want to Change the Password ?"}</DialogTitle>
    //             <DialogContent>
    //                 <DialogContentText id="alert-dialog-slide-description">
    //                     Enter your Email and Click on the Send button then check your email
    //                 </DialogContentText>
    //                 <TextField onChange={e => handleChangeInputForgotPassword(e)} fullWidth type='email' name='email' id="standard-basic" label="Type your Email Here" variant="standard" />
    //             </DialogContent>
    //             <DialogActions>
    //                 <WhiteButton onClick={handleClose} text={'Cancle'} />
    //                 <WhiteButton onClick={() => handleForgotPassword()} text={'Send'} />
    //             </DialogActions>
    //         </>)

    return (
        <div>
            {UI_Type === 'DeclineUI' ?
                <WhiteButton onClick={handleClickOpen} text={'Decline'} />
                :
                <Link onClick={handleClickOpen} variant="body2" >
                    Forgot Password
                </Link>
            }
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {UI_Type === 'DeclineUI' ? DeclineUI() : ForgotPasswordUI()}
            </Dialog>
        </div>
    );
}
