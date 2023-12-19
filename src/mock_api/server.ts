import { createServer, Model } from "miragejs";
import { people } from "./data/people";
export function makeServer({ environment = "development" } = {}) {
  const storedData = localStorage.getItem("mirage-data");
  const intitalData = storedData ? JSON.parse(storedData) : { people };
  const server = createServer({
    environment,
    models: {
      people: Model,
    },
    seeds(server) {
      server.db.loadData(intitalData);
    },
    routes() {
      this.namespace = "/swapi.dev/api";
      this.get(
        "/people",
        (schema) => {
          const allCharacters = schema.all("people");
          return allCharacters.models;
        },
        { timing: 2000 }
      );
    },
  });
  return server;
}
