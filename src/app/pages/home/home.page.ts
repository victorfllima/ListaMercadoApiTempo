import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
tasks: any [] = [];
  // eslint-disable-next-line max-len
  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private actionSheetCtrl: ActionSheetController, private router: Router) {
    // eslint-disable-next-line prefer-const
    let taskJson = localStorage.getItem('taskDb');

    if (taskJson!=null){
      this.tasks = JSON.parse(taskJson);
    }

  }

  ngOnInit() {
  }
 // eslint-disable-next-line @typescript-eslint/naming-convention
    async ShowAdd(){
      const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Digite o nome do produto',
      inputs: [
        {
          name: 'newTask',
          type: 'text',
          placeholder: ''
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Clicked Cancel');
          }
        }, {
          text: 'Adicionar',
          cssClass: 'secondary',
          handler: (form) => {
            console.log(form.newTask);


            this.add(form.newTask);
          }
        }
      ]
    });

    await alert.present();
  }
  async add(newTask: string){
    if (newTask.trim().length < 1){
      const toast = await this.toastCtrl.create({
        message: 'Informe o produto!',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return;
    }

    const task = {name: newTask, done: false};

    this.tasks.push(task);
    this.updateLocalStorage();
  }
  updateLocalStorage(){
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }
  async openActions(task: any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O que deseja fazer?',
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar',
        icon: task.done ? 'radio-botton-off' : 'checkmark-circle',
        handler: () => {
          task.done = !task.done;

          this.updateLocalStorage();
        }
      }
        , {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  delete(task: any){
    // eslint-disable-next-line eqeqeq
    this.tasks = this.tasks.filter(taskArray=> task != taskArray);

    this.updateLocalStorage();
  }
  clima(){
    this.router.navigate(['clima']);

  }
}
