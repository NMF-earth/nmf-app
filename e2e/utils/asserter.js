import { getElementByText } from './elementUtil';

const assertElementText = async text => {
  const element = await getElementByText(text);
  const actText = await element.text();
  expect(actText).toBe(text);
};

export default {
  assertElementText,
};
