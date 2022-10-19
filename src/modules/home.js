function dataList(){
    let data = [];
    for(let i = 0; i < 10; i++){
        let num = Math.floor(Math.random() * 10) + 1;
        data.push(num);
    }
    return data;
}

module.exports = dataList