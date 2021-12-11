import apple from '../../../assets/entities/apple.png';
import strawberry from '../../../assets/entities/strawberry.png'
import dog from '../../../assets/entities/dog.png'
import duck from '../../../assets/entities/duck.png'
import bench from '../../../assets/entities/bench.png'
import sunflower from '../../../assets/entities/sunflower.png'
import orchid from '../../../assets/entities/orchid.png'
import rose from '../../../assets/entities/rose.png'
import appleWater from '../../../assets/entities_state/apple_water.png'
import benchClean from '../../../assets/entities_state/bench_clean.png'
import dogFeed from '../../../assets/entities_state/dog_feed.png'
import duckFeed from '../../../assets/entities_state/duck_feed.png'
import orchidWater from '../../../assets/entities_state/orchid_water.png'
import strawberryWater from '../../../assets/entities_state/strawberry_water.png'
import sunflowerWater from '../../../assets/entities_state/sunflower_water.png'
import roseWater from '../../../assets/entities_state/rose_water.png'

export default function getIcon(state) {
    const name = state.name.toUpperCase();
    switch (name) {
        case "APPLE":
            if (state.ableToWater) {
              return appleWater;
            }
            return apple;
        case "STRAWBERRY":
            if (state.ableToWater) {
              return strawberryWater;
            }
            return strawberry;
        case "ORCHID":
            if (state.ableToWater) {
              return orchidWater;
            }
            return orchid;
        case "SUNFLOWER":
            if (state.ableToWater) {
              return sunflowerWater;
            }
            return sunflower;
        case "ROSE":
            if (state.ableToWater) {
              return roseWater;
            }
            return rose;
        case "BENCH":
            if (state.ableToClean) {
              return benchClean;
            }
            return bench;
        case "DOG":
            if (state.ableToFeed) {
              return dogFeed;
            }
            return dog;
        case "DUCK":
            if (state.ableToFeed) {
              return duckFeed;
            }
            return duck;
        default:
    }
}