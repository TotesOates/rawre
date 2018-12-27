import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';
import { dasherize } from '@ember/string';

let Band = EmberObject.extend({
    name: '',

    slug: computed('name', function() {
        return dasherize(this.name);
    })
});

let Song = EmberObject.extend({
    title: '',
    rating: 0,
    band: '',
})

export default Route.extend({
   model() {
       let blackDog = Song.create({
           title: 'Black Dog',
           rating: 3,
           band: 'Led Zeppelin'
       });

       let yellowLedBetter = Song.create({
           title: 'Yellow LedBetter',
           rating: 4,
           band: 'Pearl Jam'
       });

       let pretender = Song.create({
           title: 'The Pretender',
           rating: 2,
           band: 'Foo Fighters'
       })

       let daughter = Song.create({
           title: 'Daughter',
           rating: 5,
           band: 'Pearl Jam'
       })


       let ledZeppelin = Band.create({name: 'Led Zeppelin', songs: A([blackDog])});
       let pearlJam = Band.create({name: 'Pearl Jam', songs: A([yellowLedBetter, daughter])});
       let fooFighters = Band.create({name: 'Foo Fighters', songs: A([pretender])});

       return A([ledZeppelin, pearlJam, fooFighters]);
   }
});
