import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Button from '@mui/material/Button';
// helper
import { distanceToNow } from "helper/FormatDate";
import { handleNotiDialog } from "helper/notify";
// notify
import { useSnackbar } from 'notistack';
//redux
import { useSelector } from 'react-redux';
//api
import productApi from "api/productApi";

import './ListComment.scss';
import ReplyCommentDialog from "./ReplyCommentDialog";
import ConfirmDialog from "components/dialog/ConfirmDialog";

ListComment.propTypes = {
    listComment: PropTypes.array,
    product_id: PropTypes.string,
    handleGetListComments: PropTypes.func,
    filterComment: PropTypes.object,
};
ListComment.defaultProps = {
    listComment: [],
    product_id: null,
    handleGetListComments: null,
    filterComment: null,
};

function ListComment(props) {
    const { listComment, product_id, handleGetListComments, filterComment } = props;
    const user = useSelector(state => state.auth.user);
    const { enqueueSnackbar } = useSnackbar();
    /********state**********/
    const [dialogDelete, setDialogDelete] = useState({ openDialog: false, message: '', isDelete: false, idDelete: null });
    const [replyComment, setReplyComment] = useState({
        openDialogReplyComment: false,
        idComment: null,
    });

    /***************handle Toggle dialog comment****************/
    const handleToggleDialogReplyCommen = (boolean = false, idComment = null) => {
        console.log('idComment', idComment)
        setReplyComment({
            ...replyComment,
            openDialogReplyComment: boolean,
            idComment: idComment
        })
    }
    /***************handle reply comment****************/
    const hanldeReplyComment = async (textComment) => {
        if (textComment === '') {
            return
        }

        try {
            const data = {
                comment: textComment,
                user_id: user.id,
                product_id: product_id,
                parent_id: replyComment.idComment
            }
            const res = await productApi.addCommentRating(data);

            if (res.success) {
                handleToggleDialogReplyCommen();
                await handleGetListComments(product_id);
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /***************handle reply comment****************/
    const hanldeDeleteComment = async (id) => {
        try {
            const res = await productApi.deleteCommentRating(id);

            if (res.success) {
                await handleGetListComments(product_id);
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /************** handle report delete dialogDelete ***************/
    const hanldeReportDeleteDialog = (openDialog, message = '', id = null) => {
        setDialogDelete({ ...dialogDelete, openDialog: openDialog, message: message, idDelete: id });
    }
    /************** handle accept delete dialogDelete ***************/
    const hanldeAcceptDelete = () => {
        hanldeReportDeleteDialog(false);
        hanldeDeleteComment(dialogDelete.idDelete);
    }

    let displayArrComments = [];
    let displayComment = ""
    // useEffect(() => {
    //     if (filterComment.isFilter) {
    //         displayArrComments = filterComment.commentFilter;
    //     } else {
    //         displayArrComments = listComment;
    //     }
    //     console.log('change')
    // }, [listComment])

    if (filterComment.isFilter) {
        displayArrComments = filterComment.commentFilter;
    } else {
        displayArrComments = listComment;
    }
    console.log('change')

    displayComment = [...displayArrComments].map(item => {
        if ([...item.sub_comments].length > 0) {
            return (
                <li key={item.id} className="ListComment__item">
                    <div className="ListComment__review-comment">
                        <div className="ListComment__review-top">
                            <Rating name="half-rating-read" value={item.point} precision={1} size="small" readOnly />
                            <span>{distanceToNow(item.created_at)}</span>
                        </div>
                        <div className="ListComment__review-middle">bởi {item.user.name}</div>
                        <div className="ListComment__review-content">
                            {item.comment}
                        </div>
                        <div className="ListComment__review-bottom">
                            <span></span>
                            <Button
                                size='small'
                                onClick={() => handleToggleDialogReplyCommen(true, item.id)}
                            >Trả lời</Button>
                        </div>
                    </div>
                    {
                        [...item.sub_comments].map(sub_item => {
                            return (
                                <div key={sub_item.id} className="ListComment__reply-comment">
                                    <div className="ListComment__review-top">
                                        <div className="ListComment__name-seller"><StorefrontIcon /> phản hồi của bạn </div>
                                        <span>{distanceToNow(sub_item.created_at)}</span>
                                    </div>
                                    <div className="ListComment__review-middle"></div>
                                    <div className="ListComment__review-content">
                                        {sub_item.comment}
                                    </div>
                                    <div className="ListComment__review-bottom">
                                        <span></span>
                                        <Button
                                            size='small'
                                            onClick={() => hanldeReportDeleteDialog(true, `Bạn có chắc muốn xóa bình luận: "${sub_item.comment}" ?`, sub_item.id)}
                                        >Xóa</Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </li>
            )
        } else {
            return (
                <li key={item.id} className="ListComment__item">
                    <div className="ListComment__review-comment">
                        <div className="ListComment__review-top">
                            <Rating name="half-rating-read" value={item.point} precision={1} size="small" readOnly />
                            <span>{distanceToNow(item.created_at)}</span>
                        </div>
                        <div className="ListComment__review-middle">bởi {item.user.name}</div>
                        <div className="ListComment__review-content">
                            {item.comment}
                        </div>
                        <div className="ListComment__review-bottom">
                            <span></span>
                            <Button
                                size='small'
                                onClick={() => handleToggleDialogReplyCommen(true, item.id)}
                            >Trả lời
                            </Button>
                        </div>
                    </div>
                </li>
            )
        }
    })

    return (
        <div className="ListComment">
            <ReplyCommentDialog
                openDialogReplyComment={replyComment.openDialogReplyComment}
                handleToggleDialogReplyCommen={handleToggleDialogReplyCommen}
                hanldeReplyComment={hanldeReplyComment}
            />
            {/* dialogDelete delete */}
            <ConfirmDialog
                dialogDelete={dialogDelete}
                hanldeReportDeleteDialog={hanldeReportDeleteDialog}
                hanldeAcceptDelete={hanldeAcceptDelete}
            />
            <ul className="ListComment__list">
                {
                    [...listComment].length > 0 ?
                        displayComment
                        : "không có bình luận nào"
                }

            </ul>
        </div>
    )
}

export default ListComment

