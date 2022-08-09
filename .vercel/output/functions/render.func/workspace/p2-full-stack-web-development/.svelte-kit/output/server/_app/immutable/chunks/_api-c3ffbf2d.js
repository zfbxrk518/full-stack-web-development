var _a;
import * as Prisma from "@prisma/client";
import Prisma__default from "@prisma/client";
const PrismaClient = ((_a = Prisma__default) == null ? void 0 : _a.PrismaClient) || (Prisma == null ? void 0 : Prisma.PrismaClient);
const prisma = new PrismaClient();
const api = async (request, data) => {
  switch (request.method.toUpperCase()) {
    case "GET":
      await prisma.todo.findMany();
      break;
    case "POST":
      await prisma.todo.create({
        data: {
          created_at: data.created_at,
          done: data.done,
          text: data.text
        }
      });
      break;
    case "DELETE":
      await prisma.todo.delete({
        where: {
          uid: request.params.uid
        }
      });
      break;
    case "PATCH":
      await prisma.todo.update({
        where: {
          uid: request.params.uid
        },
        data: {
          done: data.done,
          text: data.text
        }
      });
      break;
  }
  if (request.method.toUpperCase() !== "GET" && request.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/"
      }
    };
  }
};
export {
  api as a
};
