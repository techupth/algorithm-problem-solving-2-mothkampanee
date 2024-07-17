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
Binary Search = O(n)
	เพราะมีการตรวจสอบสมาชิกภายใน array ทุกตัวแต่จะตัดสมาชิกภายใน array ฝั่งซ้ายมือออกครึ่งนึง
	ถ้าพบว่าสมาชิกภายใน array ตำแหน่งตรงกลางมีค่าน้อยกว่าตำแหน่งซ้ายสุด
	จะทำการขยับตำแหน่งซ้ายสุดมาอยู่ในตำแหน่งที่มากกว่าตำแหน่งตรงกลางหนึ่งตำแหน่ง
	และนำตำแหน่งซ้ายมาบวกกับตำแหน่งขาวหารด้วยสอง จะได้ตำแหน่งตรงการใหม่
*/
