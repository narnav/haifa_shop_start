from ast import Module
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()


class Pita(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    avatar = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    credit = models.CharField(max_length=4)
    is_airLiner = models.BooleanField(default=False)

    def __str__(self):
        return self.avatar

#  id: 1, bookName: "how to run slowly", author: "me" },


class Categorie(models.Model):
    desc = models.CharField(max_length=50)
    _id = models.AutoField(primary_key=True, editable=False)


class Product(models.Model):
    category = models.ForeignKey(
        Categorie, on_delete=models.CASCADE, null=True)
    desc = models.CharField(max_length=50)
    price = models.PositiveIntegerField()
    _id = models.AutoField(primary_key=True, editable=False)


class Orders(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    prod = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    amount = models.PositiveIntegerField()
    _id = models.AutoField(primary_key=True, editable=False)


class Book(models.Model):
    bookName = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.bookName


class OrderBookS(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    book = models.ForeignKey(Book, on_delete=models.DO_NOTHING, null=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.book.bookName
