import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces'

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: Gif[] = []
  private _tagsHistory: string[] = []
  private apiKey: string = 'kNdKkZPLp74FEyW1yQVoqVPFWHfk0Z0G'
  private serviceURL: string = 'http://api.giphy.com/v1/gifs/search'

  constructor(private http: HttpClient) {
    this.getLocalStorage()
    console.log('Get LocalStorage')
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase()

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.splice(0, 10)

    this.saveLocalStorage()
  }

  private saveLocalStorage(): void {
    localStorage.setItem('hostory', JSON.stringify(this._tagsHistory))
  }

  private getLocalStorage(): void {
    if (!localStorage.getItem('hostory')) return
    let localStor = JSON.parse(localStorage.getItem('hostory')!)
    this._tagsHistory = localStor

    if (this._tagsHistory.length === 0) return
    this.search(this._tagsHistory[0])
  }

  search(tag: string): void {
    if (tag.length === 0) return
    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http
      .get<SearchResponse>(`${this.serviceURL}`, { params })
      .subscribe((res) => {
        this.gifList = res.data
      })

    /*   await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=kNdKkZPLp74FEyW1yQVoqVPFWHfk0Z0G&q=${tag}&limit=10`
    )
      .then((res) => res.json())
      .then((data) => console.log(data.data)) */
  }
}
