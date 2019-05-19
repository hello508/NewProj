import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
})

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

class TextFields extends React.Component {
  state = {}

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Created By"
          className={classes.textField}
          placeholder="Placeholder"
          //value={this.state.name}
          margin="normal"
          disabled
        />

        <TextField
          id="standard-name"
          label="Created On"
          className={classes.textField}
          placeholder="Placeholder"
          //value={this.state.name}
          margin="normal"
          disabled
        />

        <TextField
          id="standard-name"
          label="Responsible Groups"
          className={classes.textField}
          placeholder="Placeholder"
          //value={this.state.name}
          margin="normal"
          disabled
        />

        <TextField
          id="standard-name"
          label="Template Name"
          className={classes.textField}
          placeholder="Placeholder"
          //value={this.state.name}
          margin="normal"
          disabled
        />
      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TextFields)
