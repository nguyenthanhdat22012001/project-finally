import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
//api
import shoppingApi from 'api/shoppingApi';

import ProccessDialog from "components/dialog/ProccessDialog";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

CustomizedMenus.propTypes = {
  statusObj: PropTypes.object,
}

CustomizedMenus.defaultProps = {
  statusObj: null,
}

const options = ['Hủy đơn', 'Chờ xác nhận', 'Đã xác nhận','Đang giao hàng','Đã giao hàng'];

export default function CustomizedMenus(props) {
  const { statusObj } = props;
  const anchorRef = React.useRef(null);
  /******state*******/
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isProccess, setIsProccess] = React.useState(false);

  useEffect(() => {
    setSelectedIndex(statusObj ? statusObj.status : 0);
  }, [statusObj])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  /**********handle close sub item button************/
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  /**********handle click sub item button************/
  const handleMenuItemClick = async (event, index) => {
    await handleUpdateStatus(statusObj.id, index);
    setSelectedIndex(index);
    setOpen(false);
  };
  /**********handle update status order************/
  const handleUpdateStatus = async (id, status) => {
    try {
      setIsProccess(true);
      const data = {
        status: status
      }
      await shoppingApi.updateStatusOrder(id, data);

      setIsProccess(false);
    } catch (error) {
      console.log('error', error);
    }

  }

  return (
    <div>
      {isProccess && <ProccessDialog />} {/* proccess page */}
      <Button
        size="small"
        ref={anchorRef}
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disabled={selectedIndex === 0 || selectedIndex >= 2 ? true : false}
        onClick={handleToggle}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {options[selectedIndex]}
      </Button>
      <ClickAwayListener onClickAway={handleClose}>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorRef.current}
          open={open}
          onClose={handleToggle}
        >
         {options.map((option, index) => {
            if(index !== 3 && index !== 4){
              return(
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              )
            }
          })}
        </StyledMenu>
      </ClickAwayListener>
    </div>
  );
}
