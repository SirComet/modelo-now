// Beers
[
  {
  	"_id" : ObjectId("56d2d69cf7a320cd23bf3dc2"),
  	"name" : "Bud Light Misil",
  	"amount" : 18,
  	"description" : "Bote Importado - 25 oz - No retornable",
  	"price" : 240,
  	"img" : "bud-light-misil.jpg"
  },
  {
  	"_id" : ObjectId("56d2d6cdf7a320cd23bf3dc3"),
  	"name" : "Bud Light Bote",
  	"amount" : 30,
  	"description" : "Bote - 355 ml - No retornable",
  	"price" : 260,
  	"img" : "bud-light-bote.jpg"
  },
  {
  	"_id" : ObjectId("56d2d709f7a320cd23bf3dc4"),
  	"name" : "Bud Light Bote",
  	"amount" : 24,
  	"description" : "Bote - 355 ml - No retornable",
  	"price" : 210,
  	"img" : "bud-light-bote-24.jpg"
  },
  {
  	"_id" : ObjectId("56d2d763f7a320cd23bf3dc5"),
  	"name" : "Michelob Ultra Bote",
  	"amount" : 24,
  	"description" : "Bote importado - 12 oz - No retornable",
  	"price" : 315,
  	"img" : "michelob-ultra-bote.jpg"
  },
  {
  	"_id" : ObjectId("56d2d798f7a320cd23bf3dc6"),
  	"name" : "Corona Extra Bote",
  	"amount" : 24,
  	"description" : "Bote - 355 ml - No retornable",
  	"price" : 210,
  	"img" : "corona-extra-bote.jpg"
  },
  {
  	"_id" : ObjectId("56d2d7cbf7a320cd23bf3dc7"),
  	"name" : "Corona Light Bote",
  	"amount" : 24,
  	"description" : "Bote - 355 ml - No retornable",
  	"price" : 210,
  	"img" : "corona-light-bote.jpg"
  },
  {
  	"_id" : ObjectId("56d2d7fff7a320cd23bf3dc8"),
  	"name" : "Model Especial",
  	"amount" : 24,
  	"description" : "Bote - 355 ml - No retornable",
  	"price" : 310,
  	"img" : "modelo-especial.jpg"
  },
  {
  	"_id" : ObjectId("56d2d83cf7a320cd23bf3dc9"),
  	"name" : "Bud Light Media",
  	"amount" : 24,
  	"description" : "Botella - 355 ml - No retornable",
  	"img" : "bud-light-media.jpg",
  	"price" : 305
  },
  {
  	"_id" : ObjectId("56d2d878f7a320cd23bf3dca"),
  	"name" : "Michelob Ultra Media",
  	"amount" : 24,
  	"description" : "Botella importada - 12 oz - No retornable",
  	"price" : 340,
  	"img" : "michelob-ultra-media.jpg"
  },
  {
  	"_id" : ObjectId("56d2d8d9f7a320cd23bf3dcb"),
  	"name" : "Raz Ber Rita Bote",
  	"amount" : 24,
  	"description" : "Bote importado - 8 oz - No retornable",
  	"price" : 275,
  	"img" : "raz-ber-rita-bote.jpg"
  },
  {
  	"_id" : ObjectId("56d2d90ef7a320cd23bf3dcc"),
  	"name" : "Lime A Rita Bote",
  	"amount" : 24,
  	"description" : "Bote importado - 8 oz - No retornable",
  	"price" : 275,
  	"img" : "lime-a-rita-bote.jpg"
  },
  {
  	"_id" : ObjectId("56d2d943f7a320cd23bf3dcd"),
  	"name" : "Straw Ber Rita Bote",
  	"amount" : 24,
  	"description" : "Bote Importado - 8 oz - No retornable",
  	"price" : 275,
  	"img" : "straw-ber-rita-bote.jpg"
  },
  {
  	"_id" : ObjectId("56d2d97cf7a320cd23bf3dce"),
  	"name" : "Stella Artois Media",
  	"amount" : 24,
  	"description" : "Botella importada - 330 ml - No retornable",
  	"price" : 450,
  	"img" : "stella-artois-media.jpg"
  },
  {
  	"_id" : ObjectId("56d2d9b0f7a320cd23bf3dcf"),
  	"name" : "Barrilito media",
  	"amount" : 24,
  	"description" : "Botella - 325 ml - No retornable",
  	"price" : 270,
  	"img" : "barrilito-media.jpg"
  }
]

// Promos
[
  {
  	"_id" : ObjectId("56d26e80e43f4e295e88bb33"),
  	"active" : true,
  	"beer" : {
  		"name" : "Bud Light Misil",
  		"amount" : 18,
  		"description" : "Bote Importado - 25 oz - No Retornable"
  	},
  	"descount" : 10
  }
]

// Packs
[
  {
  	"_id" : ObjectId("56d31572d75095f829649252"),
  	"name" : "Paquete embriagues",
  	"beers" : [
  		{
  			"_id" : ObjectId("56d2d9b0f7a320cd23bf3dcf"),
  			"name" : "Barrilito media",
  			"amount" : 24,
  			"description" : "Botella - 325 ml - No retornable",
  			"price" : 270,
  			"img" : "barrilito-media.jpg"
  		},
  		{
  			"_id" : ObjectId("56d2d97cf7a320cd23bf3dce"),
  			"name" : "Stella Artois Media",
  			"amount" : 24,
  			"description" : "Botella importada - 330 ml - No retornable",
  			"price" : 450,
  			"img" : "stella-artois-media.jpg"
  		},
  		{
  			"_id" : ObjectId("56d2d90ef7a320cd23bf3dcc"),
  			"name" : "Lime A Rita Bote",
  			"amount" : 24,
  			"description" : "Bote importado - 8 oz - No retornable",
  			"price" : 275,
  			"img" : "lime-a-rita-bote.jpg"
  		}
  	],
  	"price" : 900
  }
]
