import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';

ReplyCommentPost.propTypes = {

}

function ReplyCommentPost(props) {

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Trả lời</Typography>
            </AccordionSummary>
            <AccordionDetails>

            </AccordionDetails>
        </Accordion>
    )
}

export default ReplyCommentPost

