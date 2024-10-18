import { createStackNavigator } from "@react-navigation/stack";
import TP1 from "../TP1";
import TP1_01 from "../TP1/01";
import TP1_02 from "../TP1/02";
import TP1_03 from "../TP1/03";
import TP1_04 from "../TP1/04";
import TP1_05 from "../TP1/05";
import TP1_06 from "../TP1/06";
import TP1_07 from "../TP1/07";
import TP1_08 from "../TP1/08";
import TP1_09 from "../TP1/09";
import TP1_10 from "../TP1/10";
import TP1_11 from "../TP1/11";
import TP1_12 from "../TP1/12";
import TP1_13 from "../TP1/13";
import TP1_14 from "../TP1/14";
import TP1_15 from "../TP1/15";
import TP1_16 from "../TP1/16";

const Stack = createStackNavigator();

export default function TP1Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TP1" component={TP1} />
      <Stack.Screen name="TP1 - 1" component={TP1_01} />
      <Stack.Screen name="TP1 - 2" component={TP1_02} />
      <Stack.Screen name="TP1 - 3" component={TP1_03} />
      <Stack.Screen name="TP1 - 4" component={TP1_04} />
      <Stack.Screen name="TP1 - 5" component={TP1_05} />
      <Stack.Screen name="TP1 - 6" component={TP1_06} />
      <Stack.Screen name="TP1 - 7" component={TP1_07} />
      <Stack.Screen name="TP1 - 8" component={TP1_08} />
      <Stack.Screen name="TP1 - 9" component={TP1_09} />
      <Stack.Screen name="TP1 - 10" component={TP1_10} />
      <Stack.Screen name="TP1 - 11" component={TP1_11} />
      <Stack.Screen name="TP1 - 12" component={TP1_12} />
      <Stack.Screen name="TP1 - 13" component={TP1_13} />
      <Stack.Screen name="TP1 - 14" component={TP1_14} />
      <Stack.Screen name="TP1 - 15" component={TP1_15} />
      <Stack.Screen name="TP1 - 16" component={TP1_16} />
    </Stack.Navigator>
  );
}
