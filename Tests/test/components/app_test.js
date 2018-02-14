import { renderComponent,expect } from '../test_helper';
import App from '../../src/components/app';

describe("App", () => {
it ('shows the correct Text',() => {
  
  const component = renderComponent(App);
  
  expect(component).to.contain('Hello World!')
});
});