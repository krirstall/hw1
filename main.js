const input = prompt("введите возраст")
const age = Number(input);
if (input === null || input.trim() === "" || isNaN(age)){
    alert('напишите число')
} else if (age < 18) {
    alert('доступ запрещен')
} else if (age > 60) {
    alert('старый')
} else {
    alert('проходите')
}