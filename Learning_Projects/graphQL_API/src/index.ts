import { serverConnection } from "./connections/server";
import { apolloServerConnection } from "./connections/graphql";

(async () => {

  await apolloServerConnection();
  await serverConnection();

})();
