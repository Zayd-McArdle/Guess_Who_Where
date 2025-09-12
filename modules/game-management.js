export function saveGame(score){
  const content = { score : score };
  const write = JSON.stringify(content);
  const data = fs.writeFileSync('save _file.txt', write);
}

export function loadGame(score){
  let rawData = fs.readFlieSync('save_file.txt');
  score = JSON.parse(rawData);
  return score;
}