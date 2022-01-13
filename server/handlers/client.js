import ApolloClient from "apollo-boost";
import { ApiVersion } from "@shopify/shopify-api";

export const createClient = (shop, accessToken) => {
  return new ApolloClient({
    uri: `https://${shop}/admin/api/${ApiVersion.October21}/graphql.json`,
    request: operation => {
      operation.setContext({
        headers: {
          "X-Shopify-Access-Token": accessToken,
          "User-Agent": `shopify-app-node ${
            process.env.npm_package_version
          } | Shopify App CLI`
        }
      });
    }
  });
};
