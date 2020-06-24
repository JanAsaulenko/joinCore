import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { VideoService } from "../../shared/services/videos.service"
import { IVideo } from "../../shared/interfaces/Player"


@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ['./player.component.scss'],
  providers: [VideoService
  ]
})
export class Player implements OnInit, OnChanges, OnDestroy {
  public videos: [] | IVideo[] = []
  public videosLoading: Boolean = false;
  public player = null;
  public targetVideo = null;

  constructor(private videosService: VideoService) {
  }


  ngOnInit(): void {
    this.onPlayerInit();
  }


  ngOnDestroy() {
    this.player.removeEventListener("loadeddata", this.onPlay);
    this.videosService.isLoading.unsubscribe()
  }
  async onPlayerInit(): Promise<any> {
    this.player = document.getElementsByTagName("video")[0];
    console.log(this.player);

    if (!this.player) {
      return
    }

    this.player.addEventListener("loadeddata", this.onPlay)

    this.videosService.isLoading.subscribe(data => {
      this.videosLoading = data
    })
    const response = await this.videosService.loadVideos();
    this.targetVideo = response[0];
    
    this.player.src = this.targetVideo.src;
    this.player.poster = this.targetVideo.poster;
    const withoutTarget = response.filter((video: IVideo) => {
      return video.id !== this.targetVideo.id
    })
    this.videos = Object.assign([], withoutTarget)
  }


  onPlay = (event) => {
    this.player.play()
  }



  chooseVideo(targetVideo: IVideo) {
    this.player.src = targetVideo.src;
    this.player.poster = targetVideo.poster
    // const sortedVideos = this.videos.filter((video: IVideo) => {
    //   console.log(video, this.targetVideo);
    //   return video.poster !== this.targetVideo.poster
    // })
    // console.log(sortedVideos);

    // this.videos = Object.assign([], sortedVideos, this.targetVideo)
    const response:IVideo[] | [] = this.videos.filter((video: IVideo) => {
      console.log(video.id, targetVideo.id);
      
      return video.id !== targetVideo.id
    })
    console.log(response);
    
    console.log(response, this.targetVideo, Object.assign( response, [this.targetVideo]))

    // this.videos = Object.assign([], response, [this.targetVideo])
    // console.log(this.videos);

    // this.targetVideo = targetVideo;
  }
}

