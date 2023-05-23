import { useEffect, useState } from "react";
import TableTemplate from "./components/TableTemplate";
import { apiActivity } from "@/api";
import useTableParams from "@/hooks/useTableParams";
import MyPagination from "./components/Pagination";
import styled from "styled-components";

const { getActivity } = apiActivity;

const NodataStyle = styled.div`
  text-align: center;
  font-size: 16px;
`;

function Activity() {
  const [dataArr, setDataArr] = useState([]);
  const [tableParams, setTableParams] = useTableParams();
  const { pageNo, pageSize } = tableParams;

  useEffect(() => {
    handleGetTableData();
    async function handleGetTableData() {
      try {
        const res = await getActivity({
          params: {
            pageNo,
            pageSize,
          },
        });
        const {
          data: { data, ...others },
        } = res;

        setTableParams((prev) => {
          return {
            ...prev,
            ...others,
          };
        });
        setDataArr(data);
      } catch (error) {
        console.log(
          "🚀 ~ file: index.js:14 ~ handleGetTableData ~ error:",
          error
        );
      }
    }
  }, [pageNo, pageSize]);

  return (
    <div className="py-3 px-5">
      {dataArr.length > 0 ? (
        <>
          <h3>活動列表</h3>
          <hr />
          <TableTemplate dataArr={dataArr} />
          <MyPagination
            tableParams={tableParams}
            setTableParams={setTableParams}
          ></MyPagination>
        </>
      ) : (
        <NodataStyle>查無資料</NodataStyle>
      )}
    </div>
  );
}
export default Activity;
