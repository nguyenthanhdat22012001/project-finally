import React from 'react';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StorefrontIcon from '@mui/icons-material/Storefront';
// import PropTypes from 'prop-types';

import './ListComment.scss';
import ReportComment from "../../../components/dialog/ReportComment";
import ReplyCommentDialog from "../../../components/dialog/ReplyCommentDialog";

function ListComment(props) {
    const [reprotComment, setReprotComment] = React.useState({
        openReprotComment: null,
        openDialogReprotComment: false,
        openDialogReplyComment: false,
    });
    // const [openReprotComment, setopenReprotComment] = React.useState(null);
    // const [openDialogReprotComment, setOpenDialogReprotComment] = React.useState(false);
    const [openReprotReplyComment, setopenReprotReplyComment] = React.useState(null);

    const handleOpenReprotComment = (event) => {
        // setopenReprotComment(event.currentTarget);
        setReprotComment({
            ...reprotComment,
            openReprotComment: event.currentTarget,
        })
    };

    const handleCloseReprotComment = () => {
        // setopenReprotComment(null);
        setReprotComment({
            ...reprotComment,
            openReprotComment: null,
        })
    };

    const handleOpenReprotReplyComment = (event) => {
        setopenReprotReplyComment(event.currentTarget);
    };

    const handleCloseReprotReplyComment = () => {
        setopenReprotReplyComment(null);
    };

    //handle open dialog report commnet
    const handleToggleDialogReprotComment = (boolean) => {
        setReprotComment({
            ...reprotComment,
            openReprotComment: null,
            openDialogReprotComment: boolean
        })
    };
    //handle open dialog report commnet
    const handleToggleDialogReplyComment = (boolean) => {
        setReprotComment({
            ...reprotComment,
            openReprotComment: null,
            openDialogReplyComment: boolean
        })
    };

    return (
        <div className="ListComment">
            <ul className="ListComment__list">
                <li className="ListComment__item">
                    <div className="ListComment__review-comment">
                        <div className="ListComment__review-top">
                            <Rating name="half-rating-read" defaultValue={4} precision={0.5} size="small" readOnly />
                            <span>2 tuần trước</span>
                        </div>
                        <div className="ListComment__review-middle">boi Nguyen Phong</div>
                        <div className="ListComment__review-content">
                            hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than
                        </div>
                        <div className="ListComment__review-bottom">
                            <IconButton aria-label="thumbUp" >
                                <ThumbUpIcon color="disabled" sx={{ marginRight: 1 ,fontSize: '16px' }} /> <span style={{ fontSize: 16 }}>3</span>
                            </IconButton>
                            <IconButton
                                // id="button-report-comment"
                                arial-controls="menu-report-comment"
                                aria-haspopup="true"
                                aria-label="thumbUp"
                                size="small"
                                onClick={handleOpenReprotComment}
                            >
                                <MoreVertIcon color="disabled" />
                            </IconButton>
                            <Menu
                                id="menu-report-comment"
                                anchorEl={reprotComment.openReprotComment}
                                open={Boolean(reprotComment.openReprotComment)}
                                onClose={handleCloseReprotComment}
                                MenuListProps={{
                                    'aria-labelledby': 'button-report-comment',
                                }}
                            >
                                <MenuItem onClick={() => handleToggleDialogReplyComment(true)}>Trả lời</MenuItem>
                                <MenuItem onClick={() => handleToggleDialogReprotComment(true)}>Báo cáo lạm dụng</MenuItem>
                            </Menu>
                            <ReportComment
                                openDialogReprotComment={reprotComment.openDialogReprotComment}
                                handleToggleDialogReprotComment={handleToggleDialogReprotComment}
                            />
                            <ReplyCommentDialog
                                openDialogReplyComment={reprotComment.openDialogReplyComment}
                                handleToggleDialogReplyComment={handleToggleDialogReplyComment}
                            />
                        </div>
                    </div>
                    <div className="ListComment__reply-comment">
                        <div className="ListComment__review-top">
                            <div className="ListComment__name-seller"><StorefrontIcon /> phản hồi của bạn </div>
                            <span>3 tuần trước</span>
                        </div>
                        <div className="ListComment__review-middle"></div>
                        <div className="ListComment__review-content">
                            hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than
                        </div>
                        <div className="ListComment__review-bottom">
                            <IconButton aria-label="thumbUp" >
                                <ThumbUpIcon color="disabled" sx={{ marginRight: 1 ,fontSize: '16px' }} /> <span style={{ fontSize: 16 }}>3</span>
                            </IconButton>
                            <IconButton
                                // id="button-report-comment"
                                arial-controls="menu-report-comment"
                                aria-haspopup="true"
                                aria-label="thumbUp"
                                size="small"
                                onClick={handleOpenReprotReplyComment}
                            >
                                <MoreVertIcon color="disabled" />
                            </IconButton>
                            <Menu
                                id="menu-report-comment"
                                anchorEl={openReprotReplyComment}
                                open={Boolean(openReprotReplyComment)}
                                onClose={handleCloseReprotReplyComment}
                                MenuListProps={{
                                    'aria-labelledby': 'button-report-comment',
                                }}
                            >
                                <MenuItem onClick={handleCloseReprotReplyComment}>Xóa bình luận</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </li>
                <li className="ListComment__item">
                    <div className="ListComment__review-comment">
                        <div className="ListComment__review-top">
                            <Rating name="half-rating-read" defaultValue={4} precision={0.5} size="small" readOnly />
                            <span>2 tuần trước</span>
                        </div>
                        <div className="ListComment__review-middle">boi Nguyen Phong</div>
                        <div className="ListComment__review-content">
                            hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than
                        </div>
                        <div className="ListComment__review-bottom">
                            <IconButton aria-label="thumbUp" >
                                <ThumbUpIcon color="disabled" sx={{ marginRight: 1 ,fontSize: '16px' }} /> <span style={{ fontSize: 16 }}>3</span>
                            </IconButton>
                            <IconButton
                                // id="button-report-comment"
                                arial-controls="menu-report-comment"
                                aria-haspopup="true"
                                aria-label="thumbUp"
                                size="small"
                                onClick={handleOpenReprotComment}
                            >
                                <MoreVertIcon color="disabled" />
                            </IconButton>
                            <Menu
                                id="menu-report-comment"
                                anchorEl={reprotComment.openReprotComment}
                                open={Boolean(reprotComment.openReprotComment)}
                                onClose={handleCloseReprotComment}
                                MenuListProps={{
                                    'aria-labelledby': 'button-report-comment',
                                }}
                            >
                                <MenuItem onClick={() => handleToggleDialogReplyComment(true)}>Trả lời</MenuItem>
                                <MenuItem onClick={() => handleToggleDialogReprotComment(true)}>Báo cáo lạm dụng</MenuItem>
                            </Menu>
                            <ReportComment
                                openDialogReprotComment={reprotComment.openDialogReprotComment}
                                handleToggleDialogReprotComment={handleToggleDialogReprotComment}
                            />
                            <ReplyCommentDialog
                                openDialogReplyComment={reprotComment.openDialogReplyComment}
                                handleToggleDialogReplyComment={handleToggleDialogReplyComment}
                            />
                        </div>
                    </div>
                    <div className="ListComment__reply-comment">
                        <div className="ListComment__review-top">
                            <div className="ListComment__name-seller"><StorefrontIcon /> phản hồi của bạn </div>
                            <span>3 tuần trước</span>
                        </div>
                        <div className="ListComment__review-middle"></div>
                        <div className="ListComment__review-content">
                            hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than  hang tot qua , dang mua, hop li, lan sau se mua neu co nhu cau, dong goi can than
                        </div>
                        <div className="ListComment__review-bottom">
                            <IconButton aria-label="thumbUp" >
                                <ThumbUpIcon color="disabled" sx={{ marginRight: 1 ,fontSize: '16px' }} /> <span style={{ fontSize: 16 }}>3</span>
                            </IconButton>
                            <IconButton
                                // id="button-report-comment"
                                arial-controls="menu-report-comment"
                                aria-haspopup="true"
                                aria-label="thumbUp"
                                size="small"
                                onClick={handleOpenReprotReplyComment}
                            >
                                <MoreVertIcon color="disabled" />
                            </IconButton>
                            <Menu
                                id="menu-report-comment"
                                anchorEl={openReprotReplyComment}
                                open={Boolean(openReprotReplyComment)}
                                onClose={handleCloseReprotReplyComment}
                                MenuListProps={{
                                    'aria-labelledby': 'button-report-comment',
                                }}
                            >
                                <MenuItem onClick={handleCloseReprotReplyComment}>Xóa bình luận</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ListComment

