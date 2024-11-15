// Imports
import Acel from "./assets/Acel-Icon.png";
import Ashoka from "./assets/Ashoka-icon.webp";
import Attila from "./assets/Attila-Icon-1.webp";
import Baldassi from "./assets/Baldassi-Icon.webp";
import Bellevue from "./assets/Bellevue-Icon.png";
import Boudica from "./assets/Boudica.png";
import Cid from "./assets/Cid-Icon.webp";
import Clyde from "./assets/Clyde-Icon.webp";
import CuiRuyi from "./assets/Cui-Ruyi-Icon.webp";
import DariusTheGreat from "./assets/Darius-the-Great-icon.webp";
import DiaoChan from "./assets/Diao-Chan.png";
import FrederickBarbarossa from "./assets/Frederick-Barbarossa-Icon.webp";
import GaoMeng from "./assets/Gao-Meng-Icon.webp";
import Gatos from "./assets/Gatos-Icon.webp";
import GaunYU from "./assets/Gaun-YU-Icon.webp";
import Hammurabi from "./assets/Hammurabi-Icon.webp";
import Hannibal from "./assets/Hannibal-Icon.webp";
import Harald from "./assets/Harald-icon.webp";
import HuaMulan from "./assets/Hua-Mulan-Icon-1.webp";
import JoanOfArc from "./assets/Joan-of-Arc-Icon.webp";
import Josephine from "./assets/Josephine-icon.webp";
import JuliusCaesar from "./assets/Julius-Caesar-icon.webp";
import JustinianGreat from "./assets/Justinian-Great-Icon.webp";
import Kaso from "./assets/Kaso-Icon.webp";
import Khalid from "./assets/Khalid-Icon.webp";
import KingArthur from "./assets/King-Arthur-Icon.webp";
import KingDavid from "./assets/King-David-icon.webp";
import Leo from "./assets/Leo-Icon.webp";
import Leon from "./assets/Leon-Icon.webp";
import Leonidas from "./assets/Leonidas-Icon-1.webp";
import LiDaoxuan from "./assets/Li-Daoxuan-icon.webp";
import LuBu from "./assets/Lu-Bu-Icon.png";
import MiyamotoMusashi from "./assets/Miyamoto-Musashi-Icon.webp";
import Narses from "./assets/Narses-Icon.webp";
import Nino from "./assets/Nino-Icon.webp";
import Octavian from "./assets/Octavian-Icon.webp";
import OdaNobunaga from "./assets/Oda-Nobunaga.png";
import Philip from "./assets/Philip-Icon.webp";
import QueenSeondeok from "./assets/Queen-Seondeok-Cion.png";
import QueenOfSheba from "./assets/Queen-of-Sheba-Icon.webp";
import RamKhamhaeng from "./assets/Ram-Khamhaeng-Icon.png";
import RaniDurgavati from "./assets/Rani-Durgavati-Icon.webp";
import Richard from "./assets/Richard-Icon-1.webp";
import SejongTheGreat from "./assets/Sejong-The-Great.png";
import Suleiman from "./assets/Suleiman-Icon-1.webp";
import SunTzu from "./assets/Sun-Tzu-Icon.webp";
import Thanius from "./assets/Thanius-Iccon.webp";
import Theodora from "./assets/Theodora-Icon-1.webp";
import TokugawaIeyasu from "./assets/Tokugawa-Ieyasu.png";
import ToyotomiHideyoshi from "./assets/Toyotomi-Hideyoshi.png";
import Tribhuwana from "./assets/Tribhuwana-Icon-1.webp";
import WuWei from "./assets/Wu-Wei-Icon.webp";
import YiSeongGye from "./assets/Yi-Seong-Gye.png";
import YiSunShin from "./assets/Yi-Sun-Shin-icon.webp";
import Yodit from "./assets/Yodit-Icon.png";
import YuanXia from "./assets/Yuan-Xia-Icon.webp";
import Cleopatra from "./assets/cleopatra-icon-1.webp";
import ConstantineTheGreat from "./assets/constantine-the-Great-icon.webp";
import Luki from "./assets/luki-Icon.webp";

