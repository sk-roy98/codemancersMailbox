import React from 'react'

function MailBody({mail}) {
    return (
        <div>
            <div>
                <h3>{mail.subject}</h3>
                <p>{mail.body}</p>
                <p>Mialllll</p>
            </div>
        </div>
    )
}

export default MailBody
