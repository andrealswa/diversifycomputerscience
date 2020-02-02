import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { SnackService } from "./snack.service";

interface Entry {
  id: string;
  firstName: string;
  lastName: string;
  affiliatedInstitution: string;
  email: string;
  country: string;
  socialMedia: string;
  selfID: string;
  gender: string;
  currentCareerStage: string;
  branch: string;
  subfieldKeywords: string;
  approved: string;
  isAdmin: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthAdminGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private snack: SnackService,
    public firestore: AngularFirestore
  ) {}
  entryDoc: AngularFirestoreDocument<Entry>;
  entry: Observable<Entry>;
  isAdmin: string = "false"; //"true" or "false"

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const user = await this.afAuth.auth.currentUser;
    const isLoggedIn = !!user;

    if (!isLoggedIn) {
      this.snack.authError();
    }

    // let user2: firebase.User = this.afAuth.auth.currentUser;
    let uid: any = user.uid;

    if (this.firestore.doc("entries/" + uid) != null) {
      this.entryDoc = this.firestore.doc("entries/" + uid);
      this.entry = this.entryDoc.valueChanges();
      //behaves asynchronously
      this.entry.subscribe(myEntry => {
        this.isAdmin = myEntry.isAdmin;
        if (this.isAdmin === "true") {
          return true;
        } else {
          return false;
        }
      });
    }

    return false;
  }
}

