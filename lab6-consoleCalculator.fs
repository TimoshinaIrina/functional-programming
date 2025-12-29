open System


let addFn a b = a + b
let subtractFn a b = a - b
let multiplyFn a b = a * b
let divideFn a b =
    if b = 0.0 then failwith "деление на ноль!"
    else a / b

let powerFn baseValue exponent = Math.Pow(baseValue, exponent)
let sqrtFn x =
    if x < 0.0 then failwith "нельзя извлечь квадратный корень из отрицательного числа"
    else Math.Sqrt(x)

let sinFn angleDegrees = Math.Sin(angleDegrees * Math.PI / 180.0)
let cosFn angleDegrees = Math.Cos(angleDegrees * Math.PI / 180.0)
let tanFn angleDegrees =
    let radians = angleDegrees * Math.PI / 180.0
    let cosv = Math.Cos(radians)
    if abs cosv < 1e-12 then failwith "тангенс не определёне"
    else Math.Sin(radians) / cosv

// функции ввода

let readFloat prompt =
    printf "%s" prompt
    Console.ReadLine() |> float

let binaryOp opName op =
    let a = readFloat "Первое число: "
    let b = readFloat "Второе число: "
    op a b

let unaryOp opName op =
    let x = readFloat "Число: "
    op x


let performOperation choice =
    match choice with
    | "1" -> binaryOp "сложение" addFn
    | "2" -> binaryOp "вычитание" subtractFn
    | "3" -> binaryOp "умножение" multiplyFn
    | "4" -> binaryOp "деление" divideFn
    | "5" -> binaryOp "возведение в степень" powerFn
    | "6" -> unaryOp "квадратный корень" sqrtFn
    | "7" -> unaryOp "синус" sinFn
    | "8" -> unaryOp "косинус" cosFn
    | "9" -> unaryOp "тангенс" tanFn
    | "0" -> failwith "exit"
    | _  -> failwith "invalid"

// рекурсивный цикл для консольного приложения

let rec runCalculator () =
    printfn ""
    printfn "=== Калькулятор (F# Functional Style) ==="
    printfn "1. Сложение"
    printfn "2. Вычитание"
    printfn "3. Умножение"
    printfn "4. Деление"
    printfn "5. Возведение в степень"
    printfn "6. Квадратный корень"
    printfn "7. Синус (угол в градусах)"
    printfn "8. Косинус (угол в градусах)"
    printfn "9. Тангенс (угол в градусах)"
    printfn "0. Выход"
    printf "Выберите действие: "

    let choice = Console.ReadLine()

    try
        match choice with
        | "0" ->
            printfn "Выход..."
            ()
        | _ ->
            let result = performOperation choice
            printfn "Результат: %f" result  
            runCalculator()
    with
    | :? ArgumentException as ex ->
        printfn "Ошибка аргумента: %s" ex.Message
        runCalculator()
    | ex when ex.Message = "exit" ->
        ()
    | ex when ex.Message = "invalid" ->
        printfn "Неверный ввод. Попробуйте снова."
        runCalculator()
    | ex ->
        printfn "Ошибка: %s" ex.Message
        runCalculator()

// ——— точка входа ———

[<EntryPoint>]
let main _ =
    runCalculator()
    0
