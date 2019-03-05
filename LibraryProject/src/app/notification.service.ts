import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snakBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'    
  }

  warn(msg) {
    this.config['panelClass'] = ['notification', 'warn'];
    this.snakBar.open(msg, '', this.config);
  }

}
