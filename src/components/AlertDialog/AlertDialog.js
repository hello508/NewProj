import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const AlertDialog = ({ open, onClose, onAccept, onReject, message }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{'WARNING!'}</DialogTitle>
    <DialogContent>
      <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary">Disagree</Button>
      <Button color="primary" autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);

AlertDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  message: PropTypes.string,
};

export default AlertDialog;
