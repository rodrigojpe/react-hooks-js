import {
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { LoginPage } from "../auth/pages";
// import { childHeroesRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";



export const AppRouter = () => {
  return (
    <Router>
        <div>
          <switch>
          <Route exact path="login" element={ <LoginPage/> } /> 
          <Route path="/*" element={ <HeroesRoutes/> } />
          </switch>
        </div>
    </Router>
  );
};

