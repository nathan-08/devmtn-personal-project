import React, { Component } from 'react'
import './../../css/pricing.css'
import { StaggeredMotion, spring } from 'react-motion'
import styled from 'styled-components'
import RegulatoryNotices from './../RegulatoryNotices/regulatoryNotices'

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


export default class Pricing extends Component {
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
                                <div className='Pricing Component'>
                                    <div className='pricingbg bg200'></div>
                                    <div className='home--body'>
                                    <RegulatoryNotices/>
                                    <div className='text-body'>
                                        <h3>
                                            AML Compliance Program, Training & Testing
                </h3>
                                        <br />
                                        <h4>
                                            Residential Mortgage Lender & Originator ("RMLO"): $500
                </h4>
                                        <p>
                                            SIRS' services for RMLOs include:
                </p>
                                        <ul>
                                            <li>
                                                Written Policies and Procedures. SIRS’ 11-page AML compliance program contains the policies and procedures needed to addresses AML regulations governing RMLOs.
                    With very few modifications required, this document will serve as the RMLO's official AML Compliance Program.
                    </li>
                                            <li>
                                                Training. You will also receive a training presentation that covers the major points of AML requirements for mortgage lenders.
                    This presentation may be shown or distributed to firm personnel to meet your obligation to provide AML training to your employees.
                    </li>
                                            <li>
                                                Mortgage Fraud and Money Laundering Review ("MFMLR") form. SIRS' MFMLR is a review form that can be easily integrated into your loan processing procedures. The use of SIRS' MFMLR will
                    provide documentation of your firm’s compliance with its obligation to monitor applications in order to detect suspicious activities.
                    </li>
                                            <li>
                                                Independent AML Test. As required by the BSA (31 C.F.R. § 1029.210(b)(4)), SIRS will conduct an annual review of your policies, procedures and business practices to ensure that they are in compliance with AML requirements. After conducting the test, we will provide you with a 2-5
                    page report of our findings. With each finding, we will provide our expert recommendation concerning the best way to correct the deficiency.
                    </li>
                                        </ul>

                                    <br />
                                    <div id='border-bottom' />
                                    
                                        <h4>
                                            Money Services Business ("MSB"): $500-2,000
                </h4>
                                        <p>
                                            SIRS’ AML compliance services are designed for most types of MSBs,
                including check cashers ($500), dealers in foreign exchange, and money transmitters ($2,000).
                </p>
                                        <br />
                                        <p>
                                            SIRS' services for MSBs include:
                </p>
                                        <ul>
                                            <li>Written Policies, Procedures, and Internal Controls
                        (“AML Compliance Program”). SIRS’ MSB AML Compliance Program addresses the applicable requirements of the BSA.

                    </li>
                                            <li>Training. You will receive a training presentation that may be used to provide the education and training required by § 1022.210(d)(3).
                         This presentation may be shown or distributed to firm personnel to meet your obligation to provide AML training to your employees.

                    </li>
                                            <li>SIRS’ Risk Assessment Template and Transaction Review Form.
                        These documents are essential to your AML Compliance Program and will help to ensure that it meets your obligations under the BSA.

                    </li>
                                            <li>Independent AML Review. As required by the BSA (31 C.F.R. § 1022.210(d)(4)), SIRS will conduct an annual review of your policies, procedures
                        and internal controls to ensure that they satisfy AML regulatory requirements. After conducting the review, we will provide you with a 4-6 page report of our findings
                        and recommendations. With each finding, we will provide our expert recommendation concerning the best way to address the deficiency.

                    </li>
                                        </ul>
                                    
                                    <br/>
                                    <div id='border-bottom' />
                                    
                                        <br />
                                        <h4>
                                            Securities Broker/Dealer: $2,500
                </h4>
                                        <p>
                                            SIRS' services for broker/dealers include:
                </p>
                                        <br />
                                        <ul>
                                            <li>Independent AML Test. As required by FINRA Rule 3310(c), SIRS will conduct an independent review of your AML compliance program.
                        After the test is completed, you will receive a detailed test report that includes SIRS' findings and recommendations.
                        With each finding, we will provide our expert recommendation concerning the best way to address the deficiency.
                    </li>
                                            <li>Training. You will also receive a training presentation that covers the major points of AML requirements for broker/dealers.
                        This presentation may be shown or distributed to firm personnel to meet your obligation to provide ongoing AML training to your employees.
                    </li>
                                        </ul>
                                        <br />
                                        <h4>
                                            Note regarding FINRA's AML Template for Small Firms:
                </h4>
                                        <h4>
                                            While some updates are needed, FINRA’s AML Small Firm Template provides an excellent set of AML policies and procedures for broker/dealers.
                SIRS recommends that a B/D adapt FINRA’s template to fit its business model.
                </h4>
                                    
                                    <br />
                                    <div id='border-bottom' />
                                    
                                        <h4>
                                            Dealer in Precious Metals, Stones & Jewels: $1,000
                </h4>
                                        <p>
                                            SIRS' services for precious metals and jewelry dealers include:
                </p>
                                        <br />
                                        <ul>
                                            <li>Written Policies and Procedures. SIRS’ AML compliance program contains the policies and procedures needed to
                        addresses AML regulations governing precious metals and jewelry dealers. Among other things, this document includes a
                        comprehensive AML compliance program, an outline for the risk assessment required by BSA § 1027, an itemized list of records
                        that must be created and maintained by dealers,
                        and an 8-point quarterly report form that will allow for easy documentation of many required AML activities.
                    </li>
                                            <li>Training Materials. We will also provide you with training materials that cover the major points of AML requirements for dealers in precious metals, stones and jewels.
                        These materials may be distributed to your employees to meet your obligation to provide AML training.
                    </li>
                                            <li>Independent AML Test. As required by 31 C.F.R. § 1027.210(b)(4), SIRS will conduct an independent review of your AML compliance program. After the test is completed, you will receive a detailed test report that includes SIRS' findings and recommendations.
                        With each finding, we will provide our expert recommendation concerning the best way to address the deficiency.
                    </li>
                                        </ul>
                                        <br />
                                    
                                    <div id='border-bottom' />
                                   
                                        <h3>
                                            Enrollment
                </h3>
                                        <br />
                                        <p>
                                            To request a formal quotation, contact SIRS via phone (866.568.7151) or email (info@sirsco.com).
                We will respond by sending you the quotation and additional information about our services.
                </p>
                                        <br />
                                    
                                    <br/>
                                    <div id='border-bottom'/>
                                    </div>
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