import React from 'react'
import { Alert } from "reactstrap";

const InfoBox = ({ children }) => (
    <div style={{ margin: 10 }}>
        <Alert color="info">
            {children}
        </Alert>
    </div>
)

export default InfoBox