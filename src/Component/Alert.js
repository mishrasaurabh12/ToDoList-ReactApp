import React from 'react'

function Alert(props) {
    return (
        <div>
            {props.alert&&<div class={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert