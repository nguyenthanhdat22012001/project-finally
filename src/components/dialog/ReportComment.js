import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function ReportComment({ openDialogReprotComment, handleToggleDialogReprotComment }) {

    return (
        <Dialog 
        open={openDialogReprotComment} 
        onClose={() => handleToggleDialogReprotComment(false)}
        maxWidth='md'
        >
            <DialogTitle>Chọn lý do</DialogTitle>
            <DialogContent >
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="reason"
                        // defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Vulgar-words" control={<Radio />} label="Từ ngữ thô tục" />
                        <FormControlLabel value="wrong-translate" control={<Radio />} label="wrong translate" />
                    </RadioGroup>
                 
                </FormControl>
                <TextareaAutosize
                        aria-label="other"
                        minRows={4}
                        placeholder="lý do khác"
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleToggleDialogReprotComment(false)}>Hủy</Button>
                <Button onClick={() => handleToggleDialogReprotComment(false)}>Gửi báo cáo</Button>
            </DialogActions>
        </Dialog>
    );
}
