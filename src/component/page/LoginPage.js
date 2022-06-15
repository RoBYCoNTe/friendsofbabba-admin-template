import {
  LoginPage as FobLoginPage,
  LocalLoginForm,
  ResetPasswordButton,
} from "ra-friendsofbabba";

import React from "react";

const LoginPage = (props) => (
  <FobLoginPage {...props}>
    <LocalLoginForm />
    <ResetPasswordButton />
  </FobLoginPage>
);
export default LoginPage;
