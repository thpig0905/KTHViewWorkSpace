

let dog = {
  name : '바둑이',
  age : 5,
  owner : {name : '김태히'},
  toys : ['뼈다귀', '코끼리', '공'],
  callOwner : function(){
    console.log(this.owner.name + '님 놀아줘용');
  }
}
dog.callOwner();