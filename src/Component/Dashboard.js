import "bootstrap/dist/css/bootstrap.min.css";
import "../StyleSheet/Dashboard.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";

export const Dashboard = ({children}) => {
  return (
    <>
      <div className="table table-responsive">
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </div>
    </>
  );
};
