import Cookies from "universal-cookie"

const cookie = new Cookies()

export const getTokenFromCookie = () => {
  return cookie.get("token")
}
