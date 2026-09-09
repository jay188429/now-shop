const SHOP_DATA = {
  name: "나우 상사",
  tagline: "자취하는당신! 20년차 자취인이 추천하는 필수템!",
  description: "자취하는당신! 20년차 자취인이 추천하는 필수템!",
  products: [
    {
      id: "p1",
      name: "자취생 필수 1구 인덕션",
      price: 39000,
      category: "주방",
      desc: "원룸에서도 공간 차지 없이 깔끔하게 요리할 수 있는 간편 인덕션입니다."
    },
    {
      id: "p2",
      name: "초스피드 압축 규조토 발매트",
      price: 14500,
      category: "욕실",
      desc: "샤워 후 3초 만에 물기를 흡수해 좁은 화장실 앞을 항상 보송하게 유지합니다."
    },
    {
      id: "p3",
      name: "올인원 먼지 싹 돌돌이 클리너",
      price: 9800,
      category: "청소",
      desc: "침구 머리카락부터 옷 먼지까지 한 번에 정리하는 자취 필수 청소 도구입니다."
    },
    {
      id: "p4",
      name: "틈새 활용 3단 이동식 수납 선반",
      price: 22000,
      category: "가구/수납",
      desc: "세탁기 옆이나 냉장고 사이 남는 틈새 공간을 알차게 쓸 수 있습니다."
    },
    {
      id: "p5",
      name: "전자레인지 전용 계란찜·라면 용기",
      price: 8500,
      category: "주방",
      desc: "불 없이 전자레인지만으로 5분 만에 한 끼를 해결해 주는 만능 용기입니다."
    },
    {
      id: "p6",
      name: "암막 100% 미니 아일렛 암막 커튼",
      price: 27900,
      category: "인테리어",
      desc: "낮에도 밤처럼 깜깜하게 만들어 주어 자취생의 숙면을 완벽히 보장합니다."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SHOP_DATA;
}
