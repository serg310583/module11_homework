// 5. Задание. Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.


export function createMonth (i) {
    if (i === 1) return 'Январь';
    if (i === 2) return 'Февраль';
    if (i === 3) return 'Март';
    if (i === 4) return 'Апрель';
    if (i === 5) return 'Май';
    if (i === 6) return 'Июнь';
    if (i === 7) return 'Июль';
    if (i === 8) return 'Август';
    if (i === 9) return 'Сентябрь';
    if (i === 10) return 'Октябрь';
    if (i === 11) return 'Ноябрь';
    if (i === 12) return 'Декабрь';
    return "Неизвестно"}
    
    (createMonth (10))