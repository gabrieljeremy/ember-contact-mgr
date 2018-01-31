import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
    action: 'edit', // édite par défaut
    contact:null, // créer un variable nulle avant de l'initialiser
    store:inject(), // importe store pour utiliser la fausse BD
    router:inject(), // importe router pour rediriger une fois l'action finie
    init() {
        this._super(...arguments) // on initialise l'élément
        if (this.contact === null) {
            this.set('action', 'add')
            this.set('contact', {}) // on définit un modèle vide => input vide
        }
    },
    actions : {
        saveContact() {
            if (this.get('action') === 'add') {
                this.get('store').createRecord('contact', this.get('contact')).save().then(() => {
                    this.get('router').transitionTo('contacts'); // redirige vers la liste de contacts
                })
            } else {
                this.get('contact').save().then(() => {
                    this.get('router').transitionTo('contacts');
                })
            }
        }
    }
});
