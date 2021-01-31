import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('button click makes api call and changes color', async () => {
  const app = shallow(<App/>);
  expect(app.find('.box').length).toEqual(1);
 
  const button = app.find('button')
  
  await button.props().onClick();
  expect(app.find('.box.green').length).toEqual(1);
});


// test("button click makes api call and changes color", (done) => {
//   const app = shallow(<App />);
//   expect(app.find(".box").length).toEqual(1);

//   const button = app.find("button");
//   const asyncfunc = async () => {
//     // try {
//       await button.props().onClick();
//       expect(app.find(".box.green").length).toEqual(1);
    // } catch (err) {
    //   throw err;
    // }
    // finally{
    //   done();
    // }
    
//   };

//   asyncfunc();
// });
