import { v4 as uuidv4 } from "uuid";

function chillhop() {
  return [
    {
      name: "Sugarless",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "invention_",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10305",
      color: ["#DE8FA9", "#6976A2"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Snowstalgia",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tapes, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11243",
      color: ["#B8C289", "#4C2D23"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Going Back",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      color: ["#304E59", "#ACB7D0"],
      id: uuidv4(),
      active: true,
    },
  ];
}

export default chillhop;
