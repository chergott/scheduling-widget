import EmberRouter from '@ember/routing/router';
import config from 'scheduling-widget/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('request-an-appointment', function () {
    this.route('cpt-codes', { path: '/:clinician_id' }, function () {
      this.route('index', { path: '/' });
      this.route('offices', { path: '/:cpt_code' });
    });
  });
});
