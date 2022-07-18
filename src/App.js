import React, { Suspense } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
import AllQuotes from './pages/AllQuotes';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Comments = React.lazy(() => import('./components/comments/Comments'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route
            path='/'
            exact
            render={() => <Navigate replace to='/quotes' />}
          />
          <Route path='/quotes' element={<AllQuotes />} />
          <Route path='/quotes/:quoteId/*' element={<QuoteDetail />}>
            <Route path='comments' element={<Comments />} />
          </Route>
          <Route path='/new-quote' element={<NewQuote />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
