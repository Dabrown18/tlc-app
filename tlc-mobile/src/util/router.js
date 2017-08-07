import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import AddStoryScreen from '../screens/AddStoryScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ImageScreen from '../screens/ImageScreen';
import StoryDetailsScreen from '../screens/StoryDetailsScreen';
import SubmitScreen from '../screens/SubmitScreen';
import ViewStoryScreen from '../screens/ViewStoryScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import CommentsScreen from '../screens/CommentsScreen';
import LikesScreen from '../screens/LikesScreen';
import FollowersScreen from '../screens/FollowersScreen';

// Stat Navigation
import ProfileContent from '../components/profile/ProfileContent';

export const MainNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Login: { screen: LoginScreen },
      Register: {
        screen: StackNavigator({
          Register: { screen: RegisterScreen}
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
            screen: HomeScreen,
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
          Bookmark: {
            screen: BookmarkScreen,
            navigationOptions: {
              tabBarLabel: 'Bookmark',
              tabBarIcon: ({ tintColor }) => <Icon name="bookmark" size={35} color={tintColor} />,
            },
           },
          Profile: {
            screen: StackNavigator({
              Profile: { screen: ProfileScreen },
              Followers: { screen: FollowersScreen },
              Likes: { screen: LikesScreen },
              Comments: { screen: CommentsScreen },
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
            showIcon: true,
            labelStyle: { fontSize: 12 },
            activeTintColor: '#fff',
            indicatorStyle: { backgroundColor: 'rgba(0,0,0,0.4)'},
            pressColor: '#88b0d3',
            activeBackgroundColor: '#88b0d3',
            inactiveTintColor: '#88b0d3'
          },        
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazyLoad: true
    });

