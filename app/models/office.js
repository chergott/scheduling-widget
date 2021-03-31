import Model, { attr } from '@ember-data/model';

export default class OfficeModel extends Model {
  @attr city;
  @attr name;
  @attr state;
  @attr zip;
  @attr phone;
  @attr isVideo;
  @attr geolocation;
}
