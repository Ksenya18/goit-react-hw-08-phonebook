import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperation';
import { PrivateRoute } from './pages/PrivateRoute/PrivateRoute';
import { PublicRoute } from './pages/PublicRoute/PublicRoute';

const LazyLayout = lazy(() => import('./pages/Navigation/Navigation'));
const LazyHomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LazyLoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const LazyRegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage')
);
const LazyContactsPage = lazy(() =>
  import('./pages/ContactsPage/ContactsPage')
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyHomePage />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LazyLoginPage />} />
            <Route path="/register" element={<LazyRegisterPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<LazyContactsPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
