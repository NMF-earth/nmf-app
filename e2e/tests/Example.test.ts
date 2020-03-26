import { driver } from "../configurations/driverConfig";
import { introActions } from "../screen";

describe("Get in the app", () => {
  beforeAll(async () => {
    await driver.launchApp();
  });

  it(`Click on I agree button`, async () => {
    introActions.introAgree().click();
  });

  afterAll(async () => {});
});
