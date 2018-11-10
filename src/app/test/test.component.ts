import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  allTest:Array<any>=[];
  current:any;
  index=0;

  constructor() { 
    
    this.allTest=[
      {title: 1,Question:'Android',description:"Agile Scrum is a lightweight process framework for agile development, and the most widely-used one?"},
      {title:2,Question:'java',description:"Which Agile methodology advocates the use of problem domain?"},
      {title:3,Question:'Agile scrum',description:"Which of the following is a characteristic of an Agile leader?"},
      {title:4,Question:'web',description:"In Agile INVEST mnemonic, the I stands for____?"},
      {title:5,Question:'Aws',description:"The leadership style of an Agile Leader is __ "},
  
    
      
      
          ]
  }
  ngOnInit() {
    this.current=this.allTest[this.index];

  }
  showMore(){
    this.index=this.index+1;
    if(this.index>5){
      this.index=5;
    }
    this.current=this.allTest[this.index];
    if(this.index==0){
      $(".progress-bar").css("width","0%");
    }
    else if(this.index==1){
      $(".progress-bar").css("width","20%");

    }    else if(this.index==2){
      $(".progress-bar").css("width","40%");

    }
    else if(this.index==3){
      $(".progress-bar").css("width","60%");

    }
    else if(this.index==4){
      $(".progress-bar").css("width","80%");

    }
    else if(this.index==5){
      $(".progress-bar").css("width","100%");

    }
  }

  showLess(){
    this.index=this.index-1;
    if(this.index<0){
      this.index=0;
    }
    this.current=this.allTest[this.index];
    if(this.index==0){
      $(".progress-bar").css("width","0%");
    }
    else if(this.index==1){
      $(".progress-bar").css("width","20%");

    }    else if(this.index==2){
      $(".progress-bar").css("width","40%");

    }
    else if(this.index==3){
      $(".progress-bar").css("width","60%");

    }
    else if(this.index==4){
      $(".progress-bar").css("width","80%");

    }
    else if(this.index==5){
      $(".progress-bar").css("width","100%");

    }
  
  }

}
