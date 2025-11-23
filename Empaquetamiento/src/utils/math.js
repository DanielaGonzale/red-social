// Utilidades matemáticas
export class MathUtils {
  static sumar(a, b) {
    return a + b;
  }

  static restar(a, b) {
    return a - b;
  }

  static multiplicar(a, b) {
    return a * b;
  }

  static dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return a / b;
  }

  static porcentaje(a, b) {
    return (a * b) / 100;
  }

  static raizCuadrada(a) {
    if (a < 0) {
      throw new Error('No se puede calcular la raíz de un número negativo');
    }
    return Math.sqrt(a);
  }

  static potencia(a, b) {
    return Math.pow(a, b);
  }
}