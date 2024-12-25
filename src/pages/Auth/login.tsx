import type { FormProps } from "antd";
import { Button, Form, Input, Flex, Typography, Card } from "antd";
import { useQuery, gql } from "@apollo/client";

export default function login() {
  const { Title } = Typography;

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Card
        style={{
          width: 500,
          border: "2px solid",
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 25,
        }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Title style={{ textAlign: "center" }}>Login</Title>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}
