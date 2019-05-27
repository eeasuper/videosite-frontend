import { Injectable } from '@angular/core';
import {Playlist} from '../Playlist';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY,BehaviorSubject }  from 'rxjs';
import { mergeMap, take,map}         from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {ApiCallsService} from '../../services/api-calls.service';
//try importing resolver in edit-playlist.module instead of the parent to make things organized.
@Injectable({
  providedIn: 'root'
})
export class EditPlaylistResolverService implements Resolve<Playlist> {

  constructor(private router: Router, private store:Store<any>, private service:ApiCallsService) {
  }
  getEditAuthorization(playlistUploaderId:number, loggedInId:number){
    if(playlistUploaderId === loggedInId){
      return true;
    }else{
      false;
    }
  }
  private authenticated:boolean;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Playlist> | Observable<never> {
    let userId = route.paramMap.get('userId');
    let playlistId = route.paramMap.get('playlistId');
    this.store.select('user').subscribe(user=>{
      let loggedInId = user.user.id;   
      if(!user.isAuthenticated){
        this.authenticated = false;
      }else if(user.isAuthenticated && this.getEditAuthorization(parseInt(userId),loggedInId)){
        this.authenticated = true;
      }else{
        this.authenticated = false
      }
    })
    if(!this.authenticated){
      this.router.navigate(['/']);
      return;
    }
    return this.service.getPlaylist(playlistId).pipe(
      map(result=>{
        result.playlist = Object.values(result.playlist);
        result.playlist.forEach((val:any,ind)=>{
          val.ordered = ind + 1;
          val.thumbnail = this.service.getVideoThumbnail(val.id);
          val.url = "/view/"+val.id;
        })
        result.date = this.service.setDate(result.date);
        return result;
      })
    )
  }
  
}
