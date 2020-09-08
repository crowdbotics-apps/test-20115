import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings99038Navigator from '../features/Settings99038/navigator';
import Settings99023Navigator from '../features/Settings99023/navigator';
import NotificationList99022Navigator from '../features/NotificationList99022/navigator';
import Maps99021Navigator from '../features/Maps99021/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings99038: { screen: Settings99038Navigator },
Settings99023: { screen: Settings99023Navigator },
NotificationList99022: { screen: NotificationList99022Navigator },
Maps99021: { screen: Maps99021Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
