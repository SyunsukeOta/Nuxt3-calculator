# 電卓

![プレイ画面](https://user-images.githubusercontent.com/26402438/77137853-ed871f80-6ab2-11ea-8b99-3e0feec43ee4.png)

new-calculatorの移植。
https://github.com/SyunsukeOta/new-calculator


## 実行
```shell
$ npm install 
$ npm run dev
```

## キー入力
- "=": Shift + "="
- "AC": BackSpace

## ファイル構成

### blockData.ts
- 各ボタンのパラメータをblockListとして格納

### interfaces.ts
- 型の定義

### functions.ts
- index.vueで実行する関数の定義
- ボタンはnum, cal, ans, resetのどれかを実行  
num: 数字が入力された時に実行する処理  
cal: 演算子が入力された時に実行する処理  
ans: 計算結果を出力する  
reset: 計算をリセットして初めからやり直す  

### components/calc-button.vue
- ボタン1つのコンポーネント。blockData.tsで指定したボタンのパラメータをemitを使用して子コンポーネントから親コンポーネントに渡している。  

### composables/useParams.ts
- プロジェクト内で使用する電卓のパラメータ(計算に使用する数値, 演算子など)をuseStateを使用して保持  

### assets/css/main.css
- ボタンと背景のcssの設定  

### pages/index.vue
- Mount時にキーの入力を受け付ける。また、Unmountの前にキーの入力の受付を終了する。  
- ボタンがクリックされた時の処理をhandleBlockClick関数として定義。この関数はemitによって受け取ったボタンのパラメータを使用して、num, cal, ans, resetのどの関数を実行するかを判断している。
