import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tasksService: TasksService,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    let load = this.loadCtrl.create();
    load.present();
    this.tasksService.getAll()
    .then(data =>{
      this.tasks = data;
      load.dismiss();
    })
    .catch( error =>{
      load.dismiss();
      console.error( error );
    });
  }

  createTask(){
    let prompt = this.alertCtrl.create({
      title: 'Nueva tarea',
      message: "Digite la nueva tarea",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let newTask = {
              title: data.title,
              completed: false
            };
            this.tasksService.create(newTask)
            .then(data =>{
              this.tasks.unshift( data );
            })
            .catch(error =>{
              console.error( error );
            })
          }
        }
      ]
    });
    prompt.present();
  }

  updateTask( task ){
    let prompt = this.alertCtrl.create({
      title: 'Editar tarea',
      message: "Digite el titulo de la tarea",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: task.title
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            task.title = data.title;
            this.tasksService.update( task )
            .then(data =>{
              console.log( data );
            })
            .catch(error =>{
              console.error( error );
            })
          }
        }
      ]
    });
    prompt.present();
  }
  
    deleteTask( task, index ){
      this.tasksService.delete( task.id )
      .then(data =>{
        this.tasks.splice(index, 1);
        let toast = this.toastCtrl.create({
          message: 'La tarea fue borrada',
          duration: 5000,
          showCloseButton: true,
          closeButtonText: 'Cerrar',
          position: 'top'
        });
        toast.present();
      })
      .catch(error =>{
        console.error( error );
      })
    }

}
