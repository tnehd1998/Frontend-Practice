import { useMutation, gql } from "@apollo/client";

const ADD_FRUIT = gql`
  mutation addFruit(
    $id: ID!
    $scientific_name: String!
    $tree_name: String!
    $fruit_name: String!
    $family: String!
    $origin: String!
    $description: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ) {
    addFruit(
      id: $id
      scientific_name: $scientific_name
      tree_name: $tree_name
      fruit_name: $fruit_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
    ) {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
`;

const AddFruit = () => {
  const postFruitCompleted = () => {
    console.log("Fruit Added");
  };

  const [addFruit] = useMutation(ADD_FRUIT, {
    onCompleted: postFruitCompleted,
  });

  const onClickAddApple = () => {
    addFruit({
      variables: {
        id: Date.now(),
        scientific_name: "Apple",
        tree_name: "사과 나무",
        fruit_name: "사과",
        family: "유기농",
        origin: "서울",
        description: "유기농 사과입니다:O",
        bloom: "5월",
        maturation_fruit: "사과",
        life_cycle: "1년",
        climatic_zone: "열대 기후",
      },
    });
  };

  return (
    <div>
      <button onClick={onClickAddApple}>Add Apple</button>
    </div>
  );
};

export default AddFruit;
