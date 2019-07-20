
  import { createStackNavigator, createAppContainer } from 'react-navigation'
  import routes from './routes'
  import HomeScreen from '../screens/app/home/home_screen'
  import ProfileScreen from '../screens/app/profile/profile_screen'

  
  const Stacks = {
	Auth: 'auth',
	App: 'app'
}

const AuthStack = createStackNavigator(
	{
		[routes.home()]: HomeScreen,

	},
	{
		headerMode: 'none',
		initialRouteName: routes.home()
	}
)

const AppStack = createStackNavigator(
	{
		[routes.home()]: HomeScreen,
		[routes.profile()]: ProfileScreen,

		
	},
	{
		initialRouteName: routes.home(),
		headerMode: 'none'
	}
)

const isUserLoggedIn = true

const RootStack = createStackNavigator(
	{
		[Stacks.Auth]: AuthStack,
		[Stacks.App]: AppStack
	},
	{
		headerMode: 'none',
		// initialRouteName: Stacks.Auth
		initialRouteName: isUserLoggedIn ? Stacks.App : Stacks.Auth
	}
)


export default createAppContainer(RootStack);