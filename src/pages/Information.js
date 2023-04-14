import { apiTest } from "@/api";
import { useEffect } from "react";

const { getAuth } = apiTest;

function Information() {
  useEffect(() => {
    (async () => {
      const res = await getAuth();
    })();
  }, []);
  return <>Information</>;
}
export default Information;
