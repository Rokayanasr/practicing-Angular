import { Component, Input, OnChanges,OnDestroy,OnInit, SimpleChanges } from '@angular/core';
//import onchange method for the onchange interface

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges,OnInit,OnDestroy{
//@input i say that i'm gonna get value from parent
  @Input() nameFromPrent:string = ''
  @Input() friends:string[] = []
constructor(){
  console.log('call constructor');
}
  //@output when i wanna to get data from child to parent
//component lifecycle
//first thing called when we start a component life cycle
// ngonchange this called when we open the componrnt or when we change any thing in any input property

//call on change method
//changes return current value and previous value

ngOnChanges(changes: SimpleChanges): void {
console.log(changes);
}
//oninit calls when i open the component only and it works after the constructor not before
/**if i have any method that i want to apply when i open the component 
 * i put it in oninit ex: to receive the api
 */
x:any
ngOnInit(): void {
  console.log('onInit call');
 this.x = setInterval(()=>{
    console.log('hello...');
  },500)
}
//ondestroy its called when i leave the component
/** i use on destroy for cleaning up if the component is using from rams
 * ex: set interval , unsubscribtion when i subscrie on an api that is no
 * longer helpful to be subscribed
 */
ngOnDestroy(): void {
  console.log('onDestroy call');
  clearInterval(this.x)
}
//all of this called component lifecycle , so when i open the component
/**
 * 1-constructor 
 * 2- onchange
 * 3-oninit
 * 4-on destroy
 */


}
