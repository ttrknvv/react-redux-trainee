import React, { useState } from 'react';
import './App.css';
import { Button, Radio, Dropdown, Flex, Col, Row, Menu, Breadcrumb, Layout, MenuProps, Anchor, Space, Pagination, Steps, message, Checkbox, DatePicker, Rate, Empty, QRCode } from "antd";
import { SearchOutlined, DownloadOutlined, PoweroffOutlined,  LaptopOutlined, NotificationOutlined, UserOutlined, DownOutlined, BookOutlined  } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const description = 'This is a description.';
const plainOptions = ['Apple', 'Pear', 'Orange'];

function App() {

  const [loadingS, setLoading] = useState<boolean>(false)
  const [value, setValue] = React.useState<string>('horizontal');

  setTimeout(() => {setLoading(loadingS);}, 4000);

  const items = [
    {
      key: '1',
      label: '1st item',
    },
    {
      key: '2',
      label: '2nd item',
    },
    {
      key: '3',
      label: '3rd item',
    },
  ];
  const baseStyle: React.CSSProperties = {
    width: '25%',
    height: 54,
  };
  const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
  
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );

  return (
    <div>
      <h1 id="part-1">ANTD</h1>
      <h1>Buttons</h1>
        <div className="App">
          <Button type='primary'>Primary</Button>
          <Button type='dashed'>Dashed</Button>
          <Button type='text'>Text</Button>
          <Button type='primary'>Primary</Button>
          <Button>Default</Button>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <Button type="primary" shape="round">A</Button>
          <Button type="primary" icon={<SearchOutlined />}>Search</Button>
          <Button type="primary" icon={<DownloadOutlined />} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>Download</Button>
          <Radio.Group>
            <Radio.Button value="large">1</Radio.Button>
            <Radio.Button value="default">2</Radio.Button>
            <Radio.Button value="small">3</Radio.Button>
          </Radio.Group>
          <Button type="primary" size="small" loading>
            Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading={loadingS} onClick={() => setLoading(!loadingS)} />
        <Button disabled>Disabled</Button>
        <Button danger>Danger</Button>
        <div style={{backgroundColor: 'gray'}}>
          <Button ghost>Ghost</Button>
        </div>
        <Dropdown.Button menu={{ items}}>Actions</Dropdown.Button>
        {/* _blank: Открывает ссылку в новом окне или вкладке браузера.
            _self: Открывает ссылку в текущем окне или вкладке (по умолчанию).
            _parent: Открывает ссылку в родительском фрейме или окне, если таковые есть.
            _top: Открывает ссылку в верхнем окне (полностью заменяет текущий фрейм, если таковой есть). 
        */}
        <Button block={true}
                className={"class"}
                ghost={false}
                href={"https://vk.com"}
                icon={<DownloadOutlined />}
                danger={true}
                htmlType={"reset"}
                style={{backgroundColor: "gray"}}
                target={"_top"}
                shape={'circle'}
                size={"large"}
                loading={false}
                disabled={false}
        >STYLES FOR BUTTON ANTD</Button>
      </div>
      <h1>FLEX</h1>
      <Flex gap="middle" vertical>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Flex vertical={value === 'vertical'}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
        ))}
      </Flex>
    </Flex>
    <h1>GRID</h1>
    <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
  <h1>MENU</h1>
  <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
    <h1>Breadcrumb with Sider and Layout</h1>
    <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{ padding: '24px 0', background: "yellow", borderRadius: "20px" }}
        >
            <Sider style={{ background: "gray" }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={items2}
              />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
        <h1>Anchor</h1>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'Part 1',
            },
          ]}
        />
        <h1>DropDown</h1>
         <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <h1>Pagination</h1>
        <Pagination defaultCurrent={6} total={500} />;
        <>
          <Pagination showQuickJumper defaultCurrent={2} total={500} />
          <br />
          <Pagination showQuickJumper defaultCurrent={2} total={500} disabled />
        </>
        <Pagination simple defaultCurrent={2} total={50} />
        <Steps
          current={1}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              description,
              subTitle: 'Left 00:00:08',
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
        <h1>Message</h1>
        <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        <h1>Checkbox</h1>
          <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
          <Checkbox indeterminate />
          <Checkbox defaultChecked />
          <Space direction="vertical">
            <DatePicker />
            <DatePicker picker="week" />
            <DatePicker picker="month" />
            <DatePicker picker="quarter" />
            <DatePicker picker="year" />
          </Space>
        <h1>Rate</h1>
        <div style={{display: "flex", flexDirection: "column"}}>
          <Rate />
          <Rate disabled value={1} />
          <span>allowClear: true</span>
          <Rate character={<BookOutlined />} allowHalf style={{ fontSize: 46 }} />
          <Rate defaultValue={3} allowClear={true} /> 
          <Rate defaultValue={2} character={({ index = 0 }) => index + 2} />
          <h1>Empty</h1>
          <Empty />
          <h1>QRCode</h1>
          <QRCode value={"some data"} />
        </div>
    </div>
  );
}

export default App;
