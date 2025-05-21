import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) { }

  // Manejo centralizado de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  createEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado).pipe(
      catchError(this.handleError)
    );
  }

  updateEmpleado(id: string, empleado: Empleado): Observable<Empleado> {
    if (!id) throw new Error('ID de empleado no proporcionado');
    return this.http.put<Empleado>(`${this.apiUrl}/${id}`, empleado).pipe(
      catchError(this.handleError)
    );
  }

  deleteEmpleado(id: string): Observable<void> {
    if (!id) throw new Error('ID de empleado no proporcionado');
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
}