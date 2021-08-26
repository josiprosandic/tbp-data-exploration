db.korisnici.insert(
  [
    {
	"_id":ObjectId("5de0214441459750677cd9ee"),
	"e-mail":"ivek@foi.hr",
	"ime":"Ivek Presvetli",
	"godina rođenja":1997,
	"grad":"Varaždin",
	"država":"Hrvatska"
    },
    {
	"_id":ObjectId("5de0219341459750677cd9ef"),
	"e-mail":"barica@foi.hr",
	"ime":"Barica Prekratki",
	"grad":"Varaždin",
	"država":"Hrvatska",
	"spol":"žensko"
    },
    
    {
	"_id":ObjectId("5de0232f41459750677cd9f1"),
	"e-mail":"regica@foi.hr",
	"ime":"Regica Jambrek",
	"godina rođenja":2000,
	"grad":"Ludbreg",
	"država":"Hrvatska"
    },
    {
	"_id":ObjectId("5de021bd41459750677cd9f0"),
	"e-mail":"joza@foi.hr",
	"ime":"Joža Presvetli",
	"grad":"Varaždin",
	"država":"Hrvatska",
	"spol":"muško",
	"naslov bloga":"Gluten free odojak"
    }
  ]
)

db.zapisi.insert(
  [
    {
	"autor":ObjectId("5de021bd41459750677cd9f0"),
	"naslov":"Odojak po zagorski s bezglutenskom hajdinom kašom",
	"vrijeme":Date(),
	"oznake":[ "odojak", "zagorje", "hajdina kaša", "gluten free" ],
	"lajkova":521,
	"komentari": [
	    {
		"autor":ObjectId("5de0232f41459750677cd9f1"),
		"poruka":"Mmmmmm... njam njam!",
		"vrijeme":Date(),
		"lajkova":1
	    },
	    
	    {
		"autor":ObjectId("5de0214441459750677cd9ee"),
		"poruka":"Hajdina kaša???!?? NIKAD!!!",
		"vrijeme":Date(),
		"lajkova":10
	    }
	]
    },
    {
	"autor":ObjectId("5de021bd41459750677cd9f0"),
	"naslov":"Odojak na lički punjen vrganjima",
	"vrijeme":Date(),
	"oznake":[ "odojak", "lika", "vrganji", "gluten free" ],
	"lajkova":701,
	"komentari": [
	    {
		"autor":ObjectId("5de0214441459750677cd9ee"),
		"poruka":"JAO!!!",
		"vrijeme":Date(),
		"lajkova":5
	    }
	]
    },
    {
	"autor":ObjectId("5de0214441459750677cd9ee"),
	"naslov":"Parkour po Dravi",
	"vrijeme":Date(),
	"oznake":[ "parkour", "drava" ],
	"lajkova":11
    },
    {
	"autor":ObjectId("5de0232f41459750677cd9f1"),
	"naslov":"In vino veritas",
	"vrijeme":Date(),
	"oznake":[ "vino", "istina" ],
	"lajkova":3292,
	"komentari": [
	    {
		"autor":ObjectId("5de0214441459750677cd9ee"),
		"poruka":"Noja ili?",
		"vrijeme":Date(),
		"lajkova":123
	    }
	]
    }
  ]
)
