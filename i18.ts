import { loadCldr } from "react-native-globalize";
import en from "react-native-globalize/locale-data/en";
import fr from "react-native-globalize/locale-data/fr";
import de from "react-native-globalize/locale-data/de";
import cs from "react-native-globalize/locale-data/cs";
import sv from "react-native-globalize/locale-data/sv";
import da from "react-native-globalize/locale-data/da";
import ru from "react-native-globalize/locale-data/ru";
import pt from "react-native-globalize/locale-data/pt";
import pl from "react-native-globalize/locale-data/pl";
import zh from "react-native-globalize/locale-data/zh";
import ms from "react-native-globalize/locale-data/ms";
import es from "react-native-globalize/locale-data/es";
import it from "react-native-globalize/locale-data/it";
import ar from "react-native-globalize/locale-data/ar";

export const loadGlobalize = () => {
  loadCldr(en, fr, de, sv, da, ru, pt, pl, zh, ms, es, it, ar, cs);
};
