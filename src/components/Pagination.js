import Pagination from "@vlsergey/react-bootstrap-pagination";
import styled from "styled-components";

const TotalPage = styled.div`
  letter-spacing: 5px;
`
const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
function MyPagination(props) {
  const { tableParams, setTableParams } = props;
  const { totalPages, pageNo, pageSize } = tableParams;

  return (
    <PageWrapper>
      <TotalPage>共{totalPages}頁</TotalPage>
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
    </PageWrapper>
  );
}
export default MyPagination;
