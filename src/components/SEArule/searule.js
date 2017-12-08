import React, {Component} from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import styled from 'styled-components'
import './../../css/searule.css'
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

export default class SEArule extends Component{
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
            <div className='SEArule Component'>
            <div className='searulebg bg200'></div>

            <div className='home--body'>
            <RegulatoryNotices/>
            <div className='text-body'>
            <h3>SIRS' Third-party Access ("TAP" or "D3P") Compliance Services</h3>
            <br/>
            
            <h4> 
                2017 Regulatory and Examination Priorities Letter
            </h4>
            <br/>
            <p>
            In its 2017 Regulatory and Examination Priorities Letter, FINRA informed firms that its 2017 cycle examinations would include 
            a review of B/D compliance with the requirements of SEA Rule 17a-4. FINRA stated, “in multiple instances, firms have failed to fulfill one or more of their obligations under Securities Exchange Act (SEA) Rule 17a-4(f) that requires firms to, among other things, 
            preserve certain records in a non-rewriteable, non-erasable format, commonly known as write once read many (WORM) format.”
            </p>
            <br/>
            <p>
            Since 2007-2008, B/Ds have generally satisfied Rule 17a-4’s requirements pertaining to the archiving of emails. Until recently, however, it was difficult to find a cost-effective, WORM storage system for a B/D’s static files (PDF, Excel, Word, etc.). As shown below, 
            cost-effect and fully compliant archiving services are now available through reputable providers including Microsoft and Amazon.
            </p>
            <br/>
            
            
            
            <br/>
            <div id='border-bottom'/>
            <h3>SEA Rule 17a-4</h3>
            
            <br/>
            <p>
            SEA Rule 17a-4(f) allows a B/D "to employ, under certain conditions, 
            electronic storage media" to preserve its required books and records (Release No. 34-38245).
            </p>
            <br/>
            <p>
            Rule 17a-4(f) has two main requirements: 
            </p>
            <br/>
            <h4>
                Compliant Data Backup
            </h4>
            
            <p>
            17a-4(f)(3)(iii) requires a B/D to “store separately from the original, a duplicate copy of the [firm’s electronic records]….” 
            This storage must comply with the standards (non-erasable, non-rewriteable) set forth in 17a-4(f)(2)(ii).
            </p>
            <br/>
            <p>
            In recent years, reputable technology providers, including Amazon and Microsoft, have developed 17a-4-compliant archiving services. Amazon’s Glacier with Vault Lock and Microsoft’s 
            Office 365 with Preservation Lock allow a B/D to preserve records in a manner that complies with the requirements of Rule 17a-4.
            </p>
            <ul>
                <li>
<h4>Amazon Glacier Receives Third-Party Assessment for SEC Rule 17a-4(f) from Cohasset Associates</h4>
                </li>
                <li>
<h4>Office 365 Archiving Now Meets SEC Rule 17a-4 Requirements</h4>
                </li>
            </ul>
            <br/>
            <h4>Third-party Access (“TPA” or "D3P")</h4>
            <p>17a-4(f)(3)(vii) requires a B/D to engage the services of “at least one third party…, 
                who has access to and the ability to download information from the [B/D’s] electronic storage media.”
                </p>
                <br/>
                <p>
                To address this requirement, SIRS offers its D3P services. Through a contractual agreement, SIRS establishes access to the B/D's records. For an annually renewable 
                service charge of $500, SIRS’ staff will remain continually available to respond to regulatory requests for document retrieval services.  
                </p>
                
            
            <br/>
            <br/>
            <div id='border-bottom'/>
            <h3>
            17a-4 Certifications Provided
            </h3>
            
            <p>
            By subscribing to SIRS' D3P services, you will receive the following:
            </p>
            
            <br/>
            <h4>
            Third-party Undertaking Letter
            </h4>
            <p>
            Rule 17a-4 requires each B/D to file an undertaking letter, signed by its 
            designated third party, with the B/D's designated examining authority. SIRS will provide your firm with this signed undertaking letter.
            </p>
            <br/>
            <h4>
                Storage Media Representation Template
            </h4>
            <p>
                This form provides the storage media representation required by 17a-4(f)(2)(i).
            </p>
            <br/>
            <p>
            To comply with 17a-4's electronic storage media requirements, a B/D must use FINRA's Firm Gateway application to file both the 
            Storage Media Representation and the Third-party Undertaking Letter. SIRS will provide you with these files.
            </p>
            
            
            <br/>
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