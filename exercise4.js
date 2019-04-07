function dataHandling2(){
    var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log(input)
    var pisah = input.slice(3, 4).toString().split('/')
    bulan = pisah[1]
    switch(bulan){
        case '01' :
        console.log('January')
        break;
        case '02':
        console.log('February')
        break;
        case '03':
        console.log('Maret')
        break;
        case '04':
        console.log('April')
        break;
        case '05':
        console.log('Mei')
        break;
        case '06':
        console.log('Juni')
        break;
        case '07':
        console.log('Juli')
        break;
        case '08':
        console.log('Agustus')
        break;
        case '09':
        console.log('September')
        break;
        case '10' :
        console.log('Oktober')
        break;
        case '11' :
        console.log('November')
        break;
        case '12' : 
        console.log('Desember')
        break;
    }
    var sorted = pisah.sort(function(value1, value2){return value2-value1})
    console.log(sorted)
    var gabung = input[3].split('/').join('-')
    console.log(gabung)
    var nama = input[1].slice(0, 14)
    console.log(nama)

}
dataHandling2()