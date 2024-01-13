let classroom = [
  "nguyễn tiến duẩn",
  "Hoàng Xuân Hiếu",
  "Hồ Sỹ Hưng",
  "Nguyễn Đức Thuận",
  "đoàn Minh Tùng",
  "Hồ Sỹ Hùng",
  "Lê Trung Hiếu",
  "đoàn vua dep trai vua hoc gioi Hữu Quý",
];
// Câu 1
let separatedNames = classroom.map((fullName) => {
  let [ho, ten] = fullName.split(" ").filter((name) => name.trim() !== "");
  return { ho, ten };
});
console.log(separatedNames);

// Câu 2
function themSinhVien(mang, sinhVien, viTri) {
  mang.splice(viTri, 0, sinhVien);
}
let newStudent = "Nguyễn Quang Huy";
let positionToAdd = 6;
themSinhVien(classroom, newStudent, positionToAdd);
console.log(classroom);

// Câu 3
function xoaSinhVien(mang, tenSinhVien) {
  let index = mang.findIndex((sv) =>
    sv.toLowerCase().includes(tenSinhVien.toLowerCase())
  );
  if (index !== -1) {
    mang.splice(index, 1);
  }
}

let studentToRemove = "đoàn vua dep trai vua hoc gioi Hữu Quý";
xoaSinhVien(classroom, studentToRemove);

console.log(classroom);

// Câu 4
function timKiemTheoTen(mang, ten) {
  let result = mang.filter((sv) => {
    let tenKhongDau = sv
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return tenKhongDau.includes(ten.toLowerCase());
  });

  return result;
}

let tenCanTim = "tung";
let ketQuaTimKiem = timKiemTheoTen(classroom, tenCanTim);

console.log(ketQuaTimKiem);
