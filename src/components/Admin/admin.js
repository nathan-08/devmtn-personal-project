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
            currentMessageIndex: null,
            messages: [], 
            rn: {
                date: '',
                title: '',
                summary: '',
                link: ''
            }, 
            rnArr: []
        }
        this.toggleDialogFlag = this.toggleDialogFlag.bind(this)
        this.getDataFromServer = this.getDataFromServer.bind(this)
        this.updateFields = this.updateFields.bind(this)
        this.toggleDialogFlagWithMessage = this.toggleDialogFlagWithMessage.bind(this)
        this.updateQuotesArrayBody = this.updateQuotesArrayBody.bind(this)
        this.updateSingleQuote = this.updateSingleQuote.bind(this)
        this.sendChangesToDB = this.sendChangesToDB.bind(this)
        this.deleteThis = this.deleteThis.bind(this)
        this.toggleDialogAndDelete = this.toggleDialogAndDelete.bind(this)
        this.toggleDialogAndDeleteMessage = this.toggleDialogAndDeleteMessage.bind(this)
        this.changeRnDate = this.changeRnDate.bind(this)
        this.changeRnTitle = this.changeRnTitle.bind(this)
        this.changeRnSummary = this.changeRnSummary.bind(this)
        this.changeRnLink = this.changeRnLink.bind(this)
        this.sendRn = this.sendRn.bind(this)
    }
    updateFields(){
        // this function will set state 
        return 0;
    }
    getDataFromServer(){
        // this function will get quotes array from server and store it to local state
        this.props.getQuotes().then(()=>{
        this.setState({
            quotesArray: this.props.quotes
        })
    })
    axios.get('/nodemailer').then(messages=>{
        this.setState({
            messages: messages.data
        })
    })
    }
    deleteThis(type){ //type = 'MESSAGE' OR 'QUOTE'
        //toggle flag and remove this.props.currentMessage from quotesArray
        // this.props.quotesArray.splice(this.props.currentMessage, 1)
        // quotes or messages ? 
        if (type==='QUOTE'){
        let quotes = this.state.quotesArray
        quotes.splice(this.state.currentMessageIndex[0], 1)
        this.setState({
            dialogFlag: !this.state.dialogFlag,
            quotesArray: quotes
        })
    } else if (type ==='MESSAGE'){
        let messages = this.state.messages
        messages.splice(this.state.currentMessageIndex[0], 1)
        this.setState({
            dialogFlag: !this.state.dialogFlag,
            messages: messages
        })
    }
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
            axios.post('/nodemailer', this.state.messages)            
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
            currentMessageIndex: i + '_DELETE_QUOTE'
        })
    }
    toggleDialogAndDeleteMessage(i){
        this.setState({
            dialogFlag: !this.state.dialogFlag,
            currentMessageIndex: i + '_DELETE_MESSAGE'
        })
    }
    sendRn(){
        const {date, title, summary, link} = this.state.rn
        //check date in proper format
        if(date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)){
        axios.post('/regulatory-notice', {date, title, summary, link})
        this.setState({
            rn: {
                date: '',
                title: '',
                summary: '',
                link: ''
            }
        })
    } else alert("Invalid DATE format\nShould look like: 01/01/2000")
    }
    deleteRn(id){
        axios.delete(`/delete-rn/${id}`)
        alert('ITEM DELETED')
    }
    changeRnDate(event){
        this.setState({
            rn: Object.assign({}, this.state.rn, {date: event.target.value})
        })
    }
    changeRnTitle(event){
        this.setState({
            rn: Object.assign({}, this.state.rn, {title: event.target.value})
        })
    }
    changeRnSummary(event){
        this.setState({
            rn: Object.assign({}, this.state.rn, {summary: event.target.value})
        })
    }
    changeRnLink(event){
        this.setState({
            rn: Object.assign({}, this.state.rn, {link: event.target.value})
        })
    }
    componentWillMount(){
        this.getDataFromServer()
        axios.get('/get-rn').then(rnArr=>{
            console.log('rnArr: ', rnArr)    
            this.setState({rnArr:rnArr.data})
        })
    }

    
    render(){         
        const quotes = this.props.quotes
        return this.props.userData.id || true ? (
            <div id='admin' className='Component'>
            
            {this.props.userData ?  
            
            <div id='admin-component'>
            <section id='top'>
                       
            </section>
            
            <section id='mid'>
            <div id='user-info'>
            <img src={this.props.userData.img} alt='user profile pic' id='user-img'/>            
            <h3>Welcome, {this.props.userData.user_name || 'friend'}</h3>        
            <br/>
            <a href={process.env.REACT_APP_LOGOUT}><button className='submit-button hvr-fade'>LOGOUT</button></a> 
            </div>
            <div id='admin-content'>
              <button className='submit-button hvr-fade'  onClick={this.sendChangesToDB}>CONFIRM CHANGES</button>
            <br/>
            <div id='quotes' className='admin-content-box'> 
            <h3>Quotes</h3><p style={{textAlign:'center'}}>One of these quotes will be selected randomly at load and displayed at the bottom of the Regulatory Notices sidebar </p>
            <br/>
            <div id='border-bottom'/>
            <button className='submit-button hvr-fade' onClick={this.getDataFromServer}>REFRESH</button>
            <button className='submit-button hvr-fade' onClick={()=>this.toggleDialogFlagWithMessage(this.state.quotesArray.length)}>ADD</button>
            
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
            
            </div>
            </div>
            <div id='nodemailer' className='admin-content-box'>
            <h3>Messages</h3><p style={{textAlign:'center'}}>These messages were received from viewers of the website</p>
            <br/>
            <div id='border-bottom'/>
            {/* display messages from db here */}
            { 
            this.state.messages.map((e,i)=>(
            <div key={i} className='quote-container'>
                
                
                <div>{e.name}</div>
                <br/>
                <div>{e.email}</div>
                <br/>
                <div>{e.message}</div>
                <br/>
                              
                <button className='submit-button hvr-fade' onClick={()=>this.toggleDialogAndDeleteMessage(i)}>DELETE</button>
            </div>
            ))
            }
            </div>
            </div>
            </section>
            <h3>add to regulatory notices</h3>
            <p>date(numeric month/day/year):</p>
            <input value={this.state.rn.date} onChange={this.changeRnDate} placeholder="e.g. 01/01/2000"/>
            <p>article title</p>
            <textarea value={this.state.rn.title} onChange={this.changeRnTitle}/>
            <p>article summary</p><textarea value={this.state.rn.summary} onChange={this.changeRnSummary}/>
            <p>link</p><textarea value={this.state.rn.link} onChange={this.changeRnLink}/>
            <button onClick={this.sendRn}>SEND TO DB</button>
            <div>
            {
                this.state.rnArr[0]? this.state.rnArr.map((rn,index)=>(
                    <div key={index}>
                        {rn.title} <button onClick={()=>this.deleteRn(rn.id)}>delete</button>
                    </div>
                )) : 'no regulatory notices retrieved'
            }
            </div>
            
            
            
            </div>
            
            
            : 'Unauthorized'}
            {this.state.dialogFlag && <DialogPlus toggleFlag={this.toggleDialogFlag} 
                                        open={this.state.dialogFlag} message={this.state.dialogMessage}
                                        quotesArray={this.state.quotesArray} currentMessageIndex={this.state.currentMessageIndex}
                                        updateQuotesArrayBody={this.updateQuotesArrayBody}
                                        updateSingleQuote={this.updateSingleQuote} deleteThis={this.deleteThis}/>}
            </div>
        ) : (
            <div className='Component'>unauthorized
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps, {getUser, toggleLogin, getQuotes})(Admin)