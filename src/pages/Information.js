import { apiTest } from "@/api";
import { useEffect } from "react";

const { getAuth } = apiTest;

function Information() {
  useEffect(() => {
    (async () => {
      const res = await getAuth();
    })();
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={async () => {
          const res = await getAuth();
        }}
      >
        information
      </button>
    </>
  );
}
export default Information;
