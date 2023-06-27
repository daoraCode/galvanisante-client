import { getTokenFromCookie } from '../helpers/cookies'
const token = getTokenFromCookie()

// export const getMemoryFeed = async () => {
//   const res = await fetch(
//     `${import.meta.env.VITE_BACKEND_API}/api/memories/memory`,
//     {
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   )
//   const data = await res.json()
//   return data
// }
// export const getMemoryFeed = () => {
//   const res = axios.get(`${import.meta.env.VITE_BACKEND_API}/api/memories/memory`)
//   const data = await res.json()
//   return data
// }

// export const getMemory = async (_id) => {
//   const res = fetch(
//     `${import.meta.env.VITE_BACKEND_API}/api/memories/memory/${_id}`,
//     {
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )
//   // console.log(res)
//   const data = await res.json()
//   return data
// }
