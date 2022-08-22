document.addEventListener("DOMContentLoaded",function(){

    var nutPhai = document.querySelector('.nut b.phai'),
        nutTrai = document.querySelector('.nut b.trai'),
        slides = document.querySelectorAll('.slides ul li'),
        chiSoHientai = 0,
        soLuongSlide =  slides.length;

    //bắt sự kiện click vào nút phải 
    var chuyenSlideChoNutPhai = function() {
        var phanTuHienTai = slides[chiSoHientai];
        //xác định chỉ số tiếp theo dựa trên hiện tại
        if (chiSoHientai < soLuongSlide - 1){
            chiSoHientai++;
        }
        else
        {
            chiSoHientai = 0;  
        }
        var phanTuTiepTheo = slides[chiSoHientai];
        //tạo chuyển động sau khi xác định 
        phanTuHienTai.classList.add('bienMatKhiAnNext');
        phanTuTiepTheo.classList.add('xuatHienKhiAnNext');
        
    };
    nutPhai.addEventListener('click', chuyenSlideChoNutPhai);

},false)