let if1 = () => {
    const a = 2;
    if (a > 2) {
        console.log("a는2보다큽니다");
    } else {
        console.log("a는 2보다 작습니다");
    }
};
const if2 = () => {
    const score = 80;
    if (score > 90) {
        console.log("합격입니다");
    } else if (score === 90) {
        console.log("동점입니다");
    } else {
        console.log("불합격입니다");
    }
};

const practice1 = () => {
    const rank = "B";
    switch (rank) {
        case "A":
            console.log("a랭크입니다");
            break;
        case "B":
            console.log("b랭크입니다");
            break;
        case "C":
            console.log("C랭크입니다");
            break;
        case "D":
            console.log("d랭크입니다");
            break;
        default:
            console.log("아무것도아닙니다");
            break;
    }
};

const practice2 = () => {
    const score = 90;
    switch (score) {
        case 30 < score:
            console.log("30점보다 높습니다");
            break;
        case 50 < score:
            console.log("50점보다 높습니다");
            break;
        case 80 < score:
            console.log("80점보다높습니다");
            break;
        default:
            console.log(score);
            break;
    }
};

const for1 = () => {
    for (let i = 1; i < 10; i++) {
        console.log(i);
    }
};

const for2 = () => {
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            console.log(i + "x" + j + "=" + i * j);
        }
    }
};

const samhang1 = () => {
    const a = 1;
    const value = a > 2 ? "a는2보다큼" : "a는2보다작음";
    console.log(value);
};

const samhang2 = () => {
    const a = 1;
    const b = 1;
    const any = a + b > 2 ? "a+b는 2보다큽니다" : "a+b는 2보다작습니다";
    console.log(any);
};

const samhang3 = () => {
    const a = 1;
    const b = -1;
    const value =
        a > 0
            ? b > 0
                ? "a ,b 는 0보다큽니다"
                : "a는 0보다크고 b는 0보다 작습니다"
            : "a는 0보다 작습니다";
    console.log(value);
};

const samhang4 = () => {
    const notthing = true;
    const value = !notthing ? "참입니다" : "거짓입니다";
    console.log(value);
};

const samhang5 = () => {
    const a = 3;
    const value = a + 3 > 2 ? "a는 3보다 큽니다" : "a는 3보다 작습니다";
    console.log(value);
};

const and1 = () => {
    const a = 1;
    const value = a === 1 && a === 2;
    console.log(1);
};

const array1 = [1, 2, 3, 4];

const result = array1.map(number => number * number);

const map2 = () => {
    const array2 = [1, 3, 5, 7, 9];

    array2.map((number, index) => {
        console.log(index + "번 값=", number);
    });
};

const map3 = () => {
    const array = [1, 2, 3, 4, 5, 6, 7];

    array.pop();
    array.map(number => {
        console.log(number * number);
    });
};

const map4 = () => {
    const data = [
        { id: 0, name: "김성주", age: 10 },
        { id: 1, name: "백승민", age: 20 },
        { id: 2, name: "코하라 나치", age: 30 },
        { id: 3, name: "박은지", age: 40 },
        { id: 4, name: "오성우", age: 50 },
        { id: 5, name: "박지원", age: 3 },
    ];

    data.push({ id: 6, name: "수현", age: 60 });
    // data.pop();
    // data.pop();

    data.map((number, index) => {
        if (index % 2 == 0) {
            console.log(number);
        }
    });
};

map4();
