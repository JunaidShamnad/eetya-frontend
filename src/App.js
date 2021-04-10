import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import GlobalStyle from "./globalStyles";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductEditPage from "./pages/ProductEditPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import DisclaimerPage from "./pages/DisclaimerPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import WhyMadeInUsaPage from "./pages/WhyMadeInUsaPage";
import NotFoundPage from "./pages/NotFoundPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import AdminPage from "./pages/AdminPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import AddProductPage from "./pages/AddProductPage";
import CartPage from "./pages/CartPage";
import FilterPage from "./pages/FilterPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import NewsLetterPage from "./pages/NewsLetterPage";
import ChangeAdminEmailPage from "./pages/ChangeAdminEmailPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path="/home" component={MainPage} exact />
        <Route path="/user-details" component={UserDetailsPage} exact />
        <Route path="/add-product" component={AddProductPage} exact />

        <Route path="/" component={HomePage} exact />

        <Route path="/admin" component={AdminPage} exact />
        <Route path="/filter" component={FilterPage} exact />
        <Route
          path="/change-admin-email"
          component={ChangeAdminEmailPage}
          exact
        />
        <Route path="/forgot-password" component={ForgotPasswordPage} exact />
        <Route path="/admin/category" component={AddCategoryPage} exact />
        <Route path="/cart" component={CartPage} exact />

        <Route path="/products"  exact >
          <ProductPage setIsloggedIn={setIsloggedIn}/>
        </Route>
        <Route path="/news-letter" component={NewsLetterPage} exact />
        <Route path="/product-edit" component={ProductEditPage} exact />
        <Route path="/about-us" component={AboutUsPage} exact />
        <Route path="/contact-us" component={ContactUsPage} exact />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} exact />
        <Route path="/terms-of-service" component={TermsOfServicePage} exact />
        <Route path="/disclaimer" component={DisclaimerPage} exact />
        <Route path="/help-center" component={HelpCenterPage} exact />
        <Route path="/what-we-do" component={WhatWeDoPage} exact />
        <Route path="/why-buy-made-in-usa" component={WhyMadeInUsaPage} exact />
        <Route path="/product-details/:id" component={ProductDetailsPage} exact />
        <Route path="/signin" exact >
          {isLoggedIn ? <Redirect to='/' /> : <SignInPage setIsloggedIn={setIsloggedIn} />}
        </Route>
        <Route path="/product-details" component={ProductDetailsPage} exact />
        <Route path="/signin" exact>
          {isLoggedIn ? (
            <Redirect to="/" />
          ) : ( 
            <SignInPage setIsloggedIn={setIsloggedIn} />
          )}
        </Route>
        <Route path="/signup" exact>
          {isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <SignUpPage setIsloggedIn={setIsloggedIn} />
          )}
        </Route>
        <Route path="/coming-soon" component={ComingSoonPage} exact />

        <Route path="*" component={NotFoundPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
