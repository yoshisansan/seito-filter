var a = [1,2,3,3,2,2,5];

// 重複を削除したリスト
var b = a.filter(function (x, i, self) {
            console.log(x, i, self)
            return self.indexOf(x) === i;
        });

// 重複のみをリスト
var c = a.filter(function (x, i, self) {
            return self.indexOf(x) !== self.lastIndexOf(x);
        });

// 重複を検出したものを重複しないでリスト
var d = a.filter(function (x, i, self) {
            return self.indexOf(x) === i && i !== self.lastIndexOf(x);
        });

console.log(b)