import React from 'react'
import Dialog from 'material-ui/Dialog'
//button className=submit-button hvr-fade
export default class DialogBox extends React.Component {
    
    state = {
        open: true
    }
    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.setState({open: false})        
    }
    render() {
        const actions = [
            <button className='submit-button hvr-fade'
                label="OK"
                onClick={this.props.toggleFlag}
            >OK</button>
        ]
        return ( 
            <Dialog actions={actions}
            open={this.props.open}
            onRequestClose={this.props.toggleFlag}>
            {this.props.message}
            </Dialog>
        )
    }
}