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
        likesCount:35,
        landmarks: [{
          name: "Irina's house",
          description: "A masterpiece of pre-war architecture, Irina's house welcomes you with cosy atmosphere and nice tea",
          imgSrc: "./images/cities/lisets/irinas-house.jpg",
          likes: 35
        }]
      },
      {
        name: "Burgas",
        likesCount: 36,
        landmarks: [{
          name: "Getting beaten by Batkas",
          description: "Oh the long forgotten call of the wild. Oh the sounds of steps behind you.",
          imgSrc: "./images/cities/burgas/getting-beaten-by-batkas.jpg",
          likes: 35
        },
        {
          name: "The bridge",
          description: "The Burgas bridge is popular place for jumping in the water, taking girls on romantic and cheap walks and general lollygagging",
          imgSrc: "./images/cities/burgas/burgas-bridge.jpg",
          likes: 1
        }
      ]
      }
    ]
  };
};