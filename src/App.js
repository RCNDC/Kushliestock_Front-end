import { useDispatch, useSelector } from "react-redux";
import Home from "./components/home/home";
import RightDrawer from "./components/right_drawer/right_drawer";
import BottomNav from "./components/bottom_nav/bottom_nav";
import { useMediaQuery } from "react-responsive";
import LeftDrawer from "./components/left_drawer/left_drawer";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import PageNotFound from "./components/utils/page_not_found";
import Footer from "./components/footer/footer";
import Category from "./components/category/category";
// import ProductDetails from "./components/product_details/product_details";
import ProductModal from "./components/product_details/product_modal";
import Profile from "./components/profile/profile";
import ChangePassword from "./components/profile/change_password";
import Cart from "./components/cart/cart";
import Wishlist from "./components/wishlist/wishlist";
import RegistrationSuccess from "./components/success_message/registration_success";
import axios from "axios";
import { url } from "./utils/url";
import { useEffect, useState } from "react";
import { config } from "./utils/header";
import { loginSlice } from "./slices/login";
import { rightDrawerSlice } from "./slices/right_drawer";
import FetchData from "./components/utils/fetch_data";
import ProductPage from "./components/product/product_page";
import EditProfileModal from "./components/edit_profile/edit_profile_modal";
import RecoverPasswordModal from "./components/recover_password/recover_password_modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./components/verify/verify";
import PasswordRecovered from "./components/success_message/password_recovered";
import SlipModal from "./components/slip/slip_modal";
import Auth from "./components/auth/auth";
import YehagereHome from "./components/yehagere/yehagere_home";
import YehagereNav from "./components/yehagere/yehagere_nav";
import SearchPage from "./components/search/search_page";
import InfoPage from "./components/footer/info_page";
import AboutPage from "./components/footer/about_page";
import ShowRightDrawer from "./components/utils/show_right_drawer";
import { Helmet } from "react-helmet";
import PrivacyPolicy from "./components/footer/privacy_policy";
import TermsAndsConditions from "./components/footer/terms_and_conditons";
import DeliveryAndReturn from "./components/footer/delivery_and_return";
import Pricing from "./components/footer/pricing";
import FAQ from "./components/footer/faq";
import Orders from "./components/orders/orders";
import ContactUs from "./components/footer/contact_us";
// import AdminSellerLogin from "./components/admin_seller_login/admin_seller_login";
// import { useLocation } from 'react-router-dom'
import Breadcrumb from "./components/utils/breadcrumb";

