export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, title: "대통령 탄핵안 가결 여부", options: ["찬성", "반대"] },
      { id: 2, title: "조기 대선 실시 시기", options: ["2025년", "2026년 이후"] },
      { id: 3, title: "주요 정당의 향후 지지율 변화", options: ["상승", "하락"] }
    ]);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
