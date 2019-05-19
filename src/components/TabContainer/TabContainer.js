import React from 'react';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

export default TabContainer;
