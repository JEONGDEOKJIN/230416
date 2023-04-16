


// document.querySelector('.btn-left').addEventListener('click', function() {
//     document.querySelector('.wrapper').style.transform = 'translate(+100vw)'
// })

// document.querySelector('.btn-right').addEventListener('click', function() {
//     document.querySelector('.wrapper').style.transform = 'translate(-100vw)'
// })


// 첫 번째 우클릭 > -100
// 두 번째 우클릭 > -200 
// 좌클릭 1번, 우클릭 2번 > -100
// 좌클릭 3번, 우클릭 2번 > 100 

let numOfRight = 0;
let numOfLeft = 0;
let moveXTotal = 0;

let _wrapper = document.querySelector('.wrapper')
console.log(_wrapper)

function moveWrpper () {

    document.querySelector('.btn-right').addEventListener('click', function() {
        numOfRight = numOfRight + 1;
        moveXTotal = (numOfLeft * 100) + (numOfRight * -100)
        document.querySelector('.wrapper').style.transform = `translate(${moveXTotal}vw)`

        console.log("오른쪽 클릭!")
        console.log(`numOfRight : ${numOfRight}`)
        console.log(`moveXTotal : ${moveXTotal}`)

        // 이렇게 찍으면, 초기값 뿐 아니라, 변할 때에도 반영할 수 있음. 
        makeLoopImg()
    });
    
    document.querySelector('.btn-left').addEventListener('click', function(){
        numOfLeft = numOfLeft + 1;
        moveXTotal = (numOfLeft * 100) + (numOfRight * -100)
        document.querySelector('.wrapper').style.transform = `translate(${moveXTotal}vw)`
        
        console.log("왼쪽 클릭!")
        console.log(`numOfRight : ${numOfRight}`)
        console.log(`moveXTotal : ${moveXTotal}`)

        // 이렇게 찍으면, 초기값 뿐 아니라, 변할 때에도 반영할 수 있음. 
        makeLoopImg()
    });

}

moveWrpper()

// 시작점을 중간으로 하고 / 마이너스로 갈게 아니라 
// loopimg 를 display;none 으로 하고 
// 되는 순간에 on 하면? 



function makeLoopImg() {

    let isButtonChecked = false;
    document.querySelector('.btn-right').addEventListener('click', function() {
        isButtonChecked = true;
    })

    let loopRight = document.createElement('div');
    loopRight.innerHTML = `
        <p>1 사진 반복⭐⭐⭐</p>
    `
    loopRight.classList.add('inner-loopimg')
    loopRight.style.float = 'left';     // ⭐⭐ float left ⭐⭐ 
    // loopRight.style.width = '100vw';    // 기초단계에서 이렇게 '정렬' 했기 때문에
    loopRight.style.display = 'none';
    _wrapper.appendChild(loopRight)
    
    // document.querySelector('.inner-loopimg').display = 'block';
    // document.querySelector('.inner-loopimg').style.color = 'blue';
    // ⭐⭐ _wrapper 는 '변수' 니까, document 에 접근할 필요는 없음.
    //  _wrapper는 변수이기 때문에 document 객체에 접근할 필요 없이 그대로 사용




    if (moveXTotal == 0) 
        // 왼쪽에 사진들 더 만들어
        console.log("왼쪽사진만들어")
    


    
    if (moveXTotal == -300 && isButtonChecked == true) 
        // 오른쪽에 사진 더 만들어
        console.log("오른쪽사진만들어")
        loopRight.style.display = 'block';
    

}

// 처음에 들어갔을 때, 왼쪽 사진 만들어야 하므로, 여기에 필요함. ⭐⭐⭐⭐⭐ 
// makeLoopImg()



// let numOfRight = 0;
// let numOfLeft = 0;

// function move() {
//     document.querySelector('.btn-right').addEventListener('click', function() {
//         numOfRight = numOfRight + 1;
//         console.log("오른쪽 클릭!", numOfRight)
//         let moveX = (numOfLeft * 100) + (numOfRight * -100)
//         document.querySelector('.wrapper').style.transform = `translate(${moveX}vw)`
//     });

//     document.querySelector('.btn-left').addEventListener('click', function(){
//         numOfLeft = numOfLeft + 1;
//         console.log("왼쪽 클릭!", numOfLeft)
//         let moveX = (numOfLeft * 100) + (numOfRight * -100)
//         document.querySelector('.wrapper').style.transform = `translate(${moveX}vw)`
//     });
// }

// move();