// JSON list
const heroesList = [
  { id: 1, name: "Acel", image: Acel },
  { id: 2, name: "Ashoka", image: Ashoka },
  { id: 3, name: "Attila", image: Attila },
  { id: 4, name: "Baldassi", image: Baldassi },
  { id: 5, name: "Bellevue", image: Bellevue },
  { id: 6, name: "Boudica", image: Boudica },
  { id: 7, name: "Cid", image: Cid },
  { id: 8, name: "Clyde", image: Clyde },
  { id: 9, name: "Cui Ruyi", image: CuiRuyi },
  { id: 10, name: "Darius The Great", image: DariusTheGreat },
  { id: 11, name: "Diao Chan", image: DiaoChan },
  { id: 12, name: "Frederick Barbarossa", image: FrederickBarbarossa },
  { id: 13, name: "Gao Meng", image: GaoMeng },
  { id: 14, name: "Gatos", image: Gatos },
  { id: 15, name: "Gaun YU", image: GaunYU },
  { id: 16, name: "Hammurabi", image: Hammurabi },
  { id: 17, name: "Hannibal", image: Hannibal },
  { id: 18, name: "Harald", image: Harald },
  { id: 19, name: "Hua Mulan", image: HuaMulan },
  { id: 20, name: "Joan Of Arc", image: JoanOfArc },
  { id: 21, name: "Josephine", image: Josephine },
  { id: 22, name: "Julius Caesar", image: JuliusCaesar },
  { id: 23, name: "Justinian Great", image: JustinianGreat },
  { id: 24, name: "Kaso", image: Kaso },
  { id: 25, name: "Khalid", image: Khalid },
  { id: 26, name: "King Arthur", image: KingArthur },
  { id: 27, name: "King David", image: KingDavid },
  { id: 28, name: "Leo", image: Leo },
  { id: 29, name: "Leon", image: Leon },
  { id: 30, name: "Leonidas", image: Leonidas },
  { id: 31, name: "Li Daoxuan", image: LiDaoxuan },
  { id: 32, name: "Lu Bu", image: LuBu },
  { id: 33, name: "Miyamoto Musashi", image: MiyamotoMusashi },
  { id: 34, name: "Narses", image: Narses },
  { id: 35, name: "Nino", image: Nino },
  { id: 36, name: "Octavian", image: Octavian },
  { id: 37, name: "Oda Nobunaga", image: OdaNobunaga },
  { id: 38, name: "Philip", image: Philip },
  { id: 39, name: "Queen Seondeok", image: QueenSeondeok },
  { id: 40, name: "Queen Of Sheba", image: QueenOfSheba },
  { id: 41, name: "Ram Khamhaeng", image: RamKhamhaeng },
  { id: 42, name: "Rani Durgavati", image: RaniDurgavati },
  { id: 43, name: "Richard", image: Richard },
  { id: 44, name: "Sejong The Great", image: SejongTheGreat },
  { id: 45, name: "Suleiman", image: Suleiman },
  { id: 46, name: "Sun Tzu", image: SunTzu },
  { id: 47, name: "Thanius", image: Thanius },
  { id: 48, name: "Theodora", image: Theodora },
  { id: 49, name: "Tokugawa Ieyasu", image: TokugawaIeyasu },
  { id: 50, name: "Toyotomi Hideyoshi", image: ToyotomiHideyoshi },
  { id: 51, name: "Tribhuwana", image: Tribhuwana },
  { id: 52, name: "Wu Wei", image: WuWei },
  { id: 53, name: "Yi Seong Gye", image: YiSeongGye },
  { id: 54, name: "Yi Sun Shin", image: YiSunShin },
  { id: 55, name: "Yodit", image: Yodit },
  { id: 56, name: "Yuan Xia", image: YuanXia },
  { id: 57, name: "Cleopatra", image: Cleopatra },
  { id: 58, name: "Constantine The Great", image: ConstantineTheGreat },
  { id: 59, name: "Luki", image: Luki },
];

export default heroesList;