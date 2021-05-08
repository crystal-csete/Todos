import React from 'react'
import './Footer.css'
import { Typography } from 'antd'


const Footer = () => {
    const { Title } = Typography;

    return (
        <div className="footer_container">
        <Title level={5}>&#169; Copyright 2021 All Rights Reserved.</Title>
        </div>
    )
}

export default Footer
