let addFn = fun a b -> a + b

let subtractFn = fun a b -> a - b

let multiplyFn = fun a b -> a * b

let divideFn = fun a b -> a / b

let rec factorial n =
    if n < 0 then invalidArg "n" "n >= 0"
    elif n <= 1 then 1
    else n * factorial (n - 1)

printfn "%d" (addFn 5 3)
printfn "%d" (subtractFn 10 4)
printfn "%d" (multiplyFn 7 6)
printfn "%d" (divideFn 15 3)
printfn "%d" (factorial 4)