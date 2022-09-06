const num1 = 1;
const num2 = 2;
const result = 3;
const string = `${num1} 더하기 ${num2}는 '${result}' 입니다.`;
console.log(string);

function oneMore() {
    console.log('one more');
}

function run() {
    console.log('run');
    setTimeout(() => {
        console.log('wow')
    }, 0);
    new Promise((resolve) => {
        //Promise 내부까지는 동기
        //https://www.inflearn.com/course/%EB%85%B8%EB%93%9C-%EA%B5%90%EA%B3%BC%EC%84%9C/unit/56867?tab=curriculum
        //12:20
        resolve('hi');
    })
        .then(console.log);
    //then을 만나는 순간 비동기가 됨

    oneMore();
}

setTimeout(run, 5000);
// run -> one more -> hi -> wow
//왜 Promise가 더 먼저 실행될까?
//micro task와 macro task의 차이를 알면 된다

const relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        const that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    }
};
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        })
    },
};
relationship1.logFriends();
relationship2.logFriends();