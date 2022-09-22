
import { NativeRouter } from '@smartface/router';
import Application from '@smartface/native/application';
import TabbarRoute from './tabbar';
import PgLogin from '../pages/pgLogin'
import authRouteGenerator from './auth';
Application.on('backButtonPressed', () => {
  NativeRouter.getActiveRouter()?.goBack();
});

const router = NativeRouter.of({
  path: '/',
  isRoot: true,
  routes: [TabbarRoute,authRouteGenerator()]
});

export default router;

