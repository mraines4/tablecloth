import * as React from "react";
import { Table } from "baseui/table";
import { convertDataToTableArray } from "./tableWrapper";

const DATA = [
  { name: "Matt", age: 30, address: "boonies" },
  { age: 37, name: "Jeremy", address: "itp" }
];

const COLUMNS = ["Name", "Age", "Address"];

const convertedData = convertDataToTableArray(DATA, COLUMNS);

console.log(convertedData, "converted");
export default () => <Table columns={COLUMNS} data={convertedData} />;
