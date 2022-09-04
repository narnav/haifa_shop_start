from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from base.models import Note, Categorie, Product, Orders


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Categorie
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    # category = serializers.RelatedField(
    #     source='Categorie',  related_name='category')
    # category = serializers.ReadOnlyField(source='Categorie.name')

    class Meta:
        model = Product
        fields = '__all__'
        # fields = ['desc', 'category', 'price']


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'
