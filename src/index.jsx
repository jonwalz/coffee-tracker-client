
import React                                           from 'react'
import ReactDOM                                        from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory }                           from 'history'
import { Provider }                                    from 'react-redux'
import store                                           from './redux/store'
import * as pageMap                                    from './page_map'
import App                                             from './app'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const router = (
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={pageMap.indexComponent} {...pageMap.buildProps('login') } />
            {pageMap.routes()}
        </Route>
    </Router>
)

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root')
)