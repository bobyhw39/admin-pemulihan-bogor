import { Menu } from "antd";
import {
  TagsOutlined,
  ProfileFilled,
  RocketOutlined,
  ReadOutlined,
  NotificationOutlined,
  LockOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

const { SubMenu } = Menu;

type Props = {};

const SideBar: React.FC<Props> = () => {
  const loc = useLocation();
  const menus = [
    {
      key: "/",
      icon: <AppstoreOutlined />,
      name: "Dasbor",
      subMenu: [],
    },
    {
      key: "/user",
      icon: <UserOutlined />,
      name: "User",
      subMenu: [],
    },
    {
      key: "/category",
      icon: <TagsOutlined />,
      name: "Klasifikasi",
      subMenu: [],
    },
    {
      key: "/product",
      icon: <TagsOutlined />,
      name: "Produk",
      subMenu: [],
    },
    {
      key: "/info-wisata",
      icon: <RocketOutlined />,
      name: "Info Wisata",
      subMenu: [],
    },
    {
      key: "/faq",
      icon: <ReadOutlined />,
      name: "FAQ",
      subMenu: [
        {
          key: "/faq/category",
          name: "Kategori FAQ",
        },
        {
          key: "/faq/list",
          name: "Daftar FAQ",
        },
      ],
    },
    {
      key: "/banner",
      icon: <NotificationOutlined />,
      name: "Banner Iklan",
      subMenu: [],
    },
    {
      key: "/reset-password",
      icon: <LockOutlined />,
      name: "Reset Kata Sandi",
      subMenu: [],
    },
  ];
  const selectOpen = () => {
    const selectKey = [loc.pathname];
    const openKey = loc.pathname.includes("profile")
      ? ["/sub1"]
      : loc.pathname.includes("produk")
      ? ["/sub2"]
      : [""];
    return { selectKey, openKey };
  };
  return (
    <>
      <Menu
        style={{ height: "100%" }}
        defaultSelectedKeys={selectOpen().selectKey}
        defaultOpenKeys={selectOpen().openKey}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
      >
        {menus.map((value, key) =>
          value.subMenu.length > 0 ? (
            <SubMenu key={value.key} icon={value.icon} title={value.name}>
              {value?.subMenu?.map((sValue: any, sKey) => (
                <Menu.Item key={sValue.key}>
                  <Link to={sValue.key}>{sValue.name}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={value.key} icon={value.icon}>
              <Link to={value.key}>{value.name}</Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </>
  );
};

export default SideBar;
