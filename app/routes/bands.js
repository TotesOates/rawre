import Route from '@ember/routing/route';
import { A } from '@ember/array';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/band';

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
