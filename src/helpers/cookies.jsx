import Cookies from "universal-cookie"

const cookie = new Cookies()

export const getTokenFromCookie = () => {
  return cookie.get("token")
}

// const getCookieValue = (cookieName) => {
//   const cookies = document.cookie.split(';');
  
//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].trim();
//     // Check if the cookie starts with the given name
//     if (cookie.startsWith(cookieName + '=')) {
//       // Retrieve and return the cookie value
//       return cookie.substring(cookieName.length + 1);
//     }
//   }
  
//   // Cookie not found
//   return null;
// };

// // Usage example
// const sessionId = getCookieValue('sessionId');

// export const getCookieValue = (cookieName) => {
//   const cookies = document.cookie.split(';')

//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].trim();
//     if (cookie.startsWith(cookieName + "=")) {
//       return cookie.substring(cookie.length + 1)
//     }
//   }
//   return null
// }
