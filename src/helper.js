export function getRandomInt(max, count) {
  let arr = [];
  while(arr.length < count){
      var r = Math.floor(Math.random() * max);
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

export function Result(password,line){
  const colors = ['red', 'white', 'black'];
  let arr = [];
  for (let i=0;i<line.length;i++){
    if (password.indexOf(line[i]) === -1){
      arr.push(0);
    }
    else if (password[i] === line[i]){
      arr.push(2);
    }
    else{
      arr.push(1)
    }
  }
  arr.sort().reverse();
  return arr.map(num => colors[num]);
}