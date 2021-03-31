import Route from '@ember/routing/route';

export default class RequestAnAppointmentRoute extends Route {
  model() {
    return this.store.createRecord('clinician', {
      id: this.modelFor('application').clinicianId,
      name: 'Rob Gross, MFT',
    });
  }
}
