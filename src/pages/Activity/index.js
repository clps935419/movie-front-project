import { useEffect, useState } from "react";
import TableTemplate from "./components/TableTemplate";
import { apiActivity } from "@/api";
import useTableParams from "@/hooks/useTableParams";
import MyPagination from "./components/Pagination";

const { getActivity } = apiActivity;

function Activity() {
  const [dataArr, setDataArr] = useState([]);
  const [tableParams, setTableParams] = useTableParams();
  const {pageNo} = tableParams;

  useEffect(() => {
    handleGetTableData();
  }, [pageNo]);

  async function handleGetTableData() {
    try {
      const res = await getActivity({
        params: {
          pageNo,
        },
      });
      console.log("res",res)
      const { data:{data,...others} } = res;
      console.log("🚀 ~ file: index.js:27 ~ handleGetTableData ~ others:", others)
      
      setTableParams(prev=>{
        return{
          ...prev,
          ...others
        }
      })
      setDataArr(data);
    } catch (error) {
      console.log(
        "🚀 ~ file: index.js:14 ~ handleGetTableData ~ error:",
        error
      );
    }
  }

  return (
    <div className="p-5">
      <h3>活動列表</h3>
      <hr />
      <TableTemplate dataArr={dataArr} />
      <MyPagination tableParams={tableParams} setTableParams={setTableParams} />
    </div>
  );
}
export default Activity;
