/* IMPORTS */
import React from "react";
import { Table } from "antd";

/* CODE */
function DataTable({ data, columns }) {
  return (
    <Table
      loading={data === null ? true : false}
      dataSource={data}
      columns={columns}
      pagination={false}
      bordered={true}
      size="small"
    />
  );
}

export default DataTable;
