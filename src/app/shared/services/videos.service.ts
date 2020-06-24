import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"
import {IVideo} from "../../shared/interfaces/Player";


@Injectable({
  providedIn: "root"
})
export class VideoService {
  private videos: IVideo[]
  public isLoading = new BehaviorSubject(false)

  constructor() {
    this.videos = [
      {
        id: 1,
        src: "https://ia802801.us.archive.org/26/items/cartoonsgalorev/Cartoons%20Galore%21%20V.mp4?cnt=0",
        poster: "https://ia802801.us.archive.org/26/items/cartoonsgalorev/cartoonsgalorev.thumbs%2FCartoons%20Galore%21%20V_000054.jpg"
      },
      {
        id: 2,
        poster: "https://archive.org/services/img/podcast_sunsetcast-looney-tunes_pink-panther-cartoons-disk-2_1000429936009",
        src: "https://ia802808.us.archive.org/4/items/cartoonsgalorevi/Cartoons%20Galore%21%20VI.mp4?cnt=0"
      },

      {
        id: 3,
        src: "https://ia801504.us.archive.org/6/items/nae5Yoi1wa0Eigofahj3/Bernard%20Bear%20%7C%20Fishing%20AND%20MORE%20%7C%20Cartoons%20for%20Children%20%7C%20Full%20Episodes-dhgfDm8b_Yk-nomusic.mp4",
        poster: "https://ia601504.us.archive.org/6/items/nae5Yoi1wa0Eigofahj3/nae5Yoi1wa0Eigofahj3.thumbs%2FBernard%20Bear%20%7C%20Fishing%20AND%20MORE%20%7C%20Cartoons%20for%20Children%20%7C%20Full%20Episodes-dhgfDm8b_Yk-nomusic_000055.jpg"
      }
    ];
  }

  loadVideos(): Promise<IVideo[]> {
    this.isLoading.next(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.videos)
        this.isLoading.next(false)
      }, 2000)
    })
  }
}
