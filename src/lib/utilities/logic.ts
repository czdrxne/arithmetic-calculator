export function initCalc(value: string, btn: string): string {
    let newValue = value;

    const buttonMap: Record<string, string> = {
        "x^": "^",
        "×": "x",
    };

    const input = buttonMap[btn] ?? btn;

    switch (btn) {
        case "AC":
            return "";

        case "C":
            return newValue.slice(0, -1);

        case "=":
            try   { return result = evalExpr(newValue); }
            catch { return "Error";}
    }

    if (newValue === "Error") newValue = "";

    const lastChar = newValue.slice(-1);
    const operators = ["+", "-", "x", "%", "÷"];
    const openParens = (newValue.match(/\(/g) || []).length;
    const closeParens = (newValue.match(/\)/g) || []).length;

    const lastNum = newValue.split(/[\+\-x÷%^]/).pop() || "";

    if (input === ".") {
        if (lastNum.includes("."))
            return newValue;
        if (!lastNum || lastNum === "0") 
            return newValue + (lastNum === "0" ? "." : "0.");
    }

    if (newValue === "0" && lastNum === "0") return newValue;

    if (input === "(") return newValue + "(";

    if (input === ")") {
        if (
            openParens > closeParens &&
            !operators.includes(lastChar) &&
            lastChar !== "("
        ) {
            return newValue + ")";
        }
        return newValue;
    }

    if (
        newValue === "" &&
        ["^", "√", "%", "÷", "x", "-", "+"].includes(input) &&
        input !== "-"
    ) return newValue;

    if (operators.includes(input) && operators.includes(lastChar))
        return newValue.slice(0, -1) + input;

    return newValue + input;
}

function evalExpr(expr: string): string {
    const safeExpr = expr
                        .replace(/x/g, "*")
                        .replace(/÷/g, "/")
                        .replace(/\^/g, "**")
                        .replace(/(\d|\))\(/g, "$1*(");

    try {
        const result = eval(safeExpr);
        if (result === Infinity || isNaN(result)) return "Error";
        return result.toString();
    }
    catch { return "Error"; }
}

export function initPreview(expr: string): string {
    if (!expr) return "";

    expr = expr.replace(/[\+\-x÷^%\.]+$/, "");

    if (!expr) return "";

    try {
        const result = evalExpr(expr);
        if (result === "Error") return "";
        return result;
    }
    catch { return ""; }
}