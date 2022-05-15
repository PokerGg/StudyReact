// /**
//  * const、letなどの変数宣言
//  */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// // let val2 = "let変数を再宣言";

// const val3 = "consot変数";
// console.log(val3);

// // consot変数は上書き不可
// // val3 = "cost変数上書き";

// // const val3 = "const変数再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "田中",
//   age: 28
// };
// console.log(val4);

// val4.name = "Rose";
// console.log(val4);

// val4.address = "Tokyo";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "Minghan";
// const age = 28;
// // [私の名前はMinghanです。年齢は28です。]

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */
// // 従来の関数
// function func1(str) {
//   console.log(str);
// }
// func1("func1です。");

// const func2 = function (str) {
//   console.log(str);
// };
// func2("func2です。");

// // アロー関数
// const func3 = (str) => {
//   console.log(str);
// };
// func3("func3です。");

// const func4 = (str) => console.log(str);
// func4("func4です。");

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func5(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "Minghan",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["Minghan", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("Minghan");
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// var sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

// const arr9 = [...arr5];
// arr9[0] = 100;
// console.log(arr5);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNumArr1 = numArr.filter((num) => {
//   return num > 2;
// });
// console.log(newNumArr1);

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const newNameArr = nameArr.map((name) => {
//  if (name === "じゃけぇ" ){
//    return name
//  } else {
//    return `${name}さん`
//  }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const fomattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(fomattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています。' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));
// console.log(checkSum(80, 40));

/**
 * 論理演算子の本当の意味を知ろう　&& //
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||　は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
