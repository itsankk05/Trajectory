export default function searchAnswer(collectedAnswers) {
  // const class12 = [];
  const class10Sci = [
    "Mathematics and Science",
    "Solving puzzles or building things",
    "Working in a laboratory or research setting",
    "Analyzing data and solving problems",
    "Becoming a scientist or engineer",
    "Mathematics and technological advancements",
    "Complex problem-solving and logical reasoning",
    "Engineering and computer science",
    "Innovating and contributing to scientific advancements",
    "Logic will get you from A to B. Imagination will take you everywhere",
    "Solving intricate puzzles and mathematical challenges",
    "By analyzing and breaking down the components logically",
    "Laboratories and hands-on experimentation",
    "Solving complex problems and making discoveries",
    "Making a positive impact on individuals and society",
  ];
  let class10PointsScience = 0;
  let class10PointsCommerce = 0;
  // let class12Points = 0;
  let class10PointsArts = 0;
  let ansLen = collectedAnswers.length;
  for (let i = 0; i <= ansLen; i++) {
    // if (collectedAnswers[i] in class12) {
    //   class12Poin  ts = +1;
    // }
    if (collectedAnswers[i] in class10Sci) {
      class10PointsScience += 1;
    }
  }
  return [class10PointsScience, class10PointsCommerce, class10PointsArts];
}
