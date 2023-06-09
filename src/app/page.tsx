import MovieTable from "@/app/movietable";

const movies = [
  {
    "adult": false,
    "backdrop_path": "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
    "genre_ids": [
      27,
      53,
      14
    ],
    "id": 713704,
    "original_language": "en",
    "original_title": "Evil Dead Rise",
    "overview": "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    "popularity": 6246.713,
    "poster_path": "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    "release_date": "2023-04-12",
    "title": "Evil Dead Rise",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 955
  },
  {
    "adult": false,
    "backdrop_path": "/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 640146,
    "original_language": "en",
    "original_title": "Ant-Man and the Wasp: Quantumania",
    "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    "popularity": 3766.989,
    "poster_path": "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    "release_date": "2023-02-15",
    "title": "Ant-Man and the Wasp: Quantumania",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 2505
  },
  {
    "adult": false,
    "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    "genre_ids": [
      16,
      10751,
      12,
      14,
      35
    ],
    "id": 502356,
    "original_language": "en",
    "original_title": "The Super Mario Bros. Movie",
    "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    "popularity": 3339.399,
    "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "release_date": "2023-04-05",
    "title": "The Super Mario Bros. Movie",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 2082
  },
  {
    "adult": false,
    "backdrop_path": "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
    "genre_ids": [
      27,
      53,
      14
    ],
    "id": 758323,
    "original_language": "en",
    "original_title": "The Pope's Exorcist",
    "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    "popularity": 3125.123,
    "poster_path": "/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg",
    "release_date": "2023-04-05",
    "title": "The Pope's Exorcist",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 945
  },
  {
    "adult": false,
    "backdrop_path": "/99NBEpQEM4uLItZY2RquqdqdSXM.jpg",
    "genre_ids": [
      878,
      12,
      28
    ],
    "id": 447365,
    "original_language": "en",
    "original_title": "Guardians of the Galaxy Vol. 3",
    "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "popularity": 2484.838,
    "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "release_date": "2023-05-03",
    "title": "Guardians of the Galaxy Vol. 3",
    "video": false,
    "vote_average": 8.2,
    "vote_count": 1154
  },
  {
    "adult": false,
    "backdrop_path": "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
    "genre_ids": [
      28,
      35,
      10749
    ],
    "id": 868759,
    "original_language": "en",
    "original_title": "Ghosted",
    "overview": "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
    "popularity": 2048.647,
    "poster_path": "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
    "release_date": "2023-04-18",
    "title": "Ghosted",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 770
  },
  {
    "adult": false,
    "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
    "genre_ids": [
      28,
      35,
      14,
      12
    ],
    "id": 594767,
    "original_language": "en",
    "original_title": "Shazam! Fury of the Gods",
    "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
    "popularity": 2010.98,
    "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
    "release_date": "2023-03-15",
    "title": "Shazam! Fury of the Gods",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 1593
  },
  {
    "adult": false,
    "backdrop_path": "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    "genre_ids": [
      878,
      12,
      28
    ],
    "id": 76600,
    "original_language": "en",
    "original_title": "Avatar: The Way of Water",
    "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "popularity": 1945.368,
    "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "release_date": "2022-12-14",
    "title": "Avatar: The Way of Water",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 7977
  },
  {
    "adult": false,
    "backdrop_path": "/zPEDfWece7gg1I0904KFFVUq5mg.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "id": 1102776,
    "original_language": "fr",
    "original_title": "AKA",
    "overview": "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
    "popularity": 1685.074,
    "poster_path": "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
    "release_date": "2023-04-28",
    "title": "AKA",
    "video": false,
    "vote_average": 7,
    "vote_count": 245
  },
  {
    "adult": false,
    "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    "genre_ids": [
      18,
      28
    ],
    "id": 677179,
    "original_language": "en",
    "original_title": "Creed III",
    "overview": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
    "popularity": 1472.262,
    "poster_path": "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    "release_date": "2023-03-01",
    "title": "Creed III",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 1349
  },
  {
    "adult": false,
    "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
    "genre_ids": [
      27,
      9648,
      53
    ],
    "id": 934433,
    "original_language": "en",
    "original_title": "Scream VI",
    "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    "popularity": 1465.218,
    "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    "release_date": "2023-03-08",
    "title": "Scream VI",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 1147
  },
  {
    "adult": false,
    "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 603692,
    "original_language": "en",
    "original_title": "John Wick: Chapter 4",
    "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "popularity": 1311.779,
    "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "release_date": "2023-03-22",
    "title": "John Wick: Chapter 4",
    "video": false,
    "vote_average": 7.9,
    "vote_count": 1397
  },
  {
    "adult": false,
    "backdrop_path": "/yx96Xz7ggs7TMmDqAa8G5oJ5ami.jpg",
    "genre_ids": [
      37,
      28
    ],
    "id": 1111140,
    "original_language": "en",
    "original_title": "Two Sinners and a Mule",
    "overview": "Kicked out of a small Western town for sinful behavior, free-spirited Alice and Nora set out for Virginia City to pursue their dream of opening a restaurant. Out on the prairie, they come across an injured bounty hunter named Elden. Hoping to share in the reward, they nurse Elden back to health and help him stalk his prey, Grimes. But as Nora and Alice both develop feelings for Elden, no one notices that Grimes is now on their tail, and the hunters become the hunted…",
    "popularity": 1016.062,
    "poster_path": "/icL1zn5z1L5ULIpxkuOLjeUgURY.jpg",
    "release_date": "2023-04-21",
    "title": "Two Sinners and a Mule",
    "video": false,
    "vote_average": 5.5,
    "vote_count": 12
  },
  {
    "adult": false,
    "backdrop_path": "/8HfjrSxfTVKmjNh8cJjbu5eXzcX.jpg",
    "genre_ids": [
      10751,
      14,
      28,
      12
    ],
    "id": 420808,
    "original_language": "en",
    "original_title": "Peter Pan & Wendy",
    "overview": "Wendy Darling, a young girl afraid to leave her childhood home behind, meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling adventure that will change her life forever.",
    "popularity": 987.576,
    "poster_path": "/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg",
    "release_date": "2023-04-20",
    "title": "Peter Pan & Wendy",
    "video": false,
    "vote_average": 5.8,
    "vote_count": 332
  },
  {
    "adult": false,
    "backdrop_path": "/aRJjCgp4uVUkXhDw8NClesQXbt3.jpg",
    "genre_ids": [
      53,
      28
    ],
    "id": 727340,
    "original_language": "ko",
    "original_title": "헌트",
    "overview": "After a high-ranking North Korean official requests asylum, KCIA Foreign Unit chief Park Pyong-ho and Domestic Unit chief Kim Jung-do are tasked with uncovering a North Korean spy, known as Donglim, who is deeply embedded within their agency. When the spy begins leaking top secret intel that could jeopardize national security, the two units are each assigned to investigate each other.",
    "popularity": 1091.05,
    "poster_path": "/tDe5eLxAbeK7sYckUn5aH3ngWnn.jpg",
    "release_date": "2022-08-10",
    "title": "Hunt",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 68
  },
  {
    "adult": false,
    "backdrop_path": "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
    "genre_ids": [
      16,
      10751,
      14,
      12,
      35
    ],
    "id": 315162,
    "original_language": "en",
    "original_title": "Puss in Boots: The Last Wish",
    "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    "popularity": 963.623,
    "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    "release_date": "2022-12-07",
    "title": "Puss in Boots: The Last Wish",
    "video": false,
    "vote_average": 8.3,
    "vote_count": 5511
  },
  {
    "adult": false,
    "backdrop_path": "/wUwFMnbFxuDfcRSGGT7QQIGDRrH.jpg",
    "genre_ids": [
      27
    ],
    "id": 785759,
    "original_language": "en",
    "original_title": "Two Witches",
    "overview": "A matriarchal witch passes on her sinister inheritance to her grand-daughter, triggering the most horrific curses.",
    "popularity": 1176.647,
    "poster_path": "/uL9fFTdNmUUlKIJfHJclN5X3bxH.jpg",
    "release_date": "2023-03-02",
    "title": "Two Witches",
    "video": false,
    "vote_average": 6.1,
    "vote_count": 42
  },
  {
    "adult": false,
    "backdrop_path": "/fI5RsaM0NSU6TqztRhA2pal5ezv.jpg",
    "genre_ids": [
      28,
      80
    ],
    "id": 385687,
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "popularity": 1159.807,
    "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
    "release_date": "2023-05-17",
    "title": "Fast X",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 28
  },
  {
    "adult": false,
    "backdrop_path": "/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg",
    "genre_ids": [
      28,
      12,
      36,
      18,
      10752
    ],
    "id": 948713,
    "original_language": "en",
    "original_title": "The Last Kingdom: Seven Kings Must Die",
    "overview": "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
    "popularity": 1017.269,
    "poster_path": "/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg",
    "release_date": "2023-04-14",
    "title": "The Last Kingdom: Seven Kings Must Die",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 350
  },
  {
    "adult": false,
    "backdrop_path": "/fC6TZRnySFZ7RMYdOA4Yt21q0Y9.jpg",
    "genre_ids": [
      12,
      14,
      35
    ],
    "id": 493529,
    "original_language": "en",
    "original_title": "Dungeons & Dragons: Honor Among Thieves",
    "overview": "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    "popularity": 885.402,
    "poster_path": "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
    "release_date": "2023-03-23",
    "title": "Dungeons & Dragons: Honor Among Thieves",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 1177
  }
];

export default function Home() {
  return (
      <div className="container mx-auto px-4">
        <MovieTable movies={movies} />
      </div>
  )
}
