import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  teamA = 0;
  teamB = 0;
 // score: number;

  constructor(private router: Router) {}

  //for team A
  button1_A(){
    console.log(this.teamA -=3)
  }
  button2_A(){
    console.log(this.teamA +=3)
  }
  button3_A(){
    console.log(this.teamA -=2)
  }
  button4_A(){
    console.log(this.teamA +=2)
  }
  button5_A(){
    console.log(this.teamA -=1)
  }
  button6_A(){
    console.log(this.teamA +=1)
  }

  //for team B
  button1_B(){
    console.log(this.teamB -=3)
  }
  button2_B(){
    console.log(this.teamB +=3)
  }
  button3_B(){
    console.log(this.teamB -=2)
  }
  button4_B(){
    console.log(this.teamB +=2)
  }
  button5_B(){
    console.log(this.teamB -=1)
  }
  button6_B(){
    console.log(this.teamB +=1)
  }

  reset(){
    console.log(this.teamA = 0)
    console.log(this.teamB = 0)
    //this.router.navigateByUrl('/home')
  }

}
