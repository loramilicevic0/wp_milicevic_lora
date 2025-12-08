/* let brojjedan = prompt ("Unesi prvi broj: ");
let brojdva = prompt ("Unesi drugi broj: ");
if(brojjedan > brojdva)
{
    alert(brojjedan + "je veći od " + brojdva);
}
else if (brojjedan < brojdva)
{
    alert (brojdva + "je veći od " + brojjedan);
}
else
{
    alert("Brojevi su jednaki");
}
 */

let masa = prompt ("Unesi masu u kg:");
let visina = prompt ("Unesi visinu u m:");
let bmi = Math.round (masa/(visina*visina));

{
    alert("Vaš BMI iznosi:"+ bmi );
}