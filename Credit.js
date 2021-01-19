import React from 'react'
import axios from 'axios'
import AccountBalance from './AccountBalance'
import AddCredit from './AddCredit'
import { Link } from 'react-router-dom'
import Home from './Home'

class Credit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'https://moj-api.herokuapp.com/credits',
            data: [],
            credit: {
                description: '',
                amount: '',
                date: ''
            }
        }
    }

    // get the changes and save it to the object credit
    handleChange = (e) => {
        const newcredit = { ...this.state.credit }
        const input = e.target.name
        const value = e.target.value
        newcredit[input] = value
        this.setState({
            credit: newcredit
        })
    }

    // Take the object credit and push it to the data array
    handleSubmit = (e) => {
        e.preventDefault()
        this.state.data.push(this.state.credit)
    }

    componentDidMount() {
        axios.get(this.state.url).then(response => {
            const apiResponse = response.data
            console.log("This is response.data")
            console.log(response.data)
            this.setState({
                data: apiResponse
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <h1>credits</h1>
                {/* Print headers for the columns */}
                <div className="container">
                    <div class="row">
                        <div className="col-sm font-weight-bold">Date</div>
                        <div className="col-sm font-weight-bold">Description</div>
                        <div className="col-sm font-weight-bold">Amount</div>
                    </div>
                </div>

                {/* Print the date, description and amount */}
                <div className="container">
                    <AddCredit
                        data={this.state.data}
                    />
                </div>

                <div className="container">
                    <AccountBalance
                        accountBalance={this.props.accountBalance}
                    />
                </div>

                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="creditDescription">credit Description</label>
                            <input type="text" className="form-control"
                                name="description"
                                onChange={this.handleChange}
                                placeholder="Enter description of the credit" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="creditAmount">credit Amount</label>
                            <input type="text" className="form-control"
                                name="amount"
                                onChange={this.handleChange}
                                placeholder="Enter amount of the credit" />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(this.handleSubmit)}>
                            Submit</button>
                    </form>
                </div>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Credit
