import React from 'react'
import seal from './../../img/CAMS_SEAL.gif'
import nyc from './../../img/NYSE5.jpg'
import nyse1 from './../../img/NYSE4.jpg'
import nyse2 from './../../img/nyse.jpg'
import './../../css/home.css'
import { connect } from 'react-redux'
import axios from 'axios'

class regulatoryNotices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuoteIndex: null,
            imgIndex: null,
            rnArray: []
        }
    }

    componentWillMount() {
        //select random quotes to display
        const imgArray = [nyc, nyse1, nyse2]
        let randomNum = Math.floor(Math.random() * this.props.quotes.length)
        let img = imgArray[Math.floor(Math.random() * 3)]
        this.setState({
            currentQuoteIndex: randomNum,
            imgIndex: img
        })
        axios.get('/get-rn').then(res => {
            console.log('res.data: ', res.data)
            //sort arr newest to oldest
            let testArr= []
            res.data.forEach((rn, index)=>{
                testArr.push(Object.assign({}, {id: rn.id, date: rn.date}))
            })

            console.log('testArr: ',testArr)

                testArr.forEach((item, index)=>testArr[index].date = item.date.split('/'))
                testArr.forEach((item,index)=>{
                  testArr[index].date = item.date.map(num=> parseInt(num))
                })
                testArr.sort((a,b)=>{
                  if(b.date[2]-a.date[2]!==0){
                  return b.date[2]-a.date[2]
                } else if(b.date[0]-a.date[0]!==0) {
                  return b.date[0]-a.date[0]
                } else {
                  return b.date[1]-a.date[1]
                }
                })
                let sortedDates = []
                testArr.forEach((item, index)=>{
                    sortedDates.push(res.data.find(obj=>obj.id === item.id))
                })
                console.log('sorted dates: ', sortedDates)
              
            this.setState({
                rnArr: sortedDates
            })
        })
    }
    render() {
        return (
            <div className='left-side-panel regulatory-notices'>
                <img src={seal} alt='seal' id='seal' />
                <br />
                <h3>REGULATORY NOTICES</h3>
                <br />
                <h3>GENERATED FROM DB</h3>
                <br />
                {this.state.rnArr ?

                    this.state.rnArr.map((notice, index) => {
                        return (
                            <div>
                                <h4><a href={notice.link}>{notice.title} </a></h4>
                                <p>({notice.date}){notice.summary} </p>
                            </div>



                        )
                    }) : 'loading...'



                }
                <br />
                <h3>/GENERATED FROM DB</h3>
                <h4><a href='http://www.finra.org/sites/default/files/2017-regulatory-and-examination-priorities-letter.pdf'>FINRA's 2017 Regulatory and Examination Priorities Letter</a></h4>
                <p>
                    (1/4/2017) FINRA announced that its 2017 examinations “will continue to focus on firms’ anti-money laundering programs….”
    </p>
                <br />
                <h4><a href='https://www.fincen.gov/sites/default/files/2017-01/Western%20Union%20PR%20Final_0.pdf'>Western Union Fined $184MM</a></h4>
                <p>
                    January 19, 2017, FinCEN Fined Western Union Financial Services, Inc. for Past Violations of Anti-Money Laundering Rules In Coordinated Action with DOJ and FTC
    </p>
                <br />
                <h4><a href='https://www.fincen.gov/sites/default/files/2017-07/BTC-e%20July%2026%20Press%20Release%20FINAL1.pdf'>FinCEN Fines Virtual Currency Exchange $110 Million</a></h4>
                <p>
                    On July 26, 2017, FinCEN assessed a $110 million civil money penalty against BTC-e for willfully violating U.S. anti-money laundering laws. BTC-e is an internet-based, foreign-located, virtual currency exchange.”
    </p>
                <br />
                <h4><a href='https://www.fincen.gov/sites/default/files/shared/20151230.pdf'>
                    FinCEN Assesses Penalty against Precious Metals Dealer</a>
                </h4>
                <p>
                    In this December 2015 Press Release, FinCEN announced the assessment of a $200,000 civil money penalty against a Los Angeles precious metals business.
    </p>
                <br />
                <img src={this.state.imgIndex} alt='nyc' id='nyc-img' />
                <br />
                <p>
                    {this.props.quotes[0] ? this.props.quotes[this.state.currentQuoteIndex].body : null}
                </p>
                <br />
                <p className='quoted'> ~{this.props.quotes[0] ? this.props.quotes[this.state.currentQuoteIndex].citation : null}
                </p>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(regulatoryNotices)