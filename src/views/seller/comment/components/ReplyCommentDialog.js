import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

ReplyCommentDialog.propTypes = {
    openDialogReplyComment: PropTypes.bool,
    hanldeReplyComment: PropTypes.func,
    handleToggleDialogReplyCommen: PropTypes.func,
};
ReplyCommentDialog.defaultProps = {
    openDialogReplyComment: false,
    hanldeReplyComment: null,
    handleToggleDialogReplyCommen: null,
};

export default function ReplyCommentDialog(props) {
    const { openDialogReplyComment, handleToggleDialogReplyCommen, hanldeReplyComment } = props;
    const refInput = useRef('');

    return (
        <Dialog
            open={openDialogReplyComment}
            onClose={() => handleToggleDialogReplyCommen()}
            maxWidth='lg'
        >

            <DialogTitle>Trả lời bình luận</DialogTitle>
            <DialogContent >
                <TextareaAutosize
                    aria-label="answre-comment"
                    minRows={4}
                    placeholder="Trả lời bình luận"
                    style={{ width: '50vw' }}
                    ref={refInput}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleToggleDialogReplyCommen()}>Hủy</Button>
                <Button onClick={() => hanldeReplyComment(refInput.current.value)}
                >Bình luận</Button>
            </DialogActions>
        </Dialog>
    );
}
