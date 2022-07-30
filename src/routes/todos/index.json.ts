import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";


export const GET: RequestHandler = async ({ request }) => {
  return api(request);
}

// This part is different from the instructors'. I learned this from a guy of the issues part. 
// export async function POST({ request }: any) {
// 	const data = await request.formData(); 
// 	todos.push({
// 		created_at: new Date(),
// 		text: data.get('text') as string,
// 		done: false
// 	});
// 	return {
// 		status: 303,
// 		headers: {
// 			location: '/'
// 		}
// 	};
// }

// This part works too. This is the second way to write the post part.
export const POST: RequestHandler<{}, FormData> = (request) => {
	return api(request, {
		
		created_at: new Date(),
		text: request.body.get("text"),
		done: false
	})   
}