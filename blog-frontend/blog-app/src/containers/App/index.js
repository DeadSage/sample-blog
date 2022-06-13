import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import RequireAuth from './Auth/RequireAuth'
import OnlyAnonymous from './Auth/OnlyAnonymous'
import LoginPage from '../../pages/LoginPage'
import PostPage from '../../pages/PostPage'
import BaseLayout from '../../components/BaseLayout'


class App extends React.Component {
    render() {
        return (
            <Router>
                <BaseLayout>
                    <Routes>
                        <Route
                            exact
                            path="/posts/:postId"
                            element={
                                <RequireAuth>
                                    <PostPage />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <OnlyAnonymous>
                                    <LoginPage />
                                </OnlyAnonymous>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <PostPage />
                                </RequireAuth>
                            }
                        />
                    </Routes>
                </BaseLayout>
            </Router>
        );
    }
}


App.propTypes = {
  store: PropTypes.object,
};

export default App;
