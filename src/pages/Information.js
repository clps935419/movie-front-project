import { apiTest } from "@/api";
import NiceModal from "@ebay/nice-modal-react";
import { useEffect } from "react";
import ExampleModal from "../components/Modal/ExampleModal";

const { getAuth } = apiTest;

function Information() {
  // useEffect(() => {
  //   (async () => {
  //     const res = await getAuth();
  //   })();
  // }, []);

  return (
    <>
      <button
        type="button"
        style={{marginTop:"200px"}}
        className="btn btn-primary"
        onClick={() => {
          NiceModal.show(ExampleModal, {
            headerContent: "alert_delete_sure",
            bodyContent: (
              <>
                <div className="fw-bolder mb-2">
                  text_are_you_sure_delete:
                </div>
                
              </>
            ),
          });
        }}
      >
        測試
      </button>
    </>
  );
}
export default Information;
