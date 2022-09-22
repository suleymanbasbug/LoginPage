import { BottomTabBarRouter, NativeStackRouter, Route, NativeRouter } from '@smartface/router';
import Color from '@smartface/native/ui/color';
import * as Pages from 'pages';
import Image from '@smartface/native/ui/image';

const bottomTabBarRouter = BottomTabBarRouter.of({
  path: '/btb',
  to: '/btb/tab1/page1',
  homeRoute: 0,
  tabbarParams: () => ({
    ios: { translucent: false },
    itemColor: {
      normal: Color.BLACK,
      selected: Color.WHITE
    },
    backgroundColor: Color.create('#00A1F1')
  }),
  items: [
    {
      title: 'Profile',
      icon: Image.createFromFile('images://profile.png')
    },
    {
      title: 'Messages',
      icon: Image.createFromFile('images://messages.png')
    },
    {
      title: 'Settings',
      icon: Image.createFromFile('images://settings.png')
    }
  ],
  // tab1
  routes: [
    // tab1
    NativeStackRouter.of({
      path: '/btb/tab1',
      to: '/btb/tab1/page1',
      routes: [
        Route.of<Pages.Page1>({
          path: `/btb/tab1/page1`,
          build(router, route) {
            return new Pages.Page1(router, route);
          },
          headerBarParams: () => ({
            visible: true
          })
        })
      ]
    }),
    NativeStackRouter.of({
      path: '/btb/tab2',
      to: '/btb/tab2/page2',
      routes: [
        Route.of<Pages.Page2>({
          path: `/btb/tab1/page2`,
          build(router, route) {
            return new Pages.Page2(router, route);
          },
          headerBarParams: () => ({
            visible: true
          })
        })
      ]
    }),
    NativeStackRouter.of({
      path: '/btb/tab3',
      to: '/btb/tab3/page3',
      routes: [
        Route.of<Pages.Page3>({
          path: `/btb/tab3/page3`,
          build(router, route) {
            return new Pages.Page3(router, route);
          },
          headerBarParams: () => ({
            visible: true
          })
        })
      ]
    })
  ]
});

export default bottomTabBarRouter;

