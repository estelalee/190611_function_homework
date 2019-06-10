var choosingGame = prompt("請選擇任一遊戲進行： \n (1)猜數字 \n (2)終極密碼 \n (3)國語文測驗");

if (choosingGame == 1) {
    var level = prompt("請選擇關卡難易度： \n (1)簡單 \n (2)普通 \n (3)真的很難");
    guessing(level);
} else if (choosingGame == 2) {
    var level = prompt("請選擇關卡難易度： \n (1)簡單 \n (2)普通 \n (3)真的很難");
    boom(level);
} else if (choosingGame == 3) {
    var level = prompt("請選擇關卡難易度： \n (1)簡單 \n (2)普通 \n (3)真的很難");
    testing(level);
}

//Game1-猜數字
function guessing() {
    if (level = 1) {
        var answer = Math.floor(Math.random() * 10 + 1);
        var texting = prompt("請猜一個1-10的數字");
        var times = 1;
        do {
            if (texting == answer) {
                break;
            } else {
                texting = prompt("登愣！猜錯摟!再猜一次！");
                times = times + 1;
            }
        } while (texting != answer);
        alert("哇你猜對摟！但是猜對也沒有禮物！ \n (你一共嘗試了" + times + "次)");
    } else if (level = 2) {
        var answer = Math.floor(Math.random() * 100 + 1);
        var texting = prompt("請猜一個1-100的數字");
        var times = 1;
        do {
            if (texting == answer) {
                break;
            } else {
                texting = prompt("登愣！猜錯摟!再猜一次！");
                times = times + 1;
            }
        } while (texting != answer);
        alert("哇你猜對摟！但是猜對也沒有禮物！ \n (你一共嘗試了" + times + "次)");
    } else if (level = 3) {
        var answer = Math.floor(Math.random() * 10000 + 1);
        var texting = prompt("請猜一個1-10000的數字");
        var times = 1;
        do {
            if (texting == answer) {
                break;
            } else {
                texting = prompt("登愣！猜錯摟!再猜一次！");
                times = times + 1;
            }
        } while (texting != answer);
        alert("哇你猜對摟！但是猜對也沒有禮物！ \n (你一共嘗試了" + times + "次)");
    }
}

//Game2-終極密碼
function boom() {
    if (level == 1) {
        var min = 0;
        var max = 100;
        var answer = Math.floor(Math.random() * 100);

        var input = Number(prompt("一起來玩終極密碼吧，範圍是" + min + "-" + max + "，請猜一個數字："));
        var times = 1;
        while (input !== answer) {
            if (input > answer) {
                max = input;
                alert("猜錯了哦～再給你一次機會～");
                input = prompt("範圍是" + min + "-" + max + "，請猜一個數字：");
            } else if (input < answer) {
                min = input;
                alert("猜錯了哦～再給你一次機會～");
                input = prompt("範圍是" + min + "-" + max + "，請猜一個數字：");
            } else {
                break;
            }
            times = times + 1;
        }
        alert("哇你猜對了耶～只好結束遊戲摟 \n (你一共嘗試了" + times + "次)");
    } else if (level == 2) {
        var min = 0;
        var max = 500;
        var answer = Math.floor(Math.random() * 500);

        var input = Number(prompt("一起來玩終極密碼吧，範圍是" + min + "-" + max + "，請猜一個數字："));
        var times = 1;
        while (input !== answer) {
            if (input > answer) {
                max = input;
                alert("猜錯了哦～再給你一次機會～");
                input = prompt("範圍是" + min + "-" + max + "，請猜一個數字：");
            } else if (input < answer) {
                min = input;
                alert("猜錯了哦～再給你一次機會～");
                input = prompt("範圍是" + min + "-" + max + "，請猜一個數字：");
            } else {
                break;
            }
            times = times + 1;
        }
        alert("哇你猜對了耶～只好結束遊戲摟 \n (你一共嘗試了" + times + "次)");
    } else if (level == 3) {
        var min = 0;
        var max = 1000;
        var answer = Math.floor(Math.random() * 1000);

        var input = Number(prompt("一起來玩終極密碼吧，範圍是" + min + "-" + max + "，請猜一個數字："));
        var times = 1;
        while (input !== answer) {
            if (input > answer) {
                max = input;
                alert("猜錯了哦～再給你一次機會～");
                input = prompt("範圍是" + min + "-" + max + "，請猜一個數字：");
            } else if (input < answer) {
                min = input;
                alert("猜錯了哦～再給你一次機會～");
                input = prompt("範圍是" + min + "-" + max + "，請猜一個數字：");
            } else {
                break;
            }
            times = times + 1;
        }
        alert("哇你猜對了耶～只好結束遊戲摟 \n (你一共嘗試了" + times + "次)");
    }
}

