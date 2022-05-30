let arrayInput = [5,12,3,7,9];
let flag = false;

      function findNum(num) {
        for (let i = 0; i < arrayInput.length; i++) {
          if (arrayInput[i] == num) {
            alert(
              `Hàm [${arrayInput}] có chứa số cần tìm là ${num} tại vị trí ${
                i + 1
              }`
            );
            flag = true;
            break;
          }
          if ((flag = false)) {
            alert(`Không có số bạn cần tìm trong dãy số`);
          }
        }
      }
findNum(5);