// export async function GET(request: Request) {
//   return new Response('Hello, Next.js!')
// }

// import { UserDto } from "../dto/user.dto";
// export class UserAPI  {
//   public static async getAll(): Promise<UserDto[]> {
//       const resp = await fetch("http://localhost:5000/user", {
//         method: "GET"
//       })

//       const data = await resp.json();

//       return data;
//   }
// }

const BASE_URI = "http://localhost:5000"


export const UserAPI = async() => {
  const resp = await fetch(`${BASE_URI}/user`)
  const data = await resp.json();

  return data;
}
