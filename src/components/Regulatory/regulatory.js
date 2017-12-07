import React, {Component} from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import styled from 'styled-components'
import './../../css/regulatory.css'

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

export default class Regulatory extends Component{
    render(){
        return(
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
                { width: spring(100-prevStyles[2].width) }
              ]} >
              {(styles) => (
          <Wrapper>
            <SlideBox bgColor={colors[0]} width={styles[0].width} />
            <SlideBox bgColor={colors[1]} width={styles[1].width} />
            <SlideBox bgColor={colors[2]} width={styles[2].width} />
            <SlideBox bgColor={colors[3]} width={styles[3].width} />
            <ViewBox bgColor={colors[4]} width={styles[4].width}>
              <ViewBody>
            <div className='Regulatory Component'>
            <div className='bg200 regulatorybg'>
            </div>
            
            <div className='services-description'>
            <h3>
                Regulatory References
            </h3>
            <br/>
            </div>
            <div className='services-description1'>
            <h3>
                AML:
            </h3>
            <br/>
            <ul>
                <li>
                    <h4>Investment Adviser AML Regulations</h4>
                    <br/>
                    <p>On August 25, 2015, FinCEN released this notice of proposed rulemaking. This proposed rule will require investment advisers
                        to establish AML programs and report suspicious activities.
                    </p>
                    <br/>
                </li>
                <li>
                    <h4>31 CFR Chapter X</h4><br/>
                    <p>Effective March 1, 2011, BSA regulations were moved to a new chapter in the Code of Federal Regulations. 
                        31 CFR Chapter X arranges regulations under the various financial industries governed by the BSA.</p>
                        <br/>
                </li>
                <li>
                    <h4>New CTR and SAR Filing System</h4><br/>
                    <p>In March 2012, FinCEN announced that it would begin accepting filings into its new BSA E-Filing system. 
                        New CTR and SAR forms will be accepted by this system and will replace the legacy SAR S-F form.</p>
                        <br/>
                </li>
                <li>
                    <h4>NFA Interpretive Notice 9045</h4><br/>
                    <p>In this notice, NFA gives direction on the application of rule 2-9(c) to IBs and FCMs.</p>
                    <br/>
                </li>
                <li>
                    <h4>NFA Rule 2-9(c) </h4><br/>
                    <p>Section (c) of NFA's supervision rule sets for the requirement 
                        that each FCM and IB must "develop and implement a written anti-money laundering program…."</p>
                        <br/>
                </li>
                <li>
                    <h4>Anti-Money Laundering Reviews During Routine Examinations</h4><br/>
                    <p>In this guide, FINRA describes what firms should expect in the AML reviews conducted during cycle examinations.</p>
                    <br/>
                </li>
                <li>
                    <h4>FINRA Rule 3310. Anti-Money Laundering Compliance Program</h4><br/>
                    <p>Effective January 1, 2010, this rule sets forth a B/D's obligation to "develop and implement" a written AML compliance program.</p>
                    <br/>
                </li>
                <li>
                    <h4>Anti-Money Laundering at FINRA.org</h4><br/>
                    <p>This page provides links to many AML websites.</p>
                    <br/>
                </li>
                <li>
                    <h4>Joint Final Rule (SEC & Treasury): Customer Identification Programs For Broker-Dealers</h4><br/>
                    <p>This jointly issued release by the SEC and FinCEN presents broker/dealer CIP requirements.</p>
                    <br/>
                </li>
                <li>
                    <h4>FATF - Money Laundering and Terrorist Financing in the Securities Sector</h4><br/>
                    <p>This report contains FATF recommendations that can be implemented to help counter the problems of money laundering and terrorist financing.</p>
                    <br/>
                </li>
                <li>
                    <h4>Anti-Money Laundering (AML) Source Tool for Broker-Dealers</h4><br/>
                    <p>Published by the SEC, this research guide, or "source tool," is a compilation of key AML laws, rules, and guidance applicable to broker-dealers.</p>
                    <br/>
                </li>
                <li>
                    <h4>Regulatory Notice 12-08</h4><br/>
                    <p>On January 26, 2012, the SEC issued a letter to all FINRA member firms requesting that they make SARs and supporting documentation available to FINRA staff upon request.</p>
                </li>
                
            </ul>
            </div>
            <br/>
            <div id='border-bottom'/>
            <div className='services-description1'>
            <h3>
                SEA Rule 14a-4:
            </h3><br/>
            <ul>
                <li>
                    <h4>SEA Rule 17a-4: Records to Be Preserved by Certain Exchange Members, Brokers and Dealers</h4><br/>
                    <p>Added to the '34 Act, this rule pertains to the record retention requirements of a broker/dealer. 17a-4(f))(3)(vii) 
                        requires a B/D to engage the services of a "third-party… who has access to" the B/D's records.</p>
                </li>
                <li>
                    <h4>Regulatory Notice 11-39: Social Media Websites and the Use of Personal Devices for Business Communications </h4><br/>
                    <p>This Notice provides clarification concerning the application of B/D recordkeeping, suitability, and supervision rules to new technologies.</p>
                </li>
                <li>
                    <h4>Regulatory Notice 10-06: Social Media Web Sites </h4><br/>
                    <p>In this Notice, FINRA addresses the record-keeping challenges presented by evolving technologies.</p>
                    <br/>
                    <p>After reaffirming its position that a B/D must keep records of communications made through social media websites, FINRA gives the following commentary:</p>
                    <br/>
                    <p>"FINRA does not endorse any particular technology necessary to keep such records, nor is it certain that adequate technology currently exists."</p>
                </li>
                <li>
                    <h4>Regulatory Notice 07-59: Supervision of Electronic Communications</h4><br/>
                    <p>This Notice provides guidance regarding the review and supervision of electronic communications.</p>
                </li>
                <li>
                    <h4>SEC Interpretation: Electronic Storage of Broker-Dealer Records</h4><br/>
                    <p>With this Interpretation, the SEC clarifies the "non-rewriteable, non-erasable" requirements of 17a-4.</p>
                </li>
                <li>
                    <h4>FINRA FYI Release (April, 2003)</h4><br/>
                    <p>In this release, FINRA clarifies a broker/dealer's obligation to use an independent and unaffiliated third-party service provider.</p>
                <br/>
                </li>
            </ul>
            </div>
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