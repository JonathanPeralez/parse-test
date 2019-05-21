import { React } from 'react';

// const SingleComponent = () => (
//   <div>
//     <h1>Single Component</h1>
//   </div>
// );

const OuterComponent = () => (
  <div>
    <InnerComponent />
  </div>
);

/*const InnerComponent = () => (
  <div>
    <h2>Inner Component Header</h2>
  </div>
);*/
const InnerComponent = () => (
  <div>
    <SecondLevelComponent />
  </div>
);

const SecondLevelComponent = () => (
  <div>
    <h3>Second Level Component</h3>
  </div>
);

export default OuterComponent;
// export default singleComponent;