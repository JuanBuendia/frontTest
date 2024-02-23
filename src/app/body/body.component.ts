import { TasksService } from './../tasks.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../model/Task';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [TasksService]
})
export class BodyComponent implements OnInit {
  public selectedTask: Task;
  public taskArray: Task[];
  public tmpBase64: any;
  public paramMessage: any;
  public modalRef: BsModalRef;
  public modalTitle: string;
  public modalBody: string;
  public modalContent: string;

  constructor(public myModal: BsModalService, public myMessage: ToastrService) {
    this.selectedTask = new Task(0, '', '', 0, '');
    this.taskArray = new Array();
    this.paramMessage = {
      CloseButton: true,
      enableHtml: true,
      progressBar: true,
      timeOut: 6000,
      possitionClass: 'toast-top-center',
    };
    this.modalRef = this.tmpBase64;
    this.modalTitle = '';
    this.modalBody = '';
    this.modalContent = '';
  }

  ngOnInit(): void {
  }

  public selectTask(myTask: Task): void {
    this.selectedTask = myTask;
  }

  public resetTask(): void {
    this.selectedTask = new Task(0, '', '', 0, '');
  }

  public updateTask(myTask: Task): void{
    this.selectedTask.name = myTask.name;
    this.selectedTask.autor = myTask.autor;
    this.selectedTask.estate = myTask.estate;
    this.selectedTask.description = myTask.description;
  }

  public deleteTask(myTask: Task){
    this.taskArray = this.taskArray.filter((objPro) => objPro !== myTask);
  }

  public verifyData(): boolean {
    if (
      this.selectedTask.name === '' ||
      this.selectedTask.autor === ''
    ) {
      this.myMessage.error(
        'No se permiten registros vacíos.',
        'Advertencia',
        this.paramMessage
      );
      return false;
    }
    return true;
  }

  public addTask(): void {
    if (this.verifyData()) {
      this.selectedTask.id = this.taskArray.length + 1;
      this.taskArray.push(this.selectedTask);
    }
  }

  public btnCancel(): void {
    this.modalRef.hide();
  }

  public btnDeleteTask(): void {
    this.deleteTask(this.selectedTask);
    this.btnCancel();
  }

  public btnOpenModal(plantilla: TemplateRef<any>, myTask: Task): void {
    this.selectedTask = myTask;
    this.modalRef = this.myModal.show(plantilla, {
      class: 'modal-md',
    });
    this.modalTitle = 'Advertencia';
    this.modalBody = '¿Desea eliminar la tarea?';
    this.modalContent = myTask.name + ': ' + myTask.autor;
  }
}
