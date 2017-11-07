import { Component } from '@angular/core';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
})
export class FamilyTreeComponent {
  public data=[
    {
     "name" : "John Mighty",
     "gender" : "M",
     "marriedTo" : {
       "name" : "Jane Sue",
       "gender" : "F"
     },
     "children" : [
       {
         "name" : "Jake Mighty",
         "gender" : "M",
         "marriedTo" : {
           "name" : "Susan Jackson",
           "gender" : "F"
         },
         "children" : [
           {
             "name" : "Harvey Dent",
             "gender" : "M"
           },
           {
             "name" : "Bruce Wayne",
             "gender" : "M"
           },
           {
             "name" : "Gal Gadot",
             "gender" : "F"
           }
         ]
       },
       {
         "name" : "Anthony Mighty",
         "gender" : "M",
       },
       {
         "name" : "Michel Mighty",
         "gender" : "F",
         "marriedTo" : {
           "name" : "Kevin James",
           "gender" : "M"
         },
       }
     ]
   },{
     "name" : "Sue Mighty",
     "gender" : "F",
     "children" : [
       {
         "name" : "Michel Mighty",
         "gender" : "F",
         "marriedTo" : {
           "name" : "Kevin James",
           "gender" : "M"
         },
       }
     ]
   }
  ];

}
