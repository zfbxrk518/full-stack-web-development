import { a as api } from "../../../_app/immutable/chunks/_api-c3ffbf2d.js";
import "@prisma/client";
const GET = async ({ request }) => {
  return api(request);
};
const POST = (request) => {
  return api(request, {
    created_at: new Date(),
    text: request.body.get("text"),
    done: false
  });
};
export {
  GET,
  POST
};
