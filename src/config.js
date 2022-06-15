let environment = "PRODUCTION";
let appUrl = `//${document.location.host}/`;
if (appUrl.endsWith(":3000/")) {
  appUrl = "http://friendsofbabba-core-sample.local/";
  environment = "DEVELOPER";
}
export const APP_URL = appUrl;
export const API_URL = `${APP_URL}api`;
export const APP_TITLE = "FOB";
export const APP_SUB_TITLE = "Admin (1.0.7)";
export const DRAWER_WIDTH = 240;
export const ENVIRONMENT = environment;
export const RECAPTCHA_SITE_KEY = "?";
