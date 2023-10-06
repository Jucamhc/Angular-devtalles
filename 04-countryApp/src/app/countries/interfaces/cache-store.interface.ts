import { Country } from './countrys.interface'
import { region } from './region.type'

export interface CacheStore {
  byCapital: TermCountries
  byCountries: TermCountries
  byRegion: RegionCountries
  countryPage: TermCountries
}

interface TermCountries {
  term: string
  countries: Country[]
}

interface RegionCountries {
  region?: region
  countries: Country[]
}
