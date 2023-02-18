import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  textValue = new FormControl('');
  onChange() {
    console.log('DDDDDDDDs');
  }
}
