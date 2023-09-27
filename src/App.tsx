import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import { Store } from "./pages/store";
import { ShoppingCart } from "./pages/shopping-cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Store />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
]);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
