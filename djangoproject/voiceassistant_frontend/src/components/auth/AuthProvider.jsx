import { createContext } from "react";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

const AUTH_TOKEN_NAME = 'userAuthToken';

export const AuthContext = createContext({
  loginSuccess: (userToken) => {},
  logoutSuccess: () => {},
  getUserToken: () => {},
  getUserFromToken: () => {},
});

export default function AuthProvider(props) {
  const [cookies, setCookie, removeCookie] = useCookies([AUTH_TOKEN_NAME]);

  const loginSuccess = (userToken) => {
    setCookie(AUTH_TOKEN_NAME, userToken, {
      httpOnly: false,
      secure: true,
      sameSite: "Strict",
      expires: new Date(Date.now() + (10 * 24 * 60 * 60)),
    });
  };

  const logoutSuccess = () => {
    removeCookie(AUTH_TOKEN_NAME);
  };

  const getUserFromToken = () => {
    const { userAuthToken } = cookies;

    if (userAuthToken) {
      return jwt_decode(userAuthToken);
    }

    return null;
  };

  const getUserToken = () => {
    return cookies.userAuthToken;
  };

  return (
    <AuthContext.Provider value={{ loginSuccess, logoutSuccess, getUserToken, getUserFromToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}