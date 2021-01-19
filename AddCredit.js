import React from 'react'

function Addcredit(props) {
    console.log(props.data)
    const date = new Date()
    console.log(date)
    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    {props.data.map(data =>
                        <div key={data.id}>
                            {data.date}
                        </div>
                    )}
                </div>
                <div className="col-sm">
                    {props.data.map(data =>
                        <div key={data.id}>
                            {data.description}
                        </div>
                    )}
                </div>

                <div className="col-sm">
                    {props.data.map(data =>
                        <div key={data.id}>
                            {data.amount}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Addcredit