import React from 'react';
import MButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import buttonStyle from './Button.style';

const Button = ({ children, classes, ...otherProps }) => (
  <MButton {...otherProps} className={classes.button}>
    {children}
  </MButton>
);

export default withStyles(buttonStyle)(Button);
