/*const now = new Date();
const year = now.getFullYear(); 
const month = now.getMonth() + 1; 
const date = now.getDate(); 
const hours = now.getHours(); 
const minutes = now.getMinutes(); 

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);*/


// ### Ejercicios: Nivel 1

// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = "aiman";
let lastName = "al khamlichi";
let country = "moroco";
let city = "chauen";
let age = "age";
let isMarried = true;
let year = 21;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Verifique si typeof '10' es igual a 10
console.log(typeof 10 === 10);
// 3. Verifique si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') === 10);
// 4. Verifique cualquier valor booleano true o false.

//    1. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log(10 === 10);
console.log(20 > 10);
console.log(20 < 50);
//    2. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log(!10 === 10);
console.log(!20 > !10);
console.log(20 >= 50);
// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

//    1. 4 > 3 //true
console.log(4 > 3)//true
//    2. 4 >= 3 //false
console.log(4 >= 3)//true
//    3. 4 < 3 //false
console.log(4 < 3)//false
//    4. 4 <= 3 //false
console.log(4 <= 3)//false
//    5. 4 == 4 //true
console.log(4 == 4)//true
//    6. 4 === 4 //true
console.log(4 === 4)//true
//    7. 4 != 4  //false
console.log(4 != 4)
//    8. 4 !== 4 //false
console.log(4 !== 4)//false
//    9. 4 != '4' //true
console.log(4 != '4')//false
//    10. 4 == '4' //false
console.log(4 == '4')//true
//    11. 4 === '4' //false
console.log(4 === '4')
//    12. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
let uno = "Python";
console.log(uno.length);
let dos = "jargon"
console.log(dos.length);
console.log(6 !== 6);
// 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

//    1. 4 > 3 && 10 < 12 //true
console.log(4 > 3 && 10 < 12);//true
//    2. 4 > 3 && 10 > 12 //false
console.log(4 > 3 && 10 > 12);//false
//    3. 4 > 3 || 10 < 12 //true
console.log(4 > 3 || 10 < 12);//true
//    4. 4 > 3 || 10 > 12 // true
console.log(4 > 3 || 10 > 12);//true
//    5. !(4 > 3) //false
console.log(!(4 > 3));//false
//    6. !(4 < 3) //true
console.log(!(4 < 3));//true
//    7. !(false) //true
console.log(!(false));//true
//    8. !(4 > 3 && 10 < 12) // true
console.log(!(4 > 3 && 10 < 12)); //false
//    9. !(4 > 3 && 10 > 12) // true
console.log(!(4 > 3 && 10 > 12));//true
//    10. !(4 === '4') //true
console.log(!(4 === '4'));//true
//    11. No hay 'on' tanto en dragon como en python //true
console.log("on" === "on");


// 7. Utilice el objeto Date para realizar las siguientes actividades
//    1. ¿Qué año es hoy?
let now = new Date();
console.log(now.getFullYear());
//    2. ¿Qué mes es hoy con un número?
console.log(now.getMonth() + 1);
//    3. ¿Qué fecha es hoy?
console.log(now);
//    4. ¿Qué día es hoy con un número?
console.log(now.getDay());
//    5. ¿Cuál es la hora actual?
console.log(now.getHours());
//    6. ¿Cuántos minutos hay actualmente?
console.log(now.getMinutes());
//    7. Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(now.getTime());

// ### Ejercicios: Nivel 2

// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

//    ```sh
//    Ingrese base: 20
//    Ingrese altura: 10
//    El área del triángulo es: 100
//    ```
let base = 20;
let altura = 10;
console.log(0.5 * base * altura);


// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

//    ```sh
//    Ingrese lado a: 5
//    Ingrese lado b: 4
//    Ingrese lado c: 3
//    El perimetro del triangulo es: 12
//    ```
let lado1 = 5;
let lado2 = 4;
let lado3 = 3;
console.log(lado1 + lado2 + lado3);

//3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

let largo = Number(prompt("Ingrese el largo del rectángulo:"));
let ancho = Number(prompt("Ingrese el ancho del rectángulo:"));
let area = largo * ancho;
let perimetro = 2 * (largo + ancho);
console.log("El area del rectangulo es: " + area);
console.log("El perimetro del rectangulo es: " + perimetro);

// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

let radio = Number(prompt("Ingrese el radio del círculo:"));
let pi = 3.14;
let areas = pi * radio * radio;
let circunferencia = 2 * pi * radio;
console.log("El area del circulo es: " + areas);
console.log("La circunferencia del circulo es: " + circunferencia);

// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
let Y = "y = 2x - 2";
let m = 2;
let b = -2;
let x = 1;
console.log("La pendiente de la línea es: ${m}");
console.log("La intersección en x es: ${x}");
console.log("La intersección en y es: ${b}`");

// 6. La pendiente es m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let s = (y2 - y1) / (x2 - x1);
console.log(`La pendiente entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${s}`);

// 7. Compare la pendiente de las dos preguntas anteriores.
let copare = (s === Y);
console.log(copare);
// 8. Calcula el valor de y (y = x<sup>2</sup> + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
let x3 = 2;
let y3 = (2 + 6 * 2 + 9)
console.log(y3);
// 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
let horas = prompt("Ingrese las horas trabajadas:");
let tarifa = prompt("Ingrese la tarifa por hora:");
let salario = horas * tarifa;
console.log(`El salario de la persona es: ${salario}`);

//    ```sh
//    Ingrese horas: 40
//    Introduce la tarifa por hora: 28
//    Su ganancia semanal es 1120
//    ```


// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

let nombress = prompt("Introduce tu nombre:");
let esLargo = (nombress.length > 7);

if (esLargo) {
    console.log("Tu nombre es largo.");
} else {
    console.log("Tu nombre es corto.");
}


// 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
let nombrea = "Asabeneh"
let apellidoo = "Yetayeh"
let elMasLargo = nombrea.length > apellidoo.length;
console.log(`Tu primer nombre, ${nombrea}, es más largo que tu apellido, ${apellidoo}.`);

//    ```js
//    let firstName = "Asabeneh";
//    let lastName = "Yetayeh";
//    ```

//    ```sh
//    Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.
//    ```

// 12. Declare dos variables _myAge_ y _yourAge_ y asignarles los valores iniciales y myAge y yourAge.
let _myAge = 30;
let _yourAge = 25;
let mayorQue = (_myAge - _yourAge)
console.log(`soy ${mayorQue} años mayor que yú`);
//    ```js
//    let myAge = 250;
//    let yourAge = 25;
//    ```

//    ```sh
//    Soy 225 años mayor que tú.
//    ```

// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
let yearNacimiento = Number(prompt("¿En qué año naciste?"));
let Years = new Date().getFullYear();
let ages = Years - yearNacimiento;
if (ages >= 18) {
    console.log("Puedes conducir. ¡Que tengas un buen viaje!");
} else {
    let añosEsperar = 18 - ages;
    console.log(`Lo siento, aún no puedes conducir. Debes esperar ${añosEsperar} años más.`);
}

//    ```sh

//    Introduzca el año de nacimiento: 1995
//    Tienes 25 años. Tienes la edad suficiente para conducir.

//    Introduzca el año de nacimiento: 2005
//    Tienes 15 años. Podrás conducir después de 3 años.
//    ```

// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
let years = Number(prompt("Ingresa el número de años que esperas vivir:"));
let secondsInAYear = 365 * 24 * 60 * 60;
let maxYears = 100;
if (years > maxYears) {
    console.log(`¡Eso es mucho tiempo! Nadie vive más de ${maxYears} años.`);
} else {
    let totalSeconds = years * secondsInAYear;
    console.log(`Si vives ${years} años, vivirás aproximadamente ${totalSeconds.toLocaleString()} segundos.`);
}
//    ```sh
//    Ingrese el número de años de vida: 100
//     Viviste 3153600000 segundos.
//    ```

// 15. Cree un formato de hora legible por humanos usando el objeto Date.
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let amOrPm = hours >= 12 ? "PM" : "AM";
let formattedHours = hours % 12 || 12;
let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
let time = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;
console.log(time);

//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm

// ### Ejercicios: Nivel 3

// 1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05;
let fechaActual = new Date();
let hora = fechaActual.getHours().toString().padStart(2, '0');
let minutos = fechaActual.getMinutes().toString().padStart(2, '0');
let horaLegible = `${hora}:${minutos}`;
console.log(horaLegible);
