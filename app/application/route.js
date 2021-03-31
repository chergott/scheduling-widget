import Route from '@ember/routing/route';
import Pretender from 'pretender';
import ENV from 'scheduling-widget/config/environment';
import officesData from 'scheduling-widget/_data/offices';
import cptCodesData from 'scheduling-widget/_data/cpt-codes';

export default class ApplicationRoute extends Route {
  beforeModel() {
    const { clientPortalApi } = ENV.APP;

    new Pretender(function () {
      this.get(`${clientPortalApi}/cpt-codes`, () => [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(cptCodesData),
      ]);
      this.get(`${clientPortalApi}/offices`, () => [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(officesData),
      ]);
    });
  }

  model() {
    return {
      clinicianId: ENV.APP.clinicianId,
    };
  }

  afterModel(model) {
    this.transitionTo('request-an-appointment.cpt-codes', model.clinicianId);
  }
}