// a component that contains all components
// it also includes all routes
function App() {
  useEffect(() => {
    setLoginInfo();
    // fetchCart();
    // getBreadcrump();
  }, []);



  const showRightDrawer = useSelector((state) => state.rightDrawer.isOpen);
  const showLeftDrawer = useSelector((state) => state.leftDrawer.isOpen);
  const showProductModal = useSelector((state) => state.product.isOpen);
  const showRecoverPassword = useSelector(
    (state) => state.recoverPassword.isOpen
  );
  const showSlip = useSelector((state) => state.slip.isOpen);
  const showEditProfile = useSelector((state) => state.profile.showEditProfile);
  const showChangePassword = useSelector(
    (state) => state.profile.showChangePassword
  );
  const loginActions = loginSlice.actions;
  const rightDrawerActions = rightDrawerSlice.actions;
  const dispatch = useDispatch();

  const registrationSuccessful = useSelector(
    (state) => state.register.registrationSuccessful
  );

  const passwordRecovered = useSelector(
    (state) => state.recoverPassword.passwordRecovered
  );
  const md = useMediaQuery({ query: "(max-width: 576px)" });
  const path = document.location.pathname;

  // a function used to know if a current is admin/seller dashboard or a user page
  const isDashboardPage = () => {
    if (path === "/login" || path === "/admin" || path === "/seller") {
      return true;
    } else return false;
  };
  const setLoginInfo = () => {
    if (!localStorage.getItem("user_id") || !localStorage.getItem("token"))
      return;
    else {
      let userId = localStorage.getItem("user_id");

      axios.get(`${url}profile/getAllProfile/${userId}`, config).then(
        (response) => {
          if (response.data.User) {
            dispatch(loginActions.setIsUserLogged(true));
            dispatch(loginActions.setLoggedUser(response.data.User[0]));
          }
          dispatch(loginActions.setIsLoading(false));
        },
        (error) => {
          console.log(error);
          // dispatch(loginActions.setIsLoading(false));
        }
      );
    }
  };


  return (
    <div className="root">
      <FetchData />

      <ToastContainer />

      <HashRouter>
        <Navbar />
       <Breadcrumb/>
        {/* {!isDashboardPage() && <Navbar />} */}
        {showRightDrawer && <RightDrawer />}
        {showLeftDrawer && <LeftDrawer />}
        {md && <BottomNav />}
        {showSlip && <SlipModal />}
        {showProductModal && <ProductModal />}
        {showRecoverPassword && <RecoverPasswordModal />}
        {showEditProfile && <EditProfileModal />}
        {showChangePassword && <ChangePassword />}
        {showProductModal && <ProductModal />}
        {registrationSuccessful && <RegistrationSuccess />}
        {passwordRecovered && <PasswordRecovered />}
        <main>
        
          <Switch>
            <Route exact path="/" component={Home}>
              {/* */}
              {/* <Home /> */}
            </Route>
            <Route path="/categories" component={Category}></Route>
            <Route path="/search" component={SearchPage}></Route>
            {/* <Route path="/product" component={ProductDetails}></Route> */}
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/product" component={ProductPage}></Route>
            <Route path="/about">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>About</title>
                    <meta
                      name="description"
                      content="Adimera is an online platform that enable users to execute business deals from purchase to delivery with gratifying options."
                    />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
              </>
              <AboutPage />
            </Route>

            <Route path="/login">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Login</title>
                    <meta name="description" content="Login to Adimera" />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
                <Home />
                <ShowRightDrawer type="login" />
              </>
            </Route>
            <Route path="/register">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Register</title>
                    <meta name="description" content="Register for Adimera" />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
                <Home />
                <ShowRightDrawer type="register" />
              </>
            </Route>

            <Route path="/privacypolicy">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Privacy Policy</title>
                    <meta
                      name="description"
                      content="View Adimera's privacy policy "
                    />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
                <PrivacyPolicy />
              </>
            </Route>

            <Route path="/contactus">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact us</title>
                    <meta
                      name="description"
                      content="View contact information"
                    />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
                <ContactUs />
              </>
            </Route>

            <Route path="/termsandconditions">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Terms and Conditions</title>
                    <meta
                      name="description"
                      content="View Adimera's terms and conditions "
                    />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
                <TermsAndsConditions />
              </>
            </Route>

            <Route path="/deliveryandreturn">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Delivery and Return Policy</title>
                    <meta
                      name="description"
                      content="View Adimera's delivery and return policy "
                    />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
                <DeliveryAndReturn />
              </>
            </Route>

            <Route path="/pricing">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Pricing</title>
                    <meta
                      name="description"
                      content="View Adimera's Pricing policy "
                    />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
                <Pricing />
              </>
            </Route>

            <Route path="/faq">
              <>
                <div className="application">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>FAQ</title>
                    <meta
                      name="description"
                      content="Frequently asked questions "
                    />
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                  </Helmet>
                </div>
                <FAQ />
              </>
            </Route>

            {/* <Route path="/products">
            {" "}
            <Home />
          </Route> */}
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>

            <Route path="/verify" component={Verify}></Route>
            <Route path="/socialoauth" component={Auth}></Route>
            {/* <Route path="/login">
            
            <AdminSellerLogin />
          </Route> */}

            {/* <Route path="/admin">
            <Admin/>
          </Route> */}

            <Route path="/wishlist">
              <Wishlist />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
        {md ? <div className="py-5"></div> : <Footer />}
      </HashRouter>
    </div>
  );
}

export default App;
