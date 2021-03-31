import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestAnAppointmentCptCodesOfficesRoute extends Route {
  @service appointment;

  renderTemplate() {
    this.render('request-an-appointment.cpt-codes.offices', {
      into: 'request-an-appointment',
    });
  }

  model(params) {
    this.cptCodeId = params.cpt_code;
    return this.store.findAll('office');
  }

  afterModel() {
    const cptCodes = this.modelFor('request-an-appointment.cpt-codes.index');
    this.appointment.set('selectedCptCode', cptCodes.findBy('id', this.cptCodeId));
  }
}
