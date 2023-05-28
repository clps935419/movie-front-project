import { useEffect } from "react";
import { useRef } from "react";

function EcpayOrderBuilder({ postData, isGoEcpay }) {
  const ref = useRef();

  useEffect(() => {
    if(!!!isGoEcpay){
      return;
    }
    console.log("postData", postData);
    ref.current.submit();
  }, [isGoEcpay]);
  return (
    <form
      ref={ref}
      action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5"
      method="POST"
    >
      {Object.keys(postData).map((key) => (
        <input key={key} type="hidden" name={key} value={postData[key]}></input>
      ))}
    </form>
  );
};
export default EcpayOrderBuilder;
