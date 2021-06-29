document.querySelector('#btnLop1').onclick = function(){

    let diemToan = document.querySelector('#diemToan').value;
    console.log('diemToan: ', diemToan);

    let diemLy = document.querySelector('#diemLy').value;
    console.log('diemLy: ', diemLy);

    let diemHoa = document.querySelector('#diemHoa').value;
    console.log('diemHoa: ', diemHoa);

    let lop1 = tinhDiemTrungBinh(Number(diemToan),Number(diemLy),Number(diemHoa));
    console.log('lop1: ', lop1);
    document.querySelector('#ketQuaLop1').innerHTML = lop1;
}

document.querySelector('#btnLop2').onclick = function(){

    let diemVan = document.querySelector('#diemVan').value;
    console.log('diemVan: ', diemVan);
    
    let diemSu = document.querySelector('#diemSu').value;
    console.log('diemSu: ', diemSu);

    let diemDia = document.querySelector('#diemDia').value; 
    console.log('diemDia: ', diemDia);

    let diemEnglish = document.querySelector('#diemEnglish').value;
    console.log('diemEnglish: ', diemEnglish);

    let lop2 = tinhDiemTrungBinh(Number(diemVan),Number(diemSu),Number(diemDia),Number(diemEnglish)).toFixed(2);
    console.log('lop2: ', lop2);

    document.querySelector('#ketQuaLop2').innerHTML = lop2;
}

function tinhDiemTrungBinh(...restParam){
    switch(restParam.length){
        case 3: {
            return (restParam[0] + restParam[1] + restParam[2])/3;
        }
        case 4: {
            return (restParam[0] + restParam[1] + restParam[2] + restParam [3])/4;
        }
        default : return 'tham số không hợp lệ';
    }
}
