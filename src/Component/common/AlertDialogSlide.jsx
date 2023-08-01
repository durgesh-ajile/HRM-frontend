import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import WhiteButton from './WhiteButton';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { asyncThunkDeclineContractor } from '../../redux/createAsyncThunk';
import { forwardRef, useState } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line react/prop-types
export default function AlertDialogSlide({ _id }) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeInput = e => {
        setInputValue(e.target.value)
    }
    const handleDeclineProfile = (contractorId) => {
        const payload = { contractorId, feedback: inputValue }; dispatch(asyncThunkDeclineContractor(payload))
        setOpen(false);
    };

    return (
        <div>
            <WhiteButton onClick={handleClickOpen} text={'Decline'} />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
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
            </Dialog>
        </div>
    );
}
