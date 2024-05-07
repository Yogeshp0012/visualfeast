import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-image-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-image-modal.component.html',
  styleUrl: './new-image-modal.component.scss'
})
export class NewImageModalComponent {

    imageName: string = '';
    imageUrl: string = '';
    fileName: string = '';

    @Input()
    openModal: boolean = false;

    @Output()
    closeModal: EventEmitter<boolean> = new EventEmitter(false);

    modalClose(){
        this.closeModal.emit(true);
    }

}
