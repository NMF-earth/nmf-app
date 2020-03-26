import { driver, asserters, isIOS, isAndroid, touchAction } from '../configurations/driverConfig';

export const getElementByAccessibilityId = (elementIdentifier, timeout = 5000) =>
  driver.waitForElementByAccessibilityId(elementIdentifier, asserters.isDisplayed, timeout, 1000);

export const getElementsByAccessibilityId = (elementIdentifier, timeout = 5000) =>
  driver.waitForElementsByAccessibilityId(elementIdentifier, asserters.isDisplayed, timeout, 1000);

export const getElementByXPath = (elementIdentifier, timeout = 8000) =>
  driver.waitForElementByXPath(elementIdentifier, asserters.isDisplayed, timeout, 1000);

export const getElementsByXPath = (elementIdentifier, timeout = 8000) =>
  driver.waitForElementsByXPath(elementIdentifier, asserters.isDisplayed, timeout, 1000);

export const getElementByName = elementIdentifier => driver.waitForElementByName(elementIdentifier, asserters.isDisplayed, 8000, 1000);

export const getElementsByName = elementIdentifier => driver.waitForElementsByName(elementIdentifier, asserters.isDisplayed, 8000, 1000);

export const getButtonElement = elementIdentifier => {
  if (isIOS) {
    return driver.elementsByAccessibilityId(elementIdentifier).then(elem => elem[2]);
  }

  return getElementByAccessibilityId(elementIdentifier);
};

export const getInputElement = elementIdentifier => {
  if (isIOS) {
    return getElementsByName(elementIdentifier).then(elem => elem[1]);
  }

  return getElementByAccessibilityId(elementIdentifier);
};

export const getElementByText = elementIdentifier => {
  if (isIOS) {
    return getElementsByName(elementIdentifier).then(elem => elem[2]);
  }
  return getElementByXPath(`//*[contains(@text,"${elementIdentifier}")]`).then(elem => elem);
};

const getElementByOS = elementLabel => {
  if (isAndroid) {
    return getElementsByAccessibilityId(elementLabel);
  }

  return getElementsByName(elementLabel);
};

export const getScreen = elementIdentifier => {
  if (isIOS) {
    return getElementByAccessibilityId(elementIdentifier).then(elem => elem[1]);
  }

  return getElementByAccessibilityId(elementIdentifier);
};

export const swipeLeft = async elementIdentifier => {
  if (isIOS) {
    await driver.execute('mobile: swipe', {
      direction: 'left',
      element: elementIdentifier,
    });
  } else {
    const size = await elementIdentifier.getLocation();
    await touchAction
      .press({ x: 800, y: size.y })
      .wait(1000)
      .moveTo({ x: 10, y: size.y })
      .release()
      .perform();
  }
};

export const getTextValueFromList = async (elemList, index) => {
  const elementList = await elemList();
  const element = elementList[index];
  let textValue = '';

  if (isIOS) {
    textValue = await element.elementByXPath('//XCUIElementTypeStaticText').then(ele => ele);
  } else {
    textValue = await element.elementByXPath('//android.widget.TextView').then(ele => ele);
  }

  return textValue.text();
};

export const getTextValueByIndexFromList = async (elemList, index, itemIndex) => {
  const elementList = await elemList();
  const element = elementList[index];
  let textValue = '';

  if (isIOS) {
    textValue = await element.elementsByXPath('//XCUIElementTypeStaticText').then(ele => ele[itemIndex]);
  } else {
    textValue = await element.elementsByXPath('//android.widget.TextView').then(ele => ele[itemIndex]);
  }

  return textValue.text();
};

export const hideKeyboard = async () => {
  const val = await driver.isKeyboardShown();
  if (val === true) {
    await driver.hideKeyboard();
  }
};

export const getDialogConfirmationButton = elementLabel =>
  isAndroid ? getElementByAccessibilityId(elementLabel) : getElementByXPath(`//XCUIElementTypeStaticText[@name="${elementLabel}"]`);

const lib = {
  getButtonElement,
  getInputElement,
  getElementByText,
  getElementByOS,
  swipeLeft,
  getScreen,
  getTextValueFromList,
  getTextValueByIndexFromList,
  getElementByAccessibilityId,
  getElementsByAccessibilityId,
  getElementByXPath,
  getElementsByXPath,
  getElementsByName,
  getElementByName,
  hideKeyboard,
  getDialogConfirmationButton,
};

export { lib };
