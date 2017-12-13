import React, {Component} from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import styled from 'styled-components'
import './../../css/regulatory.css'
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
            <div className='bg200 regulatorybg'>REGULATORY REFERENCES
            </div>
            
            <div className='home--body'>
            <RegulatoryNotices/>
            <div className='text-body'>
            
            <h3>
                AML
            </h3>
            <br/>
            <div id='border-bottom'/>
            
            <div>
                <span>
                    <a href='http://www.fincen.gov/statutes_regs/frn/pdf/1506-AB10_FinCEN_IA_NPRM.pdf'><p>Investment Adviser AML Regulations</p></a>
                    
                    <p>On August 25, 2015, FinCEN released this notice of proposed rulemaking. This proposed rule will require investment advisers
                        to establish AML programs and report suspicious activities.
                    </p>
                    <br/>
                </span>
                <span>
                    <a href='http://www.ecfr.gov/cgi-bin/text-idx?sid=0e5f6b55b62248a15f8ba11d1c561443&c=ecfr&tpl=/ecfrbrowse/Title31/31cfrv3_02.tpl'><p>31 CFR Chapter X</p></a>
                    <p>Effective March 1, 2011, BSA regulations were moved to a new chapter in the Code of Federal Regulations. 
                        31 CFR Chapter X arranges regulations under the various financial industries governed by the BSA.</p>
                        <br/>
                </span>
                <span>
                    <a href='http://www.fincen.gov/statutes_regs/guidance/html/FIN-2012-G002.html'><p>New CTR and SAR Filing System</p></a>
                    <p>In March 2012, FinCEN announced that it would begin accepting filings into its new BSA E-Filing system. 
                        New CTR and SAR forms will be accepted by this system and will replace the legacy SAR S-F form.</p>
                        <br/>
                </span>
                <span>
                    <a href='http://www.nfa.futures.org/nfamanual/NFAManual.aspx?RuleID=9045&Section=9'><p>NFA Interpretive Notice 9045</p></a>
                    <p>In this notice, NFA gives direction on the application of rule 2-9(c) to IBs and FCMs.</p>
                    <br/>
                </span>
                <span>
                    <a href='http://www.nfa.futures.org/nfamanual/NFAManual.aspx?RuleID=RULE%202-9&Section=4'><p>NFA Rule 2-9(c) </p></a>
                    <p>Section (c) of NFA's supervision rule sets for the requirement 
                        that each FCM and IB must "develop and implement a written anti-money laundering program…."</p>
                        <br/>
                </span>
                <span>
                    <a href='http://www.finra.org/web/groups/industry/@ip/@edu/documents/education/p037702.pdf'><p>Anti-Money Laundering Reviews During Routine Examinations</p></a>
                    <p>In this guide, FINRA describes what firms should expect in the AML reviews conducted during cycle examinations.</p>
                    <br/>
                </span>
                <span>
                    <a href='http://finra.complinet.com/en/display/display_main.html?rbid=2403&element_id=8656'><p>FINRA Rule 3310. Anti-Money Laundering Compliance Program</p></a>
                    <p>Effective January 1, 2010, this rule sets forth a B/D's obligation to "develop and implement" a written AML compliance program.</p>
                    <br/>
                </span>
                <span>
                    <a href='http://www.finra.org/Industry/Issues/AML/index.htm'><p>Anti-Money Laundering at FINRA.org</p></a>
                    <p>This page provides links to many AML websites.</p>
                    <br/>
                </span>
                <span>
                    <a href='http://www.sec.gov/rules/final/34-47752.htm'><p>Joint Final Rule (SEC & Treasury): Customer Identification Programs For Broker-Dealers</p></a>
                    <p>This jointly issued release by the SEC and FinCEN presents broker/dealer CIP requirements.</p>
                    <br/>
                </span>
                <span>
                    <a href='http://www.fatf-gafi.org/media/fatf/documents/reports/ML%20and%20TF%20in%20the%20Securities%20Sector.pdf'><p>FATF - Money Laundering and Terrorist Financing in the Securities Sector</p></a>
                    <p>This report contains FATF recommendations that can be implemented to help counter the problems of money laundering and terrorist financing.</p>
                    <br/>
                </span>
                <span>
                    <a href='http://www.sec.gov/about/offices/ocie/amlsourcetool.htm'><p>Anti-Money Laundering (AML) Source Tool for Broker-Dealers</p></a>
                    <p>Published by the SEC, this research guide, or "source tool," is a compilation of key AML laws, rules, and guidance applicable to broker-dealers.</p>
                    <br/>
                </span>
                <span>
                    <a href='http://www.finra.org/web/groups/industry/@ip/@reg/@notice/documents/notices/p125587.pdf'><p>Regulatory Notice 12-08</p></a>
                    <p>On January 26, 2012, the SEC issued a letter to all FINRA member firms requesting that they make SARs and supporting documentation available to FINRA staff upon request.</p>
                </span>
                
            </div>
            
            <br/>
            <div id='border-bottom'/>
            <h3>
                SEA Rule 14a-4
            </h3><br/>
            <div id='border-bottom'/>
            <div>
                <span>
                    <a href='http://www.ecfr.gov/cgi-bin/text-idx?SID=9e5833c035bd890559c22a228e9f9a55&mc=true&node=se17.4.240_117a_64&rgn=div8'><p>SEA Rule 17a-4: Records to Be Preserved by Certain Exchange Members, Brokers and Dealers</p></a>
                    <p>Added to the '34 Act, this rule pertains to the record retention requirements of a broker/dealer. 17a-4(f))(3)(vii) 
                        requires a B/D to engage the services of a "third-party… who has access to" the B/D's records.</p>
                </span>
                <br/>
                <span>
                    <a href='http://www.finra.org/web/groups/industry/@ip/@reg/@notice/documents/notices/p124186.pdf'><p>Regulatory Notice 11-39: Social Media Websites and the Use of Personal Devices for Business Communications </p></a>
                    <p>This Notice provides clarification concerning the application of B/D recordkeeping, suitability, and supervision rules to new technologies.</p>
                </span>
                <br/>
                <span>
                    <a href='http://www.finra.org/web/groups/industry/@ip/@reg/@notice/documents/notices/p120779.pdf'><p>Regulatory Notice 10-06: Social Media Web Sites </p></a>
                    <p>In this Notice, FINRA addresses the record-keeping challenges presented by evolving technologies.</p>
                    <br/>
                    <p>After reaffirming its position that a B/D must keep records of communications made through social media websites, FINRA gives the following commentary:</p>
                    <br/>
                    <p>"FINRA does not endorse any particular technology necessary to keep such records, nor is it certain that adequate technology currently exists."</p>
                </span>
                <br/>
                <span>
                    <a href='http://www.finra.org/web/groups/industry/@ip/@reg/@notice/documents/notices/p037553.pdf'><p>Regulatory Notice 07-59: Supervision of Electronic Communications</p></a>
                    <p>This Notice provides guidance regarding the review and supervision of electronic communications.</p>
                </span>
                <br/>
                <span>
                    <a href='http://www.sec.gov/rules/interp/34-47806.htm'><p>SEC Interpretation: Electronic Storage of Broker-Dealer Records</p></a>
                    <p>With this Interpretation, the SEC clarifies the "non-rewriteable, non-erasable" requirements of 17a-4.</p>
                </span>
                <br/>
                <span>
                    <a href='http://www.finra.org/web/groups/industry/@ip/@reg/@notice/documents/notices/p003403.pdf'><p>FINRA FYI Release (April, 2003)</p></a>
                    <p>In this release, FINRA clarifies a broker/dealer's obligation to use an independent and unaffiliated third-party service provider.</p>
                <br/>
                </span>
            </div>
            
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