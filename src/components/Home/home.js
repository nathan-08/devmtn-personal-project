import React, {
    Component
} from 'react'
import './../../css/home.css'
import {
    Link
} from 'react-router-dom'
import axios from 'axios'
// import google books api JS code////////////////
// import google from 'https://www.google.com/books/jsapi.js'
//////////////////////////////////////////////////

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ISBN: '0738531367',
            inputBox: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleInput(e) {
        this.setState({
            inputBox: e.target.value
        })
    }
    handleClick() {

        axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle+' + this.state.inputBox).then(res => {
            console.log('log: ', res.data.kind.items)

            this.setState({
                inputBox: ''
            })
        })
    }
    componentDidMount() {

    }
    leftArrowClick() {

    }
    rightArrowClick() {

    }
    render() {
        return (
            <div className='Home Component' >

                <div className='content' >
                </div>
            </div>
        )
    }
}