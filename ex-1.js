let students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  // Binary Search
  let left = 0;
  let right = students.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] === searchStudent) {
      return (index = mid);
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  //   Linear Search
  //   let index = -1;
  //   for (let i = 0; i <= students.length; i++) {
  //     if (students[i] === searchStudent) {
  //       return (index = i);
  //     }
  //   }

  return index;
}

const result = findStudentIndex(students, "Jasmine");
console.log(result);

/* 
ตอบคำถามตรงนี้จ้า 
Binary Search = O(log n) เป็นการค้นหาข้อมูลภายใน array, object ที่เรียงลำดับแล้ว
  โดยจะแบ่งครึ่งการค้นหาข้อมูลออกเป็นสองส่วน (ซ้าย | ขวา) และเริ่มการค้นหาข้อมูลจากจุดกึ่งกลางเสมอ
  ถ้าข้อมูลตรงจุดกึ่งกลางมีค่าน้อยกว่าข้อมูลที่ค้นหา ให้ย้ายการค้นหาไปทางด้านขาวของข้อมูล
    และแบ่งครึ่งการค้นหาข้อมูลออกเป็นสองส่วน (ซ้าย | ขวา) และเริ่มการค้นหาข้อมูลจากจุดกึ่งกลางอีกครั้ง
  ถ้าข้อมูลตรงจุดกึ่งกลางมีค่ามากกว่าข้อมูลที่ค้นหา ให้ย้ายการค้นหาไปทางด้านซ้ายของข้อมูล
    และแบ่งครึ่งการค้นหาข้อมูลออกเป็นสองส่วน (ซ้าย | ขวา) และเริ่มการค้นหาข้อมูลจากจุดกึ่งกลางอีกครั้ง
  ทำการแบ่งครึ่งข้อมูล และย้ายการค้นหาซ้ำ ๆ จนกว่าจะพบข้อมูลที่ค้นหา (return index)
    หรือไม่พบข้อมูลที่ค้นหา (return -1) ก็จะเป็นการจบขั้นตอนการค้นหาข้อมูลแบบ Binary Search = O(log n)
*/
