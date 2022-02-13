import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import YearView from "../screens/budgetYearScreen";
import BudgetMonthView from "../screens/budgetMonthScreen";

const Drawer = createDrawerNavigator();

export default function BudgetDrawer({ route, navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="Budget_month_view"
      drawerType="front"
      overlayColor="#00000090"
      swipeEdgeWidth="300"
      drawerStyle={{
        backgroundColor: "#e6e6e6",
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Budget_month_view" component={BudgetMonthView} />
      <Drawer.Screen name="Budget_year_view" component={YearView} />
    </Drawer.Navigator>
  );
}