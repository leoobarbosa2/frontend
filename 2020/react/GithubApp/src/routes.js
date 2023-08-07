import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from './assets/github.png';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Repository from './pages/Repository';
import RepoProfile from './pages/RepoProfile';

import Blog from './pages/Blog';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Users: {
        screen: createStackNavigator(
          {
            Dashboard,
            Profile,
            Blog,
          },
          {
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#fff',
                height: 50
              },
              headerTitle: () => <Image source={logo} />,
              headerTitleAlign: 'center',
            },
            navigationOptions: {
              tabBarLabel: 'Usuários',
              tabBarIcon: ({tintColor}) => (
                <Icon name="face" size={20} color={tintColor} />
              ),
            },
          },
        )
      },
      Repository: {
        screen: createStackNavigator(
          {
            Repository,
            RepoProfile,
            Blog
          },
          {
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#fff',
                height: 50
              },
              headerTitle: () => <Image source={logo} />,
              headerTitleAlign: 'center',
            },
            navigationOptions: {
              tabBarLabel: 'Repositórios',
              tabBarIcon: ({tintColor}) => (
                <Icon name="storage" size={20} color={tintColor} />
              ),
            },
          },
        )
      }
    }, {
      tabBarOptions: {
        activeTintColor: '#668cff',
        inactiveTintColor: 'gray'
      }
    }
  )
)

export default Routes;