import { useRoutes } from "react-router-dom";
import routeConfig from "@/routes";
import { Provider } from "react-redux";
import store from "@/store/index";

function App() {
  const routElement = useRoutes(routeConfig);
  return <Provider store={store}>{routElement}</Provider>;
}

export default App;
