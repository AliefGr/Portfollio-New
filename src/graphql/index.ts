import { gql, request } from "graphql-request";

// const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;
// / src/graphql/index.ts
const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

if (!graphqlAPI) {
  throw new Error('GraphQL API endpoint is not configured');
}

// const result: any = await request(graphqlAPI, query);
export const getProjects = async () => {
  const query = gql`
    query Projects {
      projectsConnection {
        edges {
          cursor
          node {
            id
            title
            view
            github
            stack
            description
            image {
              url
            }
            createdAt
            publishedAt
          }
        }
      }
    }
  `;

  const result: any = await request(graphqlAPI, query);
  return result.projectsConnection.edges;
};
