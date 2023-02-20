import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveSession(objName: any, obj: any): void {
    sessionStorage.setItem(objName, JSON.stringify(obj))
  }

  getSessionDetail(objName: any){
    return sessionStorage.getItem(objName)
  }
}
