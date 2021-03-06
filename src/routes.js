const React = require('react');
const t = require('transducers.js');
const csp = require('js-csp');
const { go, chan, take, put, ops } = csp;
const { takeAll } = require('./lib/util');

const App = require('./components/app');
const Page = require('./components/page');
const Index = require('./components/index');
const Post = require('./components/post');
const Tag = require('./components/tag');
const Archive = require('./components/archive');
const Drafts = require('./components/drafts');
const Edit = require('./admin/edit');
const NotFound = require('./components/not-found');
const ServerError = require('./components/server-error');
const RR = require('react-router');

const Router = React.createFactory(RR.Router);
const Route = React.createFactory(RR.Route);
const IndexRoute = React.createFactory(RR.IndexRoute);

var hljs = require('highlight.js/lib/highlight.js'); // (jwl)
hljs.registerLanguage('scheme', require('./lib/scheme-highlight.js'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

module.exports = history => Router(
  history ? { history } : null,
  Route(
    { path: '/', component: App },
    IndexRoute({ component: Index }),
    Route({ path: '/tag/:tag', component: Tag }),
    Route({ path: 'archive', component: Archive }),
    Route({ path: 'drafts', component: Drafts }),
    Route({ path: ':post', component: Post }),
    Route({ path: '/edit/:post', component: Edit }),
    Route({ path: '*', component: NotFound }),
  )
);
