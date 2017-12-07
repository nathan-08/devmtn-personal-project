import React, { Component } from 'react'
import './../../css/home.css'
import { StaggeredMotion, spring } from 'react-motion'
import styled from 'styled-components'

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
const SlideBox = styled.div`
flex-basis: ${(props) => props.width}%;
background: ${(props) => props.bgColor};
`
const ViewBox = styled.div`
flex-basis: ${(props) => props.width}%;
background: ${(props) => props.bgColor};
overflow: hidden;
`
const ViewBody = styled.div`
overflow: hidden;
width: 100vw;
`

export default class Home extends Component {

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
                                <div className='Home Component' >
                                    <section className='home-first-section'>
                                        <div className='bg200 homebg'>

                                        </div>

                                    </section>

                                    <div className='services-description'>
                                        <h3>SIRS: PROVIDING PARTNERED AML COMPLIANCE SERVICES</h3>
                                        <br />
                                    </div>
                                    <div className='services-description1'>
                                        <p>SIRS provides customized AML complmiance programs for non-bank
                financial institutions.
            </p>
                                        <p>In addition to written policies and procedures, SIRS' comprehensive compliance services include AML
                training and independet testing. In provideing these services, SIRS will work as your partner to help
                your company become fully compliant with AML regulations applicable to your business activites.
            </p>
                                    </div>

                                    <br/>
                                    <div id='border-bottom'>
                                    </div>
                                    <div className='services-description'>
                                        <h3 className='services-description-h3'>
                                            SIRS' AML COMPLIANCE SERVICES
                </h3>
                                        <br />
                                        </div>
                                        <div className='services-description1'>
                                        <p>31 CFR Chapter X requires each financial institution to develop and implement a
                    written anti-money laundering compliance program. At a minimum, each institution'section
                    AML compliance program must:
                    </p>
                                        <ul>
                                            <li>
                                            Incorporate policies, procedures, and internal controls that include provisions for complying with the applicable requirements of the BSA;
                                            </li>
                                            <li>
                                            Designate an AML Compliance Officer;
                                            </li>
                                            <li>
                                            Provide for on-going training of employees; and
                                            </li>
                                            <li>
                                            Provide for independent testing of the firm's AML program.
                                            </li>
                                        </ul>
                                        <br />
                                        <p>To address these regulatory requirements, SIRS offers comprehensive AML compliance services for many non-bank
                                             financial institutions (including securities broker/dealers, mortgage lenders, MSBs, and others).
                                            </p>

                                    </div>
                                    <br/>
                                    <div id='border-bottom'>
                                    </div>

                                    <div className='services-description1'>
                                        <h3>
                                            Compliance Programs (written policies and procedures)
                                        </h3>
                                        <br />
                                        <p>
                                            SIRS has developed AML compliance programs for many of the non-bank financial institutions regulated by the BSA. Each of SIRS’
                                        industry-specific AML
                                        compliance programs includes the written policies, procedures, and internal controls required by BSA regulations.
                                            </p>
                                        <br />
                                        <h3>Training
                                                </h3>
                                        <br />
                                        <p>
                                            SIRS' AML Training presentations are tailored to address key BSA criteria for each business type (ex: MSB, broker/dealer,
                                                mortgage, precious metals, etc.).
                                                These presentations can be shown to an institution's employees to satisfy the firm's obligations to provide AML training.
                                                    </p>
                                        <br />
                                        <h3>Independent Testing
                                            </h3>
                                        <br />
                                        <p>
                                            Based on guidance provided by FinCEN, FFIEC, FATF and other regulatory authorities,
                                                SIRS' Independent AML Testing provides a comprehensive review of a firm's AML compliance program.
                                    </p>
                                        <br />
                                        <p>
                                            In conducting the test, SIRS will work as your partner to address any identified deficiencies.
                                                    In many instances, these issues can be resolved before the test is completed (allowing for a cleaner test report).
                                    </p>
                                        <br />
                                        <p>
                                            After the test is completed, you will receive a detailed report that highlights the
                                    strengths of your program and identifies steps that can be taken to address any unresolved deficiencies.
                                    </p>
                                        <br />
                                        <h3>Scope of Testing:</h3>
                                        <br />
                                        <p>
                                            SIRS' Independent AML Testing includes a comprehensive review of your firm's AML compliance program. Our test addresses each of the
                                                applicable points of the Bank Secrecy Act. Following is a list of areas that are typically covered by our review:
                                        </p>
                                        <br />
                                        <ul>
                                            <li>Overall integrity and effectiveness of your firm's AML compliance program;
                                                    </li>
                                            <li>Firm designation of an AML Compliance Officer;
                                                    </li>
                                            <li>Senior management approval of the firm's AML compliance program;
                                                    </li>
                                            <li>Monitoring for and detection of suspicious activities;
                                                    </li>
                                            <li>Firm CIP (when applicable);
                                                    </li>
                                            <li>BSA reporting and recordkeeping;
                                                    </li>
                                            <li>Information sharing with law enforcement and other financial institutions;
                                                    </li>
                                            <li>Firm handling of FinCEN 314(a) requests;
                                                    </li>
                                            <li>Independent testing of your firm's AML compliance program; and
                                                    </li>
                                            <li>Staff training.
                                                    </li>

                                        </ul>

                                    </div>
                                    <br/>
                                    <div id='border-bottom'>
                                    </div>
                                    <div className='services-description'>
                                    
                                        <h3>
                                            Electronic Delivery of AML Program Files
                                    </h3>
                                    </div>
                                    <br/>
                                    <div className='services-description1'>
                                        <p>
                                            Using cloud server technology, a financial institution will upload its files to a secure, online file server. SIRS will then review
                                    these files to test the institution's AML program. 
                                    </p>
                                    <br/>
                                    <p>
                                    Phone and email communications with firm management allow SIRS to easily address any
                                    issues that may arise throughout the testing process. This use of modern communication and information
                                    sharing technologies eliminates travel time and costs and allows SIRS to perform its review in a highly efficient and cost-effective manner.
                                    </p>
                                    <br/>
                                    </div>
                                    <br/>
                                    <div id='border-bottom'/>
                                </div>
                            </ViewBody>
                        </ViewBox>
                    </Wrapper>
                )}
            </StaggeredMotion>
        )
    }
}