import { a as api } from "../../../_app/immutable/chunks/_api-c3ffbf2d.js";
import "@prisma/client";
const DELETE = async ({ request }) => {
  return api(request);
};
const PATCH = (request) => {
  return api(request, {
    text: request.body.get("text"),
    done: request.body.has("done") ? !!request.body.get("done") : void 0
  });
};
export {
  DELETE,
  PATCH
};
