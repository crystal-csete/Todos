import React, { useState } from 'react'
import './Navigation.css'
import { Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'


const Navigation = () => {
    const [current, setCurrent] = useState('setting')

    const handleClick = (e) => {
        console.log('click', e);
        setCurrent({ current: e.key });
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="setting" icon={<SettingOutlined />}>
                NavigationOne
            </Menu.Item>
            
        </Menu>
    )
}

export default Navigation
