package com.umg.apiempleados.service;

import com.umg.apiempleados.entity.Empleado;
import com.umg.apiempleados.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoService {
    @Autowired
    private EmpleadoRepository repository;

    public List<Empleado> findAll() {
        return repository.findAll();
    }

    public Empleado findById(String id) {
        return repository.findById(id).orElse(null);
    }

    public Empleado save(Empleado empleado) {
        return repository.save(empleado);
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }
}