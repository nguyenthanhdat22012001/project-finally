import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

const baseUrl ="/client"

ListCategory.propTypes = {
  categories: PropTypes.array,
}
ListCategory.defaultProps = {
  categories: [],
}

function ListCategory(props) {
  const { categories } = props;

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {
        [...categories].length > 0 ?
          [...categories].map(item => {
            return (
              <Link key={item.id} to={`${baseUrl}/product/category/${item.slug}`}>
                <ListItem button divider>
                  <ListItemText primary={item.name} />
                </ListItem>
              </Link>
            )
          })

          : ""
      }
    </List>
  );

}



export default ListCategory;
