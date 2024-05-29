export default function playCustomSound(sound: string) {
  const audioInstance = new Audio(sound);

  audioInstance.play();
}
