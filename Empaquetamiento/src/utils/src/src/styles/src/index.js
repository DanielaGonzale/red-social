import './styles/calculadora.css';
import { Calculadora } from './calculadora.js';

class CalculadoraUI {
  constructor() {
    this.calculadora = new Calculadora();
    this.display = document.getElementById('display');
    this.inicializarEventos();
    this.actualizarDisplay();
  }

  inicializarEventos() {
    // Botones numéricos
    document.querySelectorAll('.btn-numero').forEach(boton => {
      boton.addEventListener('click', (e) => {
        this.calculadora.agregarDigito(e.target.textContent);
        this.actualizarDisplay();
      });
    });

    // Botón punto decimal
    document.getElementById('punto').addEventListener('click', () => {
      this.calculadora.agregarPunto();
      this.actualizarDisplay();
    });

    // Botones de operación
    document.querySelectorAll('.btn-operador').forEach(boton => {
      if (boton.id !== 'igual') {
        boton.addEventListener('click', (e) => {
          this.calculadora.manejarOperacion(e.target.textContent);
          this.actualizarDisplay();
        });
      }
    });

    // Botón igual
    document.getElementById('igual').addEventListener('click', () => {
      this.calculadora.calcular();
      this.actualizarDisplay();
    });

    // Botón limpiar
    document.getElementById('limpiar').addEventListener('click', () => {
      this.calculadora.limpiar();
      this.actualizarDisplay();
    });

    // Botón borrar
    document.getElementById('borrar').addEventListener('click', () => {
      this.calculadora.borrarUltimo();
      this.actualizarDisplay();
    });

    // Eventos de teclado
    document.addEventListener('keydown', (e) => {
      this.manejarTeclado(e);
    });
  }

  manejarTeclado(e) {
    if (/[0-9]/.test(e.key)) {
      this.calculadora.agregarDigito(e.key);
    } else if (e.key === '.') {
      this.calculadora.agregarPunto();
    } else if (['+', '-', '*', '/'].includes(e.key)) {
      this.calculadora.manejarOperacion(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
      this.calculadora.calcular();
    } else if (e.key === 'Escape' || e.key === 'Delete') {
      this.calculadora.limpiar();
    } else if (e.key === 'Backspace') {
      this.calculadora.borrarUltimo();
    }
    this.actualizarDisplay();
  }

  actualizarDisplay() {
    this.display.textContent = this.calculadora.obtenerDisplay();
  }
}

// Inicializar la calculadora cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new CalculadoraUI();
  console.log('Calculadora inicializada - Proyecto empaquetado con Node.js');
});