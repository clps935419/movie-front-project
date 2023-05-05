import { useRoutes } from "react-router-dom";
import routeConfig from "@/routes";
import { Provider } from "react-redux";
import store from "@/store/index";
import Mask from "@/components/mask";
import { injectStore } from "./utils/axios";
import NiceModal from "@ebay/nice-modal-react";

injectStore(store);

function App() {
  const routElement = useRoutes(routeConfig);
  return (
    <Provider store={store}>
      <NiceModal.Provider>
        {/* loading 遮罩 */}
        <Mask />
        {routElement}
      </NiceModal.Provider>
    </Provider>
  );
}

export default App;
