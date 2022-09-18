public class EjemploCondicionales {
	public static void main (String[] args) {
		int edad = 8;
		int cantidad = 2;
		if (edad >= 18) {
			System.out.println("Usted puede entrar");
			System.out.println("bienvenido");
		} else {
			if (cantidad >= 2) {
				System.out.println("Usted es menor de edad, pero como esta acompañado puede entrar");
			} else {
				System.out.println("Usted no esta permitido a entrar");
			}
		}
	}

}
