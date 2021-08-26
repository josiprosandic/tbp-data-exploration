CREATE ( joza:Osoba { ime:'Joža', prezime:'Presvetli', tel_br:'0987654321' } )
CREATE ( barica:Osoba { ime:'Barica', prezime:'Prekratki', tel_br:'0981234567' } )
CREATE ( franc:Osoba { ime:'Franc', prezime:'Presretni', tel_br:'0983214567' } )
CREATE ( ivek:Osoba { ime:'Ivek', prezime:'Presvetli', tel_br:'0912345678' } )
CREATE ( ankica:Osoba { ime:'Ankica', prezime:'Jambrek', tel_br:'0921436587' } )

CREATE (joza)-[ :KONAKT_OD ]->(barica),
       (joza)-[ :KONAKT_OD ]->(franc),
       (franc)-[ :KONAKT_OD ]->(barica),
       (ankica)-[ :KONAKT_OD ]->(barica),
       (ankica)-[ :KONAKT_OD ]->(ivek),
       (ivek)-[ :KONAKT_OD ]->(franc),
       (joza)-[ :KONAKT_OD ]->(ankica)
       