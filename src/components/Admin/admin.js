import React from 'react'
import './../../css/admin.css'
import {connect} from 'react-redux'
import {getUser, toggleLogin, getQuotes} from './../../ducks/reducer'
import DialogPlus from './../dialogPlus'
import axios from 'axios'

class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dialogFlag: false,
            dialogMessage: '',
            quotesArray: [],
            currentMessageIndex: null
        }
        this.toggleDialogFlag = this.toggleDialogFlag.bind(this)
        this.getQuotesFromServer = this.getQuotesFromServer.bind(this)
        this.updateFields = this.updateFields.bind(this)
        this.toggleDialogFlagWithMessage = this.toggleDialogFlagWithMessage.bind(this)
        this.updateQuotesArrayBody = this.updateQuotesArrayBody.bind(this)
        this.updateSingleQuote = this.updateSingleQuote.bind(this)
        this.sendChangesToDB = this.sendChangesToDB.bind(this)
        this.deleteThis = this.deleteThis.bind(this)
        this.toggleDialogAndDelete = this.toggleDialogAndDelete.bind(this)
    }
    updateFields(){
        // this function will set state 
        return 0;
    }
    getQuotesFromServer(){
        // this function will get quotes array from server and store it to local state
        this.props.getQuotes().then(()=>{
        this.setState({
            quotesArray: this.props.quotes
        })
    })
    }
    deleteThis(){
        //toggle flag and remove this.props.currentMessage from quotesArray
        // this.props.quotesArray.splice(this.props.currentMessage, 1)
        let quotes = this.state.quotesArray
        quotes.splice(this.state.currentMessageIndex[0], 1)
        this.setState({
            dialogFlag: !this.state.dialogFlag,
            quotesArray: quotes
        })
    }
    updateSingleQuote(quoteObj){
        let newArray = this.state.quotesArray
        newArray[this.state.currentMessageIndex] = quoteObj
        this.setState({
            quotesArray: newArray,
            dialogFlag: !this.state.dialogFlag
        })
    }
    updateQuotesArrayBody(e){
        let newArray = this.state.quotesArray
        newArray[this.state.currentMessageIndex].body = e.target.value
        this.setState({
            quotesArray : newArray
        }) 
    }
    sendChangesToDB(){
            // this functio will upload this.state.quotesArray to the DB 
            axios.put('/quotes/update', this.state.quotesArray).then(()=>this.props.getQuotes())
            
    }
    toggleDialogFlag(){
        this.setState({
            dialogFlag: !this.state.dialogFlag
        })
    }
    toggleDialogFlagWithMessage(i){
        this.setState({
            dialogFlag: !this.state.dialogFlag,
            currentMessageIndex: i
        })
    }
    toggleDialogAndDelete(i){
        this.setState({
            dialogFlag: !this.state.dialogFlag,
            currentMessageIndex: i + '_DELETE'
        })
    }
    componentWillMount(){
        this.getQuotesFromServer()
    }
    
    render(){        
        const quotes = this.props.quotes
        return(
            <div id='admin' className='Component'>
            
            {this.props.userData ? 
            
            <div id='admin-component'>
            <section id='top'>
            <div id='user-info'>
            <img src={this.props.userData.img} alt='user profile pic' id='user-img'/>            
            <h3>Welcome, {this.props.userData.user_name || 'friend'}</h3>         
            </div>            
            </section>
            <section id='mid'>
            {/* get stuff from db */}
            <h3>Quotes</h3>
            <br/>
            <div id='border-bottom'/>
            <button className='submit-button hvr-fade' onClick={this.getQuotesFromServer}>REFRESH</button>
            <button className='submit-button hvr-fade' onClick={()=>this.toggleDialogFlagWithMessage(this.state.quotesArray.length)}>ADD</button>
            <button className='submit-button hvr-fade' onClick={this.sendChangesToDB}>CONFIRM CHANGES</button>
            <br/>
            { 
            this.state.quotesArray.map((e,i)=>(
            <div key={i} className='quote-container'>
                
                
                <div>{e.body}</div>
                <br/>
                <div>{e.citation}</div>
                <br/>
                <div>{e.cite_link}</div>
                
                <button className='submit-button hvr-fade' onClick={()=>this.toggleDialogFlagWithMessage(i)}>EDIT</button>                
                <button className='submit-button hvr-fade' onClick={()=>this.toggleDialogAndDelete(i)}>DELETE</button>
            </div>
            ))
            }
                

                <div id='bottom-bar'>
            <a href='http://localhost:3005/auth/logout'><button className='submit-button hvr-fade'>LOGOUT</button></a>
            </div>

            </section>
            
            
            
            
            </div>
            
            
            : 'Unauthorized'}
            {this.state.dialogFlag && <DialogPlus updateFields={this.updateFields} toggleFlag={this.toggleDialogFlag} 
                                        open={this.state.dialogFlag} message={this.state.dialogMessage}
                                        quotesArray={this.state.quotesArray} currentMessageIndex={this.state.currentMessageIndex}
                                        updateQuotesArrayBody={this.updateQuotesArrayBody}
                                        updateSingleQuote={this.updateSingleQuote} deleteThis={this.deleteThis}/>}
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps, {getUser, toggleLogin, getQuotes})(Admin)