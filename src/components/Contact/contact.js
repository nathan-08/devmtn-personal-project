import React, { Component } from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import styled from 'styled-components'
import './../../css/contact.css'
import './../../css/button.css'
import axios from 'axios'
import { connect } from 'react-redux';
import kevbeck from './../../img/kevbeck.jpg'
import ceo from './../../img/sirsceo.jpg'
import DialogBox from './../dialog'

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
            formMessage: '',
            dialogFlag: false,
            alertSentMessage: false,
            dialogMessage: ''
        }
    this.nameInput = this.nameInput.bind(this)
    this.emailInput = this.emailInput.bind(this)
    this.messageInput = this.messageInput.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.toggleDialogFlag = this.toggleDialogFlag.bind(this)
    this.toggleSentMessage = this.toggleSentMessage.bind(this)
    }
    toggleDialogFlag(){
        this.setState({dialogFlag: !this.state.dialogFlag})
    }
    toggleSentMessage(){
        this.setState({alertSentMessage: !this.state.alertSentMessage})
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
            this.setState({
                formName: '',
                formEmail: '',
                formMessage: '',
                isLoggedIn: false,
                alertSentMessage: true,
                dialogMessage: 'messsage sent',
                dialogFlag: true                    
               })
        axios.post('/contactus', { name: this.state.formName, email: this.state.formEmail, message: this.state.formMessage })             
        } else {
            /**if missing required fields */
            this.setState({
                dialogFlag: true,
                dialogMessage: 'please fill in all fields'
            })
        }
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
                                    <div className='contactbg bg200'> ABOUT US</div>
                                    <div id='contact-about-container' className='home--body'>
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
                                            <br/> <br/>
                                        <div id='border-bottom'>
                                        <br/>
                                        <h3>
                                        Contact Us
                                    </h3>
                                    <br/>
                                    <div id='contact-info'>
                                    <h4>
                                        Regular Mail: 
                                    </h4>
                                    <p>SIRS</p>
                                    <p>1420 W 8700 South</p>
                                    <p> West Jordan, UT 84088</p>
                                    <br/>
                                    <h4>Email</h4>
                                    <p><a href='mailto:info@Sirsco.com'>info@Sirsco.com</a></p>
                                    <br/>
                                    <h4>Telephone: </h4>
                                    <p>801.931.3320</p>
                                    <br/>
                                    <h4>Fax: </h4>
                                    <p>801.931.3320</p>
                                    </div>
                                        </div>
                                    </div>
                                    {/* fun about section */}
                                    <div id='about'>
                                    <h3>About Us</h3>
                                    <h4 className="pricing-headers">Firm History</h4>
                                    <p> 
                                    Since 2007, Securities Industry Records Services, LLC ("SIRS") has been a premier provider of low-cost, regulatory compliance services for financial institutions. Specializing in AML compliance services, SIRS has developed training, independent testing, and compliance programs for various non-bank financial institutions.
                                    </p>
                                    <br/>
                                    <h4 className="pricing-headers">
                                    The Partner Approach to AML compliance
                                    </h4>
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
                                    <br/>
                                    <h4 className="pricing-headers">
                                        Discounted Pricing through Electronic Delivery
                                    </h4>
                                    <p>
                                    Through the use of SIRS' secure cloud server, financial institutions are able to provide their AML program documents electronically to SIRS. SIRS is then able to access these files in order to conduct the required test of the institution's AML program. Phone and email communications with firm management allow SIRS personnel to easily address any issues that may arise as we work through the testing process. This use of modern communication and information sharing technologies eliminates travel time and costs and allows SIRS to perform its review in a highly efficient and cost-effective manner.
                                    </p>
                                    <br/>
                                    <h4 className="pricing-headers">
                                        Executive Management:
                                    </h4>

                                    <img src={kevbeck} height='300px' alt='SIRS CEO' id='ceo-img'/>
                                    <p>
                                        Kevin A. Klundt, CAMS, Founder and CEO of Securities Industry Records Services, LLC.

                                    </p>
                                    <p>
                                        Phone: 801.613.5388
                                    </p>
                                    <p>
                                        Email: <a href='mailto:kevin.klundt@sirsco.com'>kevin.klundt@Sirsco.com</a>
                                    </p>
                                    <br/>
                                    <p>
                                    Since 1993, Mr. Klundt has been actively involved in the financial services industry. During this time, he has been registered with the New York Stock Exchange as an NYSE Compliance Official. He has also held the positions of Chief Compliance Officer and AML Compliance Officer with a FINRA-registered broker/dealer.

                                    </p>
                                    <br/>
                                    <p>
                                    Mr. Klundt is a Certified Anti-Money Laundering Specialist® ("CAMS") and is a member of the Association of Certified Anti-Money Laundering Specialists ("ACAMS"). He has a Master of Arts degree from Duquesne University (Pittsburgh, PA) and a Bachelor of Science degree from Brigham Young University (Provo, UT). He has passed multiple certification examinations and has participated in numerous industry-sponsored regulatory compliance and AML training programs.


                                    </p>
                                    <br/>
                                    <div id='border-bottom'/>
                                    

                                    
                                                                        <br/>
                                    </div>
                                    
                                    {/* ===================== */}
                                    {this.state.dialogFlag && <DialogBox toggleFlag={this.toggleDialogFlag} open={this.state.dialogFlag} message={this.state.dialogMessage}/>}
                                    </div>
                                    
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
    return state
}
export default connect(mapStateToProps)(Contact)