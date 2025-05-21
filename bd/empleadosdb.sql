-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2025 a las 03:06:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleadosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `u_empleados`
--

CREATE TABLE `u_empleados` (
  `idempleado` varchar(255) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `nit` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `dpi` varchar(255) DEFAULT NULL,
  `finicio` datetime(6) DEFAULT NULL,
  `ffin` datetime(6) DEFAULT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `estatus` varchar(255) DEFAULT NULL,
  `adiciono` varchar(255) DEFAULT NULL,
  `fecha_adiciono` datetime(6) DEFAULT NULL,
  `modifico` varchar(255) DEFAULT NULL,
  `fecha_modificacion` datetime(6) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL COMMENT 'Rol que tiene el empleado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `u_empleados`
--

INSERT INTO `u_empleados` (`idempleado`, `nombre`, `direccion`, `telefono`, `nit`, `correo`, `dpi`, `finicio`, `ffin`, `observaciones`, `estatus`, `adiciono`, `fecha_adiciono`, `modifico`, `fecha_modificacion`, `rol_id`) VALUES
('01', 'Edvin Say', '11-12, zona 3, totonicapan', '99182911', '992830-3', 'deleonedvin94@gmail.com', '3212371120801', '2025-05-19 18:00:00.000000', '2025-06-04 18:00:00.000000', 'Ninguna', 'Activo', 'no', NULL, 'no', NULL, 8),
('02', 'Walter Obil Bautista Fuentes', '23-1, Antigua Guatemala', '88271122', '82937290-2', 'bautfu88@gmail.com', '7829129929101', '2025-05-19 18:00:00.000000', '2025-05-23 18:00:00.000000', 'Nada', 'Inactivo', 'si', '2025-05-19 18:00:00.000000', 'si', '2025-05-20 18:00:00.000000', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `u_empleados`
--
ALTER TABLE `u_empleados`
  ADD PRIMARY KEY (`idempleado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
