import type { RequestHandler } from "@sveltejs/kit";

let todos: Todo[] = [];

export const GET: RequestHandler = (request) => {
  return {
    status: 200,
    body: todos
  }
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
export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
    todos.push({
		created_at: new Date(),
		text: formData.get('text') as string,
		done: false
	});
	return {
	  body: formData.get('text') as string,
	  status: 303,
	  headers: {
			location: '/'
	  }
	};
  }