{
  // 1. Type Aliases
  type Text = string;
  const name: string = "billy";
  const address: Text = "Korea";

  type Num = number;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "billy",
    age: 24,
  };

  // 2. String Literal Types
  type Name = "name";
  let billyName: Name;
  billyName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Bool = true;
  const isCat: Bool = true;
}
