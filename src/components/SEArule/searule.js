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
            <div className='searulebg bg200'>SEA RULE 17a-4</div>

            <div className='home--body'>
            <RegulatoryNotices quote={'"And moreover, I say unto you, that there shall be no other name given nor any other way nor means whereby salvation can come unto the children of men, only in and through the name of Christ, the Lord Omnipotent."'} cite={'~Mosiah 3:17'} url={'https://www.lds.org/scriptures/bofm/mosiah/3?lang=eng'}/>
            <div className='text-body'>
            <h3>SIRS' Designated Third Party ("D3P") Compliance Services</h3>
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
            <h4 className="pricing-headers">
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
            <br/>
                
<ul>
<li className="pricing-headers"><a href="https://aws.amazon.com/about-aws/whats-new/2015/09/amazon-glacier-receives-third-party-compliance-assessment-for-sec-rule-17a-4f-from-cohasset-associates-inc/">
Amazon Glacier Receives Third-Party Assessment for SEC Rule 17a-4(f) from Cohasset Associates
</a></li>
                
                
<li className="pricing-headers"><a href="https://blogs.office.com/2015/11/10/office-365-exchange-online-archiving-now-meets-sec-rule-17a-4-requirements/">
Office 365 Archiving Now Meets SEC Rule 17a-4 Requirements
</a></li>
</ul>
                
            
            <br/>
            <h4 className="pricing-headers">Designated Third Party ("D3P") Services</h4>
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
            <h4 className="pricing-headers">
            Third-party Undertaking Letter
            </h4>
            <p>
            Rule 17a-4 requires each B/D to file an undertaking letter, signed by its 
            designated third party, with the B/D's designated examining authority. SIRS will provide your firm with this signed undertaking letter.
            </p>
            <br/>
            <h4 className="pricing-headers">
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