const CLIENT_URL = import.meta.env.VITE_REACT_APP_CLIENT_URL;
const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;
const env = import.meta.env.VITE_NODE_ENV || "development";

export { CLIENT_URL, SERVER_URL, env };