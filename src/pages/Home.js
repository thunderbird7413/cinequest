import React, { useEffect, useState } from "react";
import "./Home.css";

// Using npm react responsive carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

// Using Auth0
import { useAuth0 } from "@auth0/auth0-react";

// Importing popular movies
import Popular from "../components/popular";

// The movies array to show in carousel
const movie = [
  {
    adult: false,
    backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
    genre_ids: [18, 878, 28],
    id: 695721,
    original_language: "en",
    name: "The Hunger Games: The Ballad of Songbirds & Snakes",
    overview:
      "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    popularity: 2222.913,
    poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
    release_date: "2023-11-15",
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    video: false,
    rating_and_votes: 7.217,
    vote_count: 962,
  },
  {
    adult: false,
    backdrop_path: "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
    genre_ids: [28, 12, 14],
    id: 572802,
    original_language: "en",
    name: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    popularity: 1928.895,
    poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
    release_date: "2023-12-20",
    title: "Aquaman and the Lost Kingdom",
    video: false,
    rating_and_votes: 6.493,
    vote_count: 141,
  },
  {
    adult: false,
    backdrop_path: "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
    genre_ids: [28, 35],
    id: 1029575,
    original_language: "en",
    name: "The Family Plan",
    overview:
      "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
    popularity: 1463.554,
    poster_path: "/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    release_date: "2023-12-14",
    title: "The Family Plan",
    video: false,
    rating_and_votes: 7.522,
    vote_count: 318,
  },
  {
    adult: false,
    backdrop_path: "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
    genre_ids: [35, 10751, 14],
    id: 787699,
    original_language: "en",
    name: "Wonka",
    overview:
      "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
    popularity: 950.379,
    poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    release_date: "2023-12-06",
    title: "Wonka",
    video: false,
    rating_and_votes: 7.2,
    vote_count: 503,
  },
  {
    adult: false,
    backdrop_path: "/9jPoyxjiEYPylUIMI3Ntixf8z3M.jpg",
    genre_ids: [16, 12, 35, 10751],
    id: 520758,
    original_language: "en",
    name: "Chicken Run: Dawn of the Nugget",
    overview:
      "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
    popularity: 806.226,
    poster_path: "/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg",
    release_date: "2023-12-08",
    title: "Chicken Run: Dawn of the Nugget",
    video: false,
    rating_and_votes: 7.622,
    vote_count: 246,
  },
  {
    adult: false,
    backdrop_path: "/sLdlUypLzpQiJvO2dmqx5J7rigP.jpg",
    genre_ids: [27, 53, 9648],
    id: 1118595,
    original_language: "en",
    name: "The Jester",
    overview:
      "A malevolent being known as The Jester terrorizes the inhabitants of a small town on Halloween night, including two estranged sisters who must come together to find a way to defeat this evil entity.",
    popularity: 774.445,
    poster_path: "/jsOaCojcuxktg8w1UQkoFfn1y1g.jpg",
    release_date: "2023-09-20",
    title: "The Jester",
    video: false,
    rating_and_votes: 5.932,
    vote_count: 73,
  },
  {
    adult: false,
    backdrop_path: "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
    genre_ids: [27, 53, 9648],
    id: 1071215,
    original_language: "en",
    name: "Thanksgiving",
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    popularity: 699.856,
    poster_path: "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
    release_date: "2023-11-16",
    title: "Thanksgiving",
    video: false,
    rating_and_votes: 6.659,
    vote_count: 245,
  },
  {
    adult: false,
    backdrop_path: "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
    genre_ids: [28, 80],
    id: 891699,
    original_language: "en",
    name: "Silent Night",
    overview:
      "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
    popularity: 678.542,
    poster_path: "/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
    release_date: "2023-11-30",
    title: "Silent Night",
    video: false,
    rating_and_votes: 5.861,
    vote_count: 115,
  },
  {
    adult: false,
    backdrop_path: "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
    genre_ids: [16, 10751, 10402, 14, 35],
    id: 901362,
    original_language: "en",
    name: "Trolls Band Together",
    overview:
      "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    popularity: 608.676,
    poster_path: "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
    release_date: "2023-10-12",
    title: "Trolls Band Together",
    video: false,
    rating_and_votes: 7.134,
    vote_count: 407,
  },
  {
    adult: false,
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    genre_ids: [18, 36],
    id: 872585,
    original_language: "en",
    name: "Oppenheimer",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    popularity: 601.492,
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2023-07-19",
    title: "Oppenheimer",
    video: false,
    rating_and_votes: 8.13,
    vote_count: 5571,
  },
  {
    adult: false,
    backdrop_path: "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
    genre_ids: [28, 12, 53],
    id: 299054,
    original_language: "en",
    name: "Expend4bles",
    overview:
      "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
    popularity: 442.718,
    poster_path: "/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
    release_date: "2023-09-15",
    title: "Expend4bles",
    video: false,
    rating_and_votes: 6.4,
    vote_count: 920,
  },
  {
    adult: false,
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    genre_ids: [35, 12, 14],
    id: 346698,
    original_language: "en",
    name: "Barbie",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    popularity: 386.317,
    poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    rating_and_votes: 7.171,
    vote_count: 6435,
  },
  {
    adult: false,
    backdrop_path: "/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
    genre_ids: [28, 12, 14],
    id: 297802,
    original_language: "en",
    name: "Aquaman",
    overview:
      "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
    popularity: 387.098,
    poster_path: "/xLPffWMhMj1l50ND3KchMjYoKmE.jpg",
    release_date: "2018-12-07",
    title: "Aquaman",
    video: false,
    rating_and_votes: 6.899,
    vote_count: 13172,
  },
  {
    adult: false,
    backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    genre_ids: [16, 10751, 12, 14, 35],
    id: 502356,
    original_language: "en",
    name: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    popularity: 371.801,
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    release_date: "2023-04-05",
    title: "The Super Mario Bros. Movie",
    video: false,
    rating_and_votes: 7.725,
    vote_count: 7507,
  },
  {
    adult: false,
    backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    genre_ids: [28],
    id: 575264,
    original_language: "en",
    name: "Mission:Impossible-Dead Reckoning Part One",
    overview:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands...",
    popularity: 344.858,
    poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    release_date: "2023-07-08",
    title: "Mission: Impossible - Dead Reckoning Part One",
    video: false,
    rating_and_votes: 7.586,
    vote_count: 2730,
  },
  {
    adult: false,
    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    genre_ids: [28, 12, 878],
    id: 667538,
    original_language: "en",
    name: "Transformers: Rise of the Beasts",
    overview:
      "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    popularity: 351.886,
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    video: false,
    rating_and_votes: 7.424,
    vote_count: 3737,
  },
  {
    adult: false,
    backdrop_path: "/h3X1YZXNeklLNKRVOS6DHGRosog.jpg",
    genre_ids: [27, 35, 14],
    id: 287903,
    original_language: "en",
    name: "Krampus",
    overview:
      "When his dysfunctional family clashes over the holidays, young Max is disillusioned and turns his back on Christmas.  Little does he know, this lack of festive spirit has unleashed the wrath of Krampus: a demonic force of ancient evil intent on punishing non-believers.",
    popularity: 376.232,
    poster_path: "/sAolMRD9rFSTU7tssfFuLEJJa7w.jpg",
    release_date: "2015-11-26",
    title: "Krampus",
    video: false,
    rating_and_votes: 6.188,
    vote_count: 2007,
  },
  {
    adult: false,
    backdrop_path: "/jhpsTzbXEu5bkCPmBqxv7vUTjIT.jpg",
    genre_ids: [14, 12, 878, 28],
    id: 566810,
    original_language: "en",
    name: "Dragon Kingdom",
    overview:
      "To save their Kingdom from an army of undead, a group of warriors must travel through the forbidden lands fighting the fearsome beasts that call The Dark Kingdom their home.",
    popularity: 314.748,
    poster_path: "/o7StI2iR8yY1N67meSkNcXfojyD.jpg",
    release_date: "2018-11-26",
    title: "The Dark Kingdom",
    video: false,
    rating_and_votes: 5.619,
    vote_count: 42,
  },
  {
    adult: false,
    backdrop_path: "/ufR7C4AtkqS0INda0qBICpupOxy.jpg",
    genre_ids: [28, 53, 18],
    id: 982932,
    original_language: "en",
    name: "Shrapnel",
    overview:
      "A former Marine and his old war buddy face off against the Mexican cartel behind the disappearance of his daughter.",
    popularity: 366.618,
    poster_path: "/gsRDrAML7hJC8ZCgRQobHIrzbxR.jpg",
    release_date: "2023-07-28",
    title: "Shrapnel",
    video: false,
    rating_and_votes: 6.111,
    vote_count: 18,
  },
  {
    adult: false,
    backdrop_path: "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
    genre_ids: [878, 27, 28],
    id: 940721,
    original_language: "ja",
    name: "ゴジラ-1.0",
    overview:
      "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
    popularity: 297.839,
    poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
    release_date: "2023-11-03",
    title: "Godzilla Minus One",
    video: false,
    rating_and_votes: 8.056,
    vote_count: 171,
  },
  {
    adult: false,
    backdrop_path: "/3d39m2S3WynknLVGpsOxhiSKbgQ.jpg",
    genre_ids: [53, 28],
    id: 1146225,
    original_language: "en",
    name: "Escaping Paradise",
    overview:
      "When a young couple vacations on an exotic island, they encounter a dangerous fugitive who is determined to keep them from leaving.",
    popularity: 281.696,
    poster_path: "/3UCTls0hVKMCwWtkTmwKcCOzlgu.jpg",
    release_date: "2023-07-08",
    title: "Escaping Paradise",
    video: false,
    rating_and_votes: 4.7,
    vote_count: 3,
  },
  {
    adult: false,
    backdrop_path: "/ptz5ETMxDoRRiE69BVuIxJzyTEO.jpg",
    genre_ids: [16, 35, 12, 10751],
    id: 940551,
    original_language: "en",
    name: "Migration",
    overview:
      "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    popularity: 298.668,
    poster_path: "/kJG74Y1RxLLjRLYOTrBclWpbvkz.jpg",
    release_date: "2023-12-06",
    title: "Migration",
    video: false,
    rating_and_votes: 7.3,
    vote_count: 42,
  },
  {
    adult: false,
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    genre_ids: [16, 28, 12, 878],
    id: 569094,
    original_language: "en",
    name: "Spider-Man: Across the Spider-Verse",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    popularity: 281.337,
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    release_date: "2023-05-31",
    title: "Spider-Man: Across the Spider-Verse",
    video: false,
    rating_and_votes: 8.391,
    vote_count: 5252,
  },
  {
    adult: false,
    backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    genre_ids: [878, 12, 28],
    id: 76600,
    original_language: "en",
    name: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    popularity: 318.834,
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2022-12-14",
    title: "Avatar: The Way of Water",
    video: false,
    rating_and_votes: 7.652,
    vote_count: 10412,
  },
  {
    adult: false,
    backdrop_path: "/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
    genre_ids: [16, 35, 10751, 14, 10749],
    id: 976573,
    original_language: "en",
    name: "Elemental",
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    popularity: 298.245,
    poster_path: "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    release_date: "2023-06-14",
    title: "Elemental",
    video: false,
    rating_and_votes: 7.715,
    vote_count: 3263,
  },
  {
    adult: false,
    backdrop_path: "/AucuqDaUW4z1oT5XyL71qwRY2F6.jpg",
    genre_ids: [27, 53],
    id: 983507,
    original_language: "no",
    name: "Meg, deg & Frank",
    overview:
      "Christian - a millionaire heir, meets Sigrid - a young student, on a dating app. They hit it off quickly, but there's only one problem: Christian lives with Frank, a man who dresses up and constantly acts like a dog.",
    popularity: 316.873,
    poster_path: "/9DPG1gxLwV2oyFdHq3SnISsWbse.jpg",
    release_date: "2022-06-03",
    title: "Good Boy",
    video: false,
    rating_and_votes: 6.724,
    vote_count: 114,
  },
  {
    adult: false,
    backdrop_path: "/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg",
    genre_ids: [28, 878, 27],
    id: 615656,
    original_language: "en",
    name: "Meg 2: The Trench",
    overview:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    popularity: 357.63,
    poster_path: "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    release_date: "2023-08-02",
    title: "Meg 2: The Trench",
    video: false,
    rating_and_votes: 6.704,
    vote_count: 2700,
  },
  {
    adult: false,
    backdrop_path: "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
    genre_ids: [878, 12, 28],
    id: 609681,
    original_language: "en",
    name: "The Marvels",
    overview:
      "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    popularity: 297.306,
    poster_path: "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
    release_date: "2023-11-08",
    title: "The Marvels",
    video: false,
    rating_and_votes: 6.45,
    vote_count: 728,
  },
  {
    adult: false,
    backdrop_path: "/tC78Pck2YCsUAtEdZwuHYUFYtOj.jpg",
    genre_ids: [28, 53, 80],
    id: 926393,
    original_language: "en",
    name: "The Equalizer 3",
    overview:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    popularity: 314.952,
    poster_path: "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    release_date: "2023-08-30",
    title: "The Equalizer 3",
    video: false,
    rating_and_votes: 7.429,
    vote_count: 1926,
  },
];

export default function Home() {
  // useAuth0 parameters
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false} //Enable thumbs, defaults to true.
          autoPlay={true} //Change the slide automatically based on interval prop.
          transitionTime={1} //Duration of the animation of changing slides.
          infiniteLoop={true} //Going after the last item will move back to the first slide.
          showStatus={false} //Enable status of the current item to the total, defaults to true.
        >
          {movie.map((data) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movies/${data.id}`}
              >
                <div className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                    alt=""
                  />
                </div>

                <div className="posterImage_overlay">
                  <div className="posterImage_title">
                    {data ? data.name : ""}
                  </div>
                  <div className="posterImage_date">
                    {data ? data.release_date : ""} <br />
                    <span
                      className="posterImage_rating"
                      style={{ wordSpacing: "20px" }}
                    >
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "yellow", marginRight: "18px" }}
                      ></i>
                      {data ? data.rating_and_votes : ""}
                    </span>
                  </div>
                  <div className="posterImage_description">{data.overview}</div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
<div>
  <h1>The Best Place for Movies to dive into the world of dreams...</h1>
</div>
      {/* Using the popular component to show popular movies on home page */}
      <Popular />
    </>
  );
}
