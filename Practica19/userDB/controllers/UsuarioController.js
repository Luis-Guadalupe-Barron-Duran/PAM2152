import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    // Inicializar el controlador con el Service
    async initialize() {
        await DatabaseService.initialize();
    }

    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();

            return data.map(u =>
                new Usuario(u.id, u.nombre, u.fecha_creacion)
            );
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

    async crearUsuario(nombre) {
        try {
            // 1. Validar datos

            Usuario.validar(nombre);

            // 2. Insertar en BD
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            // 3. Notificar a los observadores
            this.notifyListeners();

            // 4. Retornar usuario creado
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }/* */

    async editarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);
            const updated = await DatabaseService.update(id, nombre.trim());
            this.notifyListeners();
            return new Usuario(updated.id || id, updated.nombre || nombre.trim(), updated.fecha_creacion || new Date().toISOString());
        } catch (error) {
            console.error('Error al editar usuario:', error);
            throw error;
        }
    }

    async eliminarUsuario(id) {
        try {
            const res = await DatabaseService.remove(id);
            this.notifyListeners();
            return res;
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            throw error;
        }
    }

    // Sistema de observadores para actualizar la vista automáticamente
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}