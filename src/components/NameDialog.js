// src/components/NameDialog.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { restoreName, storeName } from '../actions/name' // not the default export, so mustaches needed

class NameDialog extends PureComponent {
  static propTypes = {
    name: PropTypes.any,
  }

  constructor() {
    super()

    this.setName = this.setName.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(restoreName())
  }

  setName() {
    const name = this.refs.nameInput.getValue()
    this.props.dispatch(storeName(name))
  }

  render() {
    if (this.props.name) return null;

    const actions = [
      <RaisedButton
        label="Continue"
        primary={true}
        onClick={this.setName}
      />,
    ];

    return (
      <Dialog
        title="Hi There!"
        actions={actions}
        modal={false}
        open={true}>
        <div>
          <p>What is your name?</p>
          <TextField
            ref="nameInput"
            hintText="Type your name"
            fullWidth={true} />
        </div>
      </Dialog>
    )
  }
}

// // 1
const mapStateToProps = ({ name }) => ({ name })
//
// // 2
// const mapStateToProps = (state) => ({ name: state.name })
//
// // 3
// const mapStateToProps = (state) => {
//   return { name: state.name }
// }
//
// // 4
// function mapStateToProps(state) {
//   return { name: state.name }
// }
//
// export default connect(mapStateToProps)(NameDialog)

// or
export default connect(mapStateToProps)(NameDialog)
