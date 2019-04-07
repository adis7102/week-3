function groupAnimals(animals) {
    animals.sort()
    var a = [[]]
    var b = 0
    a[b].push(animals[0])
    for(i = 1; i < animals.length; i++){
      if(animals[i][0] === a[b][0][0]){
        a[b].push(animals[i]);
      }
      else if (animals [i][0] !== a[b][0][0]){
        b++
        a.push([animals[i]]);
      }
    }
    return a;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]