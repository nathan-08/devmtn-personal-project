import React, { Component } from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import styled from 'styled-components'
import './../../css/contact.css'
import './../../css/button.css'

const colors = [
    '#def5b9',
    '#c6f876',
    '#87ca22',
    '#87ca22',
    '#74b01b'
]

const Wrapper = styled.div`
  display: flex;
  width: 98vw;
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
width: 98vw;
`

export default class Contact extends Component {
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
                                    <div id="contact1">
                                    
                                    </div>
                                    <div className='contact-container'>
                                        <div id='explanation'>
                                        <p>
                                            Enter an email address and a your question for further information. 
                                        </p>
                                        <br/>
                                        </div>
                                            <input id='name-input' placeholder='name' />
                                            <input id='email-input' placeholder='email' />
                                        
                                       
                                            <textarea id='message-input' placeholder='your message' />
                                            <br/>
                                            <button id='submit-button' className='hvr-fade'>Submit</button>
                                        
                                    </div>
                                    <br/>
                                    <div id='border-bottom'/>
                                    <section id='about'>

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