import "../../styles/base.scss";
import "./styless.scss";
import { Button, Card, Form, Input } from "antd";
import { Layout } from "../../components";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../actions/auth";
import { encryptText } from "../../utils/crypto";
import { RootState } from "../../models/RootState";

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
const Auth: React.FC = () => {
  const { isLoading } = useSelector((state: RootState) => state.auth);

  const [form] = useForm();
  const dispatch = useDispatch();
  const onLogin = () => {
    const dataUser = {
      email: form.getFieldValue("email"),
      password: form.getFieldValue("password"),
    };
    const data = { encrypt: encryptText(JSON.stringify(dataUser)) };
    dispatch(loginRequest(data));
  };
  return (
    <Layout title="Login">
      <div className="peb-container-auth" style={{ margin: "auto" }}>
        <Card
          className="mt-5"
          title="LOGIN DASHBOARD ADMIN"
          style={{ maxWidth: 500 }}
        >
          <Form
            initialValues={{
              prefix: "86",
            }}
            layout={"vertical"}
            name="login"
            scrollToFirstError
            {...formItemLayout}
            form={form}
            onFinish={onLogin}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Alamat email tidak valid",
                },
                {
                  required: true,
                  message: "Mohon masukkan email yang terdaftar",
                },
              ]}
              label="Email"
            >
              <Input name="email" placeholder="Ketik Email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Kata Sandi"
              rules={[{ required: true, message: "Mohon masukkan Kata Sandi" }]}
            >
              <Input.Password
                name="password"
                type="password"
                placeholder="Ketik Kata Sandi"
              />
            </Form.Item>

            <Form.Item>
              <Button
                loading={isLoading || false}
                type="primary"
                htmlType="submit"
                block
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Layout>
  );
};

export default Auth;
