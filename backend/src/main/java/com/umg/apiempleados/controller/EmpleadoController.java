package com.umg.apiempleados.controller;

import com.umg.apiempleados.entity.Empleado;
import com.umg.apiempleados.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empleados")
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleadoController {
    @Autowired
    private EmpleadoService service;

    // Ver todos los empleados
    @GetMapping
    public List<Empleado> getAllEmpleados() {
        return service.findAll();
    }

    // Ver empleado por ID
    @GetMapping("/{id}")
    public Empleado getEmpleadoById(@PathVariable String id) {
        return service.findById(id);
    }

    // Insertar nuevo empleado
    @PostMapping
    public Empleado createEmpleado(@RequestBody Empleado empleado) {
        return service.save(empleado);
    }

    // Modificar un empleado existente
    @PutMapping("/{id}")
    public Empleado updateEmpleado(@PathVariable String id, @RequestBody Empleado empleado) {
        empleado.setIdempleado(id);
        return service.save(empleado);
    }

    // Eliminar un empleado
    @DeleteMapping("/{id}")
    public void deleteEmpleado(@PathVariable String id) {
        service.deleteById(id);
    }
}