import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AppointmentService extends Service {
  @tracked selectedCptCode;

  get currentStepIndex() {
    return this.selectedCptCode ? 3 : 2;
  }
}