//Game3-國語文測驗
function testing() {
    if (level == 1) {
        var q1 = prompt("請選出以下生難字的讀音： \n 第一題：「蚵」「仔」煎 \n (1)ㄜˊㄗˇ \n  (2)ㄎㄜ ㄗㄞˇ \n (3)ㄦˊ ㄓㄞˇ \n (4)ㄎㄜ ㄗˇ \n (5)ㄦˊ ㄗ˙");
        if (q1 == 1) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(1)ㄜˊㄗˇ");
        }
        alert("哎呦，你矇到的吧！");

        var q2 = prompt("請選出以下生難字的讀音： \n 第二題：奶「酪」 \n (1)ㄖㄠˋ \n (2)ㄌㄨㄛˋ \n (3)ㄌㄠˋ \n (4)ㄍㄜˋ \n (5)ㄖㄨㄛˋ");
        if (q2 == 2) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(2)ㄌㄨㄛˋ");
        }
        alert("哎呦，你矇到的吧！");

        var q3 = prompt("請選出以下生難字的讀音： \n 第三題：「骰」子牛肉 \n (1)ㄕㄞˇ \n  (2)ㄙㄞˇ \n (3)ㄊㄡˊ \n (4)ㄍㄨˇ \n (5)ㄒㄧˇ");
        if (q3 == 3) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(3)ㄊㄡˊ");
        }
        alert("哎呦，你矇到的吧！");

    } else if (level == 2){
        var q1 = prompt("請選出以下常見錯字中正確的那個： \n 第一題： \n (1)小時候 \n  (2)小時後 \n (3)小實候 \n (4)小時后 \n (5)小時侯");
        if (q1 == 1) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(1)小時候");
        }
        alert("哎呦，你矇到的吧！");

        var q2 = prompt("請選出以下常見錯字中正確的那個： \n 第二題： \n (1)交待 \n  (2)交代 \n (3)教代 \n (4)嬌代 \n (5)教待");
        if (q2 == 2) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(2)交代");
        }
        alert("哎呦，你矇到的吧！");

        var q3 = prompt("請選出以下常見錯字中正確的那個： \n 第三題： \n (1)剪彩 \n  (2)剪材 \n (3)剪綵 \n (4)剪採 \n (5)剪才");
        if (q3 == 3) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(3)剪綵");
        }
        alert("哎呦，你矇到的吧！");

    } else if (level == 3){
        var q1 = prompt("請將句子中錯誤的字改正：當地天氣嚴寒，室內亦只有攝氏兩、三度，不少衣衫單簿的女歌手都冷得發抖。 \n (1)單「薄」 \n  (2)「巖」寒 \n (3)「懾」氏");
        if (q1 == 1) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(1)單「薄」");
        }
        alert("哎呦，你矇到的吧！");

        var q2 = prompt("請將句子中錯誤的字改正：香港大球場舉行了一連三天的國際性球賽，吸引了世界各地球迷蜂湧而至。 \n (1)「鋒」湧而至 \n  (2)蜂「擁」而至 \n (3)蜂「蛹」而至");
        if (q2 == 2) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(2)蜂「擁」而至");
        }
        alert("哎呦，你矇到的吧！");

        var q3 = prompt("請將句子中錯誤的字改正：他的表現輕佻浮燥，惹人討厭。 \n (1)浮「臊」 \n  (2)輕「挑」 \n (3)浮「躁」");
        if (q3 == 3) {
            break;
        } else {
            alert("搞什麼啊！這是小學的題目欸！答案是(3)浮「躁」");
        }
        alert("哎呦，你矇到的吧！");
    }
}


