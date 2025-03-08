import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const AdminDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider  >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <h2 style={{ textAlign: 'center', margin: 0 }}>Admin Panel</h2>
        </Header>
        <Content style={{ margin: '16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Users</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Welcome to the Admin Dashboard!
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Admin Dashboard ©2024 Created with Ant Design
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
