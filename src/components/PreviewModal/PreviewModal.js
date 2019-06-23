import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'

import previewModalStyles from './PreviewModal.style'

class PreviewModal extends Component {
  render() {
    const { open, classes, onClose, previewTemplateData } = this.props
    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <label>Preview</label>
          <div>
            <textarea className="form-control" rows="15" value={previewTemplateData.body} readOnly />
          </div>
        </div>
      </Modal>
    )
  }
}

export default withStyles(previewModalStyles)(PreviewModal)
