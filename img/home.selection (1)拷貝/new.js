function doFirst(){
    //先跟HTML畫面產生關連，再建事件聆聽功能
    // 先幫Add Cart建事件聆聽
    let addList = document.querySelectorAll('.addButton');   //addList是陣列
    for(let i=0; i<addList.length; i++){
        addList[i].addEventListener('click',function(){
            // let productInfo = document.querySelector('#' + this.id + ' input').value;
            let productInfo = document.querySelector(`#${this.id} input`).value;
            addItem(this.id,productInfo);
        });
    }
}
itemCount = 0;
subtotal = 0;

function addItem(itemId,itemInfo){
    // itemCount += 1;
    // alert(`${itemId} : ${itemInfo}`);
    let image = document.createElement('img');
    image.src = '../img/' + itemInfo.split('|')[0];

    let title = document.createElement('span');
    title.innerText = itemInfo.split('|')[1];

    let price = document.createElement('span');
    price.innerText = itemInfo.split('|')[2];
    
    let newItem = document.getElementById('newItem');
    //先判斷此處是否已有物件,如果有先刪除
    while(newItem.childNodes.length >= 1){
        newItem.removeChild(newItem.firstChild);
    }
    //再顯示新物件
    newItem.appendChild(image);
    newItem.appendChild(title);
    newItem.appendChild(price);

    //計算購買數量和小計
    itemCount += 1;
    subtotal += parseInt(itemInfo.split('|')[2]);
    document.getElementById('itemCount').innerText = itemCount;
    document.getElementById('subtotal').innerText = subtotal;
}
window.addEventListener('load',doFirst);