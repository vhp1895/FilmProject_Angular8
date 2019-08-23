export class BookingInfo{

    maLichChieu:number;
    taiKhoanNguoiDung:string;
    danhSachVe:danhSachVe[] = [];

    constructor(showtimeCode:number,userID:string){
        this.taiKhoanNguoiDung = userID;
        this.maLichChieu = showtimeCode;
    }
}

class danhSachVe {
    maGhe:number;
    giaVe:number;
    constructor(seatCode:number,tixPrice:number)
    {
        this.maGhe = seatCode;
        this.giaVe = tixPrice;
    }
}

// taiKhoanNguoiDung