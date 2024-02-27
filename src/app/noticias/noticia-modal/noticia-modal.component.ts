import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfazNoticia } from 'src/app/models/NoticiaInterface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-noticia-modal',
  templateUrl: './noticia-modal.component.html',
  styleUrls: [
    './noticia-modal.component.scss',
    './queries/noticia-modal.component-mobile.scss',
  ],
})
export class NoticiaModalComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private dialogRef: MatDialogRef<NoticiaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InterfazNoticia,) { }

  ngOnInit(): void {
  }

  openOptions() { }


  closeModal() {
    this.dialogRef.close();
  }
}
