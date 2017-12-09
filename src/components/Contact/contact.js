import React, { Component } from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import styled from 'styled-components'
import './../../css/contact.css'
import './../../css/button.css'
import axios from 'axios'
import { getUser } from './../../ducks/reducer';
import { connect } from 'react-redux';
import kevbeck from './../../img/kevbeck.jpg'

const colors = [
    '#def5b9',
    '#c6f876',
    '#87ca22',
    '#87ca22',
    '#74b01b'
]

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`

const SlideBox = styled.div.attrs({
})`
    flex-basis: ${props => props.width}%;
    background: ${props => props.bgColor};  
`;
const ViewBox = styled.div.attrs({
    
})`
    flex-basis: ${props => props.width}%;
    background: ${props => props.bgColor};
    overflow: hidden;
`;

const ViewBody = styled.div`
overflow: hidden;
width: 100vw;
`

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            formName: '',
            formEmail: '',
            formMessage: ''
        }
    this.nameInput = this.nameInput.bind(this)
    this.emailInput = this.emailInput.bind(this)
    this.messageInput = this.messageInput.bind(this)
    this.submitForm = this.submitForm.bind(this)
    }
    nameInput(e){
        this.setState({
            formName: e.target.value
        })
    }
    emailInput(e){
        this.setState({
            formEmail: e.target.value
        })
    }
    messageInput(e){
        this.setState({
            formMessage: e.target.value
        })
    }
    submitForm(){
        if (this.state.formName && this.state.formEmail && this.state.formMessage){
            /**make axios call */
        axios.post('http://localhost:3005/contactus', { name: this.state.formName, email: this.state.formEmail, message: this.state.formMessage })
             .then( result => {
                 this.setState({
                     formName: '',
                     formEmail: '',
                     formMessage: '',
                     isLoggedIn: false
                 })
                 alert('Message sent.')
             })
        } else {
            /**if missing required fields */
            alert('Please enter a name, email and message.')
        }
    }
    componentDidMount(){
        this.props.getUser();
    }
    render() {
        return (
            <StaggeredMotion
                defaultStyles={[
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 0 }
                ]}
                styles={(prevStyles) => [
                    { width: spring(0) },
                    { width: spring(prevStyles[0].width) },
                    { width: spring(prevStyles[1].width) },
                    { width: spring(prevStyles[2].width) },
                    { width: spring(100 - prevStyles[2].width) }
                ]} >
                {(styles) => (
                    <Wrapper>
                        <SlideBox bgColor={colors[0]} width={styles[0].width} />
                        <SlideBox bgColor={colors[1]} width={styles[1].width} />
                        <SlideBox bgColor={colors[2]} width={styles[2].width} />
                        <SlideBox bgColor={colors[3]} width={styles[3].width} />
                        <ViewBox bgColor={colors[4]} width={styles[4].width}>
                            <ViewBody>

                                <div className='Contact Component'>
                                    <div className='contactbg bg200'></div>
                                    <div id='contact-about-container'>
                                    <div className='contact-container'>
                                        <div id='explanation'>
                                        <p>
We'd love to hear from you!                                        </p>
                                        <br/>
                                        </div>
                                            <input onChange={this.nameInput} id='name-input' placeholder='name' value={this.state.formName} />
                                            <input onChange={this.emailInput} id='email-input' placeholder='email' value={this.state.formEmail}/>
                                        
                                       
                                            <textarea onChange={this.messageInput} id='message-input' placeholder='your message' value={this.state.formMessage} />
                                            <br/>
                                            <button onClick={this.submitForm} className='submit-button hvr-fade'>Submit</button>
                                        
                                    </div>
                                    {/* fun about section */}
                                    <div id='about'>
                                    <h3>About Us</h3>
                                    <p>Firm History:</p>
                                    <p> 
                                    Since 2007, Securities Industry Records Services, LLC ("SIRS") has been a premier provider of low-cost, regulatory compliance services for financial institutions. Specializing in AML compliance services, SIRS has developed training, independent testing, and compliance programs for various non-bank financial institutions.
                                    </p>
                                    <br/>
                                    <p>
                                    The Partner Approach to AML compliance:
                                    </p>
                                    <p>
                                    The regulatory requirements placed on financial institutions can be onerous. Recognizing that financial institutions are often burdened by these demands, SIRS acts as an institution’s AML compliance partner to help lighten this load.   
                                    </p>
                                    <br/>
                                    <p>
                                    When conducting the independent test of your program, SIRS will act as your partner. If deficiencies are found, SIRS will work with you to address and resolve those deficiencies, if possible, before the test is completed. In this way, your test report can present your program in the best possible light.    
                                    </p>
                                    <br/>
                                    <p>
                                    Similarly, as changes to your policies or procedures are needed, SIRS will work with you to help make these changes.
                                    </p>

                                    <img src={kevbeck} height='300px' alt='kevin and becky'/>


                                    </div>
                                    {/* ===================== */}
                                    </div>
                                    <br/>
                                    <div id='border-bottom'/>
                                    
                                    <section id='admin'>
                                            <a href={process.env.REACT_APP_LOGIN}><button className='submit-button hvr-fade'>LOGIN</button></a>
                                            <a href='http://localhost:3005/auth/logout'><button className='submit-button hvr-fade'>LOGOUT</button></a>

                                            <div id='user_display' style={{'display': this.props.user.namefirst ? "block" : "none"}}>
                                            welcome, {this.props.user.namefirst}
                                            <img src={this.props.user.picture} alt='profile pic'/>
                                            </div>
                                    </section>                                

                                </div>
                            </ViewBody>
                        </ViewBox>
                    </Wrapper>
                )}
            </StaggeredMotion>
        )
    }
}
function mapStateToProps(state) {
    return { user: state.userData }
}
export default connect(mapStateToProps, { getUser })(Contact)