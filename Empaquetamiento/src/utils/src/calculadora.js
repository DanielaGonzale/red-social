import { MathUtils } from './utils/math.js';

export class Calculadora {
  constructor() {
    this.display = '0';
    this.operandoAnterior = '';
    this.operacionPendiente = null;
    this.esperandoNuevoOperando = false;
  }

  agregarDigito(digito) {
    if (this.esperandoNuevoOperando) {
      this.display = digito;
      this.esperandoNuevoOperando = false;
    } else {
      this.display = this.display === '0' ? digito : this.display + digito;
    }
  }

  agregarPunto() {
    if (this.esperandoNuevoOperando) {
      this.display = '0.';
      this.esperandoNuevoOperando = false;
    } else if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  manejarOperacion(siguienteOperacion) {
    const valorIngresado = parseFloat(this.display);

    if (this.operacionPendiente && !this.esperandoNuevoOperando) {
      this.calcular();
    }

    this.operacionPendiente = siguienteOperacion;
    this.operandoAnterior = this.display;
    this.esperandoNuevoOperando = true;
  }

  calcular() {
    if (this.operacionPendiente === null || this.esperandoNuevoOperando) {
      return;
    }

    const operandoAnterior = parseFloat(this.operandoAnterior);
    const operandoActual = parseFloat(this.display);
    let resultado;

    try {
      switch (this.operacionPendiente) {
        case '+':
          resultado = MathUtils.sumar(operandoAnterior, operandoActual);
          break;
        case '-':
          resultado = MathUtils.restar(operandoAnterior, operandoActual);
          break;
        case '*':
          resultado = MathUtils.multiplicar(operandoAnterior, operandoActual);
          break;
        case '/':
          resultado = MathUtils.dividir(operandoAnterior, operandoActual);
          break;
        case '%':
          resultado = MathUtils.porcentaje(operandoAnterior, operandoActual);
          break;
        case '√':
          resultado = MathUtils.raizCuadrada(operandoActual);
          break;
        case '^':
          resultado = MathUtils.potencia(operandoAnterior, operandoActual);
          break;
        default:
          return;
      }

      this.display = resultado.toString();
      this.operacionPendiente = null;
      this.operandoAnterior = '';
      this.esperandoNuevoOperando = true;
    } catch (error) {
      this.display = 'Error';
      this.limpiar();
    }
  }

  limpiar() {
    this.display = '0';
    this.operandoAnterior = '';
    this.operacionPendiente = null;
    this.esperandoNuevoOperando = false;
  }

  borrarUltimo() {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
  }

  obtenerDisplay() {
    return this.display;
  }
}