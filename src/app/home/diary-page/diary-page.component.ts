import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { DiaryService } from './diary.service';


@Component({
  selector: 'app-diary-page',
  templateUrl: './diary-page.component.html',
  styleUrls: ['./diary-page.component.css']
})
export class DiaryPageComponent implements OnInit {
  post_id:any;
  post:any;
  img_arr: any = [];
  post_img: any;
  selectedImg: number = 0;

  constructor(
    private router: ActivatedRoute,
    public gloablService: GlobalService,
    public diaryService: DiaryService,
  ) {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.post_id = params.get('post_id');

      if(this.diaryService.selectedPost.media_type == "CAROUSEL_ALBUM") {
        for(let i = 0; i < this.diaryService.selectedPost.children.data.length; i++){
          this.img_arr[i] = this.diaryService.selectedPost.children.data[i];
        }
      }
    })
  }

  ngOnInit(): void {
  }

  changeImg(event: any) : void{
    this.post_img = document.getElementById('post-image');
    this.post_img.src = this.img_arr[event.target.dataset.index]['media_url'];
    this.selectedImg = event.target.dataset.index;
  }

}
