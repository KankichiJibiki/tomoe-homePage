import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { LoadingService } from '../service/component/loading.service';
import { GlobalService } from '../service/global.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrls } from '../constants/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // insta
  rawPostsRes: any;
  postsRes: any;
  postsResError: string = '';
  insta_follower: number = 0;
  post_title: string = '';

  isLoading: boolean;

  // Pagination
  page: number = 1;
  count: number = 0;
  displaySize: number = 5;
  displaySizes: number[] = [5, 10, 15, 20];

  constructor(
    public globalService: GlobalService,
    public loadingService: LoadingService,
    private http: HttpClient,
  ) {
    this.isLoading = this.loadingService.isLoading; 
  }

  
  getInstaInfo(){
    if(this.globalService.posts != null){
      this.insta_follower = this.rawPostsRes['business_discovery']["followers_count"];
      this.postsRes = this.globalService.posts;
      this.count = this.postsRes.length;
      return;
    }
    
    this.isLoading = true;
    console.log("Connect to Insta api");

    this.getInstaPosts().subscribe({
      next: (res:any) => {
        this.rawPostsRes = res;

        this.insta_follower = res['business_discovery']["followers_count"];
        this.postsRes = res['business_discovery']['media']['data'];
        this.count = this.postsRes.length;

        this.globalService.rawPosts = this.rawPostsRes;
        this.globalService.posts = this.postsRes;
        console.log("Insta api is successfully done");
      },
      error: (error: any) => {
        this.postsResError = error.message;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  getInstaPosts(): Observable<any>{
    return this.http.get<any>(environment.apiUrl+ApiUrls.INSTAGRAM_URL+ApiUrls.INSTAGRAM_ACTION_GETPOST);
  }

  getPostTitle(caption:string){
    if(caption.length < 20) return caption;

    this.post_title = caption.substring(0, 20);
    return this.post_title;
  }
  
  onDisplayDataChange(event: any){
    this.page = event;
    this.getInstaPosts();
  }

  onDisplaySizeChange(event: any): void{
    this.displaySize = event.target.value;
    this.page = 1;
    this.getInstaPosts();
  }
}
