import routes from "./routes";
import { convertRoutesToComponents } from "../helpers";
import { BrowserRouter as Routes, Route } from "react-router-dom";
// import { BrowserRouter as Routes ,Route} from "react-router";
import LandingPage from "./general/LandingPage";

const Pages = ()=> {
    console.log("indexing", routes);
//   return convertRoutesToComponents(routes);
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
        )
};

export default Pages;
