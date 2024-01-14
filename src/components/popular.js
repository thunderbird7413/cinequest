import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./popular.css";
export default function Popular() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

const popular_final = [
    {
        "name": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "id": "695721",
        "release_date": "Nov 15, 2023",
        "score_chart": "72%",
        "images_src": "/t/p/w220_and_h330_face/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"
    },
    {
        "name": "Aquaman and the Lost Kingdom",
        "id": "572802",
        "release_date": "Dec 20, 2023",
        "score_chart": "64%",
        "images_src": "/t/p/w220_and_h330_face/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg"
    },
    {
        "name": "The Family Plan",
        "id": "1029575",
        "release_date": "Dec 14, 2023",
        "score_chart": "75%",
        "images_src": "/t/p/w220_and_h330_face/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg"
    },
    {
        "name": "Wonka",
        "id": "787699",
        "release_date": "Dec 06, 2023",
        "score_chart": "72%",
        "images_src": "/t/p/w220_and_h330_face/qhb1qOilapbapxWQn9jtRCMwXJF.jpg"
    },
    {
        "name": "Chicken Run: Dawn of the Nugget",
        "id": "520758",
        "release_date": "Dec 08, 2023",
        "score_chart": "76%",
        "images_src": "/t/p/w220_and_h330_face/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg"
    },
    {
        "name": "The Jester",
        "id": "1118595",
        "release_date": "Sep 20, 2023",
        "score_chart": "59%",
        "images_src": "/t/p/w220_and_h330_face/jsOaCojcuxktg8w1UQkoFfn1y1g.jpg"
    },
    {
        "name": "Thanksgiving",
        "id": "1071215",
        "release_date": "Nov 16, 2023",
        "score_chart": "66%",
        "images_src": "/t/p/w220_and_h330_face/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg"
    },
    {
        "name": "Silent Night",
        "id": "891699",
        "release_date": "Nov 30, 2023",
        "score_chart": "58%",
        "images_src": "/t/p/w220_and_h330_face/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
    },
    {
        "name": "Trolls Band Together",
        "id": "901362",
        "release_date": "Oct 12, 2023",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg"
    },
    {
        "name": "Oppenheimer",
        "id": "872585",
        "release_date": "Jul 19, 2023",
        "score_chart": "81%",
        "images_src": "/t/p/w220_and_h330_face/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },
    {
        "name": "Killers of the Flower Moon",
        "id": "466420",
        "release_date": "Oct 18, 2023",
        "score_chart": "75%",
        "images_src": "/t/p/w220_and_h330_face/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg"
    },
    {
        "name": "Freelance",
        "id": "897087",
        "release_date": "Jan 05, 2023",
        "score_chart": "64%",
        "images_src": "/t/p/w220_and_h330_face/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg"
    },
    {
        "name": "Leo",
        "id": "1075794",
        "release_date": "Nov 17, 2023",
        "score_chart": "75%",
        "images_src": "/t/p/w220_and_h330_face/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg"
    },
    {
        "name": "Five Nights at Freddy's",
        "id": "507089",
        "release_date": "Oct 25, 2023",
        "score_chart": "78%",
        "images_src": "/t/p/w220_and_h330_face/7BpNtNfxuocYEVREzVMO75hso1l.jpg"
    },
    {
        "name": "Leave the World Behind",
        "id": "726209",
        "release_date": "Nov 22, 2023",
        "score_chart": "65%",
        "images_src": "/t/p/w220_and_h330_face/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg"
    },
    {
        "name": "Fast X",
        "id": "385687",
        "release_date": "May 17, 2023",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
    },
    {
        "name": "Megaboa",
        "id": "920081",
        "release_date": "Nov 26, 2021",
        "score_chart": "64%",
        "images_src": "/t/p/w220_and_h330_face/sAnAMv3eyQiGI1z2k8NsvH0Y6r5.jpg"
    },
    {
        "name": "Rebel Moon - Part One: A Child of Fire",
        "id": "848326",
        "release_date": "Dec 15, 2023",
        "score_chart": "65%",
        "images_src": "/t/p/w220_and_h330_face/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg"
    },
    {
        "name": "How the Grinch Stole Christmas",
        "id": "8871",
        "release_date": "Nov 17, 2000",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/52EpMoLTTbKAkM6rSrnNHV2mpLF.jpg"
    },
    {
        "name": "The Grinch",
        "id": "360920",
        "release_date": "Nov 08, 2018",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/1Bc9VNd9CIHIyJtPKFqSQzrXWru.jpg"
    },
    {
        "name": "The Creator",
        "id": "670292",
        "release_date": "Sep 27, 2023",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg"
    },
    {
        "name": "Expend4bles",
        "id": "299054",
        "release_date": "Sep 15, 2023",
        "score_chart": "64%",
        "images_src": "/t/p/w220_and_h330_face/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
    },
    {
        "name": "Barbie",
        "id": "346698",
        "release_date": "Jul 19, 2023",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
    },
    {
        "name": "Aquaman",
        "id": "297802",
        "release_date": "Dec 07, 2018",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/xLPffWMhMj1l50ND3KchMjYoKmE.jpg"
    },
    {
        "name": "The Super Mario Bros. Movie",
        "id": "502356",
        "release_date": "Apr 05, 2023",
        "score_chart": "77%",
        "images_src": "/t/p/w220_and_h330_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
    },
    {
        "name": "Mission: Impossible - Dead Reckoning Part One",
        "id": "575264",
        "release_date": "Jul 08, 2023",
        "score_chart": "75%",
        "images_src": "/t/p/w220_and_h330_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
    },
    {
        "name": "Transformers: Rise of the Beasts",
        "id": "667538",
        "release_date": "Jun 06, 2023",
        "score_chart": "74%",
        "images_src": "/t/p/w220_and_h330_face/gPbM0MK8CP8A174rmUwGsADNYKD.jpg"
    },
    {
        "name": "Krampus",
        "id": "287903",
        "release_date": "Nov 26, 2015",
        "score_chart": "61%",
        "images_src": "/t/p/w220_and_h330_face/sAolMRD9rFSTU7tssfFuLEJJa7w.jpg"
    },
    {
        "name": "The Dark Kingdom",
        "id": "566810",
        "release_date": "Nov 26, 2018",
        "score_chart": "56%",
        "images_src": "/t/p/w220_and_h330_face/o7StI2iR8yY1N67meSkNcXfojyD.jpg"
    },
    {
        "name": "Shrapnel",
        "id": "982932",
        "release_date": "Jul 28, 2023",
        "score_chart": "61%",
        "images_src": "/t/p/w220_and_h330_face/gsRDrAML7hJC8ZCgRQobHIrzbxR.jpg"
    },
    {
        "name": "Godzilla Minus One",
        "id": "940721",
        "release_date": "Nov 03, 2023",
        "score_chart": "80%",
        "images_src": "/t/p/w220_and_h330_face/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg"
    },
    {
        "name": "Escaping Paradise",
        "id": "1146225",
        "release_date": "Jul 08, 2023",
        "score_chart": "47%",
        "images_src": "/t/p/w220_and_h330_face/3UCTls0hVKMCwWtkTmwKcCOzlgu.jpg"
    },
    {
        "name": "Migration",
        "id": "940551",
        "release_date": "Dec 06, 2023",
        "score_chart": "73%",
        "images_src": "/t/p/w220_and_h330_face/kJG74Y1RxLLjRLYOTrBclWpbvkz.jpg"
    },
    {
        "name": "Spider-Man: Across the Spider-Verse",
        "id": "569094",
        "release_date": "May 31, 2023",
        "score_chart": "83%",
        "images_src": "/t/p/w220_and_h330_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
    },
    {
        "name": "Avatar: The Way of Water",
        "id": "76600",
        "release_date": "Dec 14, 2022",
        "score_chart": "76%",
        "images_src": "/t/p/w220_and_h330_face/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    },
    {
        "name": "Elemental",
        "id": "976573",
        "release_date": "Jun 14, 2023",
        "score_chart": "77%",
        "images_src": "/t/p/w220_and_h330_face/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg"
    },
    {
        "name": "Good Boy",
        "id": "983507",
        "release_date": "Jun 03, 2022",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/9DPG1gxLwV2oyFdHq3SnISsWbse.jpg"
    },
    {
        "name": "Meg 2: The Trench",
        "id": "615656",
        "release_date": "Aug 02, 2023",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
    },
    {
        "name": "The Marvels",
        "id": "609681",
        "release_date": "Nov 08, 2023",
        "score_chart": "64%",
        "images_src": "/t/p/w220_and_h330_face/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg"
    },
    {
        "name": "The Equalizer 3",
        "id": "926393",
        "release_date": "Aug 30, 2023",
        "score_chart": "74%",
        "images_src": "/t/p/w220_and_h330_face/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg"
    },
    {
        "name": "Reign of Chaos",
        "id": "951546",
        "release_date": "Apr 12, 2022",
        "score_chart": "58%",
        "images_src": "/t/p/w220_and_h330_face/nTMmpvR9TyV631tpFr4FtYxG0FC.jpg"
    },
    {
        "name": "Heroic",
        "id": "958182",
        "release_date": "Sep 21, 2023",
        "score_chart": "75%",
        "images_src": "/t/p/w220_and_h330_face/tRD18JW9iKqmwkQKvzPYDQetRoI.jpg"
    },
    {
        "name": "Maestro",
        "id": "523607",
        "release_date": "Nov 22, 2023",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/kxj7rMco6RNYsVcNwuGAIlfWu64.jpg"
    },
    {
        "name": "Christmas Bloody Christmas",
        "id": "1019836",
        "release_date": "Oct 05, 2022",
        "score_chart": "56%",
        "images_src": "/t/p/w220_and_h330_face/97PaQ7r4H3y0x9RTXusfedmzf86.jpg"
    },
    {
        "name": "Wish",
        "id": "1022796",
        "release_date": "Nov 13, 2023",
        "score_chart": "65%",
        "images_src": "/t/p/w220_and_h330_face/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg"
    },
    {
        "name": "Aquaman: Heroines of Atlantis",
        "id": "645488",
        "release_date": "Mar 26, 2019",
        "score_chart": "60%",
        "images_src": "/t/p/w220_and_h330_face/pa7m8nqDrEi7hAGB5vTnCkGLPC2.jpg"
    },
    {
        "name": "Spider-Man: No Way Home",
        "id": "634649",
        "release_date": "Dec 15, 2021",
        "score_chart": "79%",
        "images_src": "/t/p/w220_and_h330_face/5weKu49pzJCt06OPpjvT80efnQj.jpg"
    },
    {
        "name": "Home Alone 2: Lost in New York",
        "id": "772",
        "release_date": "Nov 19, 1992",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg"
    },
    {
        "name": "PAW Patrol: The Mighty Movie",
        "id": "893723",
        "release_date": "Sep 21, 2023",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/aTvePCU7exLepwg5hWySjwxojQK.jpg"
    },
    {
        "name": "A Man of Reason",
        "id": "656156",
        "release_date": "Aug 15, 2023",
        "score_chart": "65%",
        "images_src": "/t/p/w220_and_h330_face/ePwZs1oOh4pg8UZP8DuVZZeIn89.jpg"
    },
    {
        "name": "Guimoon: The Lightless Door",
        "id": "844069",
        "release_date": "Aug 25, 2021",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/e1cZ4LaYv1M1RThyUh1sVi21Loe.jpg"
    },
    {
        "name": "The Advent Calendar",
        "id": "762079",
        "release_date": "Dec 01, 2021",
        "score_chart": "66%",
        "images_src": "/t/p/w220_and_h330_face/psaYUHDotafhVNAE1pZN2GkRXJY.jpg"
    },
    {
        "name": "Mount Adams",
        "id": "857879",
        "release_date": "Jul 21, 2021",
        "score_chart": "65%",
        "images_src": "/t/p/w220_and_h330_face/nddTKKAu6z771duaxr1D32pHZ8j.jpg"
    },
    {
        "name": "Napoleon",
        "id": "753342",
        "release_date": "Nov 22, 2023",
        "score_chart": "63%",
        "images_src": "/t/p/w220_and_h330_face/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg"
    },
    {
        "name": "John Wick: Chapter 4",
        "id": "603692",
        "release_date": "Mar 22, 2023",
        "score_chart": "77%",
        "images_src": "/t/p/w220_and_h330_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
    },
    {
        "name": "Galaxy Games",
        "id": "995906",
        "release_date": "Jul 04, 2022",
        "score_chart": "57%",
        "images_src": "/t/p/w220_and_h330_face/8aoIMYZUu8DRrJFkDvz13rehSFL.jpg"
    },
    {
        "name": "My Fault",
        "id": "1010581",
        "release_date": "Jun 08, 2023",
        "score_chart": "80%",
        "images_src": "/t/p/w220_and_h330_face/w46Vw536HwNnEzOa7J24YH9DPRS.jpg"
    },
    {
        "name": "Rumble Through the Dark",
        "id": "844416",
        "release_date": "Nov 03, 2023",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/19UbYIT9WEQS5qSD3BREDxVXk8g.jpg"
    },
    {
        "name": "The Flash",
        "id": "298618",
        "release_date": "Jun 13, 2023",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
    },
    {
        "name": "Shockwave: Countdown to Disaster",
        "id": "479753",
        "release_date": "Sep 02, 2017",
        "score_chart": "56%",
        "images_src": "/t/p/w220_and_h330_face/sBD608VF4TcFHmP7SuC0OcvZQ0b.jpg"
    },
    {
        "name": "Gran Turismo",
        "id": "980489",
        "release_date": "Aug 09, 2023",
        "score_chart": "80%",
        "images_src": "/t/p/w220_and_h330_face/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg"
    },
    {
        "name": "Blue Beetle",
        "id": "565770",
        "release_date": "Aug 16, 2023",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg"
    },
    {
        "name": "Indiana Jones and the Dial of Destiny",
        "id": "335977",
        "release_date": "Jun 28, 2023",
        "score_chart": "66%",
        "images_src": "/t/p/w220_and_h330_face/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg"
    },
    {
        "name": "Muchachos, la película de la gente",
        "id": "1206029",
        "release_date": "Dec 07, 2023",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/4lb7Lpwzu908fbph9enKN0axiYy.jpg"
    },
    {
        "name": "Saw X",
        "id": "951491",
        "release_date": "Sep 26, 2023",
        "score_chart": "73%",
        "images_src": "/t/p/w220_and_h330_face/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg"
    },
    {
        "name": "The Nun II",
        "id": "968051",
        "release_date": "Sep 06, 2023",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg"
    },
    {
        "name": "Puss in Boots: The Last Wish",
        "id": "315162",
        "release_date": "Dec 07, 2022",
        "score_chart": "82%",
        "images_src": "/t/p/w220_and_h330_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
    },
    {
        "name": "Come Out Fighting",
        "id": "1047925",
        "release_date": "May 19, 2023",
        "score_chart": "51%",
        "images_src": "/t/p/w220_and_h330_face/sERwJxz0sqsbcUoTm66l9pI6HcH.jpg"
    },
    {
        "name": "Fast Charlie",
        "id": "945937",
        "release_date": "Dec 08, 2023",
        "score_chart": "63%",
        "images_src": "/t/p/w220_and_h330_face/3y72ffwYRUPOj4yOQbiTaN897Tm.jpg"
    },
    {
        "name": "The Collective",
        "id": "1060090",
        "release_date": "Aug 04, 2023",
        "score_chart": "55%",
        "images_src": "/t/p/w220_and_h330_face/Ah9H6Sj434nJiZpTPQrovHaEePV.jpg"
    },
    {
        "name": "Kung Fu Panda",
        "id": "9502",
        "release_date": "Jun 04, 2008",
        "score_chart": "72%",
        "images_src": "/t/p/w220_and_h330_face/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg"
    },
    {
        "name": "Charlie and the Chocolate Factory",
        "id": "118",
        "release_date": "Jul 13, 2005",
        "score_chart": "70%",
        "images_src": "/t/p/w220_and_h330_face/wfGfxtBkhBzQfOZw4S8IQZgrH0a.jpg"
    },
    {
        "name": "Candy Cane Lane",
        "id": "1022964",
        "release_date": "Nov 29, 2023",
        "score_chart": "62%",
        "images_src": "/t/p/w220_and_h330_face/of6Ds591FJTKoBHYjDFzH6jlTyK.jpg"
    },
    {
        "name": "Guardians of the Galaxy Vol. 3",
        "id": "447365",
        "release_date": "May 03, 2023",
        "score_chart": "80%",
        "images_src": "/t/p/w220_and_h330_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
    },
    {
        "name": "Retribution",
        "id": "762430",
        "release_date": "Aug 23, 2023",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg"
    },
    {
        "name": "The Hunger Games: Mockingjay - Part 1",
        "id": "131631",
        "release_date": "Nov 19, 2014",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg"
    },
    {
        "name": "Saltburn",
        "id": "930564",
        "release_date": "Nov 16, 2023",
        "score_chart": "72%",
        "images_src": "/t/p/w220_and_h330_face/qjhahNLSZ705B5JP92YMEYPocPz.jpg"
    },
    {
        "name": "Digimon Adventure 02: The Beginning",
        "id": "872976",
        "release_date": "Oct 27, 2023",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/rYblAHp4k7xK6MDRcGM3GDB6QdV.jpg"
    },
    {
        "name": "Princess Khutulun",
        "id": "960481",
        "release_date": "Dec 03, 2021",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/dhD4QNmZwfh88y4Dm5XsX7dWFVf.jpg"
    },
    {
        "name": "Willy Wonka & the Chocolate Factory",
        "id": "252",
        "release_date": "Jun 29, 1971",
        "score_chart": "74%",
        "images_src": "/t/p/w220_and_h330_face/vmpsZkrs4Uvkp9r1atL8B3frA63.jpg"
    },
    {
        "name": "Harry Potter and the Philosopher's Stone",
        "id": "671",
        "release_date": "Nov 16, 2001",
        "score_chart": "79%",
        "images_src": "/t/p/w220_and_h330_face/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
    },
    {
        "name": "Dragon Ball: Mystical Adventure",
        "id": "116776",
        "release_date": "Jul 09, 1988",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/5aXG0B3TYTpQsodXzvYCkKQfpB1.jpg"
    },
    {
        "name": "National Lampoon's Christmas Vacation",
        "id": "5825",
        "release_date": "Nov 30, 1989",
        "score_chart": "72%",
        "images_src": "/t/p/w220_and_h330_face/gL8ZDtAy8vO95aAnv1H5CR4CGMA.jpg"
    },
    {
        "name": "The Exorcist: Believer",
        "id": "807172",
        "release_date": "Oct 04, 2023",
        "score_chart": "61%",
        "images_src": "/t/p/w220_and_h330_face/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg"
    },
    {
        "name": "Finestkind",
        "id": "507532",
        "release_date": "Sep 08, 2023",
        "score_chart": "76%",
        "images_src": "/t/p/w220_and_h330_face/90D6sXfbXKhDpd4S1cHICdAe8VD.jpg"
    },
    {
        "name": "Wifelike",
        "id": "1001835",
        "release_date": "Aug 12, 2022",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/tea2gDZPxw0wfKC2S2VRWHagtt4.jpg"
    },
    {
        "name": "The Rope Curse 3",
        "id": "1033667",
        "release_date": "Aug 25, 2023",
        "score_chart": "48%",
        "images_src": "/t/p/w220_and_h330_face/ocb5sGHk00Kw30qxdNJGfqvKWnl.jpg"
    },
    {
        "name": "Talk to Me",
        "id": "1008042",
        "release_date": "Jul 26, 2023",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/kdPMUMJzyYAc4roD52qavX0nLIC.jpg"
    },
    {
        "name": "Sobreviviendo mis XV",
        "id": "1172029",
        "release_date": "Sep 21, 2023",
        "score_chart": "76%",
        "images_src": "/t/p/w220_and_h330_face/kr50u2w3G5L7RqLf6frFliJqPrZ.jpg"
    },
    {
        "name": "The Sacrifice Game",
        "id": "973471",
        "release_date": "Dec 07, 2023",
        "score_chart": "57%",
        "images_src": "/t/p/w220_and_h330_face/6w9Wphe5O5zySyoGxlYJ5irwh4f.jpg"
    },
    {
        "name": "TAYLOR SWIFT | THE ERAS TOUR",
        "id": "1160164",
        "release_date": "Oct 13, 2023",
        "score_chart": "83%",
        "images_src": "/t/p/w220_and_h330_face/jf3YO8hOqGHCupsREf5qymYq1n.jpg"
    },
    {
        "name": "Inferno",
        "id": "10908",
        "release_date": "Sep 25, 1999",
        "score_chart": "61%",
        "images_src": "/t/p/w220_and_h330_face/dFlI0Vb4JOsRXG1JSS2Ufs6Sp8k.jpg"
    },
    {
        "name": "Mavka: The Forest Song",
        "id": "459003",
        "release_date": "Mar 02, 2023",
        "score_chart": "73%",
        "images_src": "/t/p/w220_and_h330_face/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg"
    },
    {
        "name": "The Bad Guys: A Very Bad Holiday",
        "id": "1046032",
        "release_date": "Nov 30, 2023",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/atBDD05PbVDI2lm2OUy1KFQpzen.jpg"
    },
    {
        "name": "Psycho-Pass: Providence",
        "id": "1012652",
        "release_date": "May 12, 2023",
        "score_chart": "66%",
        "images_src": "/t/p/w220_and_h330_face/nUt28pC6jc7Ixh8NOOf2BqKTU5k.jpg"
    },
    {
        "name": "The Little Mermaid",
        "id": "447277",
        "release_date": "May 18, 2023",
        "score_chart": "64%",
        "images_src": "/t/p/w220_and_h330_face/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg"
    },
    {
        "name": "Kung Fu Panda 2",
        "id": "49444",
        "release_date": "May 25, 2011",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/mtqqD00vB4PGRt20gWtGqFhrkd0.jpg"
    },
    {
        "name": "Avengers: Infinity War",
        "id": "299536",
        "release_date": "Apr 25, 2018",
        "score_chart": "82%",
        "images_src": "/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
    },
    {
        "name": "The Polar Express",
        "id": "5255",
        "release_date": "Nov 10, 2004",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/eOoCzH0MqeGr2taUZO4SwG416PF.jpg"
    },
    {
        "name": "Immersion",
        "id": "1114205",
        "release_date": "Jun 16, 2023",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/5UA8qwDaCFCA2eyNafGZZQiKvSX.jpg"
    },
    {
        "name": "Kung Fu Panda 4",
        "id": "1011985",
        "release_date": "Mar 06, 2024",
        "score_chart": "0.%",
        "images_src": "/t/p/w220_and_h330_face/v77WjVsTMPKTpXZoW2RVNegappO.jpg"
    },
    {
        "name": "Top Gun: Maverick",
        "id": "361743",
        "release_date": "May 24, 2022",
        "score_chart": "82%",
        "images_src": "/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
    },
    {
        "name": "Kung Fu Panda 3",
        "id": "140300",
        "release_date": "Jan 23, 2016",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/oajNi4Su39WAByHI6EONu8G8HYn.jpg"
    },
    {
        "name": "The Feast of Amrita",
        "id": "725064",
        "release_date": "May 26, 2023",
        "score_chart": "60%",
        "images_src": "/t/p/w220_and_h330_face/eHt9KnmZDQBiEnhk7hoYcKxCiwX.jpg"
    },
    {
        "name": "A Tale of Two Guns",
        "id": "940175",
        "release_date": "Feb 17, 2022",
        "score_chart": "62%",
        "images_src": "/t/p/w220_and_h330_face/kT3Zy7kOQERHnpEHT1wMwXEpJsk.jpg"
    },
    {
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "id": "120",
        "release_date": "Dec 18, 2001",
        "score_chart": "84%",
        "images_src": "/t/p/w220_and_h330_face/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
    },
    {
        "name": "After Everything",
        "id": "820525",
        "release_date": "Sep 13, 2023",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg"
    },
    {
        "name": "Agent Jade Black",
        "id": "662167",
        "release_date": "Sep 29, 2020",
        "score_chart": "20%",
        "images_src": "/t/p/w220_and_h330_face/wGHaEtBz6AXqGVooaADB1tlyjBp.jpg"
    },
    {
        "name": "Merry Little Batman",
        "id": "870358",
        "release_date": "Dec 08, 2023",
        "score_chart": "65%",
        "images_src": "/t/p/w220_and_h330_face/2J70guF8wcErbYbRgZUBcvShgI1.jpg"
    },
    {
        "name": "Nowhere",
        "id": "1151534",
        "release_date": "Sep 29, 2023",
        "score_chart": "74%",
        "images_src": "/t/p/w220_and_h330_face/uldNFFKNXNvwss0MIZErMSFkBJZ.jpg"
    },
    {
        "name": "Sound of Freedom",
        "id": "678512",
        "release_date": "Jul 03, 2023",
        "score_chart": "80%",
        "images_src": "/t/p/w220_and_h330_face/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg"
    },
    {
        "name": "Black Adam",
        "id": "436270",
        "release_date": "Oct 19, 2022",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
    },
    {
        "name": "The Immortal Wars: Rebirth",
        "id": "920258",
        "release_date": "Nov 02, 2021",
        "score_chart": "35%",
        "images_src": "/t/p/w220_and_h330_face/sp0fISNTyzttKfE0PB4ObG5ZRzC.jpg"
    },
    {
        "name": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        "id": "614930",
        "release_date": "Jul 31, 2023",
        "score_chart": "72%",
        "images_src": "/t/p/w220_and_h330_face/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg"
    },
    {
        "name": "Rushed",
        "id": "828305",
        "release_date": "Aug 27, 2021",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/prPR4srMj4KJDRc9uqKbdIz36Bx.jpg"
    },
    {
        "name": "Hell House LLC Origins: The Carmichael Manor",
        "id": "1035982",
        "release_date": "Oct 24, 2023",
        "score_chart": "62%",
        "images_src": "/t/p/w220_and_h330_face/9YlsIwWATGwT6LL5UZVF5xoBTcC.jpg"
    },
    {
        "name": "Mousa",
        "id": "775244",
        "release_date": "Aug 11, 2021",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/8MO3nkwF8dbsz7dC5rGZuP3m3RS.jpg"
    },
    {
        "name": "Percy Jackson & the Olympians: The Lightning Thief",
        "id": "32657",
        "release_date": "Feb 01, 2010",
        "score_chart": "62%",
        "images_src": "/t/p/w220_and_h330_face/vayx5t1cYCpBGV9ylTGn0Sr9rA2.jpg"
    },
    {
        "name": "Uri: The Surgical Strike",
        "id": "554600",
        "release_date": "Jan 11, 2019",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/yNySAgpAnWmPpYinim9E0tUzJWG.jpg"
    },
    {
        "name": "Bah, Humduck!: A Looney Tunes Christmas",
        "id": "13248",
        "release_date": "Nov 14, 2006",
        "score_chart": "72%",
        "images_src": "/t/p/w220_and_h330_face/f568JOtSlQoevRIDBKK3YIkHbvd.jpg"
    },
    {
        "name": "2025: Blood, White & Blue",
        "id": "972731",
        "release_date": "Jul 01, 2022",
        "score_chart": "50%",
        "images_src": "/t/p/w220_and_h330_face/1S9pjiZejBiSVV88qU59ifZ7q0N.jpg"
    },
    {
        "name": "Radical",
        "id": "1058694",
        "release_date": "Oct 19, 2023",
        "score_chart": "76%",
        "images_src": "/t/p/w220_and_h330_face/eSatbygYZp8ooprBHZdb6GFZxGB.jpg"
    },
    {
        "name": "Sonic the Hedgehog 2",
        "id": "675353",
        "release_date": "Mar 30, 2022",
        "score_chart": "75%",
        "images_src": "/t/p/w220_and_h330_face/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
    },
    {
        "name": "Inside Out",
        "id": "150540",
        "release_date": "Jun 09, 2015",
        "score_chart": "79%",
        "images_src": "/t/p/w220_and_h330_face/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg"
    },
    {
        "name": "Jawan",
        "id": "872906",
        "release_date": "Sep 07, 2023",
        "score_chart": "74%",
        "images_src": "/t/p/w220_and_h330_face/qh2lLZ5HtLYPxxuS7ccxMhwgEn6.jpg"
    },
    {
        "name": "Violent Night",
        "id": "899112",
        "release_date": "Nov 30, 2022",
        "score_chart": "74%",
        "images_src": "/t/p/w220_and_h330_face/66lNqsLOho5rnMAOJUS3cwEefFY.jpg"
    },
    {
        "name": "A Christmas Carol",
        "id": "17979",
        "release_date": "Nov 04, 2009",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/t41VHjYItCYHBh2hijsTID44cNv.jpg"
    },
    {
        "name": "Miraculous: Ladybug & Cat Noir, The Movie",
        "id": "496450",
        "release_date": "Jul 05, 2023",
        "score_chart": "77%",
        "images_src": "/t/p/w220_and_h330_face/dQNJ8SdCMn3zWwHzzQD2xrphR1X.jpg"
    },
    {
        "name": "Godzilla vs. Kong",
        "id": "399566",
        "release_date": "Mar 24, 2021",
        "score_chart": "76%",
        "images_src": "/t/p/w220_and_h330_face/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
    },
    {
        "name": "A Creature Was Stirring",
        "id": "1131755",
        "release_date": "Dec 08, 2023",
        "score_chart": "44%",
        "images_src": "/t/p/w220_and_h330_face/ikQG3byEFyfwcnF0zmyNtXTmr5v.jpg"
    },
    {
        "name": "Thriller Night",
        "id": "118249",
        "release_date": "Sep 13, 2011",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/mPQei2YUIY0Ljd3O5Wy7LDuvC8S.jpg"
    },
    {
        "name": "Muzzle",
        "id": "939335",
        "release_date": "Sep 29, 2023",
        "score_chart": "65%",
        "images_src": "/t/p/w220_and_h330_face/qXChf7MFL36BgoLkiB3BzXiwW82.jpg"
    },
    {
        "name": "Soccer Soul",
        "id": "1192578",
        "release_date": "Dec 07, 2023",
        "score_chart": "53%",
        "images_src": "/t/p/w220_and_h330_face/tAX05FIcjnllogMa2r0FmamNhpU.jpg"
    },
    {
        "name": "Harry Potter and the Chamber of Secrets",
        "id": "672",
        "release_date": "Nov 13, 2002",
        "score_chart": "77%",
        "images_src": "/t/p/w220_and_h330_face/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg"
    },
    {
        "name": "Black Panther: Wakanda Forever",
        "id": "505642",
        "release_date": "Nov 09, 2022",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
    },
    {
        "name": "Godzilla x Kong: The New Empire",
        "id": "823464",
        "release_date": "Apr 10, 2024",
        "score_chart": "0.%",
        "images_src": "/t/p/w220_and_h330_face/bQ2ywkchIiaKLSEaMrcT6e29f91.jpg"
    },
    {
        "name": "Extraction Point",
        "id": "845844",
        "release_date": "Jun 29, 2021",
        "score_chart": "54%",
        "images_src": "/t/p/w220_and_h330_face/1djkxHjE3Z2Wk30nrIYm3tj19DO.jpg"
    },
    {
        "name": "Interstellar",
        "id": "157336",
        "release_date": "Nov 05, 2014",
        "score_chart": "84%",
        "images_src": "/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        "name": "Hypnotic",
        "id": "536437",
        "release_date": "May 11, 2023",
        "score_chart": "64%",
        "images_src": "/t/p/w220_and_h330_face/3IhGkkalwXguTlceGSl8XUJZOVI.jpg"
    },
    {
        "name": "Babylon A.D.",
        "id": "9381",
        "release_date": "Aug 20, 2008",
        "score_chart": "56%",
        "images_src": "/t/p/w220_and_h330_face/kt9nqD0uOar8IVE9191HXhWOXKI.jpg"
    },
    {
        "name": "Ant-Man and the Wasp: Quantumania",
        "id": "640146",
        "release_date": "Feb 15, 2023",
        "score_chart": "63%",
        "images_src": "/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
    },
    {
        "name": "The Mercenary",
        "id": "660521",
        "release_date": "Jan 07, 2020",
        "score_chart": "62%",
        "images_src": "/t/p/w220_and_h330_face/p3wgefagejlefFEDsLRHiXU7NGu.jpg"
    },
    {
        "name": "Encanto",
        "id": "568124",
        "release_date": "Oct 13, 2021",
        "score_chart": "76%",
        "images_src": "/t/p/w220_and_h330_face/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"
    },
    {
        "name": "The Godfather",
        "id": "238",
        "release_date": "Mar 14, 1972",
        "score_chart": "87%",
        "images_src": "/t/p/w220_and_h330_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },
    {
        "name": "Carl's Date",
        "id": "1076364",
        "release_date": "Jun 15, 2023",
        "score_chart": "75%",
        "images_src": "/t/p/w220_and_h330_face/wakoF2UgsEE3fGs5KpuwMWsaNr2.jpg"
    },
    {
        "name": "The Hunger Games: Catching Fire",
        "id": "101299",
        "release_date": "Nov 15, 2013",
        "score_chart": "74%",
        "images_src": "/t/p/w220_and_h330_face/6Szz3g7ngNsYU2oPqsZwMzqUnLC.jpg"
    },
    {
        "name": "The Last Voyage of the Demeter",
        "id": "635910",
        "release_date": "Aug 09, 2023",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/nrtbv6Cew7qC7k9GsYSf5uSmuKh.jpg"
    },
    {
        "name": "One Piece: Episode of Skypiea",
        "id": "545742",
        "release_date": "Aug 25, 2018",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/rlXwxRqZa0dMssgYLQeoNo4WiXg.jpg"
    },
    {
        "name": "Avatar",
        "id": "19995",
        "release_date": "Dec 15, 2009",
        "score_chart": "75%",
        "images_src": "/t/p/w220_and_h330_face/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },
    {
        "name": "Diary of a Wimpy Kid Christmas: Cabin Fever",
        "id": "1123093",
        "release_date": "Dec 08, 2023",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/tV0996od52EJ6S8dLKvcVGsO7B.jpg"
    },
    {
        "name": "Rebel Moon - Part Two: The Scargiver",
        "id": "934632",
        "release_date": "Apr 19, 2024",
        "score_chart": "0.%",
        "images_src": "/t/p/w220_and_h330_face/24nh4f5lL5FE8d69Xr4UVhA5Lkw.jpg"
    },
    {
        "name": "Inside Out 2",
        "id": "1022789",
        "release_date": "Jun 13, 2024",
        "score_chart": "0.%",
        "images_src": "/t/p/w220_and_h330_face/q1P71jvmGuHjee9I4PgQKMCB1c9.jpg"
    },
    {
        "name": "Mega Lightning",
        "id": "988591",
        "release_date": "Dec 05, 2022",
        "score_chart": "45%",
        "images_src": "/t/p/w220_and_h330_face/eD2lTDAkD9ehTJtypX24jTnt0hQ.jpg"
    },
    {
        "name": "The Hunger Games: Mockingjay - Part 2",
        "id": "131634",
        "release_date": "Nov 18, 2015",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/lImKHDfExAulp16grYm8zD5eONE.jpg"
    },
    {
        "name": "Harry Potter and the Goblet of Fire",
        "id": "674",
        "release_date": "Nov 16, 2005",
        "score_chart": "78%",
        "images_src": "/t/p/w220_and_h330_face/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg"
    },
    {
        "name": "Paprika",
        "id": "4977",
        "release_date": "Oct 21, 2006",
        "score_chart": "78%",
        "images_src": "/t/p/w220_and_h330_face/bLUUr474Go1DfeN1HLjE3rnZXBq.jpg"
    },
    {
        "name": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        "id": "411",
        "release_date": "Dec 07, 2005",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg"
    },
    {
        "name": "Anyone But You",
        "id": "1072790",
        "release_date": "Dec 21, 2023",
        "score_chart": "98%",
        "images_src": "/t/p/w220_and_h330_face/xvPCsU1iwAQJpJZOuHyYtFpwV1R.jpg"
    },
    {
        "name": "Die Hard",
        "id": "562",
        "release_date": "Jul 15, 1988",
        "score_chart": "78%",
        "images_src": "/t/p/w220_and_h330_face/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg"
    },
    {
        "name": "Prep & Landing: Naughty vs. Nice",
        "id": "88096",
        "release_date": "Dec 05, 2011",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/4TLCK2Gb6eAEmaszg001o1hjGfS.jpg"
    },
    {
        "name": "The Batman",
        "id": "414906",
        "release_date": "Mar 01, 2022",
        "score_chart": "76%",
        "images_src": "/t/p/w220_and_h330_face/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },
    {
        "name": "The Boy and the Heron",
        "id": "508883",
        "release_date": "Jul 14, 2023",
        "score_chart": "72%",
        "images_src": "/t/p/w220_and_h330_face/jDQPkgzerGophKRRn7MKm071vCU.jpg"
    },
    {
        "name": "To Her",
        "id": "474412",
        "release_date": "Feb 28, 2017",
        "score_chart": "58%",
        "images_src": "/t/p/w220_and_h330_face/rUt5SoQTvNc4pZXGUZFpoWaRtl6.jpg"
    },
    {
        "name": "Hunting Souls",
        "id": "950925",
        "release_date": "Apr 04, 2022",
        "score_chart": "67%",
        "images_src": "/t/p/w220_and_h330_face/rBuE76iVZObavtfWYJqvMdJMBnM.jpg"
    },
    {
        "name": "Harry Potter and the Prisoner of Azkaban",
        "id": "673",
        "release_date": "May 31, 2004",
        "score_chart": "80%",
        "images_src": "/t/p/w220_and_h330_face/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg"
    },
    {
        "name": "Shazam! Fury of the Gods",
        "id": "594767",
        "release_date": "Mar 15, 2023",
        "score_chart": "66%",
        "images_src": "/t/p/w220_and_h330_face/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
    },
    {
        "name": "Slash/Back",
        "id": "934194",
        "release_date": "Jun 24, 2022",
        "score_chart": "66%",
        "images_src": "/t/p/w220_and_h330_face/fmmRFQtsRrNOpmcfoxVIyE1LxxT.jpg"
    },
    {
        "name": "Shrek",
        "id": "808",
        "release_date": "May 18, 2001",
        "score_chart": "77%",
        "images_src": "/t/p/w220_and_h330_face/dyhaB19AICF7TO7CK2aD6KfymnQ.jpg"
    },
    {
        "name": "Titanic",
        "id": "597",
        "release_date": "Nov 18, 1997",
        "score_chart": "79%",
        "images_src": "/t/p/w220_and_h330_face/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    },
    {
        "name": "The Monkey King: Reborn",
        "id": "811634",
        "release_date": "Apr 02, 2021",
        "score_chart": "71%",
        "images_src": "/t/p/w220_and_h330_face/67YXOoKGODyGvJXfXzVmgHNXYh8.jpg"
    },
    {
        "name": "Godzilla: King of the Monsters",
        "id": "373571",
        "release_date": "May 29, 2019",
        "score_chart": "66%",
        "images_src": "/t/p/w220_and_h330_face/fQ40gmFM4p03tXwMxQQKh2cCBW4.jpg"
    },
    {
        "name": "No Name and Dynamite",
        "id": "709334",
        "release_date": "Feb 21, 2022",
        "score_chart": "55%",
        "images_src": "/t/p/w220_and_h330_face/7MVENxKbO925bTm6IUb4xtZ65NZ.jpg"
    },
    {
        "name": "There's Something in the Barn",
        "id": "956920",
        "release_date": "Nov 02, 2023",
        "score_chart": "69%",
        "images_src": "/t/p/w220_and_h330_face/axrzMJR5VPWYNiW9ArENiMEPTjr.jpg"
    },
    {
        "name": "Ruby Gillman, Teenage Kraken",
        "id": "1040148",
        "release_date": "Jun 28, 2023",
        "score_chart": "73%",
        "images_src": "/t/p/w220_and_h330_face/8ChIb3WzYAcza1vrXR56v510MWk.jpg"
    },
    {
        "name": "The Nightmare Before Christmas",
        "id": "9479",
        "release_date": "Oct 09, 1993",
        "score_chart": "78%",
        "images_src": "/t/p/w220_and_h330_face/oQffRNjK8e19rF7xVYEN8ew0j7b.jpg"
    },
    {
        "name": "NAGA",
        "id": "1160025",
        "release_date": "Sep 08, 2023",
        "score_chart": "56%",
        "images_src": "/t/p/w220_and_h330_face/5QOYVE6zS0tyQ3qeGaECD7WWoaF.jpg"
    },
    {
        "name": "The Shawshank Redemption",
        "id": "278",
        "release_date": "Sep 23, 1994",
        "score_chart": "87%",
        "images_src": "/t/p/w220_and_h330_face/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    },
    {
        "name": "The Lord of the Rings: The Return of the King",
        "id": "122",
        "release_date": "Dec 01, 2003",
        "score_chart": "84%",
        "images_src": "/t/p/w220_and_h330_face/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
    },
    {
        "name": "Chicken Run",
        "id": "7443",
        "release_date": "Jun 23, 2000",
        "score_chart": "68%",
        "images_src": "/t/p/w220_and_h330_face/zszChc7quMGvFwzgKQnxd0QTcnc.jpg"
    },
    {
        "name": "Hui Buh and the Witch's Castle",
        "id": "754158",
        "release_date": "Nov 03, 2022",
        "score_chart": "54%",
        "images_src": "/t/p/w220_and_h330_face/6pFimosDngknypmNIFg8E0zcVhz.jpg"
    }
]
  return (
    // Popular section
    <>
    <h1 style={{fontSize: "3rem", margin: "50px 50px", textAlign: "center", backgroundColor: "#D81B60", padding: "6px", marginTop: "110px"}}>Popular Movies</h1>

    <div className="bahar">
      {loading ? 
        popular_final.map(() => {
            return (
            <div className="cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2}/>
          </SkeletonTheme>
        </div>
            )
        })
        : (
        popular_final.map((data) => {
          return (
            <Link
              to={`/movies/${data.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="cards cardP" key={data.id}>
                <img
                className="cards__img"
                  src={`https://www.themoviedb.org/${data.images_src}`}
                  alt=""
                />
                <div className="cards__overlay">
                  <div className="cards__title" style={{color: "#fccb06", fontSize: "1.5rem"}}><strong>{data ? data.name : ""}</strong></div>
                  <div className="cards__runtime">
                    {data ? data.release_date : ""}
                  </div>
                  <div className=".card__rating">
                    {data ? data.score_chart : ""}<i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
      </div>
      <div class="p-3 mb-2 bg-primary text-white" style={{textAlign: "center", fontSize: "2rem"}}>Created wih Lots of Love
        <i style={{ fontSize: "", color: "red" }} class="fa-solid fa-heart"></i>
        and Dedication
        <i
          style={{ color: "white", fontSize: "" }}
          class="fa-solid fa-atom"
        ></i></div>
    </>
  );
}
