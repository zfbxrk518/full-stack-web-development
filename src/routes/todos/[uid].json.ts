import type {RequestHandler} from "@sveltejs/kit";
import { api } from "./_api";

export const DELETE: RequestHandler = async ({ request }) => {
    return api(request);
}

export const PATCH: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        text: request.body.get("text"),
        done: request.body.has("done") ? !!request.body.get("done") : undefined
    });
}