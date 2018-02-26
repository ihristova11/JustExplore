const databaseFunction = function () {
  return {
    cities: [{
        name: "Sofia",
        likesCount: 3,
        landmarks: [{
            name: "Telerik Academy",
            description: "Telerik Academy provides the best IT training in stimulating and positive atmosphere.",
            imgSrc: "./images/cities/sofia/telerik-academy.jpg",
            likes: 0
          },
          {
            name: "The Hoof TV Tower",
            description: "The view from the Hoof is magnificent and people often climb up there to watch the sunset",
            imgSrc: "./images/cities/sofia/the-hoof.jpg",
            likes: 3
          }
        ]
      },
      {
        name: "Lisets",
        likesCount: 5,
        landmarks: [{
          name: "Irina's house",
          description: "A masterpiece of pre-war architecture Irina's house welcomes you with cosy atmosphere and nice tea",
          imgSrc: "./images/cities/lisets/irinas-house.jpg",
          likes: 5
        }]
      },
      {
        name: "Burgas",
        likesCount: 2,
        landmarks: [{
          name: "Getting beaten by Batkas",
          description: "Oh the long forgotten call of the bruises. Oh the sounds of metal hitting flesh."
          imgSrc: "./images/cities/burgas/getting-beaten-by-batkas.jpg"
        }]
      }
    ]
  };
};