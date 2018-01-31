import DS from 'ember-data'; // data store

export default DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    email: DS.attr('string'),
    address: DS.attr('String'),
    city: DS.attr('string'),
    postal: DS.attr('string')
});