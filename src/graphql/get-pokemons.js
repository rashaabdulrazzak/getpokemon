import gql from "graphql-tag";

export const GET_POKEMONS = gql`
{  
    pokemons(first: 8) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
            special {
                name
                damage
            }
      }
    }  
}
`;
