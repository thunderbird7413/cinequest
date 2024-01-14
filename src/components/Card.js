import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Card(props) {
  // Top rated Section
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const top_rated_movies = [
    {
      name: "The Godfather",
      id: "238",
      release_date: "Mar 14, 1972",
      score_chart: "87%",
      images_src: "/t/p/w220_and_h330_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    },
    {
      name: "The Shawshank Redemption",
      id: "278",
      release_date: "Sep 23, 1994",
      score_chart: "87%",
      images_src: "/t/p/w220_and_h330_face/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      name: "The Godfather Part II",
      id: "240",
      release_date: "Dec 20, 1974",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    },
    {
      name: "Schindler's List",
      id: "424",
      release_date: "Dec 15, 1993",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    },
    {
      name: "Dilwale Dulhania Le Jayenge",
      id: "19404",
      release_date: "Oct 20, 1995",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
    },
    {
      name: "12 Angry Men",
      id: "389",
      release_date: "Apr 10, 1957",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    },
    {
      name: "Spirited Away",
      id: "129",
      release_date: "Jul 20, 2001",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    },
    {
      name: "David Attenborough: A Life on Our Planet",
      id: "664280",
      release_date: "Sep 28, 2020",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/zSKwyUDKDHiFU5syTTvQRDcGBPS.jpg",
    },
    {
      name: "Parasite",
      id: "496243",
      release_date: "May 30, 2019",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    },
    {
      name: "The Dark Knight",
      id: "155",
      release_date: "Jul 16, 2008",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      name: "The Green Mile",
      id: "497",
      release_date: "Dec 10, 1999",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    },
    {
      name: "Your Name.",
      id: "372058",
      release_date: "Aug 26, 2016",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/q719jXXEzOoYaps6babgKnONONX.jpg",
    },
    {
      name: "Pulp Fiction",
      id: "680",
      release_date: "Sep 10, 1994",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    },
    {
      name: "The Lord of the Rings: The Return of the King",
      id: "122",
      release_date: "Dec 01, 2003",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    },
    {
      name: "Forrest Gump",
      id: "13",
      release_date: "Jun 23, 1994",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    },
    {
      name: "The Good, the Bad and the Ugly",
      id: "429",
      release_date: "Dec 22, 1966",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    },
    {
      name: "GoodFellas",
      id: "769",
      release_date: "Sep 12, 1990",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    },
    {
      name: "Taylor Swift: Reputation Stadium Tour",
      id: "568332",
      release_date: "Dec 31, 2018",
      score_chart: "85%",
      images_src: "/t/p/w220_and_h330_face/u6oXUTtOuJRPdUgUuPAVVJPSKCo.jpg",
    },
    {
      name: "Seven Samurai",
      id: "346",
      release_date: "Apr 26, 1954",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
    },
    {
      name: "Life Is Beautiful",
      id: "637",
      release_date: "Dec 20, 1997",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/6tEJnof1DKWPnl5lzkjf0FVv7oB.jpg",
    },
    {
      name: "Grave of the Fireflies",
      id: "12477",
      release_date: "Apr 15, 1988",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
    },
    {
      name: "Cinema Paradiso",
      id: "11216",
      release_date: "Nov 17, 1988",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
    },
    {
      name: "Impossible Things",
      id: "667257",
      release_date: "Jun 17, 2021",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/t2Ew8NZ8Ci2kqmoecZUNQUFDJnQ.jpg",
    },
    {
      name: "Fight Club",
      id: "550",
      release_date: "Oct 15, 1999",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    },
    {
      name: "Bring the Soul: The Movie",
      id: "611291",
      release_date: "Aug 07, 2019",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/7x5CguA0MxHqbSjhi14UEuK7c95.jpg",
    },
    {
      name: "Gabriel's Inferno",
      id: "696374",
      release_date: "May 29, 2020",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
    },
    {
      name: "Psycho",
      id: "539",
      release_date: "Jun 22, 1960",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
    },
    {
      name: "City of God",
      id: "598",
      release_date: "Aug 30, 2002",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
    },
    {
      name: "Once Upon a Time in America",
      id: "311",
      release_date: "May 23, 1984",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg",
    },
    {
      name: "Interstellar",
      id: "157336",
      release_date: "Nov 05, 2014",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      name: "One Flew Over the Cuckoo's Nest",
      id: "510",
      release_date: "Nov 19, 1975",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
    },
    {
      name: "Gabriel's Inferno: Part II",
      id: "724089",
      release_date: "Jul 31, 2020",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
    },
    {
      name: "Dou kyu sei – Classmates",
      id: "372754",
      release_date: "Feb 20, 2016",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
    },
    {
      name: "The Legend of Hei",
      id: "620249",
      release_date: "Aug 27, 2019",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/aLv87NgRJUPkQ6sVLP72IisDdt4.jpg",
    },
    {
      name: "Gabriel's Inferno: Part III",
      id: "761053",
      release_date: "Nov 19, 2020",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
    },
    {
      name: "The Lord of the Rings: The Fellowship of the Ring",
      id: "120",
      release_date: "Dec 18, 2001",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
      name: "Burn the Stage: The Movie",
      id: "553512",
      release_date: "Nov 15, 2018",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/pJKy1yvnKh8UjcuYeG3Rt35xHFA.jpg",
    },
    {
      name: "Spider-Man: Into the Spider-Verse",
      id: "324857",
      release_date: "Dec 06, 2018",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    },
    {
      name: "A Dog's Will",
      id: "40096",
      release_date: "Sep 15, 2000",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/lIDNqtdJI4HWkLiXWAZoDxgSO0.jpg",
    },
    {
      name: "Howl's Moving Castle",
      id: "4935",
      release_date: "Sep 09, 2004",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/6pZgH10jhpToPcf0uvyTCPFhWpI.jpg",
    },
    {
      name: "Harakiri",
      id: "14537",
      release_date: "Sep 15, 1962",
      score_chart: "84%",
      images_src: "/t/p/w220_and_h330_face/w7pWcLaYQkbtRUn99K6ome0DblL.jpg",
    },
    {
      name: "A Silent Voice: The Movie",
      id: "378064",
      release_date: "Sep 17, 2016",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg",
    },
    {
      name: "Hope",
      id: "255709",
      release_date: "Oct 02, 2013",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/x9yjkm9gIz5qI5fJMUTfBnWiB2o.jpg",
    },
    {
      name: "The Empire Strikes Back",
      id: "1891",
      release_date: "May 20, 1980",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
    },
    {
      name: "Spider-Man: Across the Spider-Verse",
      id: "569094",
      release_date: "May 31, 2023",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    },
    {
      name: "The Lord of the Rings: The Two Towers",
      id: "121",
      release_date: "Dec 18, 2002",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    },
    {
      name: "The Pianist",
      id: "423",
      release_date: "Sep 17, 2002",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
    },
    {
      name: "Whiplash",
      id: "244786",
      release_date: "Oct 10, 2014",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    },
    {
      name: "Se7en",
      id: "807",
      release_date: "Sep 22, 1995",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    },
    {
      name: "The Quintessential Quintuplets Movie",
      id: "820067",
      release_date: "May 20, 2022",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/sg7klpt1xwK1IJirBI9EHaqQwJ5.jpg",
    },
    {
      name: "Inception",
      id: "27205",
      release_date: "Jul 15, 2010",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
      name: "Rear Window",
      id: "567",
      release_date: "Aug 01, 1954",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
    },
    {
      name: "The Boy, the Mole, the Fox and the Horse",
      id: "995133",
      release_date: "Dec 25, 2022",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg",
    },
    {
      name: "Hotarubi no Mori e",
      id: "92321",
      release_date: "Sep 17, 2011",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/mDqzHV8UXWWNpZkoAbKmKX1ZxEE.jpg",
    },
    {
      name: "American History X",
      id: "73",
      release_date: "Jul 01, 1998",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/euypWkaYFOLW3e5rLIcTAjWnhhT.jpg",
    },
    {
      name: "The Silence of the Lambs",
      id: "274",
      release_date: "Feb 14, 1991",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    },
    {
      name: "Princess Mononoke",
      id: "128",
      release_date: "Jul 12, 1997",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
    },
    {
      name: "The Great Dictator",
      id: "914",
      release_date: "Oct 15, 1940",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/1QpO9wo7JWecZ4NiBuu625FiY1j.jpg",
    },
    {
      name: "There’s Still Tomorrow",
      id: "1026227",
      release_date: "Oct 26, 2023",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/4Hi7yjiQjokEDStT1MOj5rPgRfW.jpg",
    },
    {
      name: "Neon Genesis Evangelion: The End of Evangelion",
      id: "18491",
      release_date: "Jul 19, 1997",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/j6G24dqI4WgUtChhWjfnI4lnmiK.jpg",
    },
    {
      name: "Sunset Boulevard",
      id: "599",
      release_date: "Aug 17, 1950",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/sC4Dpmn87oz9AuxZ15Lmip0Ftgr.jpg",
    },
    {
      name: "Ikiru",
      id: "3782",
      release_date: "Oct 09, 1952",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/dgNTS4EQDDVfkzJI5msKuHu2Ei3.jpg",
    },
    {
      name: "Josee, the Tiger and the Fish",
      id: "652837",
      release_date: "Dec 25, 2020",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/xAbSLi61npWyVs5M0yxin3dKcGO.jpg",
    },
    {
      name: "Dedicated to my ex",
      id: "644479",
      release_date: "Nov 01, 2019",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/xc4bTXVwYNXi10jG9dwcaYt5IpU.jpg",
    },
    {
      name: "One Direction: This Is Us",
      id: "164558",
      release_date: "Aug 29, 2013",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/cxIoYa7uboxiDvWGxdad6fvgpcH.jpg",
    },
    {
      name: "Back to the Future",
      id: "105",
      release_date: "Jul 03, 1985",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    },
    {
      name: "Léon: The Professional",
      id: "101",
      release_date: "Sep 14, 1994",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg",
    },
    {
      name: "Dead Poets Society",
      id: "207",
      release_date: "Jun 02, 1989",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/hmGAF5NDoYB6S39UONevjHCESOI.jpg",
    },
    {
      name: "High and Low",
      id: "12493",
      release_date: "Mar 01, 1963",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/tgNjemQPG96uIezpiUiXFcer5ga.jpg",
    },
    {
      name: "Violet Evergarden: The Movie",
      id: "533514",
      release_date: "Sep 18, 2020",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/fwSonK8WrAEqWY7sqjvGRCgzIij.jpg",
    },
    {
      name: "Le Trou",
      id: "29259",
      release_date: "Mar 18, 1960",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/nsVjgNxWTkaFCMuBLhiLHkcoTnt.jpg",
    },
    {
      name: "City Lights",
      id: "901",
      release_date: "Feb 01, 1931",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg",
    },
    {
      name: "Modern Times",
      id: "3082",
      release_date: "Feb 05, 1936",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/7uoiKOEjxBBW0AgDGQWrlfGQ90w.jpg",
    },
    {
      name: "Come and See",
      id: "25237",
      release_date: "Jul 09, 1985",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/qNbMsKVzigERgJUbwf8pKyZogpb.jpg",
    },
    {
      name: "Perfect Blue",
      id: "10494",
      release_date: "Feb 28, 1998",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/kG4AZLcWilPYIixowm8pnE3DqfI.jpg",
    },
    {
      name: "Once Upon a Time in the West",
      id: "335",
      release_date: "Dec 21, 1968",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/qbYgqOczabWNn2XKwgMtVrntD6P.jpg",
    },
    {
      name: "Life in a Year",
      id: "447362",
      release_date: "Nov 27, 2020",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/bP7u19opmHXYeTCUwGjlLldmUMc.jpg",
    },
    {
      name: "Apocalypse Now",
      id: "28",
      release_date: "Aug 15, 1979",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
    },
    {
      name: "Five Feet Apart",
      id: "527641",
      release_date: "Mar 14, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
    },
    {
      name: "The Intouchables",
      id: "77338",
      release_date: "Nov 02, 2011",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg",
    },
    {
      name: "Paths of Glory",
      id: "975",
      release_date: "Oct 25, 1957",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/l2IY0gOHHmCWM90LjteFssxIV1G.jpg",
    },
    {
      name: "Evangelion: 3.0+1.0 Thrice Upon a Time",
      id: "283566",
      release_date: "Mar 08, 2021",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/md5wZRRj8biHrGtyitgBZo7674t.jpg",
    },
    {
      name: "Woman in the Dunes",
      id: "16672",
      release_date: "Feb 15, 1964",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/f0JpsMQ9oEjKBD66Ky3qK3z7LGT.jpg",
    },
    {
      name: "Miracle in Cell No. 7",
      id: "637920",
      release_date: "Oct 10, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/bOth4QmNyEkalwahfPCfiXjNh1r.jpg",
    },
    {
      name: "Given",
      id: "632632",
      release_date: "Aug 22, 2020",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/3trPz7muDOv4AHjDZiD3MLGls2Q.jpg",
    },
    {
      name: "Clouds",
      id: "630566",
      release_date: "Oct 09, 2020",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg",
    },
    {
      name: "Oldboy",
      id: "670",
      release_date: "Nov 21, 2003",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    },
    {
      name: "We All Loved Each Other So Much",
      id: "42269",
      release_date: "Dec 21, 1974",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/zGGWYpiKNwjpKxelPxOMqJnUgDs.jpg",
    },
    {
      name: "The Legend of 1900",
      id: "10376",
      release_date: "Oct 28, 1998",
      score_chart: "83%",
      images_src: "/t/p/w220_and_h330_face/iOcbJ5pxokOPDRgieVDbsFMrCc6.jpg",
    },
    {
      name: "It's a Wonderful Life",
      id: "1585",
      release_date: "Dec 20, 1946",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/mV3VcmMJN6Zwahj42dy9WwPUyRI.jpg",
    },
    {
      name: "Justice League Dark: Apokolips War",
      id: "618344",
      release_date: "May 05, 2020",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
    },
    {
      name: "Puss in Boots: The Last Wish",
      id: "315162",
      release_date: "Dec 07, 2022",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    },
    {
      name: "Avengers: Endgame",
      id: "299534",
      release_date: "Apr 24, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
      name: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      id: "635302",
      release_date: "Oct 16, 2020",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    },
    {
      name: "The Lion King",
      id: "8587",
      release_date: "Jun 24, 1994",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    },
    {
      name: "Avengers: Infinity War",
      id: "299536",
      release_date: "Apr 25, 2018",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    },
    {
      name: "I Want to Eat Your Pancreas",
      id: "504253",
      release_date: "Sep 01, 2018",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/qpV8kvRfAntV7D4aOOsLIz7OdPc.jpg",
    },
    {
      name: "The Shop Around the Corner",
      id: "20334",
      release_date: "Jan 12, 1940",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/dZ1aEzGYRiqJwPfjS6VL7wUkHmF.jpg",
    },
    {
      name: "Klaus",
      id: "508965",
      release_date: "Nov 08, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/q125RHUDgR4gjwh1QkfYuJLYkL.jpg",
    },
    {
      name: "Mommy",
      id: "265177",
      release_date: "Sep 19, 2014",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/uOvlCLqXnw2UGkh3mcJ1C3mmsbE.jpg",
    },
    {
      name: "BTS World Tour: Love Yourself in Seoul",
      id: "568300",
      release_date: "Jan 26, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/1u0rtWPgYfAWmqveXOsQDvMRODD.jpg",
    },
    {
      name: "BLACKPINK: Light Up the Sky",
      id: "740996",
      release_date: "Oct 14, 2020",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/wwrvjmcgkDyB2RbCbIVLXZf82pl.jpg",
    },
    {
      name: "Top Gun: Maverick",
      id: "361743",
      release_date: "May 24, 2022",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    },
    {
      name: "Green Book",
      id: "490132",
      release_date: "Nov 16, 2018",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
    },
    {
      name: "Rascal Does Not Dream of a Dreaming Girl",
      id: "572154",
      release_date: "Jun 15, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/jg73umEpBHT7l4DBmV5bR78H1JI.jpg",
    },
    {
      name: "The Handmaiden",
      id: "290098",
      release_date: "Jun 01, 2016",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/8MnMGO3oALkaiavehLmsKwvBU8S.jpg",
    },
    {
      name: "Night and Fog",
      id: "803",
      release_date: "Apr 29, 1956",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/2iWYQia8enOai7QEO3TvenleD7r.jpg",
    },
    {
      name: "Wolf Children",
      id: "110420",
      release_date: "Jul 21, 2012",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/nqqovhsvsWbsb7LcGaIGDRZrwgB.jpg",
    },
    {
      name: "Wolfwalkers",
      id: "441130",
      release_date: "Oct 26, 2020",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/ehAKuE48okTuonq6TpsNQj8vFTC.jpg",
    },
    {
      name: "Flamin' Hot",
      id: "626332",
      release_date: "Mar 11, 2023",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/a7KyFMPXj0iY4EoLq1PIGU1WJPw.jpg",
    },
    {
      name: "Baraka",
      id: "14002",
      release_date: "Sep 15, 1992",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/ldEuJQ4z7zEvL7iXraESWBUfQcz.jpg",
    },
    {
      name: "Il Sorpasso",
      id: "24188",
      release_date: "Dec 05, 1962",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/4h1ckrJQVcQYjeOkqS8i9BqZ9MI.jpg",
    },
    {
      name: "20th Century Girl",
      id: "851644",
      release_date: "Oct 06, 2022",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/od22ftNnyag0TTxcnJhlsu3aLoU.jpg",
    },
    {
      name: "Steven Universe: The Movie",
      id: "537061",
      release_date: "Sep 02, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/8mRgpubxHqnqvENK4Bei30xMDvy.jpg",
    },
    {
      name: "Persona",
      id: "797",
      release_date: "Oct 18, 1966",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/bdXbfUir63TQHA5NTNcXPICZCW8.jpg",
    },
    {
      name: "Witness for the Prosecution",
      id: "37257",
      release_date: "Dec 17, 1957",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/bCj4EfuehAlgBwVd3diyWyhuuau.jpg",
    },
    {
      name: "The Shining",
      id: "694",
      release_date: "May 23, 1980",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    },
    {
      name: "Maquia: When the Promised Flower Blooms",
      id: "476292",
      release_date: "Feb 24, 2018",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/hL3NqRE2ccR4Y2sYSJTrmalRjrz.jpg",
    },
    {
      name: "Coco",
      id: "354912",
      release_date: "Oct 27, 2017",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    },
    {
      name: "The Apartment",
      id: "284",
      release_date: "Jun 21, 1960",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/hhSRt1KKfRT0yEhEtRW3qp31JFU.jpg",
    },
    {
      name: "Hamilton",
      id: "556574",
      release_date: "Jul 03, 2020",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/h1B7tW0t399VDjAcWJh8m87469b.jpg",
    },
    {
      name: "Inglourious Basterds",
      id: "16869",
      release_date: "Aug 02, 2009",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
    },
    {
      name: "A Clockwork Orange",
      id: "185",
      release_date: "Dec 19, 1971",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
    },
    {
      name: "Gladiator",
      id: "98",
      release_date: "May 04, 2000",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      name: "Saving Private Ryan",
      id: "857",
      release_date: "Jul 24, 1998",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    },
    {
      name: "The Matrix",
      id: "603",
      release_date: "Mar 30, 1999",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      name: "Bicycle Thieves",
      id: "5156",
      release_date: "Nov 24, 1948",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/rLpveWO1hTNYF9LUZJZgTdq5nyf.jpg",
    },
    {
      name: "Jujutsu Kaisen 0",
      id: "810693",
      release_date: "Dec 24, 2021",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg",
    },
    {
      name: "The Art of Racing in the Rain",
      id: "522924",
      release_date: "Aug 08, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/mi5VN4ww0JZgRFJIaPxxTGKjUg7.jpg",
    },
    {
      name: "The Prestige",
      id: "1124",
      release_date: "Oct 19, 2006",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    },
    {
      name: "Star Wars",
      id: "11",
      release_date: "May 25, 1977",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    },
    {
      name: "The Help",
      id: "50014",
      release_date: "Aug 09, 2011",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/3kmfoWWEc9Vtyuaf9v5VipRgdjx.jpg",
    },
    {
      name: "Violet Evergarden: Eternity and the Auto Memory Doll",
      id: "610892",
      release_date: "Sep 06, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/zjaSw6Ok0MhXjrruPrA27VHyUYC.jpg",
    },
    {
      name: "Shutter Island",
      id: "11324",
      release_date: "Feb 14, 2010",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
    },
    {
      name: "Investigation of a Citizen Above Suspicion",
      id: "26451",
      release_date: "Oct 16, 1970",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/vPTZwlq1IC4o1DCsEZEl2uGljzm.jpg",
    },
    {
      name: "Out of the Clear Blue Sky",
      id: "654299",
      release_date: "Dec 24, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/xg6QZdlHrq2dtSK8cfnQQMnmpeY.jpg",
    },
    {
      name: "Scenes from a Marriage",
      id: "133919",
      release_date: "Sep 15, 1974",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/ArKEdvJesIktFX8OAhcdKAOLl6I.jpg",
    },
    {
      name: "The Seventh Seal",
      id: "490",
      release_date: "Feb 16, 1957",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/wcZ21zrOsy0b52AfAF50XpTiv75.jpg",
    },
    {
      name: "Better Days",
      id: "575813",
      release_date: "Oct 25, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/csVZ2ZQCj98XdZoCuW1aixMYJ0W.jpg",
    },
    {
      name: "Hacksaw Ridge",
      id: "324786",
      release_date: "Oct 07, 2016",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/jcStBvbQt78tPeId5hC7a9jcDOK.jpg",
    },
    {
      name: "The Kid",
      id: "10098",
      release_date: "Jan 21, 1921",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/drgMcyTsySQBnUPGaBThCHGdlWT.jpg",
    },
    {
      name: "The Usual Suspects",
      id: "629",
      release_date: "Jul 19, 1995",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/99X2SgyFunJFXGAYnDv3sb9pnUD.jpg",
    },
    {
      name: "Memento",
      id: "77",
      release_date: "Oct 11, 2000",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
    },
    {
      name: "Zack Snyder's Justice League",
      id: "791373",
      release_date: "Mar 18, 2021",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    },
    {
      name: "My Hero Academia: Heroes Rising",
      id: "592350",
      release_date: "Dec 20, 2019",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
    },
    {
      name: "Doctor Who: The Day of the Doctor",
      id: "313106",
      release_date: "Nov 23, 2013",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/yxLra5R61s5J4M5L3mqOY42K5md.jpg",
    },
    {
      name: "Tokyo Story",
      id: "18148",
      release_date: "Nov 03, 1953",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/g2YbTYKpY7N2yDSk7BfXZ18I5QV.jpg",
    },
    {
      name: "Stalker",
      id: "1398",
      release_date: "May 25, 1979",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/lUE0Bp7wH0EterJ44qMRsqtKFnp.jpg",
    },
    {
      name: "Django Unchained",
      id: "68718",
      release_date: "Dec 25, 2012",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    },
    {
      name: "Vertigo",
      id: "426",
      release_date: "May 28, 1958",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/15uOEfqBNTVtDUT7hGBVCka0rZz.jpg",
    },
    {
      name: "Togo",
      id: "606856",
      release_date: "Dec 20, 2019",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/921q4gPNN4J6UxvKaw6SCNBe3F8.jpg",
    },
    {
      name: "Capernaum",
      id: "517814",
      release_date: "Sep 20, 2018",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/mFnfTVADj8yOxwzprYOmTPselk8.jpg",
    },
    {
      name: "Scarface",
      id: "111",
      release_date: "Dec 09, 1983",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    },
    {
      name: "Joker",
      id: "475557",
      release_date: "Oct 01, 2019",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
      name: "The Departed",
      id: "1422",
      release_date: "Oct 04, 2006",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    },
    {
      name: "Singin' in the Rain",
      id: "872",
      release_date: "Apr 09, 1952",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/w03EiJVHP8Un77boQeE7hg9DVdU.jpg",
    },
    {
      name: "Casablanca",
      id: "289",
      release_date: "Jan 15, 1943",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    },
    {
      name: "My Mom Is a Character 3",
      id: "620683",
      release_date: "Dec 26, 2019",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/zw77BFPGJ73Lig8GwRzYj1XHq53.jpg",
    },
    {
      name: "8½",
      id: "422",
      release_date: "Feb 14, 1963",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/uFkdfTgHdp9xbpJwCY0cneVpXa7.jpg",
    },
    {
      name: "Piper",
      id: "399106",
      release_date: "Jun 16, 2016",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/rfEkkVzmrMYqGezNLl02mVyJCP2.jpg",
    },
    {
      name: "Call Me by Your Name",
      id: "398818",
      release_date: "Sep 01, 2017",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/mZ4gBdfkhP9tvLH1DO4m4HYtiyi.jpg",
    },
    {
      name: "Michael Jackson's Thriller",
      id: "92060",
      release_date: "Nov 14, 1983",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/dYHGoPMkZMVuBA4EydmDQMo1EEv.jpg",
    },
    {
      name: "Silenced",
      id: "81481",
      release_date: "Sep 22, 2011",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/mbMp0oIFmYnw0i5gzRoKt8cH5ve.jpg",
    },
    {
      name: "Guillermo del Toro's Pinocchio",
      id: "555604",
      release_date: "Nov 09, 2022",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      id: "531428",
      release_date: "Jun 17, 2019",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/2LquGwEhbg3soxSCs9VNyh5VJd9.jpg",
    },
    {
      name: "Palmer",
      id: "458220",
      release_date: "Jan 28, 2021",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg",
    },
    {
      name: "The Great War",
      id: "55823",
      release_date: "Oct 28, 1959",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/aDvKsUb5y7GMNMz2HHNtuGww5t8.jpg",
    },
    {
      name: "Homecoming: A Film by Beyoncé",
      id: "593691",
      release_date: "Apr 17, 2019",
      score_chart: "82%",
      images_src: "/t/p/w220_and_h330_face/nKdP4K3Bj3qnjtDCq9lTg7UOHVy.jpg",
    },
    {
      name: "Taxi Driver",
      id: "103",
      release_date: "Feb 09, 1976",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    },
    {
      name: "Along with the Gods: The Last 49 Days",
      id: "518068",
      release_date: "Aug 01, 2018",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/9BnqBHFGDv3WlCPB2qQwzAWdy7y.jpg",
    },
    {
      name: "Alien",
      id: "348",
      release_date: "May 25, 1979",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    },
    {
      name: "The Hate U Give",
      id: "470044",
      release_date: "Oct 19, 2018",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/2icwBom0t5nmOuZI9FVXF3gkMK0.jpg",
    },
    {
      name: "Wonder",
      id: "406997",
      release_date: "Nov 13, 2017",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/sONh3LYGFcVDTy8pm1tbSOB13Li.jpg",
    },
    {
      name: "Good Will Hunting",
      id: "489",
      release_date: "Dec 05, 1997",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg",
    },
    {
      name: "Metropolis",
      id: "19",
      release_date: "Feb 06, 1927",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/pxbGZewX327IbTvrCVRJgcLJTSQ.jpg",
    },
    {
      name: "Purple Hearts",
      id: "762975",
      release_date: "Jul 29, 2022",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/4JyNWkryifWbWXJyxcWh3pVya6N.jpg",
    },
    {
      name: "Sansho the Bailiff",
      id: "20532",
      release_date: "Mar 31, 1954",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/rSlZ8iM4vRM0sZrrJNmjln4kZir.jpg",
    },
    {
      name: "Miraculous World: New York, United HeroeZ",
      id: "755812",
      release_date: "Dec 18, 2020",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/9YbyvcrHmY2SVbdfXpb8mC4Fy0g.jpg",
    },
    {
      name: "The Father",
      id: "600354",
      release_date: "Dec 23, 2020",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/pr3bEQ517uMb5loLvjFQi8uLAsp.jpg",
    },
    {
      name: "Central Station",
      id: "666",
      release_date: "Nov 20, 1998",
      score_chart: "81%",
      images_src: "/t/p/w220_and_h330_face/zJvp7XjQ2LhPbDVYhFXyucs40vR.jpg",
    },
  ];

  return (
    // Top Rated Movies
    <>
      <h1
        style={{
          fontSize: "3rem",
          margin: "100px 50px 50px",
          textAlign: "center",
          backgroundColor: "#D81B60",
          padding: "6px",
        }}
      >
        Top Rated Movies
      </h1>
      <div className="bahar">
        {loading
          ? top_rated_movies.map(() => {
              return (
                <div className="cards">
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                  </SkeletonTheme>
                </div>
              );
            })
          : top_rated_movies.map((data) => {
              return (
                <Link
                  to={`/movies/${data.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="cards">
                    <img
                      className="cards__img"
                      src={`https://www.themoviedb.org/${data.images_src}`}
                      alt=""
                    />
                    <div className="cards__overlay">
                      <div
                        className="cards__title"
                        style={{ color: "#fccb06", fontSize: "1.5rem" }}
                      >
                        <strong>{data ? data.name : ""}</strong>
                      </div>
                      <div className="cards__runtime">
                        {data ? data.release_date : ""}
                      </div>
                      <div className=".card__rating">
                        {data ? data.score_chart : ""}
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
      <div
        class="p-3 mb-2 bg-primary text-white"
        style={{ textAlign: "center", fontSize: "2rem" }}
      >
        Created wih Lots of Love
        <i style={{ fontSize: "", color: "red" }} class="fa-solid fa-heart"></i>
        and Dedication
        <i
          style={{ color: "white", fontSize: "" }}
          class="fa-solid fa-atom"
        ></i>
      </div>
    </>
  );
}