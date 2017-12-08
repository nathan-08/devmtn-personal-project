import React from 'react'
import seal from './../../img/CAMS_SEAL.gif'
import nyc from './../../img/NYSE5.jpg'
import './../../css/home.css'

export default () => (
    <div className='left-side-panel regulatory-notices'>
    <img src={seal} alt='seal' id='seal'/>
    <br/>
    <h3>REGULATORY NOTICES</h3>
    <br/>
    <h4>FINRA's 2017 Regulatory and Examination Priorities Letter</h4>
    <p>
    (1/4/2017) FINRA announced that its 2017 examinations “will continue to focus on firms’ anti-money laundering programs….”
    </p>
    <br/>
    <h4>Western Union Fined $184MM</h4>
    <p>
    January 19, 2017, FinCEN Fined Western Union Financial Services, Inc. for Past Violations of Anti-Money Laundering Rules In Coordinated Action with DOJ and FTC
    </p>
    <br/>
    <h4>FinCEN Fines Virtual Currency Exchange $110 Million</h4>
    <p>
    On July 26, 2017, FinCEN assessed a $110 million civil money penalty against BTC-e for willfully violating U.S. anti-money laundering laws. BTC-e is an internet-based, foreign-located, virtual currency exchange.”
    </p>
    <br/>
    <h4>
    FinCEN Assesses Penalty against Precious Metals Dealer
    </h4>
    <p>
    In this December 2015 Press Release, FinCEN announced the assessment of a $200,000 civil money penalty against a Los Angeles precious metals business.
    </p>
    <br/>
    <img src={nyc} alt='nyc' id='nyc-img'/>
    <br/>
    <p>
    "To preserve our independence, we must not let our rulers load us with perpetual profusion and servitude."
    </p>
    <br/>
    <p className='quoted'> ~Thomas Jefferson
    </p>
    </div>
);