import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import {
  LoginScreen,
  HelpScreen,
  SearchScreen,
  HomeScreen,
  ProfileScreen,
  LoggedUserProfileScreen,
  RegisterScreen,
  RegisterScreenTwo,
  RegisterScreenThree,
  SettingsScreen,
  WelcomeScreen,
  NotificationsScreen,
  AddStoryScreen,
  CategoryScreen,
  ImageScreen,
  StoryDetailsScreen,
  SubmitScreen,
  ViewStoryScreen,
  EditProfileScreen,
  CommentsScreen,
  LikesScreen,
  FollowersScreen,
  ChooseScreen,
  VideosScreen,
  BookmarksScreen
} from '../screens';

export const MainNavigator = TabNavigator({
  Login: { screen: LoginScreen },
  Welcome: { screen: WelcomeScreen },
  Choose: {
    screen: StackNavigator({
      Choose: { screen: ChooseScreen }
    })
  },
  Register: {
    screen: StackNavigator({
      Register: { screen: RegisterScreen },
      PartTwo: { screen: RegisterScreenTwo },
      PartThree: { screen: RegisterScreenThree },
    })
  },       
  Help: {
    screen: StackNavigator({
      Help: { screen: HelpScreen }
    })
  },
  Main: {
    screen: TabNavigator({
      Search: {
        screen: SearchScreen,
        navigationOptions: {
          tabBarLabel: 'Search',
          tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor} />,
        },
      },
      Home: {
        screen: StackNavigator({
            Home: { screen: HomeScreen },
            View: { screen: ViewStoryScreen },
            Profile: { screen: ProfileScreen }
        }),
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
        },
      },
      Story: {
        screen: StackNavigator({
          Story: { screen: AddStoryScreen },
          Category: { screen: CategoryScreen },
          Image: { screen: ImageScreen },
          Details: { screen: StoryDetailsScreen },
          Submit: { screen: SubmitScreen }
        }),
        navigationOptions: {
          tabBarLabel: 'Story',
          tabBarIcon: ({ tintColor }) => <Icon name="add" size={35} color={tintColor} />,
        },
      },
      Notifications: {
        screen: NotificationsScreen,
        navigationOptions: {
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ tintColor }) => <Icon name="notifications" size={35} color={tintColor} />,
        },
       },
      LoggedUserProfile: {
        screen: StackNavigator({
          LoggedUserProfile: { screen: LoggedUserProfileScreen },
          Followers: { screen: FollowersScreen },
          Likes: { screen: LikesScreen },
          Comments: { screen: CommentsScreen },
          Bookmarks: { screen: BookmarksScreen },
          Videos: { screen: VideosScreen },
          Settings: { screen: SettingsScreen },
          EditProfile: { screen: EditProfileScreen },
        }),
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
        },
      }
    }, {
      swipeEnabled: true,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        labelStyle: { fontSize: 12 },
        activeTintColor: '#fff',
        indicatorStyle: { backgroundColor: 'rgba(0,0,0,0.4)'},
        pressColor: '#88b0d3',
        activeBackgroundColor: '#88b0d3',
        inactiveTintColor: '#88b0d3',
        lazyLoad: true,
        lazy: true
      },        
    })
  }
}, {
  navigationOptions: {
    tabBarVisible: false
  },
  lazyLoad: true,
  lazy: true
});

export function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}
