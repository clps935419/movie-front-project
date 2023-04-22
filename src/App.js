import { useRoutes } from "react-router-dom";
import routeConfig from "@/routes";
import { Provider } from "react-redux";
import store from "@/store/index";
import Mask from "@/components/mask";
import { injectStore } from "./utils/axios";

injectStore(store);

function App() {
  const routElement = useRoutes(routeConfig);
  return (
    <Provider store={store}>
      {/* loading 遮罩 */}
      <Mask />
      {routElement}
    </Provider>
  );
}

export default App;
