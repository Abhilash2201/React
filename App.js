// let heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "heeloo world"
// );
// console.log(heading);
// // it creates and returns an object
// // it is creating an react element means a javascript object
// // PROPS---are the children
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// //  render methods accepts object and put it inside the dom

// -----Ep 04------
{
  /* <div id="parent">
  <div id="child">
    <h1>iam an h1 tag</h1>
    <h2>iam an h2 tag</h2>
  </div>
</div>; */
}
// -----to create the above structure using the react

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     {
//       id: "child1",
//     },
//     [
//       React.createElement("h1", {}, "i am an h1 tag"),
//       React.createElement("h2", {}, "i am an h2 tag"),
//     ]
//   )
// );
// ----TO OVERCOME THE ABOVE COMPLEXITY WE GO FOR JSX
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ------EP 05---
{
  /* <h1>i am outside the div root</h1> */
}
{
  /* <div id="root">
  <h2>I AM ABHILASH</h2>
</div>; */
}

// in the above case the h1 will be replaced with the parent react element inside the root "div"

// --the h1 stays their
// ---means react will work only inside the div-"root"
