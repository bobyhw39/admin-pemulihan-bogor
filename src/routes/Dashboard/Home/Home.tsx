import { Card, Col, Row, Statistic } from "antd";
import "../../../styles/base.scss";

import Page from "../../../components/Page/Page";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

export default function Home() {
  const data = {
    thisMonth: 1500,
    lastMonth: 759,
    now: 100,
    yesterday: 250,
  };
  const hasilHandler = (awal: any, akhir: any) => {
    let hasil: any = ((akhir - awal) / awal) * 100;
    hasil = hasil.toFixed(2);
    return hasil;
  };

  return (
    <Page title="">
      <h3>Julah Kunjungan</h3>
      <Row gutter={16}>
        <Col span={12}>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Bulan Lalu" value={data.lastMonth} />
            </Col>
            <Col span={12}>
              <Statistic title="Bulan Sekarang" value={data.thisMonth} />
            </Col>
          </Row>
          <Statistic
            title="Persentase"
            value={hasilHandler(data.lastMonth, data.thisMonth)}
            precision={2}
            valueStyle={{
              color:
                hasilHandler(data.lastMonth, data.thisMonth) > 0
                  ? "#3f8600"
                  : "#cf1322",
            }}
            prefix={
              hasilHandler(data.lastMonth, data.thisMonth) > 0 ? (
                <ArrowUpOutlined />
              ) : (
                <ArrowDownOutlined />
              )
            }
            suffix="%"
          />
        </Col>
        <Col span={12}>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Kemarin" value={data.yesterday} />
            </Col>
            <Col span={12}>
              <Statistic title="Hari ini" value={data.now} />
            </Col>
          </Row>
          <Statistic
            title="Persentase"
            value={hasilHandler(data.yesterday, data.now)}
            precision={2}
            valueStyle={{
              color:
                hasilHandler(data.yesterday, data.now) > 0
                  ? "#3f8600"
                  : "#cf1322",
            }}
            prefix={
              hasilHandler(data.yesterday, data.now) > 0 ? (
                <ArrowUpOutlined />
              ) : (
                <ArrowDownOutlined />
              )
            }
            suffix="%"
          />
        </Col>
      </Row>
    </Page>
  );
}
