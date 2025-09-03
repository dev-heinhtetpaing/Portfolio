import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./Home";
import { ActivitySection } from "./pages/activity-section";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/mywork",
          element: <ActivitySection />,
        },
      ],
    },
  ]);
  return <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
}

export default App;
