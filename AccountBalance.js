import React from 'react'

class AccountBalance extends React.Component {

    render() {
        return (
            <div className="py-3">
                Current Account Balance: {this.props.accountBalance}
            </div>
        )
    }
}

export default AccountBalance