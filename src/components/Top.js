import React, { useEffect, useState } from "react";
import "./Top.css";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Card(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const upcoming = {
    dates: {
      maximum: "2024-01-17",
      minimum: "2023-12-27",
    },
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "/b1dUCCd1hi5ZfyyCCoJTmViaXM2.jpg",
        genre_ids: [18],
        id: 850165,
        original_language: "en",
        original_title: "The Iron Claw",
        overview:
          "The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s. Through tragedy and triumph, under the shadow of their domineering father and coach, the brothers seek larger-than-life immortality on the biggest stage in sports.",
        popularity: 54.551,
        poster_path: "/lsdismtCDga4vsKnmliz0h7CaZT.jpg",
        release_date: "2023-12-21",
        title: "The Iron Claw",
        video: false,
        vote_average: 9,
        vote_count: 3,
      },
      {
        adult: false,
        backdrop_path: "/hhSERBXQ5FrwSpZkDQ17IAszgkA.jpg",
        genre_ids: [18, 35],
        id: 993933,
        original_language: "en",
        original_title: "Bad Behaviour",
        overview:
          "Lucy, a former child actor, seeks enlightenment at a retreat led by spiritual leader Elon while she navigates her close yet turbulent relationship with her stunt-performer daughter, Dylan.",
        popularity: 53.292,
        poster_path: "/jffVOSdNae2sjUAgCksWuevsOvj.jpg",
        release_date: "2023-11-02",
        title: "Bad Behaviour",
        video: false,
        vote_average: 6.2,
        vote_count: 5,
      },
      {
        adult: false,
        backdrop_path: "/4kmNLwmVeT3xMciSRefE6SCi2hX.jpg",
        genre_ids: [80, 18, 53],
        id: 1027073,
        original_language: "en",
        original_title: "In the Land of Saints and Sinners",
        overview:
          "In a remote Irish village, a damaged Finbar is forced to fight for redemption after a lifetime of sins, but what price is he willing to pay? In the land of saints and sinners, some sins can't be buried.",
        popularity: 49.419,
        poster_path: "/jN8JJaVpADPEU6SZX8QBCZHAFrU.jpg",
        release_date: "2023-10-06",
        title: "In the Land of Saints and Sinners",
        video: false,
        vote_average: 6.577,
        vote_count: 52,
      },
      {
        adult: false,
        backdrop_path: "/lr2kcIbCgP7Q06DV5Hfs3J6yuJy.jpg",
        genre_ids: [12, 28, 18],
        id: 845111,
        original_language: "fr",
        original_title: "Les trois mousquetaires : Milady",
        overview:
          "D'Artagnan, on a quest to rescue the abducted Constance, runs into the mysterious Milady de Winter again. The tension between the Catholics and the Protestants finally escalates, as the king declares war — forcing the now four musketeers into battle. But as the war goes on, they are tested physically, mentally and emotionally.",
        popularity: 47.405,
        poster_path: "/rtosxP5sXuoRFPH4sVbMccLIPiV.jpg",
        release_date: "2023-12-13",
        title: "The Three Musketeers: Milady",
        video: false,
        vote_average: 6.701,
        vote_count: 72,
      },
      {
        adult: false,
        backdrop_path: "/lPzJ3oBHAs4L3Od74y5ml3HyGhy.jpg",
        genre_ids: [18],
        id: 1025491,
        original_language: "en",
        original_title: "Freud's Last Session",
        overview:
          "On the eve of the Second World War, two of the greatest minds of the twentieth century, C.S. Lewis and Sigmund Freud converge for their own personal battle over the existence of God. The film interweaves the lives of Freud and Lewis, past, present, and through fantasy, bursting from the confines of Freud’s study on a dynamic journey.",
        popularity: 44.782,
        poster_path: "/kgeMru3ypLeV09YvifofMQrvwkH.jpg",
        release_date: "2023-12-22",
        title: "Freud's Last Session",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/jYUBWwa1UdpcoUBY7I4nFdnZPDO.jpg",
        genre_ids: [18],
        id: 979097,
        original_language: "en",
        original_title: "Memory",
        overview:
          "Sylvia is a social worker who leads a simple and structured life. This is blown open when Saul follows her home from their high school reunion. Their surprise encounter will profoundly impact both of them as they open the door to the past.",
        popularity: 42.56,
        poster_path: "/cZgTA5ZOKOIRGyYClJMu02VUNcE.jpg",
        release_date: "2023-12-22",
        title: "Memory",
        video: false,
        vote_average: 8,
        vote_count: 1,
      },
      {
        adult: false,
        backdrop_path: "/hGPa3WPxuyoVSexd962Sf3rh5Rt.jpg",
        genre_ids: [10751, 12],
        id: 926946,
        original_language: "de",
        original_title: "Die Schule der magischen Tiere 2",
        overview:
          "Theater fun at the School of Magical Animals: The students want to perform a musical for the school's anniversary. Will the rehearsals end in chaos or will the class pull together? And what's up with the strange holes on the school grounds? With the help of the magical animals, the children learn what really matters: teamwork.",
        popularity: 40.952,
        poster_path: "/tzOGGLfHJ5SI0QX8fUg1surA6s5.jpg",
        release_date: "2022-09-29",
        title: "The School of Magical Animals 2",
        video: false,
        vote_average: 6.1,
        vote_count: 15,
      },
      {
        adult: false,
        backdrop_path: "/2GzgongTSptjSkT7iCoXUcGIVB9.jpg",
        genre_ids: [18, 10749, 14],
        id: 994108,
        original_language: "en",
        original_title: "All of Us Strangers",
        overview:
          "One night, screenwriter Adam, in his near-empty tower block in contemporary London, has a chance encounter with his mysterious neighbor Harry that punctures the rhythm of his everyday life. As Adam and Harry get closer, Adam is pulled back to his childhood home where he discovers that his long-dead parents are both living and look the same age as the day they died over 30 years ago.",
        popularity: 40.888,
        poster_path: "/9ezfT70CrORubJktOA88kfTb9L.jpg",
        release_date: "2023-12-21",
        title: "All of Us Strangers",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/hb0BeFvZNx2zLGWwuwENOIVeK1U.jpg",
        genre_ids: [35, 18, 36],
        id: 792293,
        original_language: "en",
        original_title: "Dumb Money",
        overview:
          "Vlogger Keith Gill sinks his life savings into GameStop stock and posts about it. When social media starts blowing up, so do his life and the lives of everyone following him. As a stock tip becomes a movement, everyone gets rich—until the billionaires fight back, and both sides find their worlds turned upside down.",
        popularity: 39.984,
        poster_path: "/bqs4TeKFbfkcbQbuGAuKYu82tnp.jpg",
        release_date: "2023-09-15",
        title: "Dumb Money",
        video: false,
        vote_average: 6.7,
        vote_count: 169,
      },
      {
        adult: false,
        backdrop_path: "/kyYTmtydNfWDaZI1tHBZ6z8WIil.jpg",
        genre_ids: [35],
        id: 673593,
        original_language: "en",
        original_title: "Mean Girls",
        overview:
          "New student Cady Heron is welcomed into the top of the social food chain by the elite group of popular girls called ‘The Plastics,’ ruled by the conniving queen bee Regina George and her minions Gretchen and Karen. However, when Cady makes the major misstep of falling for Regina’s ex-boyfriend Aaron Samuels, she finds herself prey in Regina’s crosshairs. As Cady sets to take down the group’s apex predator with the help of her outcast friends Janis and Damian, she must learn how to stay true to herself while navigating the most cutthroat jungle of all: high school.",
        popularity: 38.515,
        poster_path: "/aYonZXaoKkPLFBDczdZHTrTaoZs.jpg",
        release_date: "2024-01-10",
        title: "Mean Girls",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/jqFjgNnxpXIXWuPsyfqmcLXRo9p.jpg",
        genre_ids: [80, 53],
        id: 500,
        original_language: "en",
        original_title: "Reservoir Dogs",
        overview:
          "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
        popularity: 37.758,
        poster_path: "/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
        release_date: "1992-09-02",
        title: "Reservoir Dogs",
        video: false,
        vote_average: 8.131,
        vote_count: 13480,
      },
      {
        adult: false,
        backdrop_path: "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
        genre_ids: [878, 27, 28],
        id: 940721,
        original_language: "ja",
        original_title: "ゴジラ-1.0",
        overview:
          "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
        popularity: 307.176,
        poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
        release_date: "2023-11-03",
        title: "Godzilla Minus One",
        video: false,
        vote_average: 8.022,
        vote_count: 162,
      },
      {
        adult: false,
        backdrop_path: "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
        genre_ids: [27, 53, 9648],
        id: 1071215,
        original_language: "en",
        original_title: "Thanksgiving",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        popularity: 499.897,
        poster_path: "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
        release_date: "2023-11-16",
        title: "Thanksgiving",
        video: false,
        vote_average: 6.657,
        vote_count: 197,
      },
      {
        adult: false,
        backdrop_path: "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
        genre_ids: [28, 80, 53],
        id: 891699,
        original_language: "en",
        original_title: "Silent Night",
        overview:
          "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
        popularity: 484.673,
        poster_path: "/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
        release_date: "2023-11-30",
        title: "Silent Night",
        video: false,
        vote_average: 5.9,
        vote_count: 100,
      },
      {
        adult: false,
        backdrop_path: "/ptz5ETMxDoRRiE69BVuIxJzyTEO.jpg",
        genre_ids: [16, 35, 12, 10751],
        id: 940551,
        original_language: "en",
        original_title: "Migration",
        overview:
          "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
        popularity: 309.179,
        poster_path: "/kJG74Y1RxLLjRLYOTrBclWpbvkz.jpg",
        release_date: "2023-12-06",
        title: "Migration",
        video: false,
        vote_average: 7.342,
        vote_count: 38,
      },
      {
        adult: false,
        backdrop_path: "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
        genre_ids: [16, 10751, 14, 12],
        id: 1022796,
        original_language: "en",
        original_title: "Wish",
        overview:
          "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
        popularity: 264.413,
        poster_path: "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
        release_date: "2023-11-13",
        title: "Wish",
        video: false,
        vote_average: 6.55,
        vote_count: 140,
      },
      {
        adult: false,
        backdrop_path: "/mowTk9LFSr8rW3EG2CUSwzuvx0g.jpg",
        genre_ids: [10402],
        id: 1160164,
        original_language: "en",
        original_title: "TAYLOR SWIFT | THE ERAS TOUR",
        overview:
          "The cultural phenomenon continues on the big screen! Immerse yourself in this once-in-a-lifetime concert film experience with a breathtaking, cinematic view of the history-making tour.",
        popularity: 188.151,
        poster_path: "/jf3YO8hOqGHCupsREf5qymYq1n.jpg",
        release_date: "2023-10-13",
        title: "TAYLOR SWIFT | THE ERAS TOUR",
        video: false,
        vote_average: 8.307,
        vote_count: 176,
      },
      {
        adult: false,
        backdrop_path: "/lyHmhoRj3zXSdeCYbs2oOXLCF4K.jpg",
        genre_ids: [16, 12, 10751, 14],
        id: 459003,
        original_language: "uk",
        original_title: "Мавка: Лісова пісня",
        overview:
          "Forest soul Mavka faces an impossible choice between her heart and her duty as guardian to the Heart of the Forest, when she falls in love with the talented young human musician Lukas.",
        popularity: 171.313,
        poster_path: "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
        release_date: "2023-03-02",
        title: "Mavka: The Forest Song",
        video: false,
        vote_average: 7.326,
        vote_count: 553,
      },
      {
        adult: false,
        backdrop_path: "/iEFuHjqrE059SmflBva1JzDJutE.jpg",
        genre_ids: [16, 14, 28, 10749, 10751],
        id: 496450,
        original_language: "fr",
        original_title: "Miraculous - le film",
        overview:
          "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
        popularity: 147.536,
        poster_path: "/dQNJ8SdCMn3zWwHzzQD2xrphR1X.jpg",
        release_date: "2023-07-05",
        title: "Miraculous: Ladybug & Cat Noir, The Movie",
        video: false,
        vote_average: 7.791,
        vote_count: 689,
      },
      {
        adult: false,
        backdrop_path: "/p9DKeXp6FPJtAQ1k13Z4zPWrCbN.jpg",
        genre_ids: [18],
        id: 1058694,
        original_language: "en",
        original_title: "Radical",
        overview:
          "In a Mexican border town plagued by neglect, corruption, and violence, a frustrated teacher tries a radical new method to break through his students’ apathy and unlock their curiosity, their potential… and maybe even their genius.",
        popularity: 131.589,
        poster_path: "/eSatbygYZp8ooprBHZdb6GFZxGB.jpg",
        release_date: "2023-10-19",
        title: "Radical",
        video: false,
        vote_average: 7.6,
        vote_count: 13,
      },
      {
        adult: false,
        backdrop_path: "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
        genre_ids: [16, 12, 14, 18],
        id: 508883,
        original_language: "ja",
        original_title: "君たちはどう生きるか",
        overview:
          "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
        popularity: 101.215,
        poster_path: "/jDQPkgzerGophKRRn7MKm071vCU.jpg",
        release_date: "2023-07-14",
        title: "The Boy and the Heron",
        video: false,
        vote_average: 7.3,
        vote_count: 291,
      },
      {
        adult: false,
        backdrop_path: "/1AT4Nc6oHkmL3p6i27P14SBnIpb.jpg",
        genre_ids: [35, 18],
        id: 1056360,
        original_language: "en",
        original_title: "American Fiction",
        overview:
          "Thelonious “Monk” Ellison's writing career has stalled because his work isn’t deemed “Black enough.” Monk, a writer and English professor, writes a satirical novel under a pseudonym, aiming to expose the publishing world's hypocrisies. The book’s immediate success forces him to get deeper enmeshed in his assumed identity and challenges his closely-held worldviews.",
        popularity: 21.104,
        poster_path: "/htPScB9pEDmYOT0eCW6kahgv77t.jpg",
        release_date: "2023-11-10",
        title: "American Fiction",
        video: false,
        vote_average: 8,
        vote_count: 2,
      },
      {
        adult: false,
        backdrop_path: "/83g3gkDw6oc2mxkyB8DSoXQZJHl.jpg",
        genre_ids: [18, 80, 53],
        id: 912480,
        original_language: "fr",
        original_title: "Les chambres rouges",
        overview:
          "The high-profile case of serial killer Ludovic Chevalier has just gone to trial, and Kelly-Anne is obsessed. When reality blurs with her morbid fantasies, she goes down a dark path to seek the final piece of the case's puzzle.",
        popularity: 18.856,
        poster_path: "/wyVtWLItC0tHFSM1UqLL45hf7Rk.jpg",
        release_date: "2023-08-11",
        title: "Red Rooms",
        video: false,
        vote_average: 6.7,
        vote_count: 25,
      },
      {
        adult: false,
        backdrop_path: "/yVLnNOWDz29EHjc4SwmYRWUifNW.jpg",
        genre_ids: [28, 53],
        id: 927107,
        original_language: "en",
        original_title: "The Bricklayer",
        overview:
          "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
        popularity: 17.59,
        poster_path: "/5Osn4Y4Cc4VGrp3nR3VfVJWtA7l.jpg",
        release_date: "2023-12-14",
        title: "The Bricklayer",
        video: false,
        vote_average: 6.3,
        vote_count: 3,
      },
      {
        adult: false,
        backdrop_path: "/pNbTHQCU8h0qlun3yhSQ7cZqoNg.jpg",
        genre_ids: [27, 53],
        id: 347196,
        original_language: "en",
        original_title: "Wolf Creek 3",
        overview:
          "An American family takes a dream trip to the Australian outback and soon draws the attention of notorious serial killer Mick Taylor. A hellish nightmare ensues as the two children escape only to be hunted by Australia’s most infamous murderer.",
        popularity: 17.323,
        poster_path: "/t670b84JGKcD3eBGOtaQhP1uWsN.jpg",
        release_date: "2024-01-05",
        title: "Wolf Creek 3",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/xZ4AkMpDKIEydmDU8xTW9mLoh3V.jpg",
        genre_ids: [35, 18],
        id: 771077,
        original_language: "fr",
        original_title: "En corps",
        overview:
          "Elise thought she had the perfect life: an ideal boyfriend and a promising career as a ballet dancer. It all falls apart the day she catches him cheating on her with her stage backup; and after she suffers an injury on stage, it seems like she might not be able to dance ever again.",
        popularity: 20.024,
        poster_path: "/ue6GyiX9dLSpmmAze1pPYcIlUrf.jpg",
        release_date: "2022-03-30",
        title: "Rise",
        video: false,
        vote_average: 7.51,
        vote_count: 353,
      },
      {
        adult: false,
        backdrop_path: "/xGW2hWSmL92qKsgUQEpzTOdWmmk.jpg",
        genre_ids: [12, 14, 18],
        id: 571468,
        original_language: "it",
        original_title: "Freaks Out",
        overview:
          "Four circus freaks with superpowers find themselves trapped in Nazi-occupied Rome after their owner and father figure goes missing in the aftermath of the 1943 surrender of Italy to the Allies.",
        popularity: 10.948,
        poster_path: "/o2LhhNYtHurpExDmnFCTtR9vJW2.jpg",
        release_date: "2021-10-28",
        title: "Freaks Out",
        video: false,
        vote_average: 7.313,
        vote_count: 816,
      },
      {
        adult: false,
        backdrop_path: "/zJWURVBStetlB9L8ntq4Dy3Ejrv.jpg",
        genre_ids: [16, 10751, 35],
        id: 916423,
        original_language: "nl",
        original_title: "Knor",
        overview:
          "A young girl sets out to prove to her disapproving mother she can house-train the endearing but unruly little piglet she gets as a birthday gift from her estranged oddball grandfather.",
        popularity: 12.302,
        poster_path: "/n1LxkaSS6FqWDwbNOnxAeb5mXrY.jpg",
        release_date: "2022-07-01",
        title: "Oink",
        video: false,
        vote_average: 7.4,
        vote_count: 35,
      },
      {
        adult: false,
        backdrop_path: "/leQ3XYvmzxlnpjiJGrttYfO2J7S.jpg",
        genre_ids: [16, 18],
        id: 1086591,
        original_language: "ja",
        original_title: "青春ブタ野郎はランドセルガールの夢を見ない",
        overview:
          "Finally, the day of Mai's high school graduation has arrived. While Sakuta eagerly waits for his girlfriend, an elementary schooler who looks exactly like her appears before him. Suspicious, and for all the wrong reasons... Meanwhile, Sakuta and Kaede's father suddenly calls, saying that their mother wants to see her daughter. She was hospitalized because Kaede's condition had been too much for her to bear, so what could she possibly want now?",
        popularity: 20.58,
        poster_path: "/raCwak2KUaUt90GekECTppuVv5u.jpg",
        release_date: "2023-12-01",
        title: "Rascal Does Not Dream of a Knapsack Kid",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/uoY7y7kksPr0WxDC1BIBhnyBjso.jpg",
        genre_ids: [99],
        id: 1058688,
        original_language: "et",
        original_title: "Savvusanna sõsarad",
        overview:
          "Women share their innermost secrets and intimate experiences inside an Estonian smoke sauna. Cleansing their bodies and baring their souls, they embrace the healing power of sisterhood.",
        popularity: 15.278,
        poster_path: "/uUs4e9S0Z5VaVgZH25wnEzKC5ty.jpg",
        release_date: "2023-03-21",
        title: "Smoke Sauna Sisterhood",
        video: false,
        vote_average: 8.15,
        vote_count: 10,
      },
      {
        adult: false,
        backdrop_path: "/12GAm3EiHUUeCB5mk3NphURUh1R.jpg",
        genre_ids: [18, 36],
        id: 801112,
        original_language: "it",
        original_title: "Rapito",
        overview:
          "The story of Edgardo Mortara, a young Jewish boy living in Bologna, Italy, who in 1858, after being secretly baptized, was forcibly taken from his family to be raised as a Christian. His parents’ struggle to free their son became part of a larger political battle that pitted the papacy against forces of democracy and Italian unification.",
        popularity: 11.733,
        poster_path: "/p0tanDacNHQhXPdu583UG3KS7fM.jpg",
        release_date: "2023-05-25",
        title: "Kidnapped",
        video: false,
        vote_average: 7.441,
        vote_count: 194,
      },
      {
        adult: false,
        backdrop_path: "/aWcqE8wGN8Gv4VSPAGCqTFYy7aC.jpg",
        genre_ids: [35],
        id: 965791,
        original_language: "fr",
        original_title: "Une année difficile",
        overview:
          "Compulsive spenders Albert and Bruno are in debt up to their necks. While seeking help from community workers to get their lives back on track, they run into a group of young green activists. Lured by the free beer and snacks rather than by the ideals of eco-activists, Albert and Bruno find themselves joining the movement without much conviction.",
        popularity: 11.158,
        poster_path: "/calbXqzHVxfKlmtcwnSdCMW4owN.jpg",
        release_date: "2023-10-18",
        title: "A Difficult Year",
        video: false,
        vote_average: 6.2,
        vote_count: 84,
      },
      {
        adult: false,
        backdrop_path: "/qgFrFXtiGfWN1zkk4sPd0nwFaBF.jpg",
        genre_ids: [80, 53],
        id: 848187,
        original_language: "en",
        original_title: "Role Play",
        overview:
          "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
        popularity: 12.791,
        poster_path: "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
        release_date: "2023-12-14",
        title: "Role Play",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [878],
        id: 1149397,
        original_language: "en",
        original_title: "Lars Shrike Walks the Night",
        overview:
          "A new science fiction film from director Gary Walkow starring Kelsey Grammer.",
        popularity: 10.783,
        poster_path: "/6SamYMXXqq5EEe9XSc75IaBo4VO.jpg",
        release_date: "2023-12-31",
        title: "Lars Shrike Walks the Night",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/nGqJUhqAcN2WthK5k4qe3DWY5QP.jpg",
        genre_ids: [18],
        id: 998022,
        original_language: "de",
        original_title: "Das Lehrerzimmer",
        overview:
          "When one of her students is suspected of theft, teacher Carla Nowak decides to get to the bottom of the matter. Caught between her ideals and the school system, the consequences of her actions threaten to break her.",
        popularity: 12.345,
        poster_path: "/kWXA6PfQ0PpZpoCXoeBFRciRrUw.jpg",
        release_date: "2023-05-04",
        title: "The Teachers’ Lounge",
        video: false,
        vote_average: 7.9,
        vote_count: 24,
      },
      {
        adult: false,
        backdrop_path: "/kZbTOcTrEGyroQMWQSGIRlNSkwP.jpg",
        genre_ids: [878, 28, 14, 12],
        id: 626412,
        original_language: "ko",
        original_title: "외계+인 2부",
        overview:
          "The second part to Alienoid, which will center on ancient Taoists traveling through time and space in an effort to obtain the Divine Sword.",
        popularity: 12.834,
        poster_path: "/hBxVes0oK7uoNwAQ2meJ2LVthPI.jpg",
        release_date: "2024-01-10",
        title: "Alienoid: The Return to the Future",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/AlkSNRGxMEaXlLMQXJ6srj5NpCu.jpg",
        genre_ids: [53, 18, 12],
        id: 843843,
        original_language: "fr",
        original_title: "Soudain seuls",
        overview:
          "Ben and Laura are a passionate but volatile couple who embark on a round-the-world sailing adventure to give their relationship a new start. During their trip, they decide to explore a vast deserted island which they discover off the coast of Chile. Caught in a violent storm, they shelter in an abandoned whaling station for the night but wake up the next morning to find their boat has disappeared. Stranded in a hostile environment with no means of communication, dwindling supplies and winter approaching they must work together in a life and death battle for survival, that will challenge their feelings and change their relationship forever.",
        popularity: 11.566,
        poster_path: "/7bPwZyZLfFBusRXaQxLtQXbjNrX.jpg",
        release_date: "2023-12-06",
        title: "Suddenly",
        video: false,
        vote_average: 6.219,
        vote_count: 16,
      },
      {
        adult: false,
        backdrop_path: "/xSIJy4vPKpo2uw6q7HNBhIvQaj6.jpg",
        genre_ids: [18, 53, 10749, 35],
        id: 859235,
        original_language: "fr",
        original_title: "Coup de chance",
        overview:
          "Fanny and Jean have everything: fulfilled in their professional lives, they live in a magnificent apartment in the high-end districts of Paris and seem to be as in love as the first day they met. But when Fanny crosses, by chance, Alain, a former high school friend, she is immediately hooked. They see each other again, and, very quickly, get closer and closer…",
        popularity: 16.842,
        poster_path: "/v1QBRNlQtNWsZrMo6rN2DCw017b.jpg",
        release_date: "2023-09-15",
        title: "Coup de chance",
        video: false,
        vote_average: 6.576,
        vote_count: 99,
      },
      {
        adult: false,
        backdrop_path: "/xpbUu7TeCeqPoPl8ptoIYem0DYQ.jpg",
        genre_ids: [12, 18, 35],
        id: 976584,
        original_language: "en",
        original_title: "The Book of Clarence",
        overview:
          "Streetwise but down-on-his-luck, Clarence is struggling to find a better life for his family, while fighting to free himself of debt. Captivated by the power and glory of the rising Messiah and His apostles, he risks everything to carve his own path to a divine life, and ultimately discovers that the redemptive power of belief may be his only way out.",
        popularity: 14.097,
        poster_path: "/hZuq34U1dWuIIWgTa6wZNPeDinS.jpg",
        release_date: "2024-01-12",
        title: "The Book of Clarence",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/vZ8sy9K4oT2Kmp5xNSmgCMRYC8g.jpg",
        genre_ids: [36, 18],
        id: 785980,
        original_language: "fr",
        original_title: "Couleurs de l'incendie",
        overview:
          "February 1927. The funeral of Marcel Péricourt, the most powerful banker in Paris. His daughter Madeleine must take the helm of the financial empire of which she is the heiress. But she has a son, Paul, who with an unexpected and tragic gesture will place her on the path to ruin.",
        popularity: 11.194,
        poster_path: "/fiAymbgADFKnJMu1NSJhLOvb4SM.jpg",
        release_date: "2022-11-09",
        title: "The Colors of Fire",
        video: false,
        vote_average: 7.094,
        vote_count: 122,
      },
      {
        adult: false,
        backdrop_path: "/g54U2tvRg94NXzx2oUh1bypXg3F.jpg",
        genre_ids: [18],
        id: 812037,
        original_language: "fr",
        original_title: "L’été dernier",
        overview:
          "Anne, a brilliant lawyer, lives in perfect harmony with her husband Pierre and their six and eight-year-old daughters, in a house on the heights of Paris. One day, Theo, 17, Pierre’s son from a previous marriage, moves in with them. Anne is troubled by Theo and gradually engages in a passionate relationship with him, putting her career and family life in danger.",
        popularity: 13.077,
        poster_path: "/a94IHwd6t2oXKy5KWTvaEnAs6Ux.jpg",
        release_date: "2023-09-13",
        title: "Last Summer",
        video: false,
        vote_average: 5.9,
        vote_count: 26,
      },
      {
        adult: false,
        backdrop_path: "/8RBwd37p2p48lUmZuWBLSkFLprd.jpg",
        genre_ids: [27, 53, 35],
        id: 1113278,
        original_language: "en",
        original_title: "It's a Wonderful Knife",
        overview:
          "Winnie's life is less than wonderful one year after saving her town from a psychotic killer on Christmas Eve. When she wishes she was never born, she finds herself magically transported to a nightmarish parallel universe. With the murderous maniac now back, she must team up with a misfit to identify the culprit and get back to her own reality.",
        popularity: 96.991,
        poster_path: "/bnm5NntrQBcG3P7DbO00v2FmXm8.jpg",
        release_date: "2023-11-10",
        title: "It's a Wonderful Knife",
        video: false,
        vote_average: 5.288,
        vote_count: 40,
      },
      {
        adult: false,
        backdrop_path: "/hXvx5YJbexKxsVD1NTEARObSnt2.jpg",
        genre_ids: [35, 10749],
        id: 1072790,
        original_language: "en",
        original_title: "Anyone But You",
        overview:
          "After an amazing first date, Bea and Ben's fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        popularity: 113.723,
        poster_path: "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
        release_date: "2023-12-21",
        title: "Anyone But You",
        video: false,
        vote_average: 9.5,
        vote_count: 3,
      },
      {
        adult: false,
        backdrop_path: "/50stq3Jlny6oEgJjsXbQvbajCNw.jpg",
        genre_ids: [18, 10749],
        id: 1020006,
        original_language: "en",
        original_title: "Priscilla",
        overview:
          "When teenage Priscilla Beaulieu meets Elvis Presley at a party, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
        popularity: 102.493,
        poster_path: "/uDCeELWWpsNq7ErM61Yuq70WAE9.jpg",
        release_date: "2023-10-27",
        title: "Priscilla",
        video: false,
        vote_average: 7.045,
        vote_count: 77,
      },
      {
        adult: false,
        backdrop_path: "/kszooR7v1TLFM4pzx6IkKq2jDAN.jpg",
        genre_ids: [18, 9648],
        id: 915935,
        original_language: "fr",
        original_title: "Anatomie d'une chute",
        overview:
          "A woman is suspected of her husband’s murder, and their blind son faces a moral dilemma as the sole witness.",
        popularity: 111.903,
        poster_path: "/kQs6keheMwCxJxrzV83VUwFtHkB.jpg",
        release_date: "2023-08-23",
        title: "Anatomy of a Fall",
        video: false,
        vote_average: 7.744,
        vote_count: 443,
      },
      {
        adult: false,
        backdrop_path: "/jBOyi3ibJbVa1imTCcddPUxTVAV.jpg",
        genre_ids: [35, 27, 14],
        id: 956920,
        original_language: "no",
        original_title: "There's Something in the Barn",
        overview:
          "An American family fulfills their dream of moving back to their roots after inheriting a remote cabin in the mountains of Norway. But there's a surprise waiting for them.",
        popularity: 84.139,
        poster_path: "/axrzMJR5VPWYNiW9ArENiMEPTjr.jpg",
        release_date: "2023-11-02",
        title: "There's Something in the Barn",
        video: false,
        vote_average: 7.078,
        vote_count: 58,
      },
      {
        adult: false,
        backdrop_path: "/sQLMaESdeELB7Dl8HdxfGlZYRzu.jpg",
        genre_ids: [35, 18],
        id: 840430,
        original_language: "en",
        original_title: "The Holdovers",
        overview:
          "A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go. Eventually, he forms an unlikely bond with one of them — a damaged, brainy troublemaker — and with the school’s head cook, who has just lost a son in Vietnam.",
        popularity: 78.255,
        poster_path: "/VHSzNBTwxV8vh7wylo7O9CLdac.jpg",
        release_date: "2023-10-27",
        title: "The Holdovers",
        video: false,
        vote_average: 7.68,
        vote_count: 175,
      },
      {
        adult: false,
        backdrop_path: "/gsVC7HMf4VR2XFOyqjTSklY2Tms.jpg",
        genre_ids: [878, 35, 18],
        id: 792307,
        original_language: "en",
        original_title: "Poor Things",
        overview:
          "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        popularity: 100.638,
        poster_path: "/mPdeQ1H6IXDAXtwQ2EdQuSCNmwV.jpg",
        release_date: "2023-12-07",
        title: "Poor Things",
        video: false,
        vote_average: 8.7,
        vote_count: 19,
      },
    ],
    total_pages: 29,
    total_results: 571,
  };
  return (
    // Popular section
    <>
      <h1
        style={{
          fontSize: "3rem",
          margin: "50px 50px",
          textAlign: "center",
          backgroundColor: "#D81B60",
          padding: "6px",
          marginTop: "110px",
        }}
      >
        Upcoming Movies
      </h1>
      <div className="bahar">
        {loading
          ? upcoming.results.map(() => {
              return (
                <div className="cards">
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                  </SkeletonTheme>
                </div>
              );
            })
          : upcoming.results.map((data) => {
              return (
                <Link
                  to={`/movies/${data.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="cards cardsU">
                    <img
                      className="cards__img cards__img__U"
                      src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                      alt=""
                    />
                    <div className="cards__overlay">
                      <div className="cards__title">
                        {data ? data.original_title : ""}
                      </div>
                      <div className="cards__runtime">
                        {/* {data ? data.release_date : ""} */}
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