import React from 'react'
import { Alert } from 'reactstrap'

const HinweisBox = ({ children }) => (
    <div style={{ margin: 20 }}>
        <Alert color="warning">
            {children}
        </Alert>
    </div>
)

export default HinweisBox;