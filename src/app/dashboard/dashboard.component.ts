import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allData:Array<any>=[];

  constructor() { 
    this.allData=[
{name:'Android',description:"Designed primarily for touchscreen mobile devices, is an mobile operating system based on linux kernel"},
{name:'java',description:"Programming language that produces software for multiple platforms which is concurrent, class-based, object-oriented"},
{name:'Agile scrum',description:"Agile Scrum is a lightweight process framework for agile development, and the most widely-used one"},
{name:'Big Data',description:"It describes any voluminous amount of structured, semistructured and unstructured data that has the potential to be mined for information"},
{name:'Aws',description:"AWS offers a broad set of global compute, storage, database, analytics, application, and deployment services that help organizations grow"},
{name:'Dot net',description:".NET framework is a software development framework from Microsoft aimed at a convergence of personal computing with the Web"},
{name:'angular',description:"It is an open source Model-View-Controller framework which is similar to the JavaScript framework"},
{name:'sql',description:"Data structure that stores organized information in such a way that a program can quickly select pieces of data"},
{name:'php',description:"Agile Scrum is a lightweight process framework for agile development, and the most widely-used one"},

{name:'Verbal',description:"Verbal reasoning is the ability to comprehend and reason using concepts expressed through words"},
{name:'Python',description:"General purpose, dynamic, high level and interpreted programming language that supports Object Oriented programming approach to develop applications"},
{name:'Quantitative',description:"Quantitative Aptitude Tests evaluate numerical ability and problem solving skills of candidates"},
{name:'Software Testing',description:"The process of evaluation of a software item to detect differences between given input and expected output"},
{name:'Networking',description:"Total process of creating and using computer networks, with respect to hardware, protocols and software, including wired and wireless technology"},



    ]
  }

  ngOnInit() {
  }


}
