{
  /* Type Aliases */

  type Text = string;
  const name: Text = "MJ";
  const address: Text = "korea";
  type Num = number;
  type Person = {
    name: string;
    age: number;
  };
  const person: Person = {
    // lastname : 'MJ' // error
    name: "MJ",
    age: 30,
  };

  /* String Literal Types */

  type Name = "name";
  let mj: Name;
  mj = "name";
  type JSON = "json";
  const json: JSON = "json";
}
