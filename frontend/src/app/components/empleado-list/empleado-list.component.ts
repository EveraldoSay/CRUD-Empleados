import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadoFormComponent } from '../empleado-form/empleado-form.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss'],
  standalone: true,
  imports: [CommonModule, EmpleadoFormComponent, ConfirmModalComponent]
})
export class EmpleadoListComponent implements OnInit {
  empleados: Empleado[] = [];
  loading = true;

  constructor(
    private empleadoService: EmpleadoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados(): void {
    this.loading = true;
    this.empleadoService.getEmpleados().subscribe({
      next: (data) => {
        this.empleados = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar empleados', err);
        this.loading = false;
      }
    });
  }

  openForm(empleado?: Empleado): void {
    const modalRef = this.modalService.open(EmpleadoFormComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'modal-custom'
    });
    modalRef.componentInstance.empleado = empleado ? {...empleado} : null;
    
    modalRef.result.then((result) => {
      if (result === 'saved') {
        this.loadEmpleados();
      }
    }, () => {});
  }

  openDeleteModal(id: string): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true,
      windowClass: 'modal-custom'
    });
    modalRef.componentInstance.message = '¿Está seguro que desea eliminar este empleado?';
    
    modalRef.result.then((result) => {
      if (result === 'confirm') {
        this.deleteEmpleado(id);
      }
    }, () => {});
  }

  deleteEmpleado(id: string): void {
    this.empleadoService.deleteEmpleado(id).subscribe({
      next: () => {
        this.loadEmpleados();
      },
      error: (err) => console.error('Error al eliminar empleado', err)
    });
  }
}