/*core.js:4002 ERROR TypeError: Cannot read property 'isAdmin' of undefined
    at SafeSubscriber._next (authAdmin.guard.ts:65)
    at SafeSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.SafeSubscriber.__tryOrUnsub (Subscriber.js:194)
    at SafeSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.SafeSubscriber.next (Subscriber.js:132)
    at Subscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._next (Subscriber.js:76)
    at Subscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next (Subscriber.js:53)
    at MapSubscriber.push../node_modules/rxjs/_esm5/internal/operators/map.js.MapSubscriber._next (map.js:41)
    at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next (Subscriber.js:53)
    at angularfire2.js:50
    at ZoneDelegate.push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (zone.js:391)
    at Object.onInvoke (core.js:26256)
defaultErrorLogger @ core.js:4002
push../node_modules/@angular/core/fesm5/core.js.ErrorHandler.handleError @ core.js:4050
next @ core.js:26759
schedulerFn @ core.js:23735
push../node_modules/rxjs/_esm5/internal/Subscriber.js.SafeSubscriber.__tryOrUnsub @ Subscriber.js:194
push../node_modules/rxjs/_esm5/internal/Subscriber.js.SafeSubscriber.next @ Subscriber.js:132
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._next @ Subscriber.js:76
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next @ Subscriber.js:53
push../node_modules/rxjs/_esm5/internal/Subject.js.Subject.next @ Subject.js:47
push../node_modules/@angular/core/fesm5/core.js.EventEmitter.emit @ core.js:23719
(anonymous) @ core.js:26278
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
push../node_modules/@angular/core/fesm5/core.js.NgZone.runOutsideAngular @ core.js:26215
onHandleError @ core.js:26278
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.handleError @ zone.js:395
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:198
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:498
ZoneTask.invoke @ zone.js:487
timer @ zone.js:3070
setTimeout (async)
scheduleTask @ zone.js:3091
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:410
onScheduleTask @ zone.js:301
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:404
push../node_modules/zone.js/dist/zone.js.Zone.scheduleTask @ zone.js:238
push../node_modules/zone.js/dist/zone.js.Zone.scheduleMacroTask @ zone.js:261
scheduleMacroTaskWithCurrentZone @ zone.js:1194
(anonymous) @ zone.js:3106
proto.<computed> @ zone.js:1518
hostReportError @ hostReportError.js:3
push../node_modules/rxjs/_esm5/internal/Subscriber.js.SafeSubscriber.__tryOrUnsub @ Subscriber.js:202
push../node_modules/rxjs/_esm5/internal/Subscriber.js.SafeSubscriber.next @ Subscriber.js:132
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._next @ Subscriber.js:76
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next @ Subscriber.js:53
push../node_modules/rxjs/_esm5/internal/operators/map.js.MapSubscriber._next @ map.js:41
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next @ Subscriber.js:53
(anonymous) @ angularfire2.js:50
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
push../node_modules/@angular/core/fesm5/core.js.NgZone.run @ core.js:26170
(anonymous) @ angularfire2.js:50
push../node_modules/rxjs/_esm5/internal/Subscriber.js.SafeSubscriber.__tryOrUnsub @ Subscriber.js:194
push../node_modules/rxjs/_esm5/internal/Subscriber.js.SafeSubscriber.next @ Subscriber.js:132
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._next @ Subscriber.js:76
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next @ Subscriber.js:53
push../node_modules/rxjs/_esm5/internal/operators/map.js.MapSubscriber._next @ map.js:41
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next @ Subscriber.js:53
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._next @ Subscriber.js:76
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next @ Subscriber.js:53
push../node_modules/rxjs/_esm5/internal/Subject.js.Subject.next @ Subject.js:47
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._next @ Subscriber.js:76
push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.next @ Subscriber.js:53
next @ index.cjs.js:21840
(anonymous) @ index.cjs.js:20081
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:498
ZoneTask.invoke @ zone.js:487
timer @ zone.js:3070
setTimeout (async)
scheduleTask @ zone.js:3091
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:410
onScheduleTask @ zone.js:301
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:404
push../node_modules/zone.js/dist/zone.js.Zone.scheduleTask @ zone.js:238
push../node_modules/zone.js/dist/zone.js.Zone.scheduleMacroTask @ zone.js:261
scheduleMacroTaskWithCurrentZone @ zone.js:1194
(anonymous) @ zone.js:3106
proto.<computed> @ zone.js:1518
push../node_modules/@firebase/firestore/dist/index.cjs.js.AsyncObserver.scheduleEvent @ index.cjs.js:20079
push../node_modules/@firebase/firestore/dist/index.cjs.js.AsyncObserver.next @ index.cjs.js:20068
push../node_modules/@firebase/firestore/dist/index.cjs.js.QueryListener.raiseInitialEvent @ index.cjs.js:17024
push../node_modules/@firebase/firestore/dist/index.cjs.js.QueryListener.onViewSnapshot @ index.cjs.js:16959
push../node_modules/@firebase/firestore/dist/index.cjs.js.EventManager.onWatchChange @ index.cjs.js:16861
(anonymous) @ index.cjs.js:18334
step @ tslib.es6.js:99
(anonymous) @ tslib.es6.js:80
fulfilled @ tslib.es6.js:70
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
invokeTask @ zone.js:1693
globalZoneAwareCallback @ zone.js:1719
XMLHttpRequest.send (async)
scheduleTask @ zone.js:3372
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:410
onScheduleTask @ zone.js:301
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:404
push../node_modules/zone.js/dist/zone.js.Zone.scheduleTask @ zone.js:238
push../node_modules/zone.js/dist/zone.js.Zone.scheduleMacroTask @ zone.js:261
scheduleMacroTaskWithCurrentZone @ zone.js:1194
(anonymous) @ zone.js:3405
proto.<computed> @ zone.js:1518
push../node_modules/@firebase/webchannel-wrapper/dist/index.esm.js.g.ca @ index.esm.js:45
cc @ index.esm.js:23
dc @ index.esm.js:22
push../node_modules/@firebase/webchannel-wrapper/dist/index.esm.js.g.Ga @ index.esm.js:59
Ab @ index.esm.js:21
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
invokeTask @ zone.js:1693
globalZoneAwareCallback @ zone.js:1719
XMLHttpRequest.send (async)
scheduleTask @ zone.js:3372
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:410
onScheduleTask @ zone.js:301
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:404
push../node_modules/zone.js/dist/zone.js.Zone.scheduleTask @ zone.js:238
push../node_modules/zone.js/dist/zone.js.Zone.scheduleMacroTask @ zone.js:261
scheduleMacroTaskWithCurrentZone @ zone.js:1194
(anonymous) @ zone.js:3405
proto.<computed> @ zone.js:1518
push../node_modules/@firebase/webchannel-wrapper/dist/index.esm.js.g.ca @ index.esm.js:45
cc @ index.esm.js:23
ac @ index.esm.js:22
push../node_modules/@firebase/webchannel-wrapper/dist/index.esm.js.g.Ha @ index.esm.js:56
Ab @ index.esm.js:21
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
ZoneTask.invoke @ zone.js:487
timer @ zone.js:3070
setTimeout (async)
scheduleTask @ zone.js:3091
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:410
onScheduleTask @ zone.js:301
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:404
push../node_modules/zone.js/dist/zone.js.Zone.scheduleTask @ zone.js:238
push../node_modules/zone.js/dist/zone.js.Zone.scheduleMacroTask @ zone.js:261
scheduleMacroTaskWithCurrentZone @ zone.js:1194
(anonymous) @ zone.js:3106
proto.<computed> @ zone.js:1518
push../node_modules/@firebase/firestore/dist/index.cjs.js.WebChannelConnection.openStream @ index.cjs.js:23337
push../node_modules/@firebase/firestore/dist/index.cjs.js.PersistentListenStream.startRpc @ index.cjs.js:12799
push../node_modules/@firebase/firestore/dist/index.cjs.js.PersistentStream.startStream @ index.cjs.js:12718
(anonymous) @ index.cjs.js:12705
e.g @ auth.esm.js:26
kc @ auth.esm.js:29
gc @ auth.esm.js:29
push../node_modules/@firebase/auth/dist/auth.esm.js.k.Zb @ auth.esm.js:28
Qb @ auth.esm.js:22
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
invokeTask @ zone.js:1693
globalZoneAwareCallback @ zone.js:1719
IndexedDB (async)
(anonymous) @ auth.esm.js:245
e.g @ auth.esm.js:26
kc @ auth.esm.js:29
gc @ auth.esm.js:29
push../node_modules/@firebase/auth/dist/auth.esm.js.k.Zb @ auth.esm.js:28
Qb @ auth.esm.js:22
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
invokeTask @ zone.js:1693
globalZoneAwareCallback @ zone.js:1719
IndexedDB (async)
(anonymous) @ auth.esm.js:244
e.g @ auth.esm.js:26
kc @ auth.esm.js:29
gc @ auth.esm.js:29
push../node_modules/@firebase/auth/dist/auth.esm.js.k.Zb @ auth.esm.js:28
Qb @ auth.esm.js:22
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
invokeTask @ zone.js:1693
globalZoneAwareCallback @ zone.js:1719
IndexedDB (async)
(anonymous) @ auth.esm.js:244
e.g @ auth.esm.js:26
kc @ auth.esm.js:29
gc @ auth.esm.js:29
push../node_modules/@firebase/auth/dist/auth.esm.js.k.Zb @ auth.esm.js:28
Qb @ auth.esm.js:22
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
invokeTask @ zone.js:1693
globalZoneAwareCallback @ zone.js:1719
XMLHttpRequest.send (async)
scheduleTask @ zone.js:3372
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:410
onScheduleTask @ zone.js:301
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:404
push../node_modules/zone.js/dist/zone.js.Zone.scheduleTask @ zone.js:238
push../node_modules/zone.js/dist/zone.js.Zone.scheduleMacroTask @ zone.js:261
scheduleMacroTaskWithCurrentZone @ zone.js:1194
(anonymous) @ zone.js:3405
proto.<computed> @ zone.js:1518
Kh @ auth.esm.js:177
push../node_modules/@firebase/auth/dist/auth.esm.js.ni.o @ auth.esm.js:198
vi @ auth.esm.js:196
(anonymous) @ auth.esm.js:202
B @ auth.esm.js:22
Bi @ auth.esm.js:202
(anonymous) @ auth.esm.js:215
e.g @ auth.esm.js:26
kc @ auth.esm.js:29
gc @ auth.esm.js:29
push../node_modules/@firebase/auth/dist/auth.esm.js.k.Zb @ auth.esm.js:28
Qb @ auth.esm.js:22
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
invokeTask @ zone.js:1693
globalZoneAwareCallback @ zone.js:1719
XMLHttpRequest.send (async)
scheduleTask @ zone.js:3372
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:410
onScheduleTask @ zone.js:301
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.scheduleTask @ zone.js:404
push../node_modules/zone.js/dist/zone.js.Zone.scheduleTask @ zone.js:238
push../node_modules/zone.js/dist/zone.js.Zone.scheduleMacroTask @ zone.js:261
scheduleMacroTaskWithCurrentZone @ zone.js:1194
(anonymous) @ zone.js:3405
proto.<computed> @ zone.js:1518
Kh @ auth.esm.js:177
push../node_modules/@firebase/auth/dist/auth.esm.js.ni.o @ auth.esm.js:198
vi @ auth.esm.js:196
(anonymous) @ auth.esm.js:202
B @ auth.esm.js:22
Bi @ auth.esm.js:202
(anonymous) @ auth.esm.js:215
e.g @ auth.esm.js:26
kc @ auth.esm.js:29
gc @ auth.esm.js:29
push../node_modules/@firebase/auth/dist/auth.esm.js.k.Zb @ auth.esm.js:28
Qb @ auth.esm.js:22
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:391
onInvoke @ core.js:26256
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke @ zone.js:390
push../node_modules/zone.js/dist/zone.js.Zone.run @ zone.js:150
(anonymous) @ zone.js:910
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:423
onInvokeTask @ core.js:26247
push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask @ zone.js:422
push../node_modules/zone.js/dist/zone.js.Zone.runTask @ zone.js:195
drainMicroTaskQueue @ zone.js:601
push../node_modules/zone.js/dist/zone.js.ZoneTask.invokeTask @ zone.js:502
invokeTask @ zone.js:1693
globalZoneAwareCallback @ zone.js:1719
Show 101 more frames */
