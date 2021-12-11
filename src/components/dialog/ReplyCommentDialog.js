import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ReplyCommentDialog({ openDialogReplyComment, handleToggleDialogReplyComment }) {

    return (
        <Dialog 
        open={openDialogReplyComment} 
        onClose={() => handleToggleDialogReplyComment(false)}
        maxWidth='lg'
        >
            <DialogTitle>Trả lời bình luận</DialogTitle>
            <DialogContent >
                <TextareaAutosize
                        aria-label="answre-comment"
                        minRows={4}
                        placeholder="Trả lời bình luận"
                        style={{width: '50vw'}}
                    />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleToggleDialogReplyComment(false)}>Hủy</Button>
                <Button onClick={() => handleToggleDialogReplyComment(false)}>Gửi bình luận</Button>
            </DialogActions>
        </Dialog>
    );
}
