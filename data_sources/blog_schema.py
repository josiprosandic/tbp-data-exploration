#!/usr/bin/env python3

from ZODB import FileStorage, DB
from persistent import Persistent
import transaction
from persistent.list import PersistentList
from time import asctime

class zapis( Persistent ):
    def __init__(self, naslov, sadrzaj, autor):
        self.naslov = naslov
        self.sadrzaj = sadrzaj
        self.autor = autor
        self.vrijeme = asctime()


class komentar( zapis ):
    def __init__(self,naslov,sadrzaj,autor,komentar_na):
        zapis.__init__( self, naslov, sadrzaj, autor )
        self.komentar_na = komentar_na


class blog_zapis( zapis ):
    def __init__(self,naslov,sadrzaj,autor,oznake=[]):
        zapis.__init__( self, naslov, sadrzaj, autor )
        self.oznake = oznake

class korisnik( Persistent ):
    def __init__( self, nadimak, lozinka, email ):
        self.nadimak = nadimak
        self.lozinka = lozinka
        self.email = email
        self.blog = PersistentList()
        self.komentari = PersistentList()
    def bloggaj( self, naslov, sadrzaj, oznake ):
        zapis = blog_zapis( naslov, sadrzaj, self, oznake )
        self.blog.append( zapis )
        return zapis
    def komentiraj( self, zapis, sadrzaj ):
        zapis = komentar( zapis.naslov, sadrzaj, self, zapis )
        self.komentari.append( zapis )
        return zapis
