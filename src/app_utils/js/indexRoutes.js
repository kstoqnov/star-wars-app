import App from '../app_master_component/App';
import Login from '../app_login_page_components/Login';

export const indexRoutes = [
  { path: "/", name: "App", component: App },
  { path: "/login", name: "Login", component: Login }
];

