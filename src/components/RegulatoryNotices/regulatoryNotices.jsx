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
    <h4><a href='http://www.finra.org/sites/default/files/2017-regulatory-and-examination-priorities-letter.pdf'>FINRA's 2017 Regulatory and Examination Priorities Letter</a></h4>
    <p>
    (1/4/2017) FINRA announced that its 2017 examinations “will continue to focus on firms’ anti-money laundering programs….”
    </p>
    <br/>
    <h4><a href='https://www.fincen.gov/sites/default/files/2017-01/Western%20Union%20PR%20Final_0.pdf'>Western Union Fined $184MM</a></h4>
    <p>
    January 19, 2017, FinCEN Fined Western Union Financial Services, Inc. for Past Violations of Anti-Money Laundering Rules In Coordinated Action with DOJ and FTC
    </p>
    <br/>
    <h4><a href='https://www.fincen.gov/sites/default/files/2017-07/BTC-e%20July%2026%20Press%20Release%20FINAL1.pdf'>FinCEN Fines Virtual Currency Exchange $110 Million</a></h4>
    <p>
    On July 26, 2017, FinCEN assessed a $110 million civil money penalty against BTC-e for willfully violating U.S. anti-money laundering laws. BTC-e is an internet-based, foreign-located, virtual currency exchange.”
    </p>
    <br/>
    <h4><a href='https://www.fincen.gov/sites/default/files/shared/20151230.pdf'>
    FinCEN Assesses Penalty against Precious Metals Dealer</a>
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