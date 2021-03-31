import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestAnAppointmentCptCodesRoute extends Route {
  @service appointment;

  model() {
    return this.store.findAll('cpt-code');
  }

  afterModel() {
    this.appointment.setProperties({
      selectedClinician: this.modelFor('request-an-appointment'),
      selectedCptCode: undefined,
    });
  }
}
