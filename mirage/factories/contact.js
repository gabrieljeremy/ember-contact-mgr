import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    firstname() {
        return faker.name.firstName();
    },
    lastname() {
        return faker.name.lastName();
    },
    email() {
        return faker.internet.email();
    },
    address() {
        return faker.address.streetAddress();
    },
    city() {
        return faker.address.city();
    },
    postal() {
        return faker.address.zipCode();
    }
});
