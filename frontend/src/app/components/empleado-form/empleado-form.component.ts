import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class EmpleadoFormComponent implements OnInit {
  @Input() empleado: Empleado | null = null;
  empleadoForm: FormGroup;
  isEdit = false;
  loading = false;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private empleadoService: EmpleadoService
  ) {
    this.empleadoForm = this.fb.group({
      idempleado: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: [''],
      telefono: [''],
      nit: [''],
      correo: ['', [Validators.email]],
      dpi: [''],
      finicio: [''],
      ffin: [''],
      observaciones: [''],
      estatus: ['Activo'],
      rol_id: [null],
      adiciono: [''],
      fecha_adiciono: [null],
      modifico: [''],
      fecha_modificacion: [null]
    });
  }

  ngOnInit(): void {
    if (this.empleado) {
      this.isEdit = true;
      this.empleadoForm.patchValue({
        ...this.empleado,
        finicio: this.empleado.finicio ? this.empleado.finicio.substring(0, 10) : '',
        ffin: this.empleado.ffin ? this.empleado.ffin.substring(0, 10) : '',
        fecha_adiciono: this.empleado.fecha_adiciono ? this.empleado.fecha_adiciono.substring(0, 10) : '',
        fecha_modificacion: this.empleado.fecha_modificacion ? this.empleado.fecha_modificacion.substring(0, 10) : ''
      });
    }
  }

  onSubmit(): void {
    if (this.empleadoForm.invalid) {
      return;
    }

    this.loading = true;
    const empleadoData = this.empleadoForm.value;

    const request = this.isEdit
      ? this.empleadoService.updateEmpleado(empleadoData.idempleado, empleadoData)
      : this.empleadoService.createEmpleado(empleadoData);

    request.subscribe({
      next: () => {
        this.activeModal.close('saved');
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al guardar empleado', err);
        this.loading = false;
      }
    });
  }
}