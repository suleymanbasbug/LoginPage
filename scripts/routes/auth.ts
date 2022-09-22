import { NativeStackRouter as StackRouter, Route, Router } from '@smartface/router';
import * as Pages from 'pages';

export default function () {
    return StackRouter.of({
        path: `/pages`,
        to: `/pages/pgWelcome`,
        modal: true,
        routes: [
            
            Route.of<Pages.PgLogin>({
                path: `/pages/pgLogin`,
                build(router, route) {
                    const page = new Pages.PgLogin(router, route);
                    Router.getActiveRouter().setState({ view: page });
                    return page;
                },
                headerBarParams: () => ({
                    visible: false
                })
            })
        ]
    });
}