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
    }
    updateFields(){
        // this function will set state 
        return 0;
    }
    getQuotesFromServer(){
        // this function will get quotes array from server and store it to local state
        this.props.getQuotes()
        this.setState({
            quotesArray: this.props.quotes
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
            axios.put('/quotes/update', this.state.quotesArray)
            
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
            <img src={this.props.userData.picture} alt='user profile pic' id='user-img'/>            
            <h3>Welcome, {this.props.userData.namefirst || 'friend'}</h3>         
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
                <button onClick={()=>this.toggleDialogFlagWithMessage(i)}>edit sum stuff</button>
                <button>delet this</button>
                <div>{e.body}</div>
                <div>{e.citation}</div>
                <div>{e.cite_link}</div>
            </div>
            ))
            }
                



            </section>
            
            
            
            <div id='bottom-bar'>
            <a href='http://localhost:3005/auth/logout'><button className='submit-button hvr-fade'>LOGOUT</button></a>
            </div>
            </div>
            
            
            : 'Unauthorized'}
            {this.state.dialogFlag && <DialogPlus updateFields={this.updateFields} toggleFlag={this.toggleDialogFlag} 
                                        open={this.state.dialogFlag} message={this.state.dialogMessage}
                                        quotesArray={this.state.quotesArray} currentMessageIndex={this.state.currentMessageIndex}
                                        updateQuotesArrayBody={this.updateQuotesArrayBody}
                                        updateSingleQuote={this.updateSingleQuote}/>}
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps, {getUser, toggleLogin, getQuotes})(Admin)