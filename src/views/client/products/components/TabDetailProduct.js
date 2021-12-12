import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShowMoreText from "react-show-more-text";
import Rating from '@mui/material/Rating';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

// api
import productApi from 'api/productApi';
//redux
import { useSelector } from 'react-redux';
// notify
import { useSnackbar } from 'notistack';
// helper
import { handleNotiDialog } from 'helper/notify';
import { distanceToNow } from "helper/FormatDate";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

BasicTabs.propTypes = {
  product_id: PropTypes.number,
  description: PropTypes.string,
};
BasicTabs.defaultProps = {
  product_id: null,
  description: '',
};


export default function BasicTabs(props) {
  const { description, product_id } = props;
  const user = useSelector(state => state.auth.user);
  const { enqueueSnackbar } = useSnackbar();
  /*****state******/
  const [pages, setPages] = useState({
    limit: 2,
    currentPage: 1,
  });
  const [listComment, setListComment] = useState({
    listComment: [],
    totalComment: 0,
  });
  const [commentObject, setCommentObject] = useState({
    parent_id: null,
    comment: '',
    point: null,
  });
  const [btnLoadingComment, setBtnLoadingComment] = useState(false);
  const [value, setValue] = React.useState(0);
  const [openReprotComment, setopenReprotComment] = React.useState(null);
  /***************load page****************/
  useEffect(() => {
    Promise.all([handleGetListComments()]);
  }, [product_id])

  /***************handle get list comment****************/
  const handleGetListComments = async () => {
    if (!product_id) {
      return;
    }

    try {
      const res = await productApi.getCommentRating(product_id);
      if (res.success) {
        console.log('res', res);
        setListComment({
          ...listComment,
          listComment: res.data.listComment,
          totalComment: res.data.totalComment,
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  /*************get all product**************/
  const handleChangePage = (event, value) => {

    setPages({
      ...pages,
      currentPage: value,
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  }

  const handleOpenReprotComment = (event) => {
    setopenReprotComment(event.currentTarget);
  };
  const handleCloseReprotComment = () => {
    setopenReprotComment(null);
  };

  /***************handle change comment****************/
  const handleChangeTextComment = (e) => {
    setCommentObject({
      ...commentObject,
      comment: e.target.value,
    });
  }
  /***************handle change comment****************/
  const handleChangeRating = (e, newValue) => {
    setCommentObject({
      ...commentObject,
      point: newValue,
    });
  }
  /***************handle add commnet****************/
  const hanldeAddComment = async (user_id = null, product_id = null) => {
    if (commentObject.comment === '' || user_id === null || product_id === null) {
      return
    }
    setBtnLoadingComment(true);

    try {
      const newData = {
        ...commentObject,
        user_id: user_id,
        product_id: product_id,
      }
      const res = await productApi.addCommentRating(newData);
      if (res.success) {
        await handleGetListComments();
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
      }
      setBtnLoadingComment(false);

    } catch (error) {
      console.log('error', error);
    }
  }

  /***************display comment by page****************/
  let displayComment = '';
  if ([...listComment.listComment].length > 0) {
    displayComment = [...listComment.listComment].slice((pages.currentPage * pages.limit) - pages.limit, pages.currentPage * pages.limit).map(item => {
      if ([...item.sub_comments].length > 0) {
        return (
          <div key={item.id}>
            <div className="tab-comment__review-comment">
              <div className="tab-comment__review-top">
                <Rating name="half-rating-read" value={item.point} precision={1} size="small" readOnly />
                <span>{distanceToNow(item.created_at)}</span>
              </div>
              <div className="tab-comment__review-middle">bởi {item.user.name}</div>
              <div className="tab-comment__review-content">
                {item.comment}
              </div>
            </div>
            {
              [...item.sub_comments].map(item => {
                return (
                  <div className="tab-comment__reply-comment">
                    <div className="tab-comment__review-top">
                      <div className="tab-comment__name-seller"><StorefrontIcon /> phản hồi từ nhà bán</div>
                      <span>{distanceToNow(item.created_at)}</span>
                    </div>
                    <div className="tab-comment__review-middle"></div>
                    <div className="tab-comment__review-content">
                      {item.comment}
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      } else {
        return (
          <div className="tab-comment__review-comment">
            <div className="tab-comment__review-top">
              <Rating name="half-rating-read" value={item.point} precision={1} size="small" readOnly />
              <span>{distanceToNow(item.created_at)}</span>
            </div>
            <div className="tab-comment__review-middle">bởi {item.user.name}</div>
            <div className="tab-comment__review-content">
              {item.comment}
            </div>
            {/* <div className="tab-comment__review-bottom">
              <IconButton aria-label="thumbUp" sx={{ fontSize: 1 }}>
                <ThumbUpIcon color="disabled" sx={{ marginRight: 1 }} /> <span style={{ fontSize: 16 }}>3</span>
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
                anchorEl={openReprotComment}
                open={Boolean(openReprotComment)}
                onClose={handleCloseReprotComment}
                MenuListProps={{
                  'aria-labelledby': 'button-report-comment',
                }}
              >
                <MenuItem onClick={handleCloseReprotComment}>không hữu ích</MenuItem>
                <MenuItem onClick={handleCloseReprotComment}>Báo cáo lạm dụng</MenuItem>
              </Menu>
            </div> */}
          </div>
        )
      }
    })

  }


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Mô tả sản phẩm" {...a11yProps(0)} />
          <Tab label="Đánh giá sản phẩm" {...a11yProps(1)} />
          <Tab label="Nhận xét sản phẩm" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ShowMoreText
          /* Default options */
          lines={3}
          more="Xem thêm"
          less="Ẩn mô tả"
          className="content-css"
          anchorClass="my-anchor-css-class"
          onClick={executeOnClick}
          expanded={false}
          // width={280}
          truncatedEndingComponent={"... "}
        >
          <div dangerouslySetInnerHTML={{ __html: description }} />

        </ShowMoreText>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="tab-comment-rating">
          <div className="tab-comment-rating__ranting">
            <div className="tab-comment-rating__summary">
              <div className="tab-comment-rating__total-start">
                <span className="tab-comment-rating__average">4.9</span>
                <span className="tab-comment-rating__max">/5</span>
              </div>
              <div className="tab-comment-rating__stars-icon">
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} size="large" readOnly />
              </div>
              <div className="tab-comment-rating__total-evaluate">
                13344 đánh giá
              </div>
            </div>
            <div className="tab-comment-rating__list flexBoxColunm">
              <div className="tab-comment-rating__item">
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} size="medium" readOnly />
                <span>1234 đánh giá</span>
              </div>
              <div className="tab-comment-rating__item">
                <Rating name="half-rating-read" defaultValue={4} precision={0.5} size="medium" readOnly />
                <span>1234 đánh giá</span>
              </div>
              <div className="tab-comment-rating__item">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} size="medium" readOnly />
                <span>1234 đánh giá</span>
              </div>
              <div className="tab-comment-rating__item">
                <Rating name="half-rating-read" defaultValue={2} precision={0.5} size="medium" readOnly />
                <span>1234 đánh giá</span>
              </div>
              <div className="tab-comment-rating__item">
                <Rating name="half-rating-read" defaultValue={1} precision={0.5} size="medium" readOnly />
                <span>1234 đánh giá</span>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="tab-comment">
          <div className="tab-comment__row-comment">
            <h5 className="tab-comment__title">Nhận xét của bạn</h5>
            <div className="tab-comment__box-comment">
              <TextField
                fullWidth
                label="Nhận xét"
                variant="outlined"
                value={commentObject.comment}
                onChange={handleChangeTextComment}
              />
              <div className="tab-comment__btn-comment">
                <Rating
                  name="half-rating-read"
                  precision={1}
                  size="large"
                  value={commentObject.point}
                  onChange={handleChangeRating}
                />
                <LoadingButton
                  variant="contained"
                  color="primary"
                  size="large"
                  loading={btnLoadingComment}
                  onClick={() => hanldeAddComment(user.id, product_id)}
                >
                  Bình luận
                </LoadingButton>
              </div>
            </div>
            <div className="tab-comment__box-list-comments">
              <Grid container justifyContent="space-between">
                <h5 className="tab-comment__title">Nhận xét về sản phẩm</h5>
                <Typography variant="subtitle2" component="div">{listComment.totalComment} nhận xét</Typography>
              </Grid>
              {
                displayComment
              }
              <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={2}>
                  <Pagination
                    count={Math.ceil([...listComment.listComment].length / pages.limit)}
                    color="secondary"
                    page={pages.currentPage}
                    onChange={handleChangePage}
                  />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
