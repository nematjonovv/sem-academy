export interface Certificate {
  id: number;
  image: string;
  name: string;
  level: string;
  grade: string;
}

const certificates: Certificate[] = [
  { id: 1, image: "/certificates/cert-1.jpg", name: "Nilufar T.", level: "TOPIK II", grade: "4-daraja" },
  { id: 2, image: "/certificates/cert-2.jpg", name: "Jasur M.", level: "TOPIK I", grade: "2-daraja" },
  { id: 3, image: "/certificates/cert-3.jpg", name: "Zulfiya K.", level: "TOPIK II", grade: "5-daraja" },
  { id: 4, image: "/certificates/cert-4.jpg", name: "Bobur A.", level: "TOPIK I", grade: "1-daraja" },
  { id: 5, image: "/certificates/cert-5.jpg", name: "Malika R.", level: "TOPIK II", grade: "3-daraja" },
  { id: 6, image: "/certificates/cert-6.jpg", name: "Sherzod N.", level: "TOPIK II", grade: "6-daraja" },
  { id: 7, image: "/certificates/cert-7.jpg", name: "Dilnoza Y.", level: "TOPIK I", grade: "2-daraja" },
  { id: 8, image: "/certificates/cert-8.jpg", name: "Kamola B.", level: "TOPIK II", grade: "4-daraja" },
  { id: 9, image: "/certificates/cert-9.jpg", name: "Kamola B.", level: "TOPIK II", grade: "4-daraja" },
  { id: 10, image: "/certificates/cert-10.jpg", name: "Kamola B.", level: "TOPIK II", grade: "4-daraja" },
];

export default certificates;