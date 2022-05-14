import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {
  Idiomas:string[]  = [
    'Annyeonghaseyo',
    'Hello',
    'Ni Hao',
    'Bonjour',
    'Coreano',
    'Chino',
    'Francés',
    'Inglés'
  ];

  drop(event: CdkDragDrop<string[],any,any>) {
    moveItemInArray(this.Idiomas, event.previousIndex, event.currentIndex);
  }

  // Transfer Items Between Lists
  IdiomasList:string[]  = [
    'Chino',
    'Inglés',
    'Coreano',
    'Francés',
    'Annyeonhaseyo',
    'Ni Hao',
    'Hello',
    'Bonjour'    
  ];

  IdiomasPronunciacion:string[]  = [
  ];

  onDrop(event: CdkDragDrop<string[],string[],any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
