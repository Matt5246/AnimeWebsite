import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const animeList = [
  {
    id: 1,
    title: 'Dandadan',
    rating: 4.6,
    episodes: 11,
    description: 'The series follows two teenagers with supernatural powers fighting yōkai and aliens with help from multiple allies.',
    image: "https://preview.redd.it/dandadan-anime-key-visual-v0-qppso1phbj8d1.png?auto=webp&s=f49daae8834ef5ac449a0562f2ea9cded472b9d0",
    genres: ['Adventure', 'Fantasy', 'Drama', 'Psychological'],
    videoId: ['1cEFLV_UoA_9PJYH65YtPiKz56wMEFBFV', "1m0K4R4wX_KRavAmDWn8zZQ3xDjFGBi0c", "136IWBsEOcP24Qe1P_EY52mevcyxojeRo", "1Sjh4gQ5jVwlrntpBGs7DnERjW8APUjMb"],

  },
  {
    id: 2,
    title: 'One Piece',
    rating: 4.9,
    episodes: 1000,
    description:
      'Follows the adventures of Monkey D. Luffy and his pirate crew in their quest to find the greatest treasure left by the legendary Pirate, Gold Roger. It explores themes of freedom, adventure, and the bonds of friendship.',
    image:
      'https://a.storyblok.com/f/178900/960x540/3e0ac3e134/nami-one-piece-25th-anniversary.jpg/m/filters:quality(95)format(webp)',
    genres: ['Adventure', 'Fantasy', 'Action', 'Comedy'],
    videoUrl: 'https://www.youtube.com/watch?v=9B7Xl28zR6s',
  },
  {
    id: 3,
    title: 'Attack on Titan',
    rating: 4.9,
    episodes: 87,
    description:
      'In a world where humanity is on the brink of extinction due to man-eating giants known as Titans, the story follows Eren Yeager and his friends who join the military to fight back against these monsters. Themes of survival, betrayal, and human nature are explored.',
    image: 'https://fwcdn.pl/fpo/62/27/636227/7548140_1.3.jpg',
    genres: ['Action', 'Drama', 'Fantasy', 'Shonen'],
    videoUrl: 'https://www.youtube.com/watch?v=qiA0t2Hc6j0',
  },
  {
    id: 4,
    title: 'My Hero Academia',
    rating: 4.7,
    episodes: 138,
    description:
      'A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy to learn what it truly means to be a hero. This series emphasizes themes of heroism, friendship, and self-discovery.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_QL75_UY281_CR5,0,190,281_.jpg',
    genres: ['Action', 'Superhero', 'School', 'Comedy'],
    videoUrl: 'https://www.youtube.com/watch?v=H0KjD5YB1j0',
  },
  {
    id: 5,
    title: 'Demon Slayer',
    rating: 4.9,
    episodes: 55,
    description:
      'After his family is slaughtered and his sister is turned into a demon, Tanjiro Kamado becomes a demon slayer to avenge his family and cure his sister. The series beautifully blends stunning animation with themes of family, loss, and perseverance.',
    image:
      'https://image.tmdb.org/t/p/original/r9Rx67TBbIm5XoTcefsNcUhgKth.jpg',
    genres: ['Action', 'Supernatural', 'Adventure', 'Drama'],
    videoUrl: 'https://www.youtube.com/watch?v=8Q_1B2k04QA',
  },
  {
    id: 6,
    title: 'Death Note',
    rating: 4.8,
    episodes: 37,
    description:
      'A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name. This psychological thriller delves into themes of morality, justice, and the consequences of absolute power.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
    genres: ['Thriller', 'Supernatural', 'Mystery', 'Psychological'],
    videoUrl: ['https://r1---sn-oj5hn5-55.googlevideo.com/videoplayback?expire=1735954466&ei=AnR4Z8-TC5Wni9oP4bOpqQc&ip=5.79.66.19&id=4bcf80f442cabe8d&itag=22&source=picasa&begin=0&requiressl=yes&xpc=EghoqJzIP3oBAQ==&met=1735947266,&mh=ag&mm=32&mn=sn-oj5hn5-55&ms=su&mv=u&mvi=1&pl=23&rms=su,su&sc=yes&susc=ph&app=fife&ic=388&eaua=54KnF9cyMFk&pcm2=yes&mime=video/mp4&vprv=1&prv=1&rqh=1&cnr=14&dur=1377.547&lmt=1572175526293378&mt=1735946047&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,eaua,pcm2,mime,vprv,prv,rqh,cnr,dur,lmt&sig=AJfQdSswRQIhANc75JVJ9V23HJoYTMb6yOEm5rs0A6vLqDmMTwwEQC9UAiB-mda_A03Sbx1-l-q9-7THiEMN-O0XgzauooFHUOlGeA==&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=AGluJ3MwRQIgGjyCGmyOX9oPOUUD-oiULpqEt-GRar0ISLLo-so8gXMCIQCqtILEwxNg2SBg46euRZJi69aCpG7O-xzQUXb0XT2dAg==',
    'https://r4---sn-npoeenly.googlevideo.com/videoplayback?expire=1736214024&ei=2Ft8Z-KCG-60mvUPrrTEmAE&ip=37.19.205.205&id=550aa04eeb77372c&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&ttl=transient&susc=dr&driveid=12zMbQMRahxP4y1Zooo0xQATk6wOS1Egp&app=explorer&eaua=54KnF9cyMFk&mime=video/mp4&vprv=1&prv=1&rqh=1&cnr=14&dur=1435.109&lmt=1719413014180659&subapp=UNKNOWN&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,rqh,cnr,dur,lmt&sig=AJfQdSswRgIhAOifj1sPJ4TUFuZxaR5605xUhkv-W3aNEOB0ZSS7-ToTAiEAtaxB8CskQHBOkQzV0pwhWKHSycxxIbnb9GqIS-bA7dU=&tso=717&redirect_counter=1&cm2rm=sn-oguely7s&rrc=80&fexp=24350590,24350737,24350827,24350851&req_id=91f8e51b7184a3ee&cms_redirect=yes&cmsv=e&met=1736203942,&mh=_Y&mm=34&mn=sn-npoeenly&ms=ltu&mt=1736203473&mv=m&mvi=4&pl=24&rms=ltu,su&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,tso&lsig=AGluJ3MwRQIgGe9ZKok4zY_AEiX4KoS2m8rB9OsjPnSMgM5AEzMTfi0CIQDrttLwuGUGrX1TPwViSPrQziolka4A98X2mSwBlQpnsQ%3D%3D']
  },
  {
    id: 7,
    title: 'Fullmetal Alchemist: Brotherhood',
    rating: 4.9,
    episodes: 64,
    description:
      "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical ritual. This series is known for its deep narrative, exploring themes of sacrifice, redemption, and the moral implications of science.",
    image:
      'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    genres: ['Action', 'Fantasy', 'Adventure', 'Drama'],
    videoUrl: 'https://www.youtube.com/watch?v=JmP9ddEICzg',
  },
  {
    id: 8,
    title: 'Jujutsu Kaisen',
    rating: 4.8,
    episodes: 46,
    description:
      'Yuji Itadori joins a high school for sorcerers to help combat Cursed Spirits, supernatural creatures born from negative human emotions. The series is notable for its engaging action sequences and strong character development.',
    image:
      'https://image.tmdb.org/t/p/original/btFclZIXhzE6qHbnvAURDtzD2ks.jpg',
    genres: ['Action', 'Supernatural', 'Fantasy', 'Adventure'],
    videoId: ['1sL97POXWjGwcUTpz6k6v53GZekim3ZYC',"12zMbQMRahxP4y1Zooo0xQATk6wOS1Egp"],
    videoUrl: 'https://www.youtube.com/watch?v=ZMk1RmhL4go',
  },
  {
    id: 9,
    title: 'Steins;Gate',
    rating: 4.9,
    episodes: 24,
    description:
      'A self-proclaimed mad scientist discovers a way to send messages to the past, leading to dire consequences. This sci-fi thriller intricately explores time travel and its impact on personal relationships.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg',
    genres: ['Sci-Fi', 'Thriller', 'Drama', 'Mystery'],
    videoUrl: 'https://www.youtube.com/watch?v=GcRh5k8spKo',
  },
  {
    id: 10,
    title: 'Spy x Family',
    rating: 4.7,
    episodes: 37,
    description:
      'A spy must create a fake family to complete his mission, unknowingly adopting a telepathic daughter and marrying an assassin. This anime combines action with comedic elements and family dynamics.',
    image:
      'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe',
    genres: ['Comedy', 'Action', 'Slice of Life', 'Adventure'],
    videoUrl: 'https://www.youtube.com/watch?v=tcLnPr5xpuo',
  },
  {
    id: 11,
    title: 'Tokyo Ghoul',
    rating: 4.6,
    episodes: 48,
    description:
      'A college student becomes half-ghoul after surviving a deadly encounter, forcing him to navigate between human and ghoul worlds. This dark fantasy explores themes of identity, societal conflict, and morality.',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2E2OTgzODktMjBhYy00MjJjLWI0OTgtNGYxOGNhMWMxOWE4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg',
    genres: ['Horror', 'Action', 'Supernatural', 'Drama'],
    videoUrl: 'https://www.youtube.com/watch?v=XyUVQKe1S78',
  },
  {
    id: 12,
    title: 'Hunter x Hunter',
    rating: 4.9,
    episodes: 148,
    description:
      'Gon Freecss aspires to become a Hunter, an elite member of society, while searching for his father. The series features rich world-building and explores themes of friendship, ambition, and adventure.',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg',
    genres: ['Adventure', 'Fantasy'],
  },
  {
    id: 13,
    title: 'Cowboy Bebop',
    rating: 4.8,
    episodes: 26,
    description:
      "Follow the adventures of bounty hunters in space as they chase down the galaxy's most dangerous criminals.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc1ZTdlYWUtY2NhZS00OTIxLTgzNjYtN2YxNTBmOTVkMjk4XkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg',
    genres: ['Sci-Fi', 'Action'],
  },
  {
    id: 14,
    title: 'Neon Genesis Evangelion',
    rating: 4.7,
    episodes: 26,
    description:
      'Teenagers pilot giant robots to defend humanity against mysterious beings known as Angels.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDc5M2FkMGItMDY3Yy00NjMwLTlkZjQtMDc3MTQ3M2I5N2E5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg',
    genres: ['Psychological', 'Mecha'],
  },
  {
    id: 15,
    title: 'Sword Art Online',
    rating: 4.5,
    episodes: 100,
    description:
      'Players of a virtual reality MMORPG find themselves trapped in the game, where dying in-game means dying in real life. This series explores themes of virtual reality, relationships, and survival.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc3ODQ4MjMzN15BMl5BanBnXkFtZTcwNzU0NTIwMw@@._V1_FMjpg_UX1000_.jpg',
    genres: [
      'Action',
      'Adventure',
      'Fantasy',
      'Romance',
      'Science Fiction',
    ],
    videoId: ['1Vvm8s4emVOxERzSUa0-HqR8-hucWRIIF'],
    videoUrl: 'https://www.youtube.com/watch?v=FNs9NEb6B5s',
  },
  {
    id: 16,
    title: 'Your Lie in April',
    rating: 4.8,
    episodes: 22,
    description:
      'A piano prodigy who lost his ability to hear the sound of his piano meets a free-spirited violinist who helps him rediscover his love for music. This anime beautifully blends music, romance, and emotional growth.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTk2MDc3MDU2MV5BMl5BanBnXkFtZTgwMzQyNTI3NTE@._V1_FMjpg_UX1000_.jpg',
    genres: ['Romance', 'Drama', 'Music', 'Slice of Life'],
    videoUrl: 'https://www.youtube.com/watch?v=W1Z7bR88B14',
  },
  {
    id: 17,
    title: 'Monster',
    rating: 4.7,
    episodes: 74,
    description:
      "A psychological thriller following a doctor who saves a child's life, only to find that he has grown into a sociopath and a murderer. The series explores morality, the nature of evil, and personal responsibility.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMGU5NGU3Y2UtZGE5Zi00NDk5LTgwZDMtMzEyNjA5NzY5MWM3XkEyXkFqcGdeQXVyNTE5NTA2OTU@._V1_.jpg',
    genres: ['Thriller', 'Mystery', 'Psychological', 'Drama'],
    videoUrl: 'https://www.youtube.com/watch?v=SzT1Jg9Qqmo',
  },
  {
    id: 18,
    title: 'Haikyuu!!',
    rating: 4.8,
    episodes: 85,
    description:
      'A high school student with a passion for volleyball teams up with a talented player to lead their school team to the championship. This series showcases teamwork, perseverance, and the spirit of competition.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjU1NTg1MzY4MV5BMl5BanBnXkFtZTgwNTM0NTEwMTE@._V1_.jpg',
    genres: ['Sports', 'Comedy', 'Drama', 'Slice of Life'],
    videoUrl: 'https://www.youtube.com/watch?v=8hi01OjR2Yw',
  },
  {
    id: 19,
    title: 'Cowboy Bebop',
    rating: 4.9,
    episodes: 26,
    description:
      'In the year 2071, a group of bounty hunters travels through space aboard the Bebop. This series combines elements of science fiction, film noir, and westerns, exploring themes of loneliness and existentialism.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNGZlYTA0NzgtNGEwOS00NDBlLTg3MjYtNDdkOTFkMGM2MmM2XkEyXkFqcGdeQXVyNzI3MjA2MjI@._V1_.jpg',
    genres: ['Action', 'Adventure', 'Sci-Fi', 'Drama', 'Space Western'],
    videoUrl: 'https://www.youtube.com/watch?v=GfDgGvOc7fU',
  },
  {
    id: 20,
    title: 'Fate/Zero',
    rating: 4.7,
    episodes: 25,
    description:
      'Set before the events of Fate/stay night, it follows the Fourth Holy Grail War and the dark secrets of the mages involved. This anime is known for its deep narrative and philosophical themes.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc4NDU1NjU5MF5BMl5BanBnXkFtZTcwMDU1NTIwMw@@._V1_FMjpg_UX1000_.jpg',
    genres: ['Action', 'Fantasy', 'Drama', 'Supernatural'],
    videoUrl: 'https://www.youtube.com/watch?v=YdKWo9j9Htw',
  },
  {
    id: 21,
    title: 'Code Geass',
    rating: 4.9,
    episodes: 50,
    description:
      'In a world where the Holy Britannian Empire has conquered Japan, a young man gains the power to command anyone to do his bidding. This series is a thrilling mix of mecha, strategy, and rebellion.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTcwMzg5NzI1Nl5BMl5BanBnXkFtZTcwNzYzMjI2Mw@@._V1_.jpg',
    genres: ['Action', 'Mecha', 'Drama', 'Supernatural', 'Political'],
    videoUrl: 'https://www.youtube.com/watch?v=Xgq2n2UMLuE',
  },
  {
    id: 22,
    title: 'Clannad: After Story',
    rating: 4.9,
    episodes: 24,
    description:
      'Follows Tomoya Okazaki as he navigates life after high school and deals with themes of family, love, and loss. The series is known for its emotional depth and character development.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTk1MzE1NDQ5OF5BMl5BanBnXkFtZTcwMTg3MTQ4Mw@@._V1_.jpg',
    genres: ['Drama', 'Romance', 'Slice of Life', 'Supernatural'],
    videoUrl: 'https://www.youtube.com/watch?v=z4t8zg90de0',
  },
  {
    id: 23,
    title: 'Vinland Saga',
    rating: 4.8,
    episodes: 24,
    description:
      "A historical anime that follows Thorfinn, the son of a legendary Viking warrior, as he seeks revenge against the man who killed his father. The series explores themes of honor, revenge, and the true meaning of a warrior's life.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg5MzgzNTg3Ml5BMl5BanBnXkFtZTgwMTU0NzU4MjI@._V1_.jpg',
    genres: ['Action', 'Adventure', 'Drama', 'Historical'],
    videoUrl: 'https://www.youtube.com/watch?v=0XMW3PPEbTY',
  },
  {
    id: 24,
    title: 'Naruto',
    rating: 4.8,
    episodes: 720,
    description:
      'A young ninja who seeks recognition from his peers and dreams of becoming the Hokage. This story dives into themes of friendship, perseverance, and the quest for personal identity.',
    image:
      'https://m.media-amazon.com/images/S/pv-target-images/0c9ce4e037546965d6b1f3807e9f8f549a113d32066b2bdb22ada5d179c0d89a.jpg',
    genres: ['Action', 'Adventure', 'Fantasy', 'Shonen'],
    videoUrl: 'https://www.youtube.com/watch?v=8vSt3oQbLso',
  },
  {
    id: 25,
    title: 'Kill la kill',
    rating: 4.7,
    episodes: 24,
    description:
      'Ryuko Matoi seeks revenge against the student council president who killed her father. This series is known for its over-the-top action, humor, and themes of power and rebellion.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTIwMzUwNzQ5M15BMl5BanBnXkFtZTgwNjQ0NjQ4NjM@._V1_.jpg',
    genres: ['Action', 'Comedy', 'Supernatural'],
    videoId:['1r98AIUXZVksPibm5ZRxMZ17La8S4ZOn6'],
    videoUrl: 'https://www.youtube.com/watch?v=8cYd8tZ8JZg',
    
  }
];
