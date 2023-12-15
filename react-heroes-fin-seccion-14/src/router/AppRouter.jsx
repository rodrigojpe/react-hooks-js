
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {

  const { user } = useContext(AuthContext);
  return (
    <>
            <Routes>
            <Route
                    path="login/*" element={
                    <PublicRoute >
                      <Routes>
                        <Route path="/*" element={<LoginPage />} />
                      </Routes>
                    </PublicRoute>
                    } />

                {/* <Route path="/login" element={<LoginPage />} /> */}

                <Route
                    path="/*" element={
                    <PrivateRoute >
                      <HeroesRoutes/>
                    </PrivateRoute>
                    } />
            </Routes>
    </>
)
}
