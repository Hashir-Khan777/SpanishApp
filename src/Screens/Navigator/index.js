import React from 'react';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import {SplashScreen, Login, Register, Home} from '../index';

const MyTransition = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={MyTransition}
      />
      <Stack.Screen name="Login" component={Login} options={MyTransition} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={MyTransition}
      />
      <Stack.Screen name="Home" component={Home} options={MyTransition} />
    </Stack.Navigator>
  );
};

export {StackNavigation};
