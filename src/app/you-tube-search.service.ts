/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
*/

import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Injectable()
export class YouTubeSearchService {
  constructor(private http:Http,
@Inject(YOUTUBE_API_KEY) private apikey:string,    // ="AIzaSyBePMoiGScOx1_Hi7dQbZ7qhZQQ2_Z3pDg";
@Inject(YOUTUBE_API_URL) private apiUrl:string){        //="https://www.googleapis.com/youtube/v3/search";
}
}
