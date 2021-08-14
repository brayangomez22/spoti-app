import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQueury(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAX89N8JDnmTyraemMMqgFihGgxE40bAmbnHZIEo873bkfm9_XViKCM5L2Pc3vXZ6qzqvrF4Zh0-47HE_c',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQueury('browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getArtists(term: string) {
    return this.getQueury(
      `search?query=${term}&type=artist&offset=0&limit=15`
    ).pipe(map((data: any) => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQueury(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQueury(`artists/${id}/top-tracks?market=us`).pipe(
      map((data: any) => data['tracks'])
    );
  }
}
