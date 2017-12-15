import React from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
//button className=submit-button hvr-fade
export default class DialogPlus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newQuote: this.props.quotesArray[this.props.currentMessageIndex] || { body: '', citation: '', cite_link: '' }
        }
        this.updateQuoteBody = this.updateQuoteBody.bind(this)
        this.updateQuoteCitation = this.updateQuoteCitation.bind(this)
    }
    updateQuoteBody(e) {
        this.setState({
            newQuote: Object.assign({}, this.state.newQuote, { body: e.target.value })
        })
    }
    updateQuoteCitation(e) {
        this.setState({
            newQuote: Object.assign({}, this.state.newQuote, { citation: e.target.value })
        })
    }
    render() {
        const styles = {
            underlineStyle: {
                borderColor: '#74b01b'
            },
            floatingLabelFocusStyle: {
                color: '#74b01b'
            }
        }
        const actions = [
            <button className='submit-button hvr-fade'
                label="OK"
                onClick={() => this.props.updateSingleQuote(this.state.newQuote)}
            >CONFIRM</button>,
            <button className='submit-button hvr-fade'
                label="CANCEL"
                onClick={this.props.toggleFlag}
            >CANCEL</button>
        ]
        const deleteActions = [
            <button className='submit-button hvr-fade'
                label='CANCEL'
                onClick={this.props.toggleFlag}>CANCEL</button>,
            <button className='submit-button hvr-fade'
                label='CONFIRM'
                onClick={this.props.deleteThis}>CONFIRM</button>
        ]

        if (typeof this.props.currentMessageIndex === 'number') {
            return (
                <Dialog actions={actions}
                    open={this.props.open}
                    onRequestClose={this.props.toggleFlag}>
                    <TextField value={this.state.newQuote.body} multiLine={true} fullWidth={true} floatingLabelText='quote body' floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        onChange={this.updateQuoteBody} underlineFocusStyle={styles.underlineStyle} />
                    <TextField value={this.state.newQuote.citation} onChange={this.updateQuoteCitation} floatingLabelText='citation' floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle} fullWidth={true} />
                </Dialog>
            )
        } else if (this.props.currentMessageIndex.includes('DELETE_QUOTE')) {
            return (
                <Dialog actions={<div><button className='submit-button hvr-fade' label='CANCEL' onClick={this.props.toggleFlag}>CANCEL</button>
                        <button className='submit-button hvr-fade' label='CONFIRM' onClick={()=>this.props.deleteThis('QUOTE')}>CONFIRM</button></div>}
                        open = { this.props.open } onRequestClose = {()=> this.props.deleteThis('QUOTE')}>
                         Really Delete ?  
                     </Dialog >
            )
        } else if (this.props.currentMessageIndex.includes('DELETE_MESSAGE')) {
    return (
        <Dialog actions={<div><button className='submit-button hvr-fade' label='CANCEL' onClick={this.props.toggleFlag}>CANCEL</button>
            <button className='submit-button hvr-fade' label='CONFIRM' onClick={()=>this.props.deleteThis('MESSAGE')}>CONFIRM</button></div>} 
            open={ this.props.open } onRequestClose={()=> this.props.deleteThis('MESSAGE')}>
                Really Delete ?  
                </Dialog >
            )
            }
    }
}