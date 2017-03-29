import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planetFilter'
})
export class PlanetFilterPipe implements PipeTransform {

  public transform(planets: Planet[], mode?: PlanetFilterMode): Planet[] {
    if (!planets || !mode || mode === PlanetFilterMode.ALL) {
      return planets;
    }
    return planets.filter((planet: Planet) => {
      return (planet.satellite === 0 && mode === PlanetFilterMode.NO_SATELLITES) ||
        (planet.satellite > 0 && mode === PlanetFilterMode.ONLY_WITH_SATELLITES);
    });
  }

}

export enum PlanetFilterMode {
  ALL = 1,
  NO_SATELLITES,
  ONLY_WITH_SATELLITES
}