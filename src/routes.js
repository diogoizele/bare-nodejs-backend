import { randomUUID } from "node:crypto";

import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const { search } = req.query;

      let queryResult;

      if (search) {
        queryResult = database.select("users", {
          name: search,
          email: search,
        });
      } else {
        queryResult = database.select("users");
      }

      return res.end(JSON.stringify(queryResult));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),

    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      database.insert("users", user);

      return res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const deleteSuccesful = database.delete("users", id);

      if (!deleteSuccesful) {
        return res.writeHead(404).end("Element not found");
      }

      return res.writeHead(202).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const updateSuccesful = database.update("users", id, req.body);

      if (!updateSuccesful) {
        return res.writeHead(404).end("Element not found");
      }

      return res.writeHead(202).end();
    },
  },
];
