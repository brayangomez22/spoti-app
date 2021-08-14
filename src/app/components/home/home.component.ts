import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newReleases: any[] = [];
  loading: boolean;
  error: boolean = false;
  messageError: string = '';

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.loading = false;
      },
      (errorService: any) => {
        this.loading = false;
        this.error = true;
        this.messageError = errorService.error.error.message;
      }
    );
  }
}
