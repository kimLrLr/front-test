import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { routes } from "./routes";
import { Main } from "./pages/main/Main";
import { Feedback } from "./pages/feedback/Feedback";
import { Signin } from "./pages/account/Signin";
import { Join } from "./pages/account/Join";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.main} element={<Main />} />
        <Route path={routes.feedback} element={<Feedback />} />
        <Route path={routes.signin} element={<Signin />} />
        <Route path={routes.join} element={<Join />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default Router;
