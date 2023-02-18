import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { EditorComponent } from '../Editor/editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(EditorComponent) child: EditorComponent;

  ngAfterViewInit() {
    const savedMessage = localStorage.getItem('text');
    if (savedMessage && savedMessage.trim()) {
      this.child.textValue = new FormControl(savedMessage);
    }
  }

  handleClear() {
    this.child.textValue = new FormControl('');
  }

  handleSave() {
    if (this.child.textValue.value == null) return;
    localStorage.setItem('text', this.child.textValue.value);
  }
}
