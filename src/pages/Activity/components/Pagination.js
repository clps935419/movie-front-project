import Pagination from "@vlsergey/react-bootstrap-pagination";

function MyPagination(props) {
  const { tableParams, setTableParams } = props;

  const { totalPages, pageNo, pageSize } = tableParams;

  return (
    <div className="d-flex justify-content-between align-items-center ">
      <div className="">共{totalPages}頁</div>
      <Pagination
        className="m-0"
        showFirstLast={totalPages >= 2}
        showPrevNext={totalPages >= 2}
        aroundCurrent={2}
        atBeginEnd={0}
        value={pageNo - 1}
        totalPages={totalPages}
        size="sm"
        onChange={(e) => {
          const pageNo = e.target.value + 1;
          setTableParams((prev) => {
            return {
              ...prev,
              pageNo,
            };
          });
        }}
      />
    </div>
  );
}
export default MyPagination;
