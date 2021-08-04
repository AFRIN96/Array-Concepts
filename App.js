import "./App.css";

function App() {
  // Question 1:
  const array = [1, 3, 4];

  array.push(5);
  console.log("Question 1:", array);
  array.splice(3, 1);
  console.log("After Splice:", array);
  array.unshift(0);
  console.log("Question 1 aftr 0:", array);

  // Question 2:
  const arr = [];
  // for( let i=1;i<=3;i++)
  for (let i = 1; i <= 10; i++) arr.push({ id: i });
  console.log("Question 2:", arr);

  // Question 3:
  const array1 = [
    { id: "1ar", selected: false },
    { id: "2wa", selected: false },
    { id: "qqa3", selected: false },
  ];

  // array1.map((arr1) => {
  //   if (arr1.id === "qqa3")
  //   {
  //       arr1.selected = true
  //   }
  // });
  // console.log("Question 3:", array1);
  let updatedArray =
    array1.map((arr1) => {
      let temp = Object.assign({}, arr1);
      if (arr1.id === "2wa") {
        temp.selected = true;
      }
      return temp;
    });
  console.log("Question 3:", updatedArray);
  return (
    <div className="App">
      <p>Array</p>
    </div>
  );
}

export default App;
