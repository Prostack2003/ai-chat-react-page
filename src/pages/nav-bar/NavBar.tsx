import React from 'react';
import { Button, Col, Dropdown, Layout, Menu, MenuProps, Row, Space } from 'antd';
import logo from '../../shared/images/logo.svg';
import { DownOutlined } from "@ant-design/icons";
import './style.css';
import {Link} from "react-router-dom";

const { Header } = Layout;

const NavBar = () => {
    const items: MenuProps['items'] = [
        {label: <a href="https://www.midjourney.com/">Midjourney</a>, key: '0',},
        {label: <a href="https://chatgpt.com/">Chat GPT</a>, key: '1',
        },
        {type: 'divider'},
    ];

    const menuItems = [
        { key: '1', label: 'Русский' },
        { key: '2', label: 'Английский' }
    ];

    const languageMenu = (
        <Menu items={menuItems} />
    );

    return (
        <Layout>
            <Header>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Link to='/'>
                            <img src={logo} alt="logo"
                                 style={{height: '32px', marginRight: '16px', verticalAlign: -10}}/>
                        </Link>
                    </Col>
                    <Col flex="auto">
                        <Menu theme="dark" mode="horizontal">
                            <Menu.Item key="products">
                                <Dropdown overlayStyle={{padding: 20}} menu={{ items }} trigger={['click']}>
                                    <a className="custom-dropdown-menu" onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Продукты
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item key="chat">
                                <Link to='/chat' className="custom-dropdown-menu">Чат</Link>
                            </Menu.Item>
                            <Menu.Item key="blog">
                                <Link to='/blog' className="custom-dropdown-menu">Блог</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col>
                        <Space size="middle">
                            <Dropdown overlay={languageMenu} trigger={['click']}>
                                <a className="custom-dropdown-menu" onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        RU
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Button type="primary">Авторизация</Button>
                        </Space>
                    </Col>
                </Row>
            </Header>
        </Layout>
    );
};

export default NavBar;
