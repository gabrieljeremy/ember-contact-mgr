import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        // Connecte toi à la base de données et trouve l'enregistrement correspondant à l'id
        return this.get('store').findRecord('contact', params.id)
    }
});
