import { createStackNavigator, createAppContainer } from "react-navigation";
import routes from "./routes";
import HomeScreen from "../screens/app/home/home_screen";
import ProfileScreen from "../screens/app/profile/profile_screen";
import InfoScreen from "../screens/app/info/info_screen";
import SignInScreen from "../screens/auth/signIn/signIn_screen";

const Stacks = {
  Auth: "auth",
  App: "app"
};

const AuthStack = createStackNavigator(
  {
    [routes.signIn()]: SignInScreen,

  },
  {
    headerMode: "none",
    initialRouteName: routes.signIn()
  }
);

const AppStack = createStackNavigator(
  {
    [routes.home()]: HomeScreen,
    [routes.profile()]: ProfileScreen,
    [routes.info()]: InfoScreen
  },
  {
    initialRouteName: routes.home(),
    headerMode: "none"
  }
);

const isUserLoggedIn = false;

const RootStack = createStackNavigator(
  {
    [Stacks.Auth]: AuthStack,
    [Stacks.App]: AppStack
  },
  {
    headerMode: "none",
    // initialRouteName: Stacks.Auth
    initialRouteName: isUserLoggedIn ? Stacks.App : Stacks.Auth
  }
);

export default createAppContainer(RootStack);
