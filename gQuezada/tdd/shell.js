const sort = (arr) => {
    let increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            let j = i;
            let temp = arr[i];

            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment === 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

const test1 = () => {
    const A = [1,2,3,4,5]

    asssert(sort(A), [1,2,3,4,5]);
}

const test2 = () => {
    const A = [5,4,3,2,1]

    asssert(sort(A), [1,2,3,4,5]);
}

const test3 = () => {
    const A = [5,-2,3,2,1]

    asssert(sort(A), [-2, 1, 2, 3, 5]);
}

const test3 = () => {
    const A = [5,-2,3,NaN,1]

    asssert(sort(A), "error");
}

const test3 = () => {
    const A = [5,-2,3,undefined,1]

    asssert(sort(A), "error");
}

const test3 = () => {
    const A = [5,-2,3,infinity,1]

    asssert(sort(A), "error");
}

const test3 = () => {
    const A = [5,-2,3,0,1]

    asssert(sort(A), [-2,0,1,3,5]);
}

const test3 = () => {
    const A = [5,-2,3,0,1,3/5]
    asssert(sort(A), [-2,0,3/5,1,5]);
}

const test3 = () => {
    const A = [-2,2.7182,1,3.14159,5]
    asssert(sort(A), [-2,1,2.7182,3.14159,5]);
}

const test3 = () => {
    const A = [5,-2,3,0,"1"]
    asssert(sort(A), "error");
}

const test3 = () => {
    const A = [5,-2,3,0,[1,2]]
    asssert(sort(A), "error");
}
