import { Service } from "typedi";

@Service()
class Helpers {
  constructor() {
    console.log(123);
  }

  getFirstCharacter = (text: string) => {
    return text.charAt(0);
  };
}

export default Helpers;
