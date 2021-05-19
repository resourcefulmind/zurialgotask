// Solution to the second question


const checkYuGiOh = (num) => {
    //write your solving function here
        let arr = [];
        for (let i = 1; i <= num; i++){
            arr.push(i);
        }
    
        for(i=0; i<arr.length; i++) {
            if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
                arr[i] = "yu-gi-oh";
            } else
            if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 != 0) {
                arr[i] = "yu-gi";
            } else
            if (arr[i] % 2 != 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
                arr[i] = "gi-oh";
            } else
            if (arr[i] % 2 == 0 && arr[i] % 3 != 0 && arr[i] % 5 == 0) {
                arr[i] = "yu-oh";
            } else
            if (arr[i] % 2 == 0 && arr[i] % 3 != 0 && arr[i] % 5 != 0) {
                arr[i] = "yu";
            } else
            if (arr[i] % 3 == 0) {
                arr[i] = "gi";
            } else
            if (arr[i] % 5 == 0) {
                arr[i] = "oh";
            }
        }  return arr;
    console.log(num)  

    const checkValue = (num) => {
        if (typeof(num) === "object") {
            console.log("Only numbers can be passed as an argument not Object or Array")
        } else if (typeof(num) === "string") {
            if(Number(num) === "NaN") {
                console.log("Please pass in a valid number")
            } else {
                // execute function here
                checkYuGiOh(Number(num))
            }
        } else {
            // execute your function here
            checkYuGiOh(num)
        }
    }
}

checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");