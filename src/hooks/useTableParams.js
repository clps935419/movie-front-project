import React, { useState } from "react";

const DEFAULT_PAGE_CONFIG = {
  sortBy: "",
  pageNo: 1,
  pageSize: 10,
  totalCounts: 0,
  keyword: "",
};
const useTableParams = (propsParams) => {
  const [tableParams, setTableParams] = useState({
    ...DEFAULT_PAGE_CONFIG,
    ...propsParams,
  });
  return [tableParams, setTableParams];
};

export default useTableParams;
