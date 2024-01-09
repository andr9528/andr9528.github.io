import { About } from "@/about/about";
import { PrintCv } from "@/cv/print-cv";
import { WebCv } from "@/cv/web-cv";
import { Endpoint } from "@/shared/enum/endpoint";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
      path: Endpoint.Home,
      element: <WebCv />,
    },
    {
      path: Endpoint.Print,
      element: <PrintCv />,
    },
    {
      path: Endpoint.About,
      element: <About />,
    },
    {
      path: '*',
      element: <Navigate to={Endpoint.Home} />,
    },
  ],
  {
    basename: Endpoint.Home
  }
)

export function Router(): JSX.Element { 
  return <RouterProvider router={routes}/>
}

