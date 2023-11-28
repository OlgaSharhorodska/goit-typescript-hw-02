/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: :() (literal type)?
*/

let union:(number|string);

type Type = ("enable" | "disable")
let literal: Type;

