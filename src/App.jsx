import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation, withRouter } from 'react-router-dom';
import routes from './routes';
import ProtectedRoute from './routes/ProtectedRoute';
import { useHistory } from 'react-router-dom';
import { Navbar, Footer, CartPopup } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { cartPopupShowAction } from './redux/action/cartActions';
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const App = () => {
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const cartPopupShow = useSelector(state => state.cartReducer.popupShow);
  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          window.location.reload();
        } else {
          setLocationKeys(keys => [location.key, ...keys]);

          // Handle back event
        }
      }
    });
  }, [locationKeys, history]);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset < 100) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };
  useEffect(() => {
    if (cartPopupShow) {
      dispatch(cartPopupShowAction(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, history]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <ScrollToTop>
      {cartPopupShow ? <CartPopup /> : null}
      <div
        style={
          scrolled
            ? {
                ...navbarWrapperStyles,
                ...scrollYNavbarStyles,
              }
            : navbarWrapperStyles
        }>
        <Navbar scrolled={scrolled} />
      </div>
      <Switch>
        {routes.map((route, key) =>
          route.protected ? (
            <ProtectedRoute
              component={() => (
                <route.component
                  section={route.name}
                  title={route.title}
                  subtitle={route.subtitle}
                />
              )}
              path={route.path}
              exact={route.exact}
              key={key}
            />
          ) : (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
              key={key}
            />
          )
        )}
      </Switch>
      <Footer />
    </ScrollToTop>
  );
};
const navbarWrapperStyles = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: '1000',
  top: '0',
  background: 'white',
};
const scrollYNavbarStyles = {
  background: 'white',
};
const AppWithRouter = withRouter(App);

export default AppWithRouter;
