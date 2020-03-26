import { elementUtil } from "../../utils";
import testID from "./testID";

const { intro } = testID;

const introAgree = () => elementUtil.getElementByAccessibilityId(intro.agree);

export default {
  introAgree
};